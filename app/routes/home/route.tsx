import type { Route } from "../../+types/root";

import Page from "./page";
import s from "./route.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Page className={s.rootX} />;
}
