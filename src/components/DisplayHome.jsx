import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assest/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { useTranslation } from "react-i18next";

const DisplayHome = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />

      <div className="mb-8 px-4 text-white  dark:text-black  transition-colors duration-300">
        <h1 className="my-5 font-bold text-2xl">{t("featuredCharts")}</h1>
        <div className="flex overflow-auto gap-4">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-8 px-4  dark:text-black transition-colors duration-300">
        <h1 className="my-5 font-bold text-2xl text-white dark:text-black">
          {t("todaysBiggestHits")}
        </h1>
        <div className="flex overflow-auto gap-4">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
