import c from "clsx";

import Header from "./header";
import Form from "./form";
import s from "./index.module.css";

interface props {
  className?: string;
}

const formID = "form";

function Component(props: props) {
  return (
    <div className={c(s.rootX, props.className)}>
      <Form formID={formID} />
      <Header formID={formID} />
    </div>
  );
}

export default Component;
