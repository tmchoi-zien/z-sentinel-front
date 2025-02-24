"use client";
import { useState } from "react";

import { MENUS, MenusType } from "@/constants/menu";
import MenuItem from "./MenuItem";
import Button from "../commons/Button";
import useModal from "../modals/useModal";
import ZienIocn from "../icons/ZienIcon";

/**
 * todo: 하위항목 펼치기/접기 애니메이션 추가할 것
 */

export default function Sidebar() {
  const [menus, setMenus] = useState<MenusType[]>(MENUS);

  const { openVulnerabilityDetail, openSecurityAlertDetail } = useModal();

  return (
    <div
      data-testid="side-bar"
      className="w-[280px] h-full bg-sidebar text-white py-[20px] px-[20px]"
    >
      <div className="flex flex-col items-center gap-[26px] w-full h-full">
        <div className="flex items-center justify-center py-[20px]">
          <ZienIocn />
        </div>
        <div className="w-full flex flex-col items-center gap-[20px]">
          {menus &&
            menus.map((menu, idx) => {
              return <MenuItem menu={menu} key={idx} />;
            })}
          {/* <ul className="flex flex-col gap-5 mt-10">
            <li>
              <Button
                color="white"
                size="m"
                text="modal - vulnerability detail"
                type="button"
                onClick={() =>
                  openVulnerabilityDetail({ index: 0, onClose: () => {} })
                }
              />
            </li>
            <li>
              <Button
                color="white"
                size="m"
                text="modal - vulnerability detail"
                type="button"
                onClick={() =>
                  openSecurityAlertDetail({ index: 0, onClose: () => {} })
                }
              />
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
