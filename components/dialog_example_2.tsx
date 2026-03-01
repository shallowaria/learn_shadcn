"use client";

import { useState } from "react";
import {
  Dialog2,
  DialogClose2,
  DialogContent2,
  DialogDescription2,
  DialogFooter2,
  DialogHeader2,
  DialogTitle2,
  DialogTrigger2,
} from "./ui/repeat2/dialog2";
import { Button2 } from "./ui/repeat2/button2";

export function DialogExample2() {
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    console.log("Submit 成功");
    setOpen(!open);
  }

  return (
    <Dialog2 open={open} onOpenChange={setOpen}>
      <DialogTrigger2 asChild>
        <Button2 variant="default">Open Dialog2</Button2>
      </DialogTrigger2>
      <DialogContent2 className="sm:max-w-sm dark bg-background text-foreground">
        <form onSubmit={handleSubmit}>
          <DialogHeader2>
            <DialogTitle2>Edit Profile</DialogTitle2>
            <DialogDescription2>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription2>
          </DialogHeader2>
          <DialogFooter2>
            <DialogClose2 asChild>
              <Button2 variant={"outline"}>Cancel</Button2>
            </DialogClose2>
            <Button2 type="submit">Save Changes</Button2>
          </DialogFooter2>
        </form>
      </DialogContent2>
    </Dialog2>
  );
}
