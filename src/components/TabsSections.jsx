import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import VideoFeeds from './VideoFeeds'

const TabsSection = () => {
  return (
    <div>
      <Tabs className=" mt-4  m-2 md:mx-4 ">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="feeds">Live Feeds</TabsTrigger>
            <TabsTrigger value="events">Event Log</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="feeds" >
         <VideoFeeds />
      </TabsContent>

      <TabsContent value="events">
        {/* <VideoFeeds /> */}

      </TabsContent>

      <TabsContent value="analytics">
        {/* <VideoFeeds /> */}

      </TabsContent>

      </Tabs>

      

    </div>
  )
}

export default TabsSection
