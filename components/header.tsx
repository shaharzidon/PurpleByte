import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-purple-650 text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="/images/logo.svg"
              alt="PurpleScript Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold">PurpleScript</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/#services"
            className="text-sm font-medium hover:text-white/80"
          >
            Services
          </Link>
          <Link
            href="/#process"
            className="text-sm font-medium hover:text-white/80"
          >
            Process
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-medium hover:text-white/80"
          >
            Testimonials
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium hover:text-white/80"
          >
            About Us
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:text-white/80"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-white/80"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex border-white text-purple-700 hover:bg-white/20"
          >
            Contact Us
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-purple-650 text-white">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/#services"
                  className="text-lg font-medium hover:text-white/80"
                >
                  Services
                </Link>
                <Link
                  href="/#process"
                  className="text-lg font-medium hover:text-white/80"
                >
                  Process
                </Link>
                <Link
                  href="/#testimonials"
                  className="text-lg font-medium hover:text-white/80"
                >
                  Testimonials
                </Link>
                <Link
                  href="/#about"
                  className="text-lg font-medium hover:text-white/80"
                >
                  About Us
                </Link>
                <Link
                  href="/#contact"
                  className="text-lg font-medium hover:text-white/80"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium hover:text-white/80"
                >
                  Blog
                </Link>
                <Button className="mt-4 bg-white text-purple-700 hover:bg-purple-100">
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
