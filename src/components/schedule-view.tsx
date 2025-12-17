import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { scheduleData } from "@/lib/data";
import { format } from "date-fns";

export function ScheduleView() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Your Assigned Schedule</CardTitle>
        <CardDescription>
          Here are your upcoming work assignments from the caddiemaster.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Date</TableHead>
                <TableHead className="w-[120px]">Time</TableHead>
                <TableHead>Course</TableHead>
                <TableHead className="text-right">Assignment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.length > 0 ? (
                scheduleData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      {format(new Date(item.date), "EEE, MMM d")}
                    </TableCell>
                    <TableCell>{item.time}</TableCell>
                    <TableCell>{item.course}</TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={
                          item.assignment === "Forecaddie"
                            ? "default"
                            : item.assignment === "Single Bag"
                            ? "secondary"
                            : "outline"
                        }
                        className="capitalize"
                      >
                        {item.assignment}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="h-24 text-center text-muted-foreground"
                  >
                    You have no assignments at this time.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
