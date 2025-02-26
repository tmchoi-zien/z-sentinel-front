"use client";
import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";
import { capitalizeFirstLetter } from "@/utils/common";
import { ROUTE } from "@/constants/common";
import { MENUS } from "@/constants/menu";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const menu = MENUS.find((item) => item.pathname === pathname);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen px-[85px] overflow-y-scroll scrollbar-hide">
        <div className="min-h-[120px] text-3xl font-bold pt-[85px]">
          {menu && menu?.title !== "Home" && <>{menu.title}</>}
        </div>
        <main className="flex-1 mb-[50px]">{children}</main>
      </div>
    </div>
  );
}
