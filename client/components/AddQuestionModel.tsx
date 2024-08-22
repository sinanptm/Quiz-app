import React, { SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const AddQuestionModel = ({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Quiz Question</DialogTitle>
          <DialogDescription>Create a new quiz question for this product</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="question">Question</Label>
            <Input id="question" placeholder="Enter your question here" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="product-specific">Product Specific</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="difficulty">Difficulty</Label>
              <Select>
                <SelectTrigger id="difficulty">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Options</Label>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="optionA" className="w-20">
                  Option A:
                </Label>
                <Input id="optionA" placeholder="Enter option A" />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="optionB" className="w-20">
                  Option B:
                </Label>
                <Input id="optionB" placeholder="Enter option B" />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="optionC" className="w-20">
                  Option C:
                </Label>
                <Input id="optionC" placeholder="Enter option C" />
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="correctAnswer">Correct Answer</Label>
            <Input id="correctAnswer" placeholder="Enter the correct answer (A, B, or C)" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Question</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuestionModel;
