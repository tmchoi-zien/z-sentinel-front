"use client";
import { useMemo, useState } from "react";
import { type MRT_ColumnDef } from "material-react-table";

import * as TEXT from "@/locale/ko/page.json";
import Table from "@/components/commons/Table";
import useModal from "@/components/modals/useModal";
import VulnerabilitiesLogic from "./logic";
import Tab from "@/components/commons/Tab";

const m = TEXT["vulnerabilities"];

export default function Vulnerabilities() {
  const res = VulnerabilitiesLogic();
  const { openVulnerabilityDetail } = useModal();

  const [tab, setTab] = useState<number>(0);

  const handleChangeTab = () => {};

  return (
    <div className="flex flex-col gap-[30px]">
      <Tab items={m["tab"]} tab={tab} setTab={setTab} />
    </div>
  );
}
