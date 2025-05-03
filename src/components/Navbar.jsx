import React from "react";
import { assets } from "../assest/assets";
import { useNavigate } from "react-router";
import Darkmode from "../components/Darkmode.jsx";
import { useTranslation } from "react-i18next";
import Lbutton from "../Lbutton.jsx"
const Navbar = () => {
  const { t } = useTranslation(); 
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold px-4 py-2 dark:bg-white dark:text-black transition-colors duration-300">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt={t('back')}
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt={t('forward')}
          />
          <Darkmode />
          <Lbutton />
        </div>

        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer dark:bg-black dark:text-white">
            {t('explorePremium')}
          </p>
          <p className="bg-black text-white py-1 px-3 rounded-2xl cursor-pointer dark:bg-white dark:text-black">
            {t('installApp')}
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            {t('profile')}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 px-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer dark:bg-black dark:text-white">
          {t('all')}
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer dark:bg-white dark:text-black">
          {t('music')}
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer dark:bg-white dark:text-black">
          {t('podcasts')}
        </p>
      </div>
    </>
  );
};

export default Navbar;
