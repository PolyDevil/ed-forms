// https://github.com/lukeed/clsx

type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | bigint
  | null
  | boolean
  | undefined;

type ClassDictionary = Record<string, unknown>;
type ClassArray = ClassValue[];

function clsx() {
  // eslint-disable-next-line no-var
  var i = 0,
    tmp,
    str = "",
    len = arguments.length;

  for (; i < len; i++) {
    // eslint-disable-next-line prefer-rest-params
    if ((tmp = arguments[i])) {
      if (typeof tmp === "string") {
        str += (str && " ") + tmp;
      }
    }
  }

  return str;
}

export default clsx as (...inputs: ClassValue[]) => string;
