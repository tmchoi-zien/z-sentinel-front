"use client";
import { useState } from "react";

import * as TEXT from "@/locale/ko/page.json";
import VulnerabilitiesLogic from "./logic";

import Tab from "@/components/commons/Tab";
import useModal from "@/components/modals/useModal";
import Overview from "./Overview";

const m = TEXT["vulnerabilities"];

export default function Vulnerabilities() {
  const res = VulnerabilitiesLogic();
  const { openVulnerabilityDetail } = useModal();

  const [tab, setTab] = useState<number>(0);

  return (
    <div className="flex flex-col gap-[30px]">
      <Tab items={m["tab"]} tab={tab} setTab={setTab} />

      {/* TAB: Overview */}
      {tab === 0 && <Overview />}
    </div>
  );
}
