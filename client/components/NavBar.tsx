import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
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
          <DropdownMenuLabel>Admin</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
