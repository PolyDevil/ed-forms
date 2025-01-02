import c from "clsx";

import s from "./index.module.css";

interface props {
  className?: string;
}

function Component(props: props) {
  return (
    <form className={c(s.rootX, props.className)}>
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
