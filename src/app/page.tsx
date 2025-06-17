'use client'

import Image from 'next/image';
import coverArtwork from '../../public/artworks/lagu_1.png'

import PlatformButton from './components/PlatformButton';
import CloseButton from './components/CloseButton';
import { useState } from 'react';
import { MusicData } from '@/musicData';

export default function Home() {
  const artworkWidth = 270;
  const artworkHeight = 270;

  const [isMoreServiceExpanded, setIsMoreServiceExpanded] = useState(false);

  const toggleMoreService = () => {
    setIsMoreServiceExpanded((prev) => !prev);
  };

  const testMusicData : MusicData = {
    artistName: 'Ovie Revaldi',
    title: 'Belajar Menyendiri',
    artworkUrl: coverArtwork,
    streamPlatforms: [
      {
        type: 'Youtube Music',
        url: ''
      },
      {
        type: 'Spotify',
        url: ''
      },
      {
        type: 'JOOX',
        url: ''
      },
      {
        type: 'Deezer',
        url: ''
      },
      {
        type: 'Sound Cloud',
        url: ''
      },
    ]    
  }
  
  return (
    <div className='max-w-4xl bg-red-500 h-screen mx-auto flex flex-col justify-center items-center gap-y-12 relative'>
      <div>
        <Image
          className='hover:scale-110 duration-300'
          src={testMusicData.artworkUrl}
          width={artworkWidth}
          height={artworkHeight}
          alt='Song Artwork'
        />
      </div>

      <div className='text-center space-y-2'>
        <div
          className='text-4xl font-bold'
        >
          {testMusicData.title}
        </div>
        <div
          className='text-2xl'
        >
          {testMusicData.artistName}
        </div>
      </div>
      
      <div className='flex flex-col items-center gap-y-12 text-xl text-white'>
        <div 
          className='flex gap-12'
        >
          <PlatformButton 
            type='Spotify'
          />

          <PlatformButton 
            type='Youtube Music'
          />

        </div>
        <div>
          <button 
            onClick={toggleMoreService}
            className='bg-black rounded-lg p-4 flex items-center min-w-72'>
           <div 
              className="text-center w-full"
            >
              More Services
            </div>
          </button>
        </div>
      </div>

      <div 
        className={`bg-black/70 absolute w-full h-[90%] bottom-0 overflow-auto p-4 ${isMoreServiceExpanded ? '' : 'hidden'}`}
      >
        <div
          className='text-right'
        >
          <CloseButton 
            onClick={toggleMoreService}
            size={50}
          />
        </div>

        <div className='flex flex-col items-center gap-y-12 text-xl text-white'>
            <PlatformButton 
              type='Deezer'
              background='white'
              color='black'
            />

            <PlatformButton 
              type='JOOX'
              background='white'
              color='black'
            />

            <PlatformButton 
              type='Sound Cloud'
              background='white'
              color='black'
            />
            
        </div>
      </div>
    </div>
  );
}
