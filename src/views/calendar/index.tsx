import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { CalendarDateRangePicker } from "@/components/date-range-picker";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { fetchAllCalendar } from "@/store/actions/calendar.actions";
import { AppDispatch, RootState } from "@/store/store";
import { CreateEventForm } from "@/views/calendar/components/create-event-form";

import { calendarColumns } from "./components/event-data-table/data-table-columns";
import { CalendarDataTable } from "./components/event-data-table/event-data-table";



export const Calendars = () => {
  const dispatch = useDispatch<AppDispatch>();

  const calendars = useSelector(
    (state: RootState) => state.calendars.calendars,
  );

  useEffect(() => {
    dispatch(fetchAllCalendar());
    // dispatch(fetchAllEvent());
  }, [dispatch]);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <PageHeader title="Calendar">
        <CalendarDateRangePicker />
        {/* Active carts all dates */}
        {/* Close carts date filtered */}
        {/* Show detail for a close carts */}
        <Button variant="outline">Today</Button>
        <Dialog modal={true}>
          <DialogTrigger asChild>
            <Button variant="outline">New event</Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[800px]"
            onInteractOutside={(e) => {
              e.preventDefault();
            }}
          >
            <DialogHeader>
              <DialogTitle>Event</DialogTitle>
              <DialogDescription>
                Make changes to your cart here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <CreateEventForm />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PageHeader>
      <CalendarDataTable data={calendars} columns={calendarColumns} />
    </div>
  );
};
