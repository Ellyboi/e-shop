'use client'

import { Icon } from "@mui/material";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string,
  disabled?: boolean,
  outline?: boolean,
  small?: boolean,
  custom?: string,
  icon?: IconType
  onClick: (e: React.MouseEvent<HTMLButtonElement>) =>
  void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,

}) => {
  return ( 
      <button 
      className={`
        disable = {disabled}
        disabled:opacity-70
        disabled:cursor-not-alloewed
        rounded-md
        hover:opacity-80
        transition
        w-full
        border-slate-700
        flex
        items-center
        justify-center
        gap-2
        ${outline? 'bg-white' : 'bg-slate-700'}
        $
      `}
      
      >
        {Icon && <Icon size={24}/>}
        {label}
      </button> );
}
 
export default Button;