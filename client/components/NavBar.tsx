import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleHelp, AlignJustify } from "lucide-react";
import { NavItems } from "@/constants";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-3 py-2 bg-cyan-950">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <CircleHelp className="h-6 w-6 text-white" />
        <span className="text-lg font-semibold text-white">Ace Quiz</span>
      </Link>
      <nav className="hidden md:flex gap-5">
        {NavItems.map((item) => (
          <Link
            key={item.text}
            href={item.link}
            className="text-base font-medium text-white hover:underline underline-offset-2 transition-colors duration-200"
            prefetch={false}
          >
            {item.text}
          </Link>
        ))}
      </nav>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full p-2">
            <AlignJustify className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="mt-2 p-4 w-48 bg-cyan-950 rounded-lg shadow-lg"
            sideOffset={8}
            align="end"
          >
            {NavItems.map((item) => (
              <DropdownMenu.Item asChild key={item.text}>
                <Link
                  href={item.link}
                  className="block text-base font-medium py-2 px-3 rounded transition-colors duration-200"
                  prefetch={false}
                >
                  {item.text}
                </Link>
              </DropdownMenu.Item>
            ))}
            <DropdownMenu.Separator className="my-2" />
            <DropdownMenu.Item asChild>
              <Link
                href="/logout"
                className="block text-base font-medium py-2 px-3 rounded text-red-600 hover:bg-cyan-800 transition-colors duration-200"
                prefetch={false}
              >
                Logout
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Arrow className="fill-white" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
