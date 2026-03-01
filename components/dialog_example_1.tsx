"use client";
import { useState } from "react";
import { DialogTitle } from "./ui/dialog";
import { Button1 } from "./ui/repeat1/button1";
import {
  Dialog1,
  DialogClose1,
  DialogContent1,
  DialogDescription1,
  DialogFooter1,
  DialogHeader1,
  DialogTrigger1,
} from "./ui/repeat1/dialog1";

export function DialogExample1() {
  const [open, setOpen] = useState(false);

  function handleSumbit(e: React.SubmitEvent) {
    e.preventDefault();

    console.log("Submit 成功");
    setOpen(false);
  }
  return (
    // onOpenChange: 改变open的状态
    <Dialog1 open={open} onOpenChange={setOpen}>
      <DialogTrigger1 asChild>
        <Button1 variant="default">Open Dialog1</Button1>
      </DialogTrigger1>
      <DialogContent1 className="dark sm:max-w-sm bg-background text-foreground">
        <form onSubmit={handleSumbit}>
          <DialogHeader1>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription1>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription1>
          </DialogHeader1>
          <DialogFooter1>
            <DialogClose1 asChild>
              <Button1 variant={"outline"}>Cancel</Button1>
            </DialogClose1>
            <Button1 type="submit">Save changes</Button1>
          </DialogFooter1>
        </form>
      </DialogContent1>
    </Dialog1>
  );
}
