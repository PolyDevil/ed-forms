import c from "clsx";

import s from "./index.module.css";

interface props {
  className?: string;
  formID: FormID;
}

function Component(props: props) {
  return (
    <header className={c(s.rootX, props.className)}>
      <button form={props.formID.toString()}>submit</button>
    </header>
  );
}

export default Component;
