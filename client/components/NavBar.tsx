'use client'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { openLoginForm, removeCredentials, selectAdmin } from "@/lib/features/adminSlice";
import AddQuestionModel from './AddQuestionModel';
import LoginModel from './LoginModel';


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const isAdmin = useSelector(selectAdmin);
  const dispatch = useDispatch();

  const handleAdminClick = () => {
    if (!isAdmin) {
      dispatch(openLoginForm());
    }
  };

  const handleLogout = () => {
    dispatch(removeCredentials());
  };

  const handleAddQuestion = () => {
    if (isAdmin) {
      setOpen(true);
    }
  };

  return (
    <>
      <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6 z-50">
        <nav className="flex items-center gap-2 text-lg font-semibold">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <span className="h-6 w-6">📚</span> 
            Ace Quiz
          </Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {isAdmin ? (
              <>
                <DropdownMenuItem onClick={handleAddQuestion}>Add Question</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuLabel onClick={handleAdminClick}>Admin</DropdownMenuLabel>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <AddQuestionModel open={open} setOpen={setOpen} />
      <LoginModel />
    </>
  );
}

export default NavBar