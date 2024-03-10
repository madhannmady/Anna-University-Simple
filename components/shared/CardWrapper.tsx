"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { formSchema } from "@/schema";
import { SemSelect } from "./SemSelect";

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

interface CardWrapperProps {
  numOfSem: number;
  children: React.ReactNode;
}

const CardWrapper = ({ numOfSem, children }: CardWrapperProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sem: {},
    },
  });
  return (
    <div>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center">
            {Array.from({ length: numOfSem }).map((_, index) => (
              <div key={index}>
                <h1>Hello</h1>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <SemSelect />
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardWrapper;
