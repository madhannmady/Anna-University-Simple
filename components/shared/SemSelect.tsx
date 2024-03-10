"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SemForm from "./SemForm";
import { useState } from "react";

export function SemSelect() {
  const [selectedSemester, setSelectedSemester] = useState("");

  const handleSemesterChange = (value: React.SetStateAction<string>) => {
    setSelectedSemester(value);
  };
  return (
    <div className="flex flex-col items-center justify-center  md:max-w-5xl md:mx-auto">
      <div className=" mt-10 mb-10 ">
        <Select onValueChange={handleSemesterChange}>
          <SelectTrigger className="w-[300px] h-[10px] p-8 text-justify font-semibold border-solid border-2 border-sky-400">
            <SelectValue placeholder="No of Semesters completed :" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Semesters</SelectLabel>
              <SelectItem value="01">01</SelectItem>
              <SelectItem value="02">02</SelectItem>
              <SelectItem value="03">03</SelectItem>
              <SelectItem value="04">04</SelectItem>
              <SelectItem value="05">05</SelectItem>
              <SelectItem value="06">06</SelectItem>
              <SelectItem value="07">07</SelectItem>
              <SelectItem value="08">08</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <SemForm selectedSemester={selectedSemester} />
    </div>
  );
}
