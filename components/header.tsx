"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
          {/* Logo */}
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

          {/* Desktop Navigation */}
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

          {/* Desktop Actions */}
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
        </div>
      </div>
    </nav>
  );
}
