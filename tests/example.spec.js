// @ts-check
import { test } from "@playwright/test";
import HomeTest from "../test-steps/HomeTest";
import ConfigLoader from "../utils/ConfigLoader";
import GlobalVariables from "../utils/GlobalVariables";
import Hooks from "./Hooks";

const configLoader = new ConfigLoader();
GlobalVariables.setCustomObjectLoadTimeout(configLoader.getValue("objectLoadTimeout"));
GlobalVariables.setCustomPageLoadTimeout(configLoader.getValue("pageLoadTimeout"));
GlobalVariables.setCustomPause(configLoader.getValue("pause"));
GlobalVariables.setLocale(configLoader.getValue("locale"));

let homeTest;
test.describe.configure({ mode: "serial" });
/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async ({ browser }) => {
  await Hooks.beforeAll();
  page = await browser.newPage();
});

test.afterAll(async () => {
  await Hooks.afterAll(page);
});

test.beforeEach(async () => {
  await Hooks.beforeEach(page);
});

test.describe("Home Page", () => {
  test("Verify Home Page Title", async () => {
    homeTest = new HomeTest(page);
    await homeTest.verifyHomePageOpened();
    await homeTest.verifyHomePageTitle();
  });
  test("Click Get Started Button", async () => {
    homeTest = new HomeTest(page);
    await homeTest.verifyHomePageOpened();
    await homeTest.clickGetStartedButton();
  });
});
