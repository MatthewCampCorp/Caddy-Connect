import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { announcementsData } from "@/lib/data";
import { format } from "date-fns";

export function Announcements() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Broadcast Announcements</CardTitle>
        <CardDescription>
          Updates and important notices from the caddiemaster.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {announcementsData.length > 0 ? (
            announcementsData.map((item) => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger className="rounded-md px-4 hover:bg-muted/50 data-[state=open]:bg-muted/50">
                  <div className="flex w-full items-center justify-between">
                    <span className="font-medium text-left">{item.title}</span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap pl-4">
                      {format(new Date(item.date), "MMM d, yyyy")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="prose max-w-none px-4 pt-2 text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <p className="py-8 text-center text-muted-foreground">
              No announcements at this time.
            </p>
          )}
        </Accordion>
      </CardContent>
    </Card>
  );
}
