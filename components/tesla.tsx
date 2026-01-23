import { Link } from 'lucide-react';
import Image from 'next/image';

const logos = [
  '/ourclients/Logo-0.svg',
  '/ourclients/Logo-1.svg',
  '/ourclients/Logo-2.svg',
  '/ourclients/Logo-3.svg',
  '/ourclients/Logo-4.svg',
  '/ourclients/Logo-5.svg',
  '/ourclients/Logo-6.svg',
];

export default function Tesla() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <Image
              src="/tesla.svg"
              alt="Tesla logo"
              width={600}
              height={600}
              className="w-full max-w-sm lg:max-w-md rounded-3xl object-contain"
            />
          </div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget ornare risus vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate lorem vitae nisl viverra, nec sagittis orci egestas. Aliquam at ligula metus. Praesent felis eros, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>

            <div className="mt-10">
              <p className="text-xl font-semibold text-green-600">Tim Smith</p>
              <p className="mt-2 text-gray-500">British Dragon Boat Racing Association</p>
            </div>
          </div>
        </div>

        {/* Logos und Link */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Client logo ${index + 1}`}
              width={140}
              height={60}
              className="h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          ))}

          <Link
            href="#"
            className="text-lg font-medium text-green-600 hover:underline inline-flex items-center whitespace-nowrap"
          >
            Meet all customers
            <span className="ml-3 text-2xl">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}