import { error, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";

defaultModules.set(PNotifyMobile, {});

export const getDatasetOfWinnersOrLosers = (key, hamsters) => {
  let newHamsters = [...hamsters];
  const result = newHamsters
    .sort((a, b) => Number(b[key]) - Number(a[key]))
    .slice(0, 5);
  return result;
};

export const showErrorMessage = (text) => {
  error({
    text,
    addClass: "angeler-extended",
    delay: 3000,
  });
};
