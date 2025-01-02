export default class FormdataImpl {
  static toObject<T>(node: HTMLFormElement) {
    return Object.fromEntries(new FormData(node)) as T;
  }
}
