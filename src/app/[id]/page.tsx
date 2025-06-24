'use client';

import { useParams } from 'next/navigation';
import getUserMusicDataById from '@/data/userData';
import MusicLayout from '../components/MusicLayout';

export default function Home() {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-white">Not found</h1>
      </div>
    );
  }

  const userMusicData = getUserMusicDataById(id.toString());

  return (
    userMusicData ? 
    <MusicLayout
      MusicLayoutParams={{
        musicData: userMusicData,
      }}
    />
    :
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-white">Not found</h1>
    </div>
  )
}
