import { CalendarDays, ListChecks, Megaphone } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Header } from "@/components/header";
import { AvailabilityForm } from "@/components/availability-form";
import { ScheduleView } from "@/components/schedule-view";
import { Announcements } from "@/components/announcements";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Tabs defaultValue="availability" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-12">
            <TabsTrigger value="availability" className="text-sm">
              <CalendarDays className="mr-2 h-5 w-5" />
              Availability
            </TabsTrigger>
            <TabsTrigger value="schedule" className="text-sm">
              <ListChecks className="mr-2 h-5 w-5" />
              Schedule
            </TabsTrigger>
            <TabsTrigger value="announcements" className="text-sm">
              <Megaphone className="mr-2 h-5 w-5" />
              Announcements
            </TabsTrigger>
          </TabsList>
          <TabsContent value="availability" className="mt-6">
            <AvailabilityForm />
          </TabsContent>
          <TabsContent value="schedule" className="mt-6">
            <ScheduleView />
          </TabsContent>
          <TabsContent value="announcements" className="mt-6">
            <Announcements />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
