import { Button4 } from "./ui/repeat4/button4";
import {
  Dialog4,
  DialogClose4,
  DialogContent4,
  DialogDescription4,
  DialogFooter4,
  DialogHeader4,
  DialogTitle4,
  DialogTrigger4,
} from "./ui/repeat4/dialog4";

export function DialogExample4() {
  return (
    <Dialog4>
      <DialogTrigger4 asChild>
        <Button4>Open Dialog4</Button4>
      </DialogTrigger4>
      <DialogContent4 className="dark sm:max-w-sm bg-background text-foreground">
        <form>
          <DialogHeader4>
            <DialogTitle4>Edit profile</DialogTitle4>
            <DialogDescription4>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription4>
          </DialogHeader4>
          <DialogFooter4>
            <DialogClose4 asChild>
              <Button4 variant={"outline"}>Close</Button4>
            </DialogClose4>
            <Button4 type="submit">Save changes</Button4>
          </DialogFooter4>
        </form>
      </DialogContent4>
    </Dialog4>
  );
}
