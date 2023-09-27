import { ethers } from "ethers";
import { contract } from "../utils/index";
import { useConnection } from "../context/connection";
import { abi } from "../utils/abi.js";
import { useEffect, useState } from "react";

const useCampaign = () => {
  const [crowdCampaign, setcrowdCampaign] = useState([]);
  const [campaignCount, setcampaignCount] = useState([]);
  const [get, setGet] = useState(false);
  const { isActive } = useConnection();
  const provider = new ethers.BrowserProvider(window.ethereum);
  const crowdContract = new ethers.Contract(contract, abi, provider);

  const getCampaignCount = async () => {
    // console.log(getIds);

    try {
      const getIds = await crowdContract.id();
      return ethers.formatUnits(getIds, 0);
    } catch (error) {
      console.log(error);
    }
  };
  const getCampaignData = async (res) => {
    console.log(res);
    try {
      const data = [];
      for (let i = 1; i < res[0]; i++) {
        const output = await crowdContract.crowd(res);
        data.push(output);
      }
      return data;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const allCampaigns = async () => {
    Promise.all([getCampaignCount()]).then((res) =>
      getCampaignData(res)
        .then((details) => {
          setcrowdCampaign(details);
          setGet(true);
          console.log(details[0]);
        })
        .catch((e) => {
          console.error("Error:", e);
        })
    );
  };

  allCampaigns();

  useEffect(() => {
    if (!isActive || !provider) {
      return;
    }
    if (!get) {
      allCampaigns();
    }
  }, [isActive, provider]);

  return allCampaigns;
};

export default useCampaign;
