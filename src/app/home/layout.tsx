import { Suspense } from "react";

import ContentLayout from "@/components/layout/ContentLayout";
import HomeSkeleton from "../../components/skeletons/HomeSkeleton";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContentLayout>
      <Suspense fallback={<HomeSkeleton />}>{children}</Suspense>
    </ContentLayout>
  );
}
