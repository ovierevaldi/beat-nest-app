import { StaticImageData } from "next/image";
import { MusicPlatformProp } from "./musicData";
import userDataJSON from './userData.json';

import a1 from '../../public/artworks/1.png';

export type MusicData = {
  title: string;
  artistName: string;
  artworkUrl: string;
  streamPlatforms: MusicPlatformProp[];
  backgroundColor?: string;
};

const artworkMap: Record<string, StaticImageData> = {
};

const userData = userDataJSON as MusicData[];

const getUserMusicDataById = (id: string): MusicData | null => {
  const index = parseInt(id, 10) - 1;

  if (isNaN(index) || index < 0 || index >= userData.length) {
    return null;
  }

  return userData[index];
};

const getUserArtwork = (imageName: string): StaticImageData | string => {
  return artworkMap[imageName] ?? `/artworks/${imageName}`;
}


export { getUserArtwork };

export default getUserMusicDataById;
