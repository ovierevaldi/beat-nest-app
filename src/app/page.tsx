import Image from 'next/image';
import coverArtwork from '../../public/artworks/lagu_1.png'
import ytMusicLogo from '../../public/platforms/yt_music.png'
import spotifyLogo from '../../public/platforms/spotify.png';
import PlatformButton from './components/PlatformButton';

export default function Home() {
  const artworkWidth = 270;
  const artworkHeight = 270;
  
  return (
    <div className='max-w-4xl bg-red-500 h-screen mx-auto flex flex-col justify-center items-center gap-y-12'>
      <div>
        <Image 
          src={coverArtwork}
          width={artworkWidth}
          height={artworkHeight}
          alt='Song Artwork'
        />
      </div>

      <div className='text-center space-y-2'>
        <div
          className='text-4xl font-bold'
        >
          Judul Lagu
        </div>
        <div
          className='text-2xl'
        >
          Nama Artist
        </div>
      </div>
      
      <div className='flex flex-col items-center gap-y-12 text-xl text-white'>
        <div 
          className='flex gap-12'
        >
          <PlatformButton 
            image={ytMusicLogo}
            title='Youtube Music'
            altTitle='Youtube Music Platform'
          />

          <PlatformButton 
            image={spotifyLogo}
            title='Spotify'
            altTitle='Spotify Platform'
          />

        </div>
        <div>
          <button 
            className='bg-black rounded-lg p-4 flex items-center min-w-72'>
           <div 
              className="text-center w-full"
            >
              More Services
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
