import React from "react";
import useCampaign from "../hooks/usecampaign";
import Image from "../assets/C-f.jpg";

const ViewCampaigns = () => {
  const getCampaign = useCampaign();
  console.log(getCampaign);
  return (
    <div className="grid gap-7 grid-cols-3 max-w-[100%] mx-auto mt-8">
      {!!getCampaign &&
        getCampaign.map((item, index) => (
          <div
            key={index}
            className="border-2 border-blue-500 py-5 px-5 hover:bg-blue-500 hover:text-white w-[70%] mx-auto"
          >
            <div className="w-[90%] mx-auto">
              {/* <img src={Image} className="w-full" /> */}
            </div>
            <h1 className="text-3xl font-bold">
              Title: <span className="text-black-500 text-3xl">{item[0]}</span>
            </h1>
            {item[4]}
            <p className="text-2xl font-semibold">
              Owner: <span className="text-black-500 text-sm">{item[2]}</span>
            </p>
            <p>Funding Goal: {item[1].toString()} ETH</p>
            <p>Time: {new Date(item[3].toString() * 1000).toUTCString()}</p>
            <p>Active: {item[4] ? "Yes" : "No"}</p>
            <p>Funding Balance: {item[5].toString()} ETH</p>
          </div>
        ))}
    </div>
  );
};

export default ViewCampaigns;
