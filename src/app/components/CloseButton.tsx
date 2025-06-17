'use client'

import { IoMdCloseCircle } from "react-icons/io";

type CloseButtonProp = {
  size: number;
  color?: string;
  onClick?: () => void
}

const CloseButton = ({ size, color, onClick }: CloseButtonProp) => {
  return (
    <button
      className="hover:scale-110 duration-300"
      onClick={onClick}
    >
      <IoMdCloseCircle 
        size={size}
        color={color ?? 'grey'}
      />
    </button>
  )
}

export default CloseButton