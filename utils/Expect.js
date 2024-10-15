import { expect } from "@playwright/test";

class Expect {
  /**
   * Validate two values are equal
   *
   * @static
   * @async
   * @param {*} actual actual value
   * @param {*} expected expected value
   */
  static async validateBoolean(actual, expected) {
    expect(actual).toBe(expected);
  }
  /**
   * Validates that the title of the page matches the expected title.
   * @param {string} actualTitle - The actual title.
   * @param {string} expectedTitle - The expected title.
   */
  static async validateTitle(actualTitle, expectedTitle) {
    expect(actualTitle).toBe(expectedTitle);
  }

  /**
   * Validates that the current URL matches the expected URL.
   * @param {string} actualUrl - The actual URL.
   * @param {string} expectedUrl - The expected URL.
   */
  static async validateUrl(actualUrl, expectedUrl) {
    expect(actualUrl).toBe(expectedUrl);
  }

  /**
   * Validates that an element is visible on the page.
   * @param {import("@playwright/test").Page.element} element - The object.
   */
  static async validateElementVisible(element) {
    await expect(element).toBeVisible();
  }

  /**
   * Validates that an element contains the expected text.
   * @param {import("@playwright/test").Page.element} element - The object.
   * @param {string} expectedText - The text that the element should contain.
   */
  static async validateElementText(element, expectedText) {
    await expect(element).toHaveText(expectedText);
  }

  /**
   * Validates that an element's attribute matches the expected value.
   * @param {import("@playwright/test").Page.element} element - The object.
   * @param {string} attributeName - The attribute name (e.g., 'href', 'src').
   * @param {string} expectedValue - The expected value of the attribute.
   */
  static async validateElementAttribute(element, attributeName, expectedValue) {
    await expect(element).toHaveAttribute(attributeName, expectedValue);
  }

  /**
   * Validates that an element is not visible on the page.
   * @param {import("@playwright/test").Page.element} element - The object.
   */
  static async validateElementNotVisible(element) {
    await expect(element).not.toBeVisible();
  }

  /**
   * Validates that an element is enabled.
   * @param {import("@playwright/test").Page.element} element - The object.
   */
  static async validateElementEnabled(element) {
    await expect(element).toBeEnabled();
  }

  /**
   * Validates that an element is disabled.
   * @param {import("@playwright/test").Page.element} element - The object.
   */
  static async validateElementDisabled(element) {
    await expect(element).toBeDisabled();
  }
}

export default Expect;
