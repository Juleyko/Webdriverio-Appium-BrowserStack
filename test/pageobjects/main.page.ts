import { browser } from "@wdio/globals";
import Page from "./page.js";

const addEventFiedResourceld =
  "com.samsung.android.calendar:id/quick_add_button";
const titleEventName = "com.samsung.android.calendar:id/title";

class Main extends Page {
  get turnOnButton() {
    return $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]"
    );
  }
  get addEventButton() {
    return $("//android.widget.ImageButton[@content-desc='Додати подію']");
  }
  get eventFieldName() {
    return $(
      "//android.widget.AutoCompleteTextView[@resource-id='com.samsung.android.calendar:id/title']"
    );
  }
  get saveEventButton() {
    return $("~Зберегти");
  }
  get eventDay() {
    return $("//android.view.View[@content-desc=' ' and @text='2023-11-4']");
  }

  public async clickOnTurnOnButton() {
    (await this.turnOnButton).click();
  }
  public async clickOnEventDay() {
    await this.eventDay.click();
  }

  public async clickOnAddEventButton() {
    await this.addEventButton.click();
  }
  public async fillEventFieldName() {
    (await this.eventFieldName).setValue("Win");
  }
  public async clickOnSaveEventButton() {
    await this.saveEventButton.click();
  }

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

  // public async waitUntilSignUpDisplayed(btnIos: string): Promise<void> {
  //     browser.isAndroid ? await this.waitUntilElementDisplayed(signUpBtn) :
  //     await this.waitUntilElementDisplayed(btnIos);
  //   }
  //   public async isElementDisplayed(element: string): Promise<boolean> {
  //     const elem = await this.getElement(element);
  //     return elem.isDisplayed()
  //   }
}
export default new Main();
