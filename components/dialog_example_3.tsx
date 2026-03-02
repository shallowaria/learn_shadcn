"use client";

import { useState } from "react";
import { DialogClose } from "./ui/dialog";
import { Button3 } from "./ui/repeat3/button3";
import {
  Dialog3,
  DialogContent3,
  DialogDescription3,
  DialogFooter3,
  DialogHeader3,
  DialogTitle3,
  DialogTrigger3,
} from "./ui/repeat3/dialog3";

export function DialogExample3() {
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    console.log("Success");
    setOpen(!open);
  }
  return (
    <Dialog3 open={open} onOpenChange={setOpen}>
      <DialogTrigger3 asChild>
        <Button3 variant={"default"}>Open Dialog3</Button3>
      </DialogTrigger3>
      <DialogContent3 className="dark sm:max-w-sm bg-background text-foreground">
        <form onSubmit={handleSubmit}>
          <DialogHeader3>
            <DialogTitle3>Edit profile</DialogTitle3>
            <DialogDescription3>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription3>
          </DialogHeader3>
          <DialogFooter3>
            <DialogClose asChild>
              <Button3 variant={"outline"}>Close</Button3>
            </DialogClose>
            <Button3 type="submit">Save changes</Button3>
          </DialogFooter3>
        </form>
      </DialogContent3>
    </Dialog3>
  );
}
