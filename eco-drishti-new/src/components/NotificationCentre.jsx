import React from "react";
import { AlertTriangleIcon, TriangleAlertIcon } from "lucide-react";
import NotifAdmin from "@/others/NotifAdmin";

const NotificationCentre = () => {
  return (
    <div className="border border-gray-300  mt-4 mb-4   mx-2 md:mx-4 rounded ">
      <div className="px-2 py-3">
        <div className="flex font-semibold items-center gap-3 mb-3 mx-3">
          <TriangleAlertIcon />
          <h5 className="text-l">Alert System</h5>
        </div>
        <div className="flex gap-2 mt-2 mx-3 flex-wrap">
          <p className="bg-gray-300 font-semibold rounded-full px-3 py-1 text-xs justify-center ">
            0 Active Alerts
          </p>
          <p className="px-3 py-1 text-xs font-semibold justify-center bg-gray-300 rounded-full ">
            Notifications: On
          </p>
        </div>
        {/* <div className='border border-gray-300 rounded-l  mt-3 h-auto'>
            <h2 className='p-4'>No Alert. System is monitoring feeds.</h2>
        </div> */}
        <div className="overflow-y-auto max-h-64 p-1 m-2 ">
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
