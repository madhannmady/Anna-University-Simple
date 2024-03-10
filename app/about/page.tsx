import { TracingBeam } from "@/components/ui/tracing-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const title = [
  {
    text: "Hi",
  },
  {
    text: ",",
  },
  {
    text: "I 'm",
  },
  {
    text: "Madhan",
    className: "text-blue-500 dark:text-blue-500 ",
  },
  {
    text: "Kumar.K",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const stacks = [
  {
    Title: "NextJS",
    Sub_title:
      "Where seamless server-side rendering meets effortless scalability, empowering developers with unparallel speed and versatility.",
    Link: "https://nextjs.org/",
  },
  {
    Title: "TailwindCSS",
    Sub_title:
      "Streamline styling with utility-first simplicity, unleashing the power of rapid design iteration like never before.",
    Link: "https://tailwindcss.com/",
  },
  {
    Title: "Shadcn UI",
    Sub_title:
      "  Beautifully designed components that you can copy and paste into your apps. Accessible.    Customizable. Open Source",
    Link: "https://ui.shadcn.com/",
  },
  {
    Title: "Aceternity UI",
    Sub_title:
      " Copy paste the most trending components and use them in your websites without having to worry about styling and animations .",
    Link: "https://ui.aceternity.com/",
  },
];

const socials = [
  {
    Icon: SiGithub,
    Link: "https://github.com/madhannmady",
  },
  {
    Icon: SiLinkedin,
    Link: "https://www.linkedin.com/in/madhan-kumar-k-/",
  },
  {
    Icon: SiGmail,
    Link: "mailto:madhankumark763@gmail.com",
  },
  {
    Icon: SiInstagram,
    Link: "https://www.instagram.com/madhann_mady4567/",
  },
];

export default function About() {
  return (
    <TracingBeam>
      <section>
        <h1 className="relative z-10 text-4xl md:text-5xl   text-center font-bold mt-9 p-2">
          About
        </h1>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[60vh] space-y-10  mb-16">
            <div className="space-y-9 pt-10 ml-10 mr-5">
              <TypewriterEffect
                words={title}
                className="max-w-lg text-2xl md:text-4xl"
              />
              <p className="max-w-3xl text-justify tracking-wide text-gray-500 font-medium sm:text-xl md:text-3xl lg:text-2xl text-muted-foreground">
                {
                  "On a boring sunny day ,God just sent his devotional rays (ha ha)... I was just kidding , all I had is a sudden idea , which hit my head like 'Why don't we just try to make a website which should emphasis my UI/UX Skills and also ,can be used by my fellow students of the University' . Since ,I had a little spark towards Front-end Development ,All I had is to surf the internet and learned some of the most important and recent tech stacks of the current trend to build this visually appealing website.This may be a good for a start I guess :) "
                }
              </p>
            </div>
            <div className="mx-10">
              <Image
                src={"/pic5.jpg"}
                width={300}
                height={300}
                alt="avatar"
                className="rounded-2xl mr-16 mt-28"
              />
            </div>
          </div>
          <div>
            <div className="text-center text-3xl md:text-5xl font-bold   ">
              <h1>Tech Stacks</h1>
            </div>
            <div className="my-[5rem] flex  flex-col items-center justify-center md:ml-60  text-center space-y-9 max-w-96 ml-10 mr-10">
              {stacks.map((stack, index) => {
                return (
                  <Link href={stack.Link} key={index}>
                    <h1 className="bg-sky-500 hover:bg-sky-700 p-4 rounded-xl font-medium shadow-xl">
                      {stack.Title}
                    </h1>
                    <p className="mt-5 text-justify text-muted-foreground">
                      {stack.Sub_title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="my-[5rem] flex-col justify-between  items-center space-x-9">
        <div className="text-center text-3xl md:text-5xl font-bold ">
          <h1>Socials</h1>
        </div>
        <div className="flex items-center justify-around mt-16 mb-24 md:mb-10">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link href={social.Link} key={index}>
                <Icon className="hover:text-sky-400 w-5 h-5 mr-10" />
              </Link>
            );
          })}
        </div>
        <div>
          <h1 className="text-center font-light tracking-wide text-slate-400 mr-12 mb-10 ">
            © Copyright 2025 Eduhub Connect by Madhan Kumar.K
          </h1>
        </div>
      </div>
    </TracingBeam>
  );
}
