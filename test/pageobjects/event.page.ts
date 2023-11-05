import { browser } from "@wdio/globals";
import Page from "./page.js";

class Event extends Page {
  get event4thDay() {
    return $("//android.view.View[@content-desc=' ' and @text='2023-11-8']");
  }
  get deleteButton() {
    return $("~Видалити");
  }
  get busketButton() {
    return $("//android.widget.Button[@resource-id='android:id/button1']");
  }
  get goUpButton() {
    return $("~Перейти вгору");
  }
  get justClick() {
    return $(
      "//android.widget.FrameLayout[@resource-id='com.samsung.android.calendar:id/swipe_touch_layout']"
    );
  }
  public async clickOnEvent4thDay() {
    await this.event4thDay.click();
  }
  public async clickOnDeleteButton() {
    await this.deleteButton.click();
  }
  public async clickOnBusketButton() {
    await this.busketButton.click();
  }
  public async clickOnGoUpButton() {
    await this.goUpButton.click();
  }
  public async clickOnJustClick() {
    await this.justClick.click();
  }
}
export default new Event();
