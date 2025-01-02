import c from "clsx";

import s from "./index.module.css";

interface props {
  className?: string;
  formID: string;
}

function Component(props: props) {
  return (
    <header className={c(s.rootX, props.className)}>
      <button form={props.formID}>submit</button>
    </header>
  );
}

export default Component;
