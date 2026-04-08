import React from 'react';
import { TargetIcon, MegaphoneIcon, PhoneIcon, BarChartIcon, ChatBubbleIcon, CameraIcon, GlobeIcon, GiftIcon } from './icons';

interface IconRendererProps {
  emoji: string;
  size?: number;
  color?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ emoji, size = 30, color }) => {
  switch (emoji) {
    case '🎯':
      return <TargetIcon size={size} color={color} />;
    case '📣':
      return <MegaphoneIcon size={size} color={color} />;
    case '📱':
      return <PhoneIcon size={size} color={color} />;
    case '📊':
      return <BarChartIcon size={size} color={color} />;
    case '💬':
      return <ChatBubbleIcon size={size} color={color} />;
    case '📸':
      return <CameraIcon size={size} color={color} />;
    case '🌐':
      return <GlobeIcon size={size} color={color} />;
    case '🎁':
      return <GiftIcon size={size} color={color} />;
    default:
      return <span>{emoji}</span>;
  }
};
