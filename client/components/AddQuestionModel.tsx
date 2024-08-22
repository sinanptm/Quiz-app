import React, { useState, useRef, SetStateAction } from "react";
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
import { useAddQuestionMutation } from "@/lib/features/questionsApiSlice";
import { useDispatch } from "react-redux";

const AddQuestionModel = ({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const questionRef = useRef<HTMLInputElement>(null);
  const optionARef = useRef<HTMLInputElement>(null);
  const optionBRef = useRef<HTMLInputElement>(null);
  const optionCRef = useRef<HTMLInputElement>(null);
  const correctAnswerRef = useRef<HTMLInputElement>(null);
  const [addQuestion] = useAddQuestionMutation();

  const handleCategoryChange = (value: string) => setCategory(value);
  const handleDifficultyChange = (value: string) => setDifficulty(value);

  const handleSubmit = async () => {
    const question = questionRef.current?.value?.trim();
    const optionA = optionARef.current?.value?.trim();
    const optionB = optionBRef.current?.value?.trim();
    const optionC = optionCRef.current?.value?.trim();
    const correctAnswer = correctAnswerRef.current?.value?.trim()?.toUpperCase();

    // Validation checks
    if (!question || !optionA || !optionB || !optionC || !correctAnswer || !category || !difficulty) {
      alert("All fields must be filled out.");
      return;
    }

    if (correctAnswer === optionA || correctAnswer === optionB || correctAnswer === optionC) {
      alert("Correct answer should not be in the options");
    }

   try {
    await addQuestion({
      question,
      category,
      difficulty,
      options:[optionA,optionB,optionC],
      correctAnswer
    });
    alert("Question Added Successfully");
   } catch (error) {
    console.log(error);
   }

    // dispatch(addQuestionModel());
  };

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
            <Input ref={questionRef} id="question" placeholder="Enter your question here" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={handleCategoryChange} value={category}>
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
              <Select onValueChange={handleDifficultyChange} value={difficulty}>
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
                <Input ref={optionARef} id="optionA" placeholder="Enter option A" />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="optionB" className="w-20">
                  Option B:
                </Label>
                <Input ref={optionBRef} id="optionB" placeholder="Enter option B" />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="optionC" className="w-20">
                  Option C:
                </Label>
                <Input ref={optionCRef} id="optionC" placeholder="Enter option C" />
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="correctAnswer">Correct Answer</Label>
            <Input ref={correctAnswerRef} id="correctAnswer" placeholder="Enter the correct answer (A, B, or C)" />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Add Question
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuestionModel;
