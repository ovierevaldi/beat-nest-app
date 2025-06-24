import { PlatformDataList, PlatformType } from "@/musicData";
import Image, { StaticImageData } from "next/image";

type PlatformButtonProp = {
  type: PlatformType;
  background?: string;
  color?: string;
};

type PlatformData = {
  title: string
  altTitle: string
  image: StaticImageData
}

const PlatformButton = ({ type, background, color } : PlatformButtonProp) => {
  const platformSvcWidth = 55;
  const platformSvcHeight = 55;

  const getSelectedData = (type: PlatformType): PlatformData => {
      return PlatformDataList.find(p => p.type === type)!;
  };

  const selectedData = getSelectedData(type);

  return (
    <button 
      className={`rounded-lg p-4 flex items-center min-w-72 hover:scale-110 duration-300`}
      style={{ color: color ?? 'white', backgroundColor : background ?? 'black'}}
    >
      <Image 
        src={selectedData.image} 
        width={platformSvcWidth}
        height={platformSvcHeight}
        alt={selectedData.altTitle ?? 'Platform Button'}
      />
      <div 
        className="text-center w-full"
      >
        {selectedData.title}
      </div>
    </button>
  )
}

export default PlatformButton