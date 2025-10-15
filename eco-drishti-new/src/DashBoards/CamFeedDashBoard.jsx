import React from "react";
import Header from "@/components/Header";
import {
  RefreshCw,
  ArrowBigLeftDashIcon,
  Camera,
  AlertTriangleIcon,
  MapIcon,
  MapPinnedIcon,
} from "lucide-react";
import VideoFeeds from "@/components/VideoFeeds";
import NotifAdmin from "@/others/NotifAdmin";
import {useNavigate} from 'react-router-dom'

const CamFeedDashBoard = () => {
  const navigate = useNavigate();

  const logoutFN = () =>{
    navigate('/login/admin-dashboard')
  }




  return (
    <div className="h-screen flex flex-col ">
      <div className=" bg-card ">
        <div className="flex justify-between items-center mt-2 mx-6 mb-2">
          <div className="flex items-center gap-3">
            <Camera className="h-6 w-6  " />
            <div className="flex-col">
              <h3 className="text-sm">ECO-DRISHTI</h3>
              <h1 className="items-center text-lg font-semibold leading-none ">
                CAMERA DASHBOARD
              </h1>
            </div>
          </div>

          <div className="items-center flex ">
            <button className=" h-10 w-28 mt-3 mb-3 mx-1  text-l items-center border rounded hover:bg-gray-200">
              <div className="flex flex-row justify-center items-center p-0 ">
                <RefreshCw className="w-4 h-4 mr-2 " /><p className="text-sm">Refresh</p>
              </div>
            </button>
            <button onClick={logoutFN} className=" h-10 w-28 mt-3 mb-3 mx-1  text-l items-center border rounded hover:bg-gray-200">
              <div className="flex flex-row justify-center items-center ">
                <ArrowBigLeftDashIcon className="w-5 h-5 mr-1 " /> <p className="text-sm">Back</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className=" flex flex-1 gap-4 mx-4 mb-4 w-100% h-100%">
        <div className="w-4/6 h-100%">
          <VideoFeeds />
        </div>

        <div className="w-1/2 flex flex-col gap-4 h-full">
          <div className="bg-white rounded-lg flex-shrink-0 border shadow-md">
            <div className="p-2">
              <div className="flex p-1 justify-between items-center">
                <div className="flex items-center gap-2">
                  <MapIcon className="h-4 w-4" />
                  <p className="text-base font-medium">Location</p>
                </div>
                <button className="px-3 py-1.5 text-sm items-center border rounded hover:bg-gray-200">
                  <div className="flex flex-row justify-center items-center gap-2">
                    <MapPinnedIcon className="w-4 h-4" /> 
                    <span>Google Maps</span>
                  </div>
                </button>
              </div>
              <div className="bg-green-200 rounded mt-2 h-40 w-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg border shadow-md flex-1 flex flex-col overflow-hidden mb-2">
            <div className="p-2">
              <div className="flex px-2 pt-2 gap-2 items-center">
                <AlertTriangleIcon className="text-red-500 h-5 w-5" />
                <p className="text-base font-medium">Alerts</p>
              </div>
            </div>
            <div className="overflow-y-auto max-h-56 flex-1 px-2 pb-2">
              <NotifAdmin />
              <NotifAdmin />
              <NotifAdmin />
              <NotifAdmin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamFeedDashBoard;
