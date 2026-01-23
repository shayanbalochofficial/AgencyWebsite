import Navbar from "@/components/header";
import React from "react";
import Hero from "./../components/hero";
import OurClients from "./../components/our-clients";
import { Users, Building2, Bike } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import PixelgradeSection from "@/components/section";
import Section2 from "@/components/section2";
import Design from "@/components/design";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <br className="sm:hidden" />
      <OurClients />
      <br className="sm:hidden" />

      {/* Section: uhhmm Something called Manage  */}
      <section className="py-16 md:py-24 bg-white border-b-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Manage your entire community
              <br />
              in a single system
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Who is Nexcent suitable for?
            </p>
          </div>
          <div className="mt-2  grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* I am number 1 😉*/}
            <Card className="border-0 shadow-none bg-transparent text-center">
              <CardContent className="pt-8">
                <Users className="w-16 h-16 md:w-20 md:h-20 mx-auto text-green-600" />
                <CardTitle className="mt-8 text-2xl md:text-3xl font-bold text-gray-900">
                  Membership Organisations
                </CardTitle>
                <CardDescription className="mt-6 text-base md:text-lg text-gray-600 max-w-md mx-auto">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </CardDescription>
              </CardContent>
            </Card>

            {/* Doosra */}
            <Card className="border-0 shadow-none bg-transparent text-center">
              <CardContent className="pt-8">
                <Building2 className="w-16 h-16 md:w-20 md:h-20 mx-auto text-green-600" />
                <CardTitle className="mt-8 text-2xl md:text-3xl font-bold text-gray-900">
                  National Associations
                </CardTitle>
                <CardDescription className="mt-6 text-base md:text-lg text-gray-600 max-w-md mx-auto">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </CardDescription>
              </CardContent>
            </Card>

            {/* teesra */}
            <Card className="border-0 shadow-none bg-transparent text-center">
              <CardContent className="pt-8">
                <Bike className="w-16 h-16 md:w-20 md:h-20 mx-auto text-green-600" />
                <CardTitle className="mt-8 text-2xl md:text-3xl font-bold text-gray-900">
                  Clubs And Groups
                </CardTitle>
                <CardDescription className="mt-6 text-base md:text-lg text-gray-600 max-w-md mx-auto">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* section: Section */}
      <PixelgradeSection />
      <Section2 />
      <Design />
    </div>
  );
}

export default page;
