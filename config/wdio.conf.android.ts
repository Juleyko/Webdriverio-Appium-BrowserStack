import { config as sharedConfig } from "./wdio.conf.js";
import { join } from "path";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
console.log(process.cwd());
export const config = {
  ...sharedConfig,
  port: 4723,
  services: ["appium"],
  appium: {
    // For options see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    args: ["--allow-insecure"],
  },
  capabilities: [
    {
      // capabilities for local Appium web tests on an Android Emulator or Real device
      platformName: "Android",
      "appium:deviceName": "RF8T40S2A6F",
      "appium:app": join(process.cwd(), "/apps/android/base.apk"),
      "appium:platformVersion": "12",
      "appium:automationName": "UiAutomator2",
    },
  ],
};
