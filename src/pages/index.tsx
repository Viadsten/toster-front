import { BaseLayout } from "@/layouts/BaseLayout";
import { useAppSelector } from "@/shared/store/hooks";
import { selectUser } from "@/slices/user/selector";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <BaseLayout>
      <div className="text-3xl font-bold underline">Hello World</div>
    </BaseLayout>
  );
}
