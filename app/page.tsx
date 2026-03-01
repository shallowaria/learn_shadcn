import { DialogExample1 } from "@/components/dialog_example_1";
import { DialogExample2 } from "@/components/dialog_example_2";
import { DialogOrigin } from "@/components/dialog_origin";
import { Button } from "@/components/ui/button";
import { Button1 } from "@/components/ui/repeat1/button1";
import { Button2 } from "@/components/ui/repeat2/button2";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      {/* 第一行：按钮 */}
      <div className="flex gap-4">
        <Button variant="outline" size="icon-lg" className="overflow-hidden">
          Button
        </Button>
        <Button1 variant="destructive">Button1</Button1>
        <Button2 variant={"ghost"}>Button2</Button2>
      </div>

      {/* 第二行：Dialog */}
      <div className="flex flex-row gap-2">
        <DialogOrigin />
        <DialogExample1 />
        <DialogExample2 />
      </div>
    </div>
  );
}
