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

      <div className=" flex flex-1 gap-4 mx-4 mb-4 ">
        <div className="w-2/3">
          <VideoFeeds />
        </div>

        <div className="w-1/3 flex flex-col ">
          <div className="">
            <div className="bg-white rounded-lg flex-shrink-0 border  shadow-md mb-2 ">
              <div className="p-1">
                <div className="flex p-1 justify-between items-center">
                  <div className="flex items-center ">
                    <MapIcon className="h-4 w-4" />
                    <p className=" text-l font-medium ">Location</p>
                  </div>
                  <div className="">
                    <button className=" mt-1 mb-1 mx-1  text-l items-center border rounded hover:bg-gray-200">
                      <div className="flex flex-row justify-center items-center px-2 py-1">
                        <MapPinnedIcon className="w-5 h-5 mr-2 " /> <p className="text-l">Google Maps</p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="bg-green-200 rounded justify-center aspect-video h-36 w-full"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg border flex-1 shadow-md ">
              <div className="p-1">
                <div className="flex px-3 pt-3 gap-1 items-center">
                  <AlertTriangleIcon className="text-red-500" />
                  <p className=" text-xl font-medium ">Alerts</p>
                </div>
                <div className="overflow-y-auto max-h-52 ">
                  <NotifAdmin />
                  <NotifAdmin />
                  <NotifAdmin />
                  <NotifAdmin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamFeedDashBoard;
