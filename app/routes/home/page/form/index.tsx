import type { FormEventHandler } from "react";
import c from "clsx";
import Formdata from "Formdata";

import s from "./index.module.css";

interface props {
  className?: string;
  formID: string;
}

function Component(props: props) {
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!event.target) return;

    const formdata = Formdata.toObject<{ code: string }>(
      event.target as HTMLFormElement
    );

    alert(JSON.stringify(formdata));
  };

  return (
    <form
      id={props.formID}
      onSubmit={onSubmit}
      className={c(s.rootX, props.className)}
    >
      <input
        name="code"
        placeholder="123456 (code)"
        autoComplete="one-time-code"
        pattern="\d{6}"
        inputMode="numeric"
        minLength={6}
        maxLength={6}
        required
      />
    </form>
  );
}

export default Component;
