import { BaseLayout } from "@/layouts/BaseLayout";
import { useAppSelector } from "@/shared/store/hooks";
import { selectUser } from "@/slices/user/selector";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <BaseLayout>
      <div className="text-3xl font-bold underline">Home Page</div>
    </BaseLayout>
  );
}
