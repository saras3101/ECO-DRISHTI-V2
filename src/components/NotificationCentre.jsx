import React from "react";
import { AlertTriangleIcon, TriangleAlertIcon } from "lucide-react";
import NotifAdmin from "@/others/NotifAdmin";

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
          <NotifAdmin />
          <NotifAdmin />
          <NotifAdmin />
          <NotifAdmin />
        </div>
      </div>
    </div>
  );
};

export default NotificationCentre;
