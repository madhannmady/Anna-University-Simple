import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { formSchema } from "@/schema"; // Ensure this points to your updated schema
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "../ui/toast";

interface SemFormProps {
  selectedSemester: string;
}

const SemForm: React.FC<SemFormProps> = ({ selectedSemester }) => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sem: {}, // Initialize sem as an empty object to match the schema
    },
  });

  // Updated handleSubmit to convert values to numbers, calculate average, and log the result
  const handleSubmit = (data: { sem: Record<string, string> }) => {
    // Assuming there are exactly two semester values to calculate the average
    const semValues = Object.values(data.sem);
    const numValues = semValues.map((value) => parseFloat(value));
    const average = numValues.reduce((a, b) => a + b, 0) / numValues.length;
    const roundedAverage = parseFloat(average.toFixed(2));
    console.log("Average:", roundedAverage);
    toast({
      variant: "default",
      title: `The CGPA for ${selectedSemester} semesters: ${roundedAverage} `,
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  const numberOfSemesters = parseInt(selectedSemester);

  return (
    <div className="text-center">
      <h2 className="flex items-center justify-center">
        Selected Semester: {selectedSemester}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex m-5 flex-col space-y-10 items-center justify-center">
            {Array.from({ length: numberOfSemesters }, (_, i) => (
              <div key={i} className="w-42 md:w-96 md:h-10 mx-2 ">
                <Controller
                  control={form.control}
                  name={`sem.${i}`} // Adjusted to match the expected type
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Value :{i + 1}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="enter the value"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-bold" />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            type="submit"
            className=" w-40 m-20 rounded-lg bg-sky-400 hover:bg-sky-600"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SemForm;
