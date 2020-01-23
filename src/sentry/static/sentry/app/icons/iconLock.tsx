import React from 'react';
import {IconProps} from '../types/iconProps';
import theme from '../utils/theme';

export const IconLock: React.FC<IconProps> = ({
  color: providedColor = 'currentColor',
  size: providedSize = 'sm',
  ...other
}: IconProps) => {
  const color = providedColor;
  const size =
    typeof providedSize === 'string' ? theme.iconSizes[providedSize] : providedSize;

  return (
    <svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...other}>
      <path d="M4.5,7.94a.75.75,0,0,1-.75-.75V4.34a4.34,4.34,0,1,1,8.67,0,.75.75,0,0,1-1.5,0,2.84,2.84,0,1,0-5.67,0V7.19A.76.76,0,0,1,4.5,7.94Z" />
      <path d="M14.72,16H1.44a.76.76,0,0,1-.75-.75V7.19a.75.75,0,0,1,.75-.75H14.72a.75.75,0,0,1,.75.75v8.06A.76.76,0,0,1,14.72,16ZM2.19,14.5H14V7.94H2.19Z" />
      <path d="M8.08,12.94a.76.76,0,0,1-.75-.75V10.05a.75.75,0,0,1,1.5,0v2.14A.75.75,0,0,1,8.08,12.94Z" />
    </svg>
  );
};