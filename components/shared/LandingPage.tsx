import React from "react";
import { TextGenerateEffect } from "../ui/text-gen-effects";
import Link from "next/link";
import { TypewriterEffect } from "../ui/typewriter-effects";
import { Button } from "../ui/button";

const title = [
  {
    text: "Welcome",
  },
  {
    text: "to",
  },
  {
    text: "EduHub",
    className: "text-blue-500 dark:text-blue-500 ",
  },
  {
    text: "Connect.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const subtitle = ` One stop solution to satisfy all your personal educational needs . This is a feature site , where you can calculate Cumulative Grade Point Average (CGPA) , Check your results and most importantly you can get the Latest Announcements from Anna University . `;

export default function LandingPage() {
  return (
    <section>
      <div className="max-w-5xl mx-auto flex items-center justify-between min-h-[60vh]">
        <div className="space-y-10">
          <TypewriterEffect className="text-center mt-10" words={title} />
          <TextGenerateEffect className="text-justify" words={subtitle} />
        </div>
      </div>
      <div className=" text-center">
        <Button className="p-7 bg-sky-500 hover:bg-sky-300  shadow-xl">
          <Link
            href={"https://cfr.annauniv.edu/research/academics/latest-news.php"}
          >
            Latest Announcement
          </Link>
        </Button>
      </div>
    </section>
  );
}
