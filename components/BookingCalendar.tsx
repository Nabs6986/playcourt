"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TimeSlot {
  time: string; // "06:00", "06:30", etc.
  startAt: Date;
  status: "available" | "booked" | "selected";
}

export interface BookingCalendarProps {
  courtId: string;
  courtName?: string;
  date?: Date;
  bookedSlots?: string[]; // ISO strings of booked start times
  onSlotSelect?: (slot: { courtId: string; startAt: Date; endAt: Date }) => void;
  className?: string;
}

// Generate time slots from 6 AM to 10 PM in 30-min increments
function generateTimeSlots(date: Date, bookedSlots: Set<string>, selectedTime: string | null): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const baseDate = new Date(date);
  baseDate.setHours(0, 0, 0, 0);

  for (let hour = 6; hour < 22; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const slotDate = new Date(baseDate);
      slotDate.setHours(hour, min, 0, 0);
      
      const timeStr = `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;
      const isoStr = slotDate.toISOString();
      
      let status: TimeSlot["status"] = "available";
      if (bookedSlots.has(isoStr)) {
        status = "booked";
      } else if (selectedTime === timeStr) {
        status = "selected";
      }

      slots.push({
        time: timeStr,
        startAt: slotDate,
        status,
      });
    }
  }

  return slots;
}

// Format time for display (e.g., "6:00 AM")
function formatTime(time: string): string {
  const [hourStr, minStr] = time.split(":");
  const hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${minStr} ${ampm}`;
}

// Get week days starting from a given date
function getWeekDays(startDate: Date): Date[] {
  const days: Date[] = [];
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  
  // Adjust to start of week (Sunday)
  const dayOfWeek = start.getDay();
  start.setDate(start.getDate() - dayOfWeek);
  
  for (let i = 0; i < 7; i++) {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    days.push(day);
  }
  
  return days;
}

// Format day header (e.g., "Sun 16")
function formatDayHeader(date: Date): { day: string; date: number; isToday: boolean } {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const compareDate = new Date(date);
  compareDate.setHours(0, 0, 0, 0);
  
  return {
    day: days[date.getDay()],
    date: date.getDate(),
    isToday: today.getTime() === compareDate.getTime(),
  };
}

export function BookingCalendar({
  courtId,
  courtName,
  date = new Date(),
  bookedSlots = [],
  onSlotSelect,
  className,
}: BookingCalendarProps) {
  const [weekStart, setWeekStart] = useState(() => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const [selectedSlot, setSelectedSlot] = useState<{ day: number; time: string } | null>(null);

  const bookedSet = useMemo(() => new Set(bookedSlots), [bookedSlots]);
  const weekDays = useMemo(() => getWeekDays(weekStart), [weekStart]);
  
  // Generate time labels (6 AM - 9:30 PM)
  const timeLabels = useMemo(() => {
    const labels: string[] = [];
    for (let hour = 6; hour < 22; hour++) {
      for (let min = 0; min < 60; min += 30) {
        labels.push(`${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`);
      }
    }
    return labels;
  }, []);

  // Navigate weeks
  const goToPreviousWeek = () => {
    const newStart = new Date(weekStart);
    newStart.setDate(newStart.getDate() - 7);
    setWeekStart(newStart);
    setSelectedSlot(null);
  };

  const goToNextWeek = () => {
    const newStart = new Date(weekStart);
    newStart.setDate(newStart.getDate() + 7);
    setWeekStart(newStart);
    setSelectedSlot(null);
  };

  const goToToday = () => {
    setWeekStart(new Date());
    setSelectedSlot(null);
  };

  // Handle slot click
  const handleSlotClick = (dayIndex: number, time: string) => {
    const slotDate = new Date(weekDays[dayIndex]);
    const [hour, min] = time.split(":").map(Number);
    slotDate.setHours(hour, min, 0, 0);
    
    // Check if slot is booked
    if (bookedSet.has(slotDate.toISOString())) {
      return; // Can't select booked slots
    }

    // Check if slot is in the past
    if (slotDate < new Date()) {
      return; // Can't book past slots
    }

    const newSelection = { day: dayIndex, time };
    const isAlreadySelected = 
      selectedSlot?.day === dayIndex && selectedSlot?.time === time;

    if (isAlreadySelected) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot(newSelection);
      
      if (onSlotSelect) {
        const endAt = new Date(slotDate);
        endAt.setMinutes(endAt.getMinutes() + 30);
        onSlotSelect({ courtId, startAt: slotDate, endAt });
      }
    }
  };

  // Get slot status for a specific day and time
  const getSlotStatus = (dayIndex: number, time: string): TimeSlot["status"] => {
    const slotDate = new Date(weekDays[dayIndex]);
    const [hour, min] = time.split(":").map(Number);
    slotDate.setHours(hour, min, 0, 0);
    
    if (bookedSet.has(slotDate.toISOString())) {
      return "booked";
    }
    
    if (selectedSlot?.day === dayIndex && selectedSlot?.time === time) {
      return "selected";
    }
    
    return "available";
  };

  // Check if slot is in the past
  const isSlotPast = (dayIndex: number, time: string): boolean => {
    const slotDate = new Date(weekDays[dayIndex]);
    const [hour, min] = time.split(":").map(Number);
    slotDate.setHours(hour, min, 0, 0);
    return slotDate < new Date();
  };

  // Format week range for header
  const weekRangeLabel = useMemo(() => {
    const start = weekDays[0];
    const end = weekDays[6];
    const formatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });
    return `${formatter.format(start)} – ${formatter.format(end)}, ${end.getFullYear()}`;
  }, [weekDays]);

  return (
    <div className={cn("rounded-xl border border-slate-200 bg-white shadow-sm", className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div>
          {courtName && (
            <p className="text-sm text-slate-500">{courtName}</p>
          )}
          <h3 className="font-semibold text-slate-900">{weekRangeLabel}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={goToToday}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
          >
            Today
          </button>
          <button
            onClick={goToPreviousWeek}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            aria-label="Previous week"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNextWeek}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            aria-label="Next week"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Day Headers */}
          <div className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-slate-200">
            <div className="p-2" /> {/* Empty corner */}
            {weekDays.map((day, idx) => {
              const { day: dayName, date: dayDate, isToday } = formatDayHeader(day);
              return (
                <div
                  key={idx}
                  className={cn(
                    "flex flex-col items-center justify-center border-l border-slate-100 py-3",
                    isToday && "bg-brand-50"
                  )}
                >
                  <span className={cn(
                    "text-xs font-medium uppercase",
                    isToday ? "text-brand-600" : "text-slate-500"
                  )}>
                    {dayName}
                  </span>
                  <span className={cn(
                    "mt-0.5 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold",
                    isToday ? "bg-brand-500 text-white" : "text-slate-900"
                  )}>
                    {dayDate}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Time Slots Grid */}
          <div className="max-h-[500px] overflow-y-auto">
            {timeLabels.map((time, timeIdx) => (
              <div
                key={time}
                className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-slate-50"
              >
                {/* Time Label */}
                <div className="flex items-center justify-end pr-3 py-1.5 text-xs text-slate-400">
                  {timeIdx % 2 === 0 ? formatTime(time) : ""}
                </div>

                {/* Slots for each day */}
                {weekDays.map((_, dayIdx) => {
                  const status = getSlotStatus(dayIdx, time);
                  const isPast = isSlotPast(dayIdx, time);
                  
                  return (
                    <button
                      key={`${dayIdx}-${time}`}
                      onClick={() => handleSlotClick(dayIdx, time)}
                      disabled={status === "booked" || isPast}
                      className={cn(
                        "h-7 border-l border-slate-100 transition-all duration-100",
                        status === "available" && !isPast && [
                          "bg-green-50 hover:bg-green-100",
                          "cursor-pointer"
                        ],
                        status === "booked" && [
                          "bg-slate-100 cursor-not-allowed",
                          "relative"
                        ],
                        status === "selected" && [
                          "bg-brand-500 hover:bg-brand-600",
                          "ring-2 ring-brand-500 ring-offset-1 z-10"
                        ],
                        isPast && status !== "booked" && [
                          "bg-slate-50 cursor-not-allowed opacity-50"
                        ]
                      )}
                      aria-label={`${formatTime(time)} on ${weekDays[dayIdx].toDateString()} - ${status}`}
                    >
                      {status === "booked" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[10px] font-medium text-slate-400">
                            ●
                          </span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 border-t border-slate-200 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-green-100 border border-green-200" />
          <span className="text-xs text-slate-600">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-slate-200" />
          <span className="text-xs text-slate-600">Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-brand-500" />
          <span className="text-xs text-slate-600">Selected</span>
        </div>
      </div>
    </div>
  );
}

export default BookingCalendar;
