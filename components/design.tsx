import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Design() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <Image
              src="/pana.svg"
              alt="How to design your site footer illustration"
              width={700}
              height={700}
              className="w-full max-w-md lg:max-w-xl drop-shadow-lg"
            />
          </div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              How to design your site footer like we did
            </h2>

            <p className="mt-8 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisl.
              Praesent felis eros, finibus et nisi ac, hendrerit venenatis
              libero. Donec consectetur faucibus ipsum id gravida.
            </p>

            <Button className="mt-10 bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-base font-medium rounded-md shadow-md transition">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
