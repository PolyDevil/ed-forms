import c from "clsx";

import s from "./index.module.css";

interface props {
    className?: string;
}

function Component(props: props) {
  return (
    <main className={c(s.rootX, props.className)}>
      hi
    </main>
  );
}

export default Component