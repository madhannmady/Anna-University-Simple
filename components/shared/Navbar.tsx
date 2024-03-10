import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  return (
    <div className="flex justify-between max-w-5xl mx-auto mt-5 pl-3 pr-3">
      <div className="flex items-center">
        <h1 className="font-bold text-3xl md:text-4xl">EH</h1>
      </div>
      <div className="flex items-center space-x-1">
        <Link
          className="font-bold text-base p-4 cursor-pointer hover:text-sky-400"
          href={"/cgpa"}
        >
          CGPA
        </Link>
        <Link
          className="font-bold text-base p-4 cursor-pointer hover:text-sky-400"
          href={"/results"}
        >
          Results
        </Link>

        <Link
          className="font-bold text-base p-4 cursor-pointer hover:text-sky-400"
          href={"/about"}
        >
          About
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};
