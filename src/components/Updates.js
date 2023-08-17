import React from "react";

const Updates = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-5">Updates</h2>
      <div className="h-2/4 w-full flex flex-col bg-white gap-4 px-7 py-7 rounded-xl">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <img src="./img1.png" className="w-12 h-12 rounded-full" />
            <div className="text-xs flex flex-col gap-2 w-48">
              <p>
                <span className="font-bold">Andrew Thomas</span> has ordered
                Apple smart watch 2500mh battery.
              </p>
              <span className="text-gray-500">30 minutes ago</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <img src="./img2.png" className="w-12 h-12 rounded-full" />
            <div className="text-xs flex flex-col gap-2 w-48">
              <p>
                <span className="font-bold">Andrew Thomas</span> has ordered
                Apple smart watch 2500mh battery.
              </p>
              <span className="">02 days ago</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <img src="./img3.jpg" className="w-12 h-12 rounded-full" />
            <div className="text-xs flex flex-col gap-2 w-48">
              <p>
                <span className="font-bold">Andrew Thomas</span> has ordered
                Apple smart watch 2500mh battery.
              </p>
              <span className="">30 minutes ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
