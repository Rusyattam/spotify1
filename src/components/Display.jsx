import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assest/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  const album = albumsData[Number(albumId)];

  useEffect(() => {
    if (isAlbum && album) {
      displayRef.current.style.background = `linear-gradient(${album.bgColor}, black)`;
    } 
  }, [location.pathname]); 

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded text-black overflow-auto lg:w-[75%] lg:ml-0 dark:bg-white dark:text-white transition-colors duration-300"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
