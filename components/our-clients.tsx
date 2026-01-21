"use client";

import Image from "next/image";

const logos = [
  "/ourclients/Logo-0.svg",
  "/ourclients/Logo-1.svg",
  "/ourclients/Logo-2.svg",
  "/ourclients/Logo-3.svg",
  "/ourclients/Logo-4.svg",
  "/ourclients/Logo-5.svg",
  "/ourclients/Logo-6.svg",
];

export default function OurClients() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Clients
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We have been working with some Fortune 500+ clients
          </p>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {logos.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Client logo ${index + 1}`}
                width={160}
                height={80}
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                priority={false}
              />
            ))}
          </div>
        </div>
      </div>
      {/* ab kya hi karu jal ye kya hai ab */}
    </section>
  );
}
