"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Service", href: "#" },
  { name: "Feature", href: "#" },
  { name: "Product", href: "#" },
  { name: "Testimonial", href: "#" },
  { name: "FAQ", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/Icon.png"
              alt="Nexcent logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="ml-3 text-2xl font-bold text-gray-900">
              Nexcent
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-sm font-medium rounded-md">
              Sign up
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center mb-10 mt-4">
                  <Image
                    src="/Icon.png"
                    alt="Nexcent logo"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                  <span className="ml-3 text-2xl font-bold text-gray-900">
                    Nexcent
                  </span>
                </div>

                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}

                  <div className="pt-6 border-t border-gray-200">
                    <SheetClose asChild>
                      <Link
                        href="#"
                        className="block text-lg font-medium text-gray-700 hover:text-green-600 mb-6 transition-colors"
                      >
                        Login
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-base font-medium">
                        Sign up
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
