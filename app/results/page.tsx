import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const title = [
  {
    text: "Check",
  },
  {
    text: "your",
  },
  {
    text: "Results",
    className: "text-blue-500 dark:text-blue-500 ",
  },
  {
    text: "at",
    className: "text-blue-500 dark:text-blue-500 ",
  },
  {
    text: "Ease. . . ",
    className: "text-blue-500 dark:text-blue-500 pt-4",
  },
];

export default function Results() {
  return (
    <div>
      <div>
        <h1 className="relative z-10 text-4xl md:text-5xl   text-center font-bold mt-9 p-2">
          Results
        </h1>
      </div>
      <div className="md:max-w-5xl md:mx-auto ml-10 mr-10">
        <div className="flex flex-col space-y-10 md:flex-row md:items-center md:justify-between mt-20">
          <div className="space-y-10">
            <TypewriterEffect
              words={title}
              className="max-w-2xl text-3xl md:text-4xl"
            />
            <p className="max-w-xl text-justify text-xl tracking-wide text-muted-foreground">
              It is always been a tedious process to find what is our exam
              results could be ? Sometimes ,the link to check the results could
              be a nerve wrecking process. Because , the links to access the
              Portal may or may not work... So,to help you all with this problem
              ,I have managed to get the official link to access the result
              portal. Now, the "problem statement" is solved successfully.
            </p>
          </div>
          <div>
            <Image
              src={"/annauniversity.jpg"}
              width={300}
              height={300}
              alt="avatar"
              className="rounded-2xl ml-2 mr10"
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto rounded-lg  flex justify-center  w-40 ">
        <Button className=" bg-sky-500 p-8 m-10 text-center font-black text-base hover:bg-slate-300">
          <Link href={"https://coe1.annauniv.edu/home"}>
            Check your results
          </Link>
        </Button>
      </div>
    </div>
  );
}
