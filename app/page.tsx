import Navbar from "@/components/header";
import React from "react";
import Hero from "./../components/hero";
import OurClients from "./../components/our-clients";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <br className="sm:hidden" />
      <OurClients />
    </div>
  );
}

export default page;
