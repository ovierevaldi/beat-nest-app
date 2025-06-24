import { StaticImageData } from "next/image"

// Import your platform logos
import spotifyLogo from '../public/platforms/spotify.png';
import ytMusicLogo from '../public/platforms/yt_music.png';
import deezerLogo from '../public/platforms/deezer.png';
import soundCloudLogo from '../public/platforms/SoundCloud-Logo.png';
import jooxLogo from '../public/platforms/jooxLogo.png';

export type MusicPlatformProp = {
  type: PlatformType  
  url: string
}

export type MusicData = {
  title: string;
  artistName: string;
  artworkUrl: StaticImageData;
  streamPlatforms: MusicPlatformProp[];
  backgroundColor?: string;
};


export type PlatformData = {
  type: PlatformType
  title: string
  altTitle: string
  image: StaticImageData
}

export type PlatformType = 'Spotify' | 'Youtube Music' | 'Deezer' | 'JOOX' | 'Sound Cloud'

export const PlatformDataList: PlatformData[] = [
  {
    type: 'Spotify',
    image: spotifyLogo,
    title: 'Spotify',
    altTitle: 'Spotify Platform'
  },
  {
    type: 'Youtube Music',
    image: ytMusicLogo,
    title: 'Youtube Music',
    altTitle: 'Youtube Music Platform'
  },
  {
    type: 'Deezer',
    image: deezerLogo,
    title: 'Deezer',
    altTitle: 'Deezer Platform'
  },
  {
    type: 'JOOX',
    image: jooxLogo,
    title: 'JOOX',
    altTitle: 'JOOX Platform'
  },
  {
    type: 'Sound Cloud',
    image: soundCloudLogo,
    title: 'Sound Cloud',
    altTitle: 'Sound Cloud Platform'
  }
];