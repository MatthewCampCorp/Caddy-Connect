"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function AvailabilityForm() {
  const { toast } = useToast();
  const [selectedDates, setSelectedDates] = React.useState<Date[] | undefined>(
    []
  );
  const [availabilityType, setAvailabilityType] = React.useState("all-day");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDates || selectedDates.length === 0) {
      toast({
        variant: "destructive",
        title: "No Dates Selected",
        description: "Please select at least one day from the calendar.",
      });
      return;
    }

    toast({
      title: "Availability Submitted",
      description: `You have submitted your availability for ${selectedDates.length} day(s).`,
    });
    // Reset form state after submission
    setSelectedDates([]);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Submit Your Availability</CardTitle>
        <CardDescription>
          Select the days you are available to work. You can select multiple
          days.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <Calendar
              mode="multiple"
              selected={selectedDates}
              onSelect={setSelectedDates}
              className="rounded-md border"
              disabled={(date) =>
                date < new Date(new Date().setDate(new Date().getDate() - 1))
              }
            />
            <div className="w-full space-y-4 lg:w-auto">
              <h3 className="font-semibold text-card-foreground">
                Time Preference
              </h3>
              <RadioGroup
                value={availabilityType}
                onValueChange={setAvailabilityType}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all-day" id="all-day" />
                  <Label htmlFor="all-day">All Day</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="am" id="am" />
                  <Label htmlFor="am">AM Only</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pm" id="pm" />
                  <Label htmlFor="pm">PM Only</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <Button type="submit" variant="destructive" size="lg">
            Submit Availability
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
