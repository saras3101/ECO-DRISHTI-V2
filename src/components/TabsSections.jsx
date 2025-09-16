import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoFeeds from "./VideoFeeds";
import EventLogs from "./EventLogs";
import AnalyticsPart from "./AnalyticsPart";

const TabsSection = () => {
  return (
    <div>
      <Tabs defaultValue="feeds" className=" mt-4  m-2 md:mx-4 ">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="feeds">Live Feeds</TabsTrigger>
          <TabsTrigger value="events">Event Log</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="feeds" className="flex flex-row gap-3">
          <div className="w-1/2">
            <VideoFeeds />
          </div>
          <div className="w-1/2">
            <VideoFeeds />
          </div>
        </TabsContent>

        <TabsContent value="events">
          <EventLogs />


        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsPart />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsSection;
