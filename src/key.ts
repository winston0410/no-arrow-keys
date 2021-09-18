export interface IKey {
  key: KeyboardEvent["key"];
  code: KeyboardEvent["code"];
  location: KeyboardEvent["location"];
  keyCode: KeyboardEvent["keyCode"];
  which: KeyboardEvent["which"];
}

export const createKey = (
  key: KeyboardEvent["key"],
  code: KeyboardEvent["keyCode"],
  location: KeyboardEvent["location"] = 0
): IKey => {
  return {
    key,
    code: key,
    location,
    keyCode: code,
    which: code,
  };
};
