import { action, observable } from "mobx"; //toJS

export const globalState = observable({
  language: "eng",
});

export const setLanguage = action((language) => {
  globalState.language = language;
});
