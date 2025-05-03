import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useTranslation } from "react-i18next";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  const { t } = useTranslation();

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer 
                 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] 
                 dark:bg-white dark:text-black dark:hover:bg-gray-100 
                 transition-colors duration-200"
    >
      <img className="rounded" src={image} alt={t("songImageAlt")} />
      <p className="font-bold mt-2 mb-1">{t(name)}</p>
      <p className="text-sm text-gray-400 dark:text-gray-600">{t(desc)}</p>
    </div>
  );
};

export default SongItem;
