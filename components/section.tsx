import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PixelgradeSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - left on desktop, bottom on mobile (text first for better mobile reading) */}
          <div className="order-2 md:order-1 flex justify-center">
            <Image
              src="/rafiki.svg"
              alt="Team collaborating at Pixelgrade"
              width={700}
              height={700}
              className="w-full max-w-md lg:max-w-xl drop-shadow-lg"
            />
          </div>

          {/* Text - right on desktop, top on mobile */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              The unseen of spending three
              <br />
              years at Pixelgrade
            </h2>

            <p className="mt-8 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
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
