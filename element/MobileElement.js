import Logger from "../logger/Logger";
import GlobalVariables from "../utils/GlobalVariables";

class MobileElement {
  /**
   * Constructor to initialize the MobileElement with a Playwright page and locator
   * @param {import('@playwright/test').Page} page - Playwright Page object
   * @param {string | Locator} selector - Selector string or Locator object for the element
   */
  constructor(page, selector) {
    this.page = page;
    this.selector = selector;
    this.logger = new Logger(`MobileElement.js`);
  }

  /**
   * Helper method to retrieve the locator
   * @async
   * @returns @see {import('@playwright/test').Locator | null} - Playwright Locator object
   */
  async getElement() {
    try {
      this.logger.info(`getElement for locator: ${this.selector}`, `getElement`);
      return this.page.locator(this.selector);
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError: ${error}`, `getElement`);
      return null;
    }
  }

  /**
   * Wait for the element to be visible on the page
   * @async
   * @param {number} [timeout = GlobalVariables.getCustomObjectLoadTimeout()] - timeout to wait for
   * @returns @see {boolean} true if visible, otherwise
   */
  async waitForVisibility(timeout = GlobalVariables.getCustomObjectLoadTimeout()) {
    try {
      this.logger.info(`waitForVisibility for selector: ${this.selector} and timeout: ${timeout}ms`, `waitForVisibility`);
      const element = await this.getElement();
      await element.waitFor({ timeout: timeout, state: "visible" });
      return true;
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError: ${error}`, `waitForVisibility`);
      return false;
    }
  }

  /**
   * Wait for the selector/element to be available on the page
   *
   * @async
   * @param {number} [timeout = GlobalVariables.getCustomObjectLoadTimeout()] - timeout to wait for
   * @returns @see {import("@playwright/test").Page.Element} Element object
   */
  async waitForSelector(timeout = GlobalVariables.getCustomObjectLoadTimeout()) {
    try {
      this.logger.info(`Waiting for selector ${this.selector} for ${timeout} seconds`, `waitForSelector`);
      return await this.page.waitForSelector(this.selector, { timeout });
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForSelector`);
      return null;
    }
  }

  /**
   * Wait for the selector/element to be available and visible on the page
   *
   * @async
   * @param {number} [timeout=GlobalVariables.getCustomObjectLoadTimeout()] - timeout to wait for
   * @returns @see {import("@playwright/test").Page.element} Element object
   */
  async waitForSelectorToBeVisible(timeout = GlobalVariables.getCustomObjectLoadTimeout()) {
    try {
      this.logger.info(`Waiting for selector ${this.selector} to be visible for ${timeout} seconds`, `waitForSelectorToBeVisible`);
      return await this.page.waitForSelector(this.selector, {
        timeout,
        state: "visible",
      });
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForSelectorToBeVisible`);
      return null;
    }
  }

  /**
   * Wait for the selector/element to be not available/hidden on the page
   *
   * @async
   * @param {number} [timeout=GlobalVariables.getCustomObjectLoadTimeout()] - timeout to wait for
   * @returns @see {import("@playwright/test").Page.element} Element object
   */
  async waitForSelectorToBeHidden(timeout = GlobalVariables.getCustomObjectLoadTimeout()) {
    try {
      this.logger.info(`Waiting for selector ${this.selector} to be hidden for ${timeout} seconds`, `waitForSelectorToBeHidden`);
      return await this.page.waitForSelector(this.selector, {
        timeout,
        state: "hidden",
      });
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForSelectorToBeHidden`);
      return null;
    }
  }

  /**
   * Perform click on the element
   *
   * @async
   * @param {number} [timeout=GlobalVariables.getCustomObjectLoadTimeout()] - timeout to wait for
   * @param {number} [pause=GlobalVariables.getCustomPause()]  - pause to wait after
   */
  async click(timeout = GlobalVariables.getCustomObjectLoadTimeout(), pause = GlobalVariables.getCustomPause()) {
    try {
      this.logger.info(`waitForVisibility for selector: ${this.selector} and pause: ${pause}ms`, `waitForVisibility`);
      if (this.waitForVisibility(timeout)) {
        const element = await this.getElement();
        await element.click();
        await this.pause(pause);
      } else {
        this.logger.error(`Element not found: ${this.selector}`, `click`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError: ${error}`, `waitForVisibility`);
    }
  }

  /**
   * Perform Double Click on the element
   *
   * @async
   * @param {number} [timeout=GlobalVariables.getCustomObjectLoadTimeout()] - timeout to wait for
   * @param {number} [pause=GlobalVariables.getCustomPause()]  - pause to wait after
   */
  async doubleClick(timeout = GlobalVariables.getCustomObjectLoadTimeout(), pause = GlobalVariables.getCustomPause()) {
    try {
      this.logger.info(`doubleClick for selector: ${this.selector} and pause: ${pause}ms`, `doubleClick`);
      if (this.waitForVisibility(timeout)) {
        const element = await this.getElement();
        await element.dblclick();
        await this.pause(pause);
      } else {
        this.logger.error(`Element not found: ${this.selector}`, `doubleClick`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `doubleClick`);
    }
  }

  /**
   * Type/Fill the text into an input field
   * @async
   * @param {string} text - The text to type
   * @param {number} [timeout=GlobalVariables.getCustomObjectLoadTimeout()] - timeout to wait for
   * @param {number} [pause=GlobalVariables.getCustomPause()]  - pause to wait after
   */
  async fill(text, timeout = GlobalVariables.getCustomObjectLoadTimeout(), pause = GlobalVariables.getCustomPause()) {
    try {
      this.logger.info(`type for selector: ${this.selector} and text: ${text} and pause: ${pause}ms`, `fill`);
      if (this.waitForVisibility(timeout)) {
        const element = await this.getElement();
        await element.fill(text);
        await this.pause(pause);
      } else {
        this.logger.error(`Element not found: ${this.selector}`, `fill`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `fill`);
    }
  }

  /**
   * Clear the text in an input field
   * @async
   * @param {number} [timeout=GlobalVariables.getCustomObjectLoadTimeout()] - timeout to wait for
   * @param {number} [pause=GlobalVariables.getCustomPause()]  - pause to wait after
   */
  async clear(timeout = GlobalVariables.getCustomObjectLoadTimeout(), pause = GlobalVariables.getCustomPause()) {
    try {
      this.logger.info(`clear for selector: ${this.selector} and pause: ${pause}ms`, `clear`);
      if (this.waitForVisibility(timeout)) {
        const element = await this.getElement();
        await element.fill("");
        await this.pause(pause);
      } else {
        this.logger.error(`Element not found: ${this.selector}`, `clear`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `clear`);
    }
  }

  /**
   * Check if the element is visible
   * @async
   * @returns @see {boolean} - True if the element is visible
   */
  async isVisible() {
    try {
      this.logger.info(`isVisible for selector: ${this.selector}`, `isVisible`);
      return (await this.getElement()).isVisible();
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `isVisible`);
    }
  }

  /**
   * Check if the element is enabled (interactable)
   * @async
   * @returns @see {boolean} - True if the element is enabled
   */
  async isEnabled() {
    try {
      this.logger.info(`isEnabled for selector: ${this.selector}`, `isEnabled`);
      return (await this.getElement()).isEnabled();
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `isEnabled`);
    }
  }

  /**
   * Check if the element is checked (for checkbox or radio buttons)
   * @async
   * @returns @see {boolean} - True if the element is checked
   */
  async isChecked() {
    try {
      this.logger.info(`isChecked for selector: ${this.selector}`, `isChecked`);
      return (await this.getElement()).isChecked();
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `isChecked`);
    }
  }

  /**
   * Drag the element to another element
   * @async
   * @param {string | import("@playwright/test").Page.Locator} targetLocator - The target element to drag to
   */
  async dragTo(targetLocator) {
    try {
      this.logger.info(`dragTo for selector: ${this.selector}`, `dragTo`);
      const target = await this.page.waitForSelector(targetLocator);
      await (await this.getElement()).dragTo(target);
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `dragTo`);
    }
  }

  /**
   * Get the text content of the element
   * @async
   * @returns {Promise<string>} - The text content of the element
   */
  async getText() {
    try {
      this.logger.info(`getText for selector: ${this.selector}`, `getText`);
      return (await this.getElement()).textContent();
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `getText`);
    }
  }

  /**
   * Get the value of an input element
   * @async
   * @returns {Promise<string>} - The value of the input field
   */
  async getValue() {
    try {
      this.logger.info(`getValue for selector: ${this.selector}`, `getValue`);
      return (await this.getElement()).inputValue();
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `getValue`);
    }
  }

  /**
   * Hover over the element
   * @async
   */
  async hover() {
    try {
      this.logger.info(`hover for selector: ${this.selector}`, `hover`);
      await (await this.getElement()).hover();
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `hover`);
    }
  }

  /**
   * Select an option from a dropdown by value
   * @async
   * @param {string} value - The value of the option to select
   */
  async selectOption(value) {
    try {
      this.logger.info(`selectOption for selector: ${this.selector} and value: ${value}`, `selectOption`);
      await (await this.getElement()).selectOption(value);
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `selectOption`);
    }
  }

  /**
   * Scroll to the element if needed
   * @async
   */
  async scrollIntoView() {
    try {
      this.logger.info(`scrollIntoView for selector: ${this.selector}`, `scrollIntoView`);
      await (await this.getElement()).scrollIntoViewIfNeeded();
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `scrollIntoView`);
    }
  }

  /**
   * Get the element's attribute value
   * @async
   * @param {string} attribute - The attribute to retrieve
   * @returns {Promise<string>} - The attribute's value
   */
  async getAttribute(attribute) {
    try {
      this.logger.info(`getAttribute for selector: ${this.selector} and attribute: ${attribute}`, `getAttribute`);
      return (await this.getElement()).getAttribute(attribute);
    } catch (error) {
      this.logger.error(`Error Occurred: locator: ${this.selector} \nError:${error}`, `getAttribute`);
    }
  }

  /**
   * Pause the execution to slow down
   *
   * @async
   * @param {Constant.PAUSE} duration time to pause
   */
  async pause(duration) {
    this.logger.info(`Pause execution for ${duration}ms`, `pause`);
    await this.page.waitForTimeout(duration);
  }
}
export default MobileElement;
