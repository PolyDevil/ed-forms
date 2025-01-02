class FormIDImpl {
  private readonly t: Branded<string, "FormID">;

  constructor(public s: string) {
    this.t = s as FormIDImpl["t"];
  }

  toString() {
    return this.t;
  }
}

export default FormIDImpl;
