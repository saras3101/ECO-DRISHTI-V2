import React from "react";
import {
  Camera,
  RefreshCw,
  ArrowBigLeftDashIcon,
  MapIcon,
  MapPinnedIcon,
  AlertTriangleIcon,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'


const NotificationDashBoard = () => {

  const navigate = useNavigate();

  const logOUTFN = () =>{
    navigate('/login/admin-dashboard')
  }

  return (
    <div className="h-full">
      <div className=" bg-card ">
        <div className="flex justify-between items-center mt-4 mx-6 mb-4">
          <div className="flex items-center gap-3">
            <Camera className="h-8 w-8  " />
            <div className="flex-col">
              <h3 className="">ECO-DRISHTI</h3>
              <h1 className="items-center text-[1.3em] font-semibold leading-none ">
                ALERT DASHBOARD
              </h1>
            </div>
          </div>

          <div className="items-center flex ">
            <button className=" h-10 w-28 mt-3 mb-3 mx-1  text-l items-center border rounded hover:bg-gray-200">
              <div className="flex flex-row justify-center items-center ">
                <RefreshCw className="w-4 h-4 mr-2 " /> Refresh
              </div>
            </button>
            <button  onClick={logOUTFN} className=" h-10 w-28 mt-3 mb-3 mx-1  text-l items-center border rounded hover:bg-gray-200">
              <div className="flex flex-row justify-center items-center ">
                <ArrowBigLeftDashIcon className="w-5 h-5 mr-2 " /> Back
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="w-2/3 gap-2 m-2 flex flex-col">
          <div className=" w-full  flex-1">
            <div className="bg-white  border shadow p-1 ">
              <div className="bg-gray-300 h-80  flex-shrink-0 aspect-rectangle "></div>
            </div>
          </div>
          <div className=" w-full  flex-1">
            <div className="bg-white rounded border h-24 shadow flex flex-row justify-between items-center p-4 ">
              <div className="flex flex-row gap-3 items-center ">
                <div>
                  <Camera className="text-gray-400"/>
                </div>
                <div>
                  <h1 className="font-semibold">Main Street Avenue</h1>
                  <p>CAM ID: 234987</p>
                </div>
              </div>
              <div>
                <div className="m-2">
                  <p className="bg-gray-300 font-semibold rounded-full py-1 px-3 text-sm justify-center ">
                    Offline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 m-2">
          <div>
            <div className="bg-white rounded flex-shrink-0 border  shadow mb-2 ">
              <div className="p-1">
                <div className="flex px-0 justify-between items-center">
                  <div className="flex items-center px-1 gap-1">
                    <MapIcon className="h-4 w-4" />
                    <p className=" text-l font-medium ">Location</p>
                  </div>
                  <div className="">
                    <button className=" mt-0 mb-1 mx-0 p-0.5 items-center border rounded hover:bg-gray-200">
                      <div className="flex flex-row justify-center items-center p-1 ">
                        <MapPinnedIcon className="w-4 h-4 mr-1 " /> <p className="text-l ">Google Maps</p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="bg-green-200 rounded justify-center aspect-video h-36 w-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded flex-shrink-0 border border-red-300 ">
            <div className="p-3">
                <div className="flex flex-row gap-2">
                    <AlertTriangleIcon className="text-red-400"/>
                    <p className="font-semibold pb-3">Alert Information</p>
                </div>
                <p>Confidence: 78%</p>
                <p>smthing</p>
                <p>smthing</p>
                <p>smthing</p>
                <p>smthing</p>
                <p>smthing</p>
                <p>smthing</p>            
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDashBoard;
