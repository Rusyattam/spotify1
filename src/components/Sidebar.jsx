import React from "react";
import { assets } from '../assest/assets';
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 hidden lg:flex text-white bg-[#121212] dark:bg-zinc-200 dark:text-black transition-colors duration-300">

      <div className="flex items-center justify-between px-4 py-2 mb-2">
        <h2 className="text-xl font-bold">{t("menu")}</h2>
      </div>

      <div className="h-[15%] rounded flex flex-col justify-around bg-[#121212] dark:bg-gray-300 transition-colors duration-300">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 py-2 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold">{t("home")}</p>
        </div>

        <div className="flex items-center gap-3 pl-8 py-2 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search" />
          <p className="font-bold">{t("search")}</p>
        </div>
      </div>

      <div className="h-[85%] rounded bg-[#121212] dark:bg-gray-100 transition-colors duration-300">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Library" />
            <p className="font-semibold">{t("yourLibrary")}</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow" />
            <img className="w-5" src={assets.plus_icon} alt="Add" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] dark:bg-gray-200 m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 transition-colors duration-300">
          <h1>{t("createPlaylistTitle")}</h1>
          <p className="font-light">{t("createPlaylistDesc")}</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:opacity-80 transition">
            {t("createPlaylistBtn")}
          </button>
        </div>

        <div className="p-4 bg-[#242424] dark:bg-gray-200 m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4 transition-colors duration-300">
          <h1>{t("findPodcastsTitle")}</h1>
          <p className="font-light">{t("findPodcastsDesc")}</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:opacity-80 transition">
            {t("findPodcastsBtn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
