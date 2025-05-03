import React from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next'; 

const AlbumItem = ({ image, name, desc, id }) => {
  const { t } = useTranslation(); 
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className='min-w-[180px] p-2 px-3 rounded cursor-pointer 
                 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]
                 dark:bg-white dark:text-black dark:hover:bg-gray-100
                 transition-colors duration-200'
    >
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-sm text-gray-400 dark:text-gray-600'>
        {t(desc)}
      </p>
    </div>
  );
};

export default AlbumItem;
