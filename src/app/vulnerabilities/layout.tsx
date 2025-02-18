"use client";
import ContentLayout from "@/components/layout/ContentLayout";

export default function VulnerabilitiesLogic({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ContentLayout>{children}</ContentLayout>;
}
