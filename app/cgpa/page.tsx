import { SemSelect } from "@/components/shared/SemSelect";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="relative z-10 text-4xl md:text-5xl   text-center font-bold mt-9 p-2">
          CGPA
        </h1>
        <h2 className="text-md md:text-3xl text-center font-medium m-6">
          CGPA Calculator
        </h2>
      </div>
      <div>
        <SemSelect />
      </div>
    </div>
  );
};

export default page;
