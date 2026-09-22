import { chromium } from "playwright";

const browser = await chromium.launch({ channel: "chrome" });
const baseURL = process.env.TEST_BASE_URL ?? "http://127.0.0.1:4321";

try {
  const desktop = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  await desktop.goto(baseURL, { waitUntil: "networkidle" });

  const desktopOverflow = await desktop.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  if (desktopOverflow > 1)
    throw new Error(`Desktop overflows horizontally by ${desktopOverflow}px`);

  if ((await desktop.locator("[data-hero-video]").count()) !== 1) {
    throw new Error("Hero reel does not have exactly one video element");
  }

  const desktopVideoSources = await desktop
    .locator("[data-hero-video] source")
    .evaluateAll((sources) =>
      sources.map((source) => ({
        media: source.getAttribute("media"),
        src: source.getAttribute("src"),
      })),
    );
  if (
    desktopVideoSources.length !== 2 ||
    desktopVideoSources.some(
      ({ src }) => !src?.includes("/so_0.2,") || !src.endsWith("/reel.mp4"),
    )
  ) {
    throw new Error(
      `Hero responsive sources are not aligned to the poster: ${JSON.stringify(desktopVideoSources)}`,
    );
  }

  if (
    (await desktop
      .locator('link[rel="preconnect"][href="https://res.cloudinary.com"]')
      .count()) !== 1
  ) {
    throw new Error("Cloudinary preconnect hint is missing");
  }

  const motionMedia = desktop.locator("[data-hero-motion-media]");
  if (
    (await motionMedia.count()) !== 1 ||
    (await motionMedia.first().evaluate((element) => element.tagName)) !==
      "PICTURE"
  ) {
    throw new Error("Hero entrance should animate only the poster media");
  }

  if ((await desktop.locator("[data-motion-toggle]").count()) !== 0) {
    throw new Error("Removed hero playback control is still present");
  }

  const service = desktop.locator("[data-service-trigger]").nth(2);
  await service.click();
  const selectedTitle = await desktop
    .locator("[data-service-title]")
    .textContent();
  if (selectedTitle?.trim() !== "Septic and Utilities") {
    throw new Error(`Service switcher did not update: ${selectedTitle}`);
  }

  const sectionLabels = await desktop
    .locator("[data-section-label]:visible")
    .allTextContents();
  const expectedSectionLabels = [
    "Services",
    "Why Peterson",
    "Testimonials",
    "Materials",
    "Service Area",
    "Contact",
  ];
  if (
    sectionLabels.map((label) => label.trim()).join("|") !==
    expectedSectionLabels.join("|")
  ) {
    throw new Error(`Section labels do not match navigation: ${sectionLabels}`);
  }

  const serviceAreaLocations = await desktop
    .locator('[data-service-area-locations] > [role="listitem"]')
    .allTextContents();
  const expectedServiceAreaLocations = ["Two Harbors", "Cloquet", "Cotton"];
  if (
    serviceAreaLocations.map((location) => location.trim()).join("|") !==
    expectedServiceAreaLocations.join("|")
  ) {
    throw new Error(
      `Service-area locations do not match the approved list: ${serviceAreaLocations}`,
    );
  }

  const sectionLabelDashes = await desktop
    .locator("[data-section-label]")
    .evaluateAll(
      (labels) =>
        labels.filter(
          (label) => getComputedStyle(label, "::before").content !== "none",
        ).length,
    );
  if (sectionLabelDashes !== 0) {
    throw new Error("Decorative section-label dashes are still present");
  }

  if (
    (await desktop.locator("#projects").count()) !== 0 ||
    (await desktop.locator('a[href="#projects"]').count()) !== 0
  ) {
    throw new Error("Removed homepage sections are still present or linked");
  }

  const regionalCopy = await desktop
    .getByText(/northeastern Minnesota/i)
    .count();
  if (regionalCopy < 3) {
    throw new Error("Northeastern Minnesota is not reinforced across the page");
  }

  const sectionColors = await desktop
    .locator(
      "#services, #why-peterson, #testimonials, #materials, #service-area, #contact",
    )
    .evaluateAll((sections) =>
      sections.map((section) => getComputedStyle(section).backgroundColor),
    );
  const expectedSectionColors = [
    "rgb(246, 246, 243)",
    "rgb(37, 35, 33)",
    "rgb(236, 236, 234)",
    "rgb(21, 21, 21)",
    "rgb(246, 246, 243)",
    "rgb(21, 21, 21)",
  ];
  if (sectionColors.join("|") !== expectedSectionColors.join("|")) {
    throw new Error(
      `Homepage section colors lost their rhythm: ${sectionColors}`,
    );
  }

  await desktop.evaluate(() =>
    window.scrollTo({ top: 200, behavior: "instant" }),
  );
  await desktop.waitForTimeout(100);
  const heroHeaderBackground = await desktop
    .locator(".site-header")
    .evaluate((element) => getComputedStyle(element).backgroundColor);
  if (heroHeaderBackground !== "rgba(0, 0, 0, 0)") {
    throw new Error(
      `Desktop header should remain transparent over the hero: ${heroHeaderBackground}`,
    );
  }

  const contactLink = desktop.locator(
    '.site-header nav[aria-label="Primary navigation"] a[href="#contact"]',
  );
  if ((await contactLink.count()) !== 1) {
    throw new Error("Desktop contact navigation is not a working link");
  }

  const heroHeight = await desktop
    .locator("[data-motion-hero]")
    .evaluate((element) => element.getBoundingClientRect().height);
  const headerHeight = await desktop
    .locator(".site-header")
    .evaluate((element) => element.getBoundingClientRect().height);
  await desktop.evaluate(
    ({ hero }) => {
      window.scrollTo({ top: hero + 1, behavior: "instant" });
    },
    { hero: heroHeight, header: headerHeight },
  );
  await desktop.waitForTimeout(100);
  const passedHeroHeader = await desktop
    .locator("[data-header-surface]")
    .evaluate((element) => ({
      background: getComputedStyle(element).backgroundColor,
      divider: getComputedStyle(element).borderBottomColor,
      borderRadius: getComputedStyle(element).borderRadius,
      clipPath: getComputedStyle(element).clipPath,
      left: element.getBoundingClientRect().left,
      width: element.getBoundingClientRect().width,
    }));
  if (
    ![
      "rgba(246, 246, 243, 0.95)",
      "oklab(0.972306 -0.00108042 0.0038231 / 0.95)",
    ].includes(passedHeroHeader.background) ||
    passedHeroHeader.divider !== "rgb(201, 201, 196)" ||
    passedHeroHeader.borderRadius !== "0px" ||
    !passedHeroHeader.clipPath.startsWith("inset(0px") ||
    passedHeroHeader.left !== 0 ||
    passedHeroHeader.width !== 1440
  ) {
    throw new Error(
      `Scrolled header is not a full-width beige bar: ${JSON.stringify(passedHeroHeader)}`,
    );
  }

  const desktopLogoWidth = await desktop
    .locator(
      '.site-header a[aria-label="Peterson Excavating & Landscaping home"]',
    )
    .evaluate((element) => element.getBoundingClientRect().width);
  if (desktopLogoWidth > 204) {
    throw new Error(`Desktop logo remains too large: ${desktopLogoWidth}px`);
  }

  const footerNavigationLabels = await desktop
    .locator('footer nav[aria-label="Footer navigation"] > a')
    .allTextContents();
  if (
    footerNavigationLabels.map((label) => label.trim()).join("|") !==
    expectedSectionLabels.join("|")
  ) {
    throw new Error(
      `Footer navigation does not match the main menu: ${footerNavigationLabels}`,
    );
  }

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
  });
  await mobile.goto(baseURL, { waitUntil: "networkidle" });

  const mobileOverflow = await mobile.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  if (mobileOverflow > 1)
    throw new Error(`Mobile overflows horizontally by ${mobileOverflow}px`);

  const mobileServiceStage = mobile.locator(
    "[data-service-workbench] > div[aria-live]",
  );
  if (await mobileServiceStage.isVisible()) {
    throw new Error(
      "Detached desktop service stage is still visible on mobile",
    );
  }

  const firstMobileService = mobile.locator("[data-service-trigger]").first();
  const thirdMobileService = mobile.locator("[data-service-trigger]").nth(2);
  await thirdMobileService.click();
  if ((await thirdMobileService.getAttribute("aria-expanded")) !== "true") {
    throw new Error("Selected mobile service did not expand inline");
  }
  if ((await firstMobileService.getAttribute("aria-expanded")) !== "false") {
    throw new Error("Previously selected mobile service remained expanded");
  }

  const menuButton = mobile.locator(".menu-toggle");
  await menuButton.click();
  if ((await menuButton.getAttribute("aria-expanded")) !== "true") {
    throw new Error("Mobile menu did not open");
  }
  if (!(await mobile.locator("#mobile-menu").isVisible())) {
    throw new Error("Mobile navigation remains hidden after opening");
  }

  const mobileContactLink = mobile.locator('#mobile-menu a[href="#contact"]');
  if ((await mobileContactLink.count()) !== 1) {
    throw new Error("Mobile contact navigation is not a working link");
  }

  const contactDividerWidth = await mobileContactLink.evaluate(
    (element) => getComputedStyle(element).borderBottomWidth,
  );
  if (contactDividerWidth !== "0px") {
    throw new Error(
      `Mobile contact link still has a bottom divider: ${contactDividerWidth}`,
    );
  }

  const mobileNavigationLabels = await mobile
    .locator("#mobile-menu > a")
    .allTextContents();
  if (
    mobileNavigationLabels.map((label) => label.trim()).join("|") !==
    expectedSectionLabels.join("|")
  ) {
    throw new Error(
      `Mobile navigation does not match section order: ${mobileNavigationLabels}`,
    );
  }

  const menuText = await menuButton.textContent();
  if (menuText?.trim())
    throw new Error("Mobile menu trigger contains visible text");

  const menuAlignment = await menuButton.evaluate((element) => {
    const button = element.getBoundingClientRect();
    const header = element.closest("header")?.getBoundingClientRect();
    return header ? header.right - button.right : Number.POSITIVE_INFINITY;
  });
  if (menuAlignment > 32) {
    throw new Error(
      `Mobile menu is not right-aligned: ${menuAlignment}px inset`,
    );
  }

  await mobile.mouse.click(380, 800);
  if ((await menuButton.getAttribute("aria-expanded")) !== "false") {
    throw new Error("Clicking outside the mobile menu did not close it");
  }
  if (await mobile.locator("#mobile-menu").isVisible()) {
    throw new Error("Mobile navigation remains visible after an outside click");
  }

  await mobile.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await mobile.waitForTimeout(300);
  const topHeaderBackground = await mobile
    .locator(".site-header")
    .evaluate((element) => getComputedStyle(element).backgroundColor);
  if (topHeaderBackground !== "rgba(0, 0, 0, 0)") {
    throw new Error(
      `Mobile header is not transparent at top: ${topHeaderBackground}`,
    );
  }

  const mobileHeroHeight = await mobile
    .locator("[data-motion-hero]")
    .evaluate((element) => element.getBoundingClientRect().height);
  const mobileHeaderHeight = await mobile
    .locator(".site-header")
    .evaluate((element) => element.getBoundingClientRect().height);
  await mobile.evaluate(
    ({ hero }) => {
      window.scrollTo({ top: hero + 1, behavior: "instant" });
    },
    { hero: mobileHeroHeight, header: mobileHeaderHeight },
  );
  await mobile.waitForTimeout(100);
  const mobilePassedHeroHeader = await mobile
    .locator("[data-header-surface]")
    .evaluate((element) => getComputedStyle(element).backgroundColor);
  if (
    ![
      "rgba(246, 246, 243, 0.95)",
      "oklab(0.972306 -0.00108042 0.0038231 / 0.95)",
    ].includes(mobilePassedHeroHeader)
  ) {
    throw new Error(
      `Mobile header is not beige after the hero: ${mobilePassedHeroHeader}`,
    );
  }

  const mobileLogoWidth = await mobile
    .locator(
      '.site-header a[aria-label="Peterson Excavating & Landscaping home"]',
    )
    .evaluate((element) => element.getBoundingClientRect().width);
  if (mobileLogoWidth > 152) {
    throw new Error(`Mobile logo remains too large: ${mobileLogoWidth}px`);
  }

  if ((await mobile.locator(".mobile-contact").count()) !== 0) {
    throw new Error("Removed mobile contact dock is still present");
  }

  const phoneLinks = mobile.locator('a[href="tel:+12183550992"]');
  if ((await phoneLinks.count()) !== 3) {
    throw new Error(
      "Approved phone number is not linked in every call location",
    );
  }

  const textLinks = mobile.locator('a[href="sms:+12183550992"]');
  if ((await textLinks.count()) !== 1) {
    throw new Error("Approved phone number is not linked for texting");
  }

  console.log(
    "Homepage e2e checks passed: responsive overflow, service switcher, mobile menu, contact links.",
  );
} finally {
  await browser.close();
}
