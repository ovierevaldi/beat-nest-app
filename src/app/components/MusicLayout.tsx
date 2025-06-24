
import Image from "next/image";
import React, { useState } from "react";
import PlatformButton from "./PlatformButton";
import { AnimatePresence, motion } from 'framer-motion';
import { getUserArtwork, MusicData } from "@/data/userData";
import { MusicPlatformProp } from "@/data/musicData";
import CloseButton from "./CloseButton";

type MusicLayoutParams = {
  musicData: MusicData;
}

const MusicLayout = ({ MusicLayoutParams } : { MusicLayoutParams: MusicLayoutParams }) => {

  const userMusicData = MusicLayoutParams.musicData;

  const artworkWidth = 270;
  const artworkHeight = 270;

  const [isMoreServiceExpanded, setIsMoreServiceExpanded] = useState(false);

  const toggleMoreService = () => {
    setIsMoreServiceExpanded((prev) => !prev);
  };

  const getPrimaryAndSecondaryPlatforms = (streamPlatformData: MusicPlatformProp[] ) => {
    const primaryPlatforms = streamPlatformData.slice(0, 2);
    const secondaryPlatforms = streamPlatformData.slice(2);

    return { primaryPlatforms, secondaryPlatforms };
  };

  const primaryPlatforms = getPrimaryAndSecondaryPlatforms(userMusicData.streamPlatforms).primaryPlatforms;
  const secondaryPlatforms = getPrimaryAndSecondaryPlatforms(userMusicData.streamPlatforms).secondaryPlatforms;
  return (
    <div
      className={`max-w-4xl h-screen mx-auto flex flex-col justify-center items-center gap-y-12 relative`}
      style={{ backgroundColor: userMusicData.backgroundColor ?? "#000" }}
    >
      <div>
        <Image
          className="hover:scale-110 duration-300"
          src={getUserArtwork(userMusicData.artworkUrl)} 
          width={artworkWidth}
          height={artworkHeight}
          alt="Song Artwork"
        />
      </div>

      <div className="text-center space-y-2">
        <div className="text-4xl font-bold">{userMusicData.title}</div>
        <div className="text-2xl">{userMusicData.artistName}</div>
      </div>

      <div className="flex flex-col items-center gap-y-12 text-xl text-white">
        <div className="flex gap-12">
          {primaryPlatforms.map((platform, index) => (
            <PlatformButton
              url={platform.url}
              key={index}
              type={platform.type}
              background="black"
              color="white"
            />
          ))}
        </div>
        {secondaryPlatforms.length > 0 && (
          <div>
            <button
              onClick={toggleMoreService}
              className="bg-black rounded-lg p-4 flex items-center min-w-72"
            >
              <div className="text-center w-full">More Services</div>
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isMoreServiceExpanded && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-black/70 absolute w-full h-[90%] bottom-0 overflow-auto p-4"
          >
            <div className="text-right">
              <CloseButton onClick={toggleMoreService} size={50} />
            </div>

            <div className="flex flex-col items-center gap-y-12 text-xl text-white">
              {secondaryPlatforms.map((platform, index) => (
                <PlatformButton
                  url={platform.url}
                  key={index}
                  type={platform.type}
                  background="white"
                  color="black"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicLayout;
