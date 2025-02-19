"use client";
import * as TEXT from "@/locale/ko/page.json";

const t = TEXT["home"];

import DragableButton from "@/components/commons/DragableButton";

export default function Home() {
  return (
    <>
      <div>{t["title"]}</div>
      <DragableButton />
    </>
  );
}
