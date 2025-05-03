import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assest/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 },
    });

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    };

    const playWithId = (id) => {
        setTrack(songsData[id]);
        setTimeout(() => {
            audioRef.current.play();
            setPlayStatus(true);
        }, 0);
    };

    const next = () => {
        if (track.id < songsData.length - 1) {
            setTrack(songsData[track.id + 1]);
            setTimeout(() => {
                audioRef.current.play();
                setPlayStatus(true);
            }, );
        }
    };

    const previous = () => {
        if (track.id > 0) {
            setTrack(songsData[track.id - 1]);
            setTimeout(() => {
                audioRef.current.play();
                setPlayStatus(true);
            }, 0);
        }
    };

const seekSong = async (e) => {
audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
}


    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => {
            if (!audio.duration) return;

            const progress = Math.floor((audio.currentTime / audio.duration) * 100);
            if (seekBar.current) {
                seekBar.current.style.width = `${progress}%`;
            }

            setTime({
                currentTime: {
                    second: Math.floor(audio.currentTime % 60),
                    minute: Math.floor(audio.currentTime / 60),
                },
                totalTime: {
                    second: Math.floor(audio.duration % 60),
                    minute: Math.floor(audio.duration / 60),
                },
            });
        };

        audio.ontimeupdate = updateTime;

        return () => {
            audio.ontimeupdate = null;
        };
    }, []);

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
