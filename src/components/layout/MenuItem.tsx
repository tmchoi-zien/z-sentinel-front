"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { MenusType } from "@/constants/menu";

interface MenuItemProps {
  menu: MenusType;
}

export default function MenuItem({ menu }: MenuItemProps) {
  const [showChildren, setShowChildren] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const onClickMenu = (menu: MenusType) => {
    if (menu.linkable) {
      router.push(menu.pathname);
    } else {
      setShowChildren(!showChildren);
    }
  };

  return (
    <div
      data-testid="menu-item"
      className={`flex flex-row gap-[13px] items-center w-full h-[54px] p-[12px] rounded-[10px] text-[18px] cursor-pointer
        ${menu.pathname === pathname ? "bg-gradient-to-r from-[rgba(120,86,255,0.5)] to-[rgba(120,86,255,0)]" : ""}`}
      onClick={() => onClickMenu(menu)}
    >
      {menu.icon && <menu.icon active={menu.pathname === pathname} />}
      {menu.title}
    </div>
  );
}
