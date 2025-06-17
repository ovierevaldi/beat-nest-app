import Image, { StaticImageData } from "next/image";

type PlatformButtonProp = {
  image: StaticImageData;
  title: string;
  altTitle?: string;
}

const PlatformButton = ({ image, title, altTitle } : PlatformButtonProp) => {
    const platformSvcWidth = 55;
    const platformSvcHeight = 55;

  return (
    <button 
      className='bg-black rounded-lg p-4 flex items-center min-w-72'>
      <Image 
        src={image} 
        width={platformSvcWidth}
        height={platformSvcHeight}
        alt={altTitle ?? 'Platform Button'}
      />
      <div 
        className="text-center w-full"
      >
        {title}
      </div>
    </button>
  )
}

export default PlatformButton