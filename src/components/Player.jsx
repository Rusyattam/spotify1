import React, { useContext } from "react";
import { assets } from "../assest/assets";
import { PlayerContext } from "../context/PlayerContext";
import { useTranslation } from "react-i18next";
import { FaPlay } from "react-icons/fa";

const Player = () => {
  const { t } = useTranslation();
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return (
    <div className="flex justify-between items-center text-white px-4 dark:bg-zinc-300 dark:text-gray-900 transition-colors duration-300">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt={t("trackImage")} />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer dark:<FaPlay />"
            src={assets.shuffle_icon}
            alt={t("shuffle")}
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt={t("prev")}
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt={t("pause")}
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt={t("play")}
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt={t("next")}
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt={t("loop")}
          />
        </div>

        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full dark:bg-pink-500"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt={t("plays")} />
        <img className="w-4" src={assets.mic_icon} alt={t("mic")} />
        <img className="w-4" src={assets.queue_icon} alt={t("queue")} />
        <img className="w-4" src={assets.speaker_icon} alt={t("speaker")} />
        <img className="w-4" src={assets.volume_icon} alt={t("volume")} />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img
          className="w-4"
          src={assets.mini_player_icon}
          alt={t("miniPlayer")}
        />
        <img className="w-4" src={assets.zoom_icon} alt={t("zoom")} />
      </div>
    </div>
  );
};

export default Player;
