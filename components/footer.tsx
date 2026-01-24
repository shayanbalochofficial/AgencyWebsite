"use client";

import Image from "next/image";
import { Instagram, Dribbble, Twitter, Youtube } from "lucide-react";

const companyLinks = [
  { name: "About us", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact us", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Testimonials", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Image
                src="/Icon.png"
                alt="Nexcent logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="ml-3 text-2xl font-bold text-white">
                Nexcent
              </span>
            </div>

            <p className="mt-8 text-sm">
              Copyright © 2020 Nexcent ltd.
              <br />
              All rights reserved
            </p>

            <div className="mt-10 flex space-x-6">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-green-500 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="hover:text-green-500 transition"
              >
                <Dribbble className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-green-500 transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="hover:text-green-500 transition"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base hover:text-green-500 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
