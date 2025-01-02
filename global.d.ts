import type { FormID as FormIDImpl } from "Formdata";

// By declaring a unique symbol, we create a distinct marker in TypeScript.
declare const __brand: unique symbol;

declare global {
  // Define a Branded type that combines a base type with a brand
  type Branded<Type, Brand> = Type & {
    readonly [__brand]: Brand;
  };

  type FormID = FormIDImpl;
}

export {};
