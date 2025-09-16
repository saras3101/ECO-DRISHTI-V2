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
          <div className="bg-gray-100 border border-gray-400 rounded mt-3 flex flex-col gap-1 p-4">
            <div className="flex justify-between ">
              <div className="flex gap-2 items-center">
                <p className="bg-black rounded-full text-white px-2 py-1 text-xs font-medium">
                  Confidence: 70%
                </p>
                <p className="bg-white rounded-full border text-black px-2 py-1 text-xs font-medium">
                  Feed: feed-3
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <Clock className="text-gray-500 h-4 w-4" />
                <p className="text-gray-500 text-sm">17/09/2025</p>
                <p className="text-gray-500 text-sm">11:59 PM</p>
              </div>
            </div>
            <div className="flex mt-2 gap-1 items-center">
              <MapPin className="text-gray-500 h-4 w-4" />
              <p className="text-sm font-semibold">Main Street Avenue</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">
                Co-ordinates: 40.712800, -74.006000
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Camera className="text-gray-500 h-4  w-4" />
              <p className="text-gray-500 text-sm">No image Found</p>
            </div>
          </div>

          <div className="bg-red-100 border border-red-400 rounded mt-3 flex flex-col gap-1 p-4">
            <div className="flex justify-between ">
              <div className="flex gap-2 items-center">
                <p className="bg-red-600 rounded-full text-white px-2 py-1 text-xs font-medium">
                  Confidence: 83%
                </p>
                <p className="bg-white rounded-full border text-black px-2 py-1 text-xs font-medium">
                  Feed: feed-3
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <Clock className="text-gray-500 h-4 w-4" />
                <p className="text-gray-500 text-sm">17/09/2025</p>
                <p className="text-gray-500 text-sm">11:59 PM</p>
              </div>
            </div>
            <div className="flex mt-2 gap-1 items-center">
              <MapPin className="text-gray-500 h-4 w-4" />
              <p className="text-sm font-semibold">Main Street Avenue</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">
                Co-ordinates: 40.712800, -74.006000
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Camera className="text-gray-500 h-4  w-4" />
              <p className="text-gray-500 text-sm">No image Found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLogs;
