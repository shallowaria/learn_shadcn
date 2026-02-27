import { DialogDemo } from "@/components/dialog_demo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <Button variant={"outline"} size={"icon-lg"}>
        Test
      </Button>
      <DialogDemo />
    </div>
  );
}
