"use client";
import Sidebar from "./Sidebar";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-y-scroll scrollbar-hide">
        <main className="flex-1 bg-background pt-[120px] px-[85px]">
          {children}
        </main>
      </div>
    </div>
  );
}
