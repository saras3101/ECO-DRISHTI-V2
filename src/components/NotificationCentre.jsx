import React from "react";
import { AlertTriangleIcon, TriangleAlertIcon } from "lucide-react";

const NotificationCentre = () => {
  return (
    <div className="border border-gray-300  mt-4 mb-4   mx-2 md:mx-4 rounded ">
      <div className="p-3">
        <div className="flex font-semibold items-center gap-3 mb-3 mx-2">
          <TriangleAlertIcon />
          <h5 className="text-l">Alert System</h5>
        </div>
        <div className="flex gap-3 mt-2 flex-wrap">
          <p className="bg-gray-300 font-semibold rounded-full py-1 px-3 text-sm justify-center ">
            0 Active Alerts
          </p>
          <button className="py-1 px-3 text-sm justify-center bg-gray-300 rounded-full ">
            Notifications: On
          </button>
        </div>
        {/* <div className='border border-gray-300 rounded-l  mt-3 h-auto'>
            <h2 className='p-4'>No Alert. System is monitoring feeds.</h2>
        </div> */}
        <div className="overflow-y-auto max-h-64 p-1 m-3 ">
          <div className="border border-red-500 bg-red-100 mt-4 rounded h-auto flex justify-between">
            <div className="m-3 flex gap-1 ">
              <AlertTriangleIcon className="text-l px-1 py-1 text-red-500" />

              <div>
                <p className="font-semibold">Main Street Avenue</p>
                <div className="flex flex-row gap-1">
                  <p className="text-l">Confidence: </p>
                  <p className="text-l ">77%</p>
                </div>
                <div className="mt-1 mb-1 flex gap-2">
                  <p className="text-sm text-gray-400">17/09/2025</p>
                  <p className="text-sm text-gray-400">11:23 PM</p>
                </div>
              </div>
            </div>
            <div className=" m-3 flex flex-col">
              <p className="bg-red-500 rounded-full px-2 py- text-sm text-white text-center">
                New
              </p>
            </div>
          </div>
          <div className="border border-red-500 bg-red-100 mt-4 rounded h-auto flex justify-between">
            <div className="m-3 flex gap-1 ">
              <AlertTriangleIcon className="text-l px-1 py-1 text-red-500" />

              <div>
                <p className="font-semibold">Main Street Avenue</p>
                <div className="flex flex-row gap-1">
                  <p className="text-l">Confidence: </p>
                  <p className="text-l ">77%</p>
                </div>
                <div className="mt-1 mb-1 flex gap-2">
                  <p className="text-sm text-gray-400">17/09/2025</p>
                  <p className="text-sm text-gray-400">11:23 PM</p>
                </div>
              </div>
            </div>
            <div className=" m-3 flex flex-col">
              <p className="bg-red-500 rounded-full px-2 py- text-sm text-white text-center">
                New
              </p>
            </div>
          </div>
          <div className="border border-red-500 bg-red-100 mt-4 rounded h-auto flex justify-between">
            <div className="m-3 flex gap-1 ">
              <AlertTriangleIcon className="text-l px-1 py-1 text-red-500" />

              <div>
                <p className="font-semibold">Main Street Avenue</p>
                <div className="flex flex-row gap-1">
                  <p className="text-l">Confidence: </p>
                  <p className="text-l ">77%</p>
                </div>
                <div className="mt-1 mb-1 flex gap-2">
                  <p className="text-sm text-gray-400">17/09/2025</p>
                  <p className="text-sm text-gray-400">11:23 PM</p>
                </div>
              </div>
            </div>
            <div className=" m-3 flex flex-col">
              <p className="bg-red-500 rounded-full px-2 py- text-sm text-white text-center">
                New
              </p>
            </div>
          </div>
          <div className="border border-red-500 bg-red-100 mt-4 rounded h-auto flex justify-between">
            <div className="m-3 flex gap-1 ">
              <AlertTriangleIcon className="text-l px-1 py-1 text-red-500" />

              <div>
                <p className="font-semibold">Main Street Avenue</p>
                <div className="flex flex-row gap-1">
                  <p className="text-l">Confidence: </p>
                  <p className="text-l ">77%</p>
                </div>
                <div className="mt-1 mb-1 flex gap-2">
                  <p className="text-sm text-gray-400">17/09/2025</p>
                  <p className="text-sm text-gray-400">11:23 PM</p>
                </div>
              </div>
            </div>
            <div className=" m-3 flex flex-col">
              <p className="bg-red-500 rounded-full px-2 py- text-sm text-white text-center">
                New
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCentre;
