import { action, observable, toJS } from "mobx";

export const globalState = observable({
  language: "eng",
});

export const setLanguage = action((language) => {
  globalState.language = language;
});
