"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-white via-blue-50/30 to-white border-b-2 py-12 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Lessons and insights
              <br />
              <span className="text-green-600">from 8 years</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <Button className="mt-10 bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-base md:text-lg font-medium rounded-md shadow-md transition">
              Register
            </Button>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/hero.svg"
              alt="Lessons and insights illustration"
              width={700}
              height={700}
              className="w-full max-w-md lg:max-w-xl drop-shadow-lg"
              priority
            />
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-16 space-x-3">
          <span className="block w-3 h-3 bg-gray-300 rounded-full" />
          <span className="block w-3 h-3 bg-green-500 rounded-full" />
          <span className="block w-3 h-3 bg-gray-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}
