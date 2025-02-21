"use client";
import { useState } from "react";

import { MENUS, MenusType } from "@/constants/menu";
import MenuItem from "./MenuItem";
import Button from "../commons/Button";
import useModal from "../modals/useModal";

/**
 * todo: 하위항목 펼치기/접기 애니메이션 추가할 것
 */

export default function Sidebar() {
  const [menus, setMenus] = useState<MenusType[]>(MENUS);

  const { openVulnerabilityDetail, openSecurityAlertDetail } = useModal();

  return (
    <div
      data-testid="side-bar"
      className="w-[250px] h-full bg-sidebar text-white"
    >
      <div className="w-full h-full bg-sidebar-pattern flex flex-col items-center p-5">
        <div className="w-full text-2xl text-center pb-10">Z-ONE 2.0</div>
        <div className="w-full flex flex-col items-center px-2">
          {menus &&
            menus.map((menu, idx) => {
              return <MenuItem menu={menu} key={idx} />;
            })}
          <ul className="flex flex-col gap-5 mt-10">
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
          </ul>
        </div>
      </div>
    </div>
  );
}
