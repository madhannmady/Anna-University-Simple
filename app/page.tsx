import LandingPage from "@/components/shared/LandingPage";
import { Navbar } from "@/components/shared/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";

import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <BackgroundBeams />
    </div>
  );
}
