import { expect, browser } from "@wdio/globals";
import main from "../pageobjects/main.page.js";
import event from "../pageobjects/event.page.js";

const addEventFiedResourceld =
  "com.samsung.android.calendar:id/quick_add_button";
const addEventButton = "com.samsung.android.calendar:id/floating_action_button";
const saveButton = `//android.widget.TextView[@resource-id="com.samsung.android.calendar:id/navigation_bar_item_small_label_view" and @text="Save"]`;
const titleEventName = "com.samsung.android.calendar:id/title";
const monthString = "com.samsung.android.calendar:id/date_header";
const menuButton = "com.samsung.android.calendar:id/open_drawer";
const serchIcon = "com.samsung.android.calendar:id/search_icon";

describe("My calendar application", () => {
  it(" [case 1]should be visible element add Event", async () => {
    await browser.pause(7000);
    // await main.clickOnTurnOnButton();
    await browser.pause(5000);
    const selector = await main.getResourceIdSelector(addEventFiedResourceld);
    expect(await main.isAddEventFieldDisplayed(selector)).toBe(true);
  });

  it(" [case 2]should be visible month", async () => {
    // await browser.pause(7000);
    const selector = await main.getResourceIdSelector(monthString);
    expect(await main.isAddEventFieldDisplayed(selector)).toBe(true);
  });

  it(" [case 3]should be visible menu", async () => {
    await browser.pause(5000);
    const selector = await main.getResourceIdSelector(menuButton);
    expect(await main.isAddEventFieldDisplayed(selector)).toBe(true);
  });

  it(" [case 4]should be visible serch icon", async () => {
    const selector = await main.getResourceIdSelector(serchIcon);
    expect(await main.isAddEventFieldDisplayed(selector)).toBe(true);
  });

  it(" [case 5]should add event", async () => {
    await browser.pause(5000);
    // await main.clickOnAddEventButton();
    const selector = await main.getResourceIdSelector(addEventButton);
    await main.clickElement(selector);
    // await main.fillEventFieldName();
    const select = await main.getResourceIdSelector(titleEventName);
    await main.clickElement(select);
    await main.setElementInputValue(select, "Win");
    await browser.pause(5000);
    // await main.clickOnSaveEventButton();
    // const selec = await main.getResourceIdSelector(saveButton);
    await main.clickElement(saveButton);
    await browser.pause(5000);
  });

  // it(" [case 4]should open event", async () => {
  //   await browser.pause(5000);
  //   await main.clickOnEventDay();
  //   await event.clickOnEvent4thDay();
  //   await event.clickOnGoUpButton();
  //   await event.clickOnJustClick();
  //   await browser.pause(5000);
  // });
  //   it(" [case 5]should delete event", async () => {
  //     await browser.pause(5000);
  //     await main.clickOnEventDay();
  //     await event.clickOnEvent4thDay();
  //     await event.clickOnDeleteButton();
  //     await event.clickOnBusketButton();
  //     await browser.pause(5000);
});
