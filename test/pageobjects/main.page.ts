import { browser } from "@wdio/globals";
import Page from "./page.js";
class Main extends Page {
  public async isAddEventFieldDisplayed(
    addEventFiedResourceld: string
  ): Promise<boolean> {
    const elem = await this.getElement(addEventFiedResourceld);
    return elem.isDisplayed();
  }

  public async clickElement(element: string): Promise<void> {
    await this.waitUntilElementDisplayed(element);
    const elem = await this.getElement(element);
    await elem.click();
  }

  public async setElementInputValue(
    element: string,
    value: string
  ): Promise<void> {
    await this.waitUntilElementDisplayed(element);
    const elem = await this.getElement(element);
    await elem.setValue(value);
  }

  public async getResourceIdSelector(resourceId: string) {
    const selector = `android=new UiSelector().resourceId("${resourceId}")`;
    return selector;
  }
}
export default new Main();
