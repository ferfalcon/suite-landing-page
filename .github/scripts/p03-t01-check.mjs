import { chromium } from 'playwright-core';
import fs from 'node:fs';

const executablePath = ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium'].find(fs.existsSync);
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
const widths = [1600, 1440, 1121, 1120, 1041, 1040, 900, 768, 700, 620, 619, 500, 375, 320];
const refs = new Map([
  [1440, { height: 1716, header: [166, 50, 1110, 52], hero: [166, 182, 920, 600], testimonial: [167, 972, 1109, 535], footer: [0, 1252, 1440, 464] }],
  [768, { height: 1904, header: [32, 32, 704, 52], hero: [32, 164, 704, 480], metrics: [32, 724, 704, 86], testimonial: [32, 1076, 704, 684], footer: [0, 1440, 768, 464] }],
  [375, { height: 2399, header: [16, 24, 343, 52], hero: [16, 140, 343, 599], metrics: [16, 803, 343, 338], testimonial: [0, 1426, 375, 744], footer: [0, 1935, 375, 464] }],
]);
const ok = (value, message) => { if (!value) throw new Error(message); };
const near = (a, b) => Math.abs(a - b) <= 2;
const rgb = (value) => {
  const match = value.match(/rgba?\((\d+(?:\.\d+)?)[, ]+\s*(\d+(?:\.\d+)?)[, ]+\s*(\d+(?:\.\d+)?)/);
  if (!match) throw new Error(`bad color ${value}`);
  return match.slice(1, 4).map(Number);
};
const luminance = (color) => {
  const values = rgb(color).map((x) => x / 255).map((x) => x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
  return 0.2126 * values[0] + 0.7152 * values[1] + 0.0722 * values[2];
};
const ratio = (a, b) => {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (values[0] + 0.05) / (values[1] + 0.05);
};

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  const errors = [];
  const requests = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
  page.on('pageerror', (error) => errors.push(`page: ${error.message}`));
  page.on('response', (response) => { if (response.status() >= 400) errors.push(`HTTP ${response.status()} ${response.url()}`); });
  await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
  page.on('request', (request) => requests.push(request.url()));

  const state = await page.evaluate(() => {
    const rect = (selector) => {
      const r = document.querySelector(selector).getBoundingClientRect();
      return [r.x, r.y, r.width, r.height];
    };
    const css = (selector) => getComputedStyle(document.querySelector(selector));
    const text = (selector) => document.querySelector(selector)?.textContent.replace(/\s+/g, ' ').trim();
    return {
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth,
      bodyHeight: document.body.getBoundingClientRect().height,
      header: rect('.site-header'),
      hero: rect('.hero'),
      metricsRect: rect('.metrics'),
      testimonial: rect('.testimonial'),
      footer: rect('.site-footer'),
      links: [...document.querySelectorAll('a')].map((a) => {
        const r = a.getBoundingClientRect();
        return { text: a.textContent.trim(), href: a.getAttribute('href'), rect: [r.x, r.y, r.width, r.height] };
      }),
      h1: document.querySelectorAll('h1').length,
      main: document.querySelectorAll('main').length,
      headerCount: document.querySelectorAll('header').length,
      footerCount: document.querySelectorAll('footer').length,
      order: [...document.querySelectorAll('body header, body main > .upper-page > *, body main > .testimonial, body > footer')].map((element) => element.matches('header') ? 'Header' : element.classList.contains('hero') ? 'Hero' : element.classList.contains('metrics') ? 'Metrics' : element.classList.contains('testimonial') ? 'Testimonial' : 'Footer'),
      heroLines: [...document.querySelectorAll('.hero__title-line')].map((element) => element.textContent.replace(/\s+/g, ' ').trim()),
      testimonialTitle: text('.testimonial__title'),
      metricValues: [...document.querySelectorAll('.metric__value')].map((element) => element.textContent.trim()),
      metricLabels: [...document.querySelectorAll('.metric__label')].map((element) => element.textContent.trim()),
      decorative: [...document.querySelectorAll('img')].every((image) => image.alt === ''),
      scripts: document.scripts.length,
      storage: [localStorage.length, sessionStorage.length, document.cookie],
      colors: {
        body: css('body').color,
        bg: css('body').backgroundColor,
        secondary: css('.hero__body').color,
        primaryText: css('.cta--primary').color,
        primaryBg: css('.cta--primary').backgroundColor,
        secondaryText: css('.cta--secondary').color,
        border: css('.cta--secondary').borderTopColor,
        testimonialText: css('.testimonial__body').color,
        testimonialTitle: css('.testimonial__title').color,
        testimonialBg: css('.testimonial').backgroundColor,
        footerBg: css('.site-footer').backgroundColor,
      },
    };
  });

  ok(state.scrollWidth <= state.innerWidth, `${width}: horizontal overflow`);
  ok(state.h1 === 1 && state.main === 1 && state.headerCount === 1 && state.footerCount === 1, `${width}: semantic hierarchy`);
  ok(state.order.join('|') === 'Header|Hero|Metrics|Testimonial|Footer', `${width}: section order ${state.order}`);
  ok(state.links.length === 5 && state.links.every((link) => link.href === '#'), `${width}: link contract`);
  ok(state.links.map((link) => link.text).join('|') === 'Request Beta Access|Request Beta Access|Facebook|Twitter|Instagram', `${width}: link names/order`);
  ok(state.links.every((link) => link.rect[2] >= 24 && link.rect[3] >= 24), `${width}: target size`);
  ok(state.decorative && state.scripts === 0 && state.storage[0] === 0 && state.storage[1] === 0 && state.storage[2] === '', `${width}: static/decorative boundary`);
  ok(state.heroLines.join('|') === 'A super solution|for your business.' && state.testimonialTitle === 'It just works.', `${width}: heading content`);
  ok(state.metricValues.join('|') === '2K+|8|1.2M' && state.metricLabels.join('|') === 'Companies|Languages|Leads', `${width}: metric content`);

  const contrast = {
    body: ratio(state.colors.body, state.colors.bg),
    secondary: ratio(state.colors.secondary, state.colors.bg),
    primary: ratio(state.colors.primaryText, state.colors.primaryBg),
    secondaryCta: ratio(state.colors.secondaryText, state.colors.bg),
    inverse: ratio(state.colors.testimonialText, state.colors.testimonialBg),
    display: ratio(state.colors.testimonialTitle, state.colors.testimonialBg),
    boundary: ratio(state.colors.border, state.colors.bg),
    social: ratio('rgb(23, 35, 57)', state.colors.footerBg),
  };
  ok(contrast.body >= 4.5 && contrast.secondary >= 4.5 && contrast.primary >= 4.5 && contrast.secondaryCta >= 4.5 && contrast.inverse >= 4.5, `${width}: normal text/label contrast ${JSON.stringify(contrast)}`);
  ok(contrast.display >= 3 && contrast.boundary >= 3 && contrast.social >= 3, `${width}: display/non-text contrast ${JSON.stringify(contrast)}`);

  const ref = refs.get(width);
  if (ref) {
    const check = (name, actual, expected) => expected.forEach((value, index) => ok(near(actual[index], value), `${width}: ${name}[${index}] ${actual[index]} != ${value}`));
    check('header', state.header, ref.header);
    check('hero', state.hero, ref.hero);
    if (ref.metrics) check('metrics', state.metricsRect, ref.metrics);
    check('testimonial', state.testimonial, ref.testimonial);
    check('footer', state.footer, ref.footer);
    ok(near(state.bodyHeight, ref.height), `${width}: height ${state.bodyHeight} != ${ref.height}`);
    await page.screenshot({ path: `/tmp/screens/${width}.png`, fullPage: true });
  }

  const focus = [];
  for (let index = 0; index < 5; index += 1) {
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => {
      const element = document.activeElement;
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return { name: element.textContent.trim(), outline: parseFloat(style.outlineWidth) || 0, shadow: style.boxShadow, rect: [rect.x, rect.y, rect.width, rect.height] };
    });
    focus.push(focused.name);
    ok(focused.outline >= 3 || focused.shadow !== 'none', `${width}: focus style ${focused.name}`);
    ok(focused.rect[0] >= -1 && focused.rect[0] + focused.rect[2] <= width + 1, `${width}: clipped focus ${focused.name}`);
  }
  ok(focus.join('|') === 'Request Beta Access|Request Beta Access|Facebook|Twitter|Instagram', `${width}: tab order ${focus}`);

  const primary = page.locator('.cta--primary');
  const primaryBefore = await primary.evaluate((element) => getComputedStyle(element).backgroundImage);
  await primary.hover();
  await page.waitForTimeout(250);
  const primaryAfter = await primary.evaluate((element) => getComputedStyle(element).backgroundImage);
  ok(primaryBefore !== primaryAfter, `${width}: primary hover`);

  const secondary = page.locator('.cta--secondary');
  const secondaryBefore = await secondary.evaluate((element) => getComputedStyle(element).backgroundColor);
  await secondary.hover();
  await page.waitForTimeout(250);
  const secondaryAfter = await secondary.evaluate((element) => getComputedStyle(element).backgroundColor);
  ok(secondaryBefore !== secondaryAfter, `${width}: secondary hover`);

  await page.emulateMedia({ reducedMotion: 'reduce' });
  const motion = await page.locator('.cta').first().evaluate((element) => getComputedStyle(element).transitionDuration);
  ok(motion.split(',').every((value) => parseFloat(value) === 0), `${width}: reduced motion ${motion}`);

  const before = requests.length;
  for (const selector of ['.site-header__cta', '.hero .cta', '.site-footer__social-link:nth-child(1)', '.site-footer__social-link:nth-child(2)', '.site-footer__social-link:nth-child(3)']) {
    await page.locator(selector).focus();
    await page.keyboard.press('Enter');
  }
  await page.waitForTimeout(50);
  ok(requests.length === before, `${width}: link activation network activity`);
  ok(errors.length === 0, `${width}: runtime errors ${errors.join(' | ')}`);
  console.log(`${width}px PASS ${JSON.stringify({ height: state.bodyHeight, contrast })}`);
  await page.close();
}

const zoomPage = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await zoomPage.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
await zoomPage.evaluate(() => { document.documentElement.style.zoom = '2'; });
const zoom = await zoomPage.evaluate(() => ({
  visible: [...document.querySelectorAll('h1,p,a')].every((element) => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
  }),
  links: [...document.querySelectorAll('a')].length,
}));
ok(zoom.visible && zoom.links === 5, '200% zoom resilience');
await zoomPage.close();
await browser.close();
console.log('P03-T01 PASS');
