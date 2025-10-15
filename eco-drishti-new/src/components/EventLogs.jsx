import { Camera, Clock, Download, MapPin } from "lucide-react";
import React from "react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Notifs from "@/others/Notifs";



const EventLogs = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="bg-card shadow border rounded h-[510px] p-2">
      <div className="p-3 flex flex-col">
        <div className="justify-between flex mt-3 items-center">
          <div>
            <h1 className="text-lg font-semibold px-2">Event Log</h1>
          </div>
          <div>
            <button className="flex gap-2 border rounded px-3 py-1 items-center">
              <Download className="h-4 w-4" />
              <p>Export</p>
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-3 items-center mt-3">
            <div className="w-3/4">
              <input
                className="flex-1 border rounded h-11 p-2 w-full shadow-sm"
                placeholder="Search by Location..."
              />
            </div>
            <div className="flex w-1/4">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="h-11 rounded ">
                  <SelectValue placeholder="Filter by Confidence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="high">High Confidence</SelectItem>
                  <SelectItem value="med">Medium Confidence</SelectItem>
                  <SelectItem value="low">Low Confidence</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-gray-400">Showing 2 of 3</p>
        </div>

        <div>
          <Notifs />
          <Notifs />
        </div>
      </div>
    </div>
  );
};

export default EventLogs;
