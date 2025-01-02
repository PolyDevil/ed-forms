import type { FormEventHandler } from "react";
import c from "clsx";

import s from "./index.module.css";

interface props {
  className?: string;
}

function Component(props: props) {
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    alert("submit");
  };

  return (
    <form className={c(s.rootX, props.className)} onSubmit={onSubmit}>
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

      <button>submit</button>
    </form>
  );
}

export default Component;
