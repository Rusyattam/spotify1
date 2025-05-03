import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assest/assets';
import { PlayerContext } from '../context/PlayerContext';
import { useTranslation } from 'react-i18next'; 

const DisplayAlbum = () => {
  const { t } = useTranslation(); 
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  if (!albumData) {
    return (
      <div className="p-10 text-center text-red-500 font-bold">
        {t('albumNotFound')}
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end px-4">
        <img className="w-48 rounded" src={albumData.image} alt={albumData.name} />
        <div className="flex flex-col">
          <p>{t('playlist')}</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-2 text-sm text-[#a7a7a7]">
            <img className="inline-block w-5 mr-1" src={assets.spotify_logo} alt="Spotify" />
            <b>Spotify</b> • 1,323,154 likes • <b>50 songs</b>, about 2 hr 30 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-4 text-[#a7a7a7]  text-sm font-semibold">
        <p><b className="mr-4">#</b>{t('title')}</p>
        <p>{t('album')}</p> 
        <p className="hidden sm:block">{t('dateAdded')}</p> 
        <img className="m-auto w-4" src={assets.clock_icon} alt="Duration" />
      </div>
      <hr className="border-[#2a2a2a]" />

      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 px-4 py-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-4 text-white">
            <span className="w-6 text-center">{index + 1}</span>
            <img className="w-10" src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 {t('daysAgo')}</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
