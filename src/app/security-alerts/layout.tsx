"use client";
import ContentLayout from "@/components/layout/ContentLayout";

export default function SecurityAlertsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ContentLayout>{children}</ContentLayout>;
}
