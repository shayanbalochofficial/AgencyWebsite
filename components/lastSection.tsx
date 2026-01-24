import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function LastSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            Caring is the new marketing
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who&apos;s joining the
            community, read about how our community are increasing their
            membership income and lot&apos;s more.
          </p>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <Card className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-10 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                Creating Streamlined Safeguarding Processes with OneRen
              </h3>
              <Link
                href="#"
                className="mt-8 inline-flex items-center text-green-600 font-medium hover:underline"
              >
                Readmore
                <span className="ml-2 text-2xl">&rarr;</span>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-10 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h3>

              <Link
                href="#"
                className="mt-8 inline-flex items-center text-green-600 font-medium hover:underline"
              >
                Readmore
                <span className="ml-2 text-2xl">&rarr;</span>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-10 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                Revamping the Membership Model with Triathlon Australia
              </h3>

              <Link
                href="#"
                className="mt-8 inline-flex items-center text-green-600 font-medium hover:underline"
              >
                Readmore
                <span className="ml-2 text-2xl">&rarr;</span>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
