import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
}

const defaultColor = '#632ac2';

export const TargetIcon: React.FC<IconProps> = ({ size = 24, color = defaultColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
  </svg>
);

export const MegaphoneIcon: React.FC<IconProps> = ({ size = 24, color = defaultColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 11v-1h12V4l3 4-3 4v-4H8zm0 2h12v1H8v-1zm0 3h12v1H8v-1z" fill={color}/>
    <path d="M3 13c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z" fill={color}/>
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ size = 24, color = defaultColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="2" width="18" height="20" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="20" r="1" fill={color}/>
  </svg>
);

export const BarChartIcon: React.FC<IconProps> = ({ size = 24, color = defaultColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="13" width="3" height="8" fill={color}/>
    <rect x="10" y="8" width="3" height="13" fill={color}/>
    <rect x="17" y="3" width="3" height="18" fill={color}/>
  </svg>
);

export const ChatBubbleIcon: React.FC<IconProps> = ({ size = 24, color = defaultColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 11c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7h-1.5c-1.5 1.5-3 2-4.5 2h-3l2-3H3c0 0 0-1 0-3z" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const CameraIcon: React.FC<IconProps> = ({ size = 24, color = defaultColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="17" cy="7" r="1" fill={color}/>
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ size = 24, color = defaultColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <path d="M2 12h20" stroke={color} strokeWidth="2"/>
    <path d="M12 2c-2.21 0-4 4.03-4 9s1.79 9 4 9 4-4.03 4-9-1.79-9-4-9z" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const GiftIcon: React.FC<IconProps> = ({ size = 24, color = defaultColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="7" y="2" width="10" height="5" rx="1" stroke={color} strokeWidth="2" fill="none"/>
    <line x1="12" y1="5" x2="12" y2="19" stroke={color} strokeWidth="2"/>
    <line x1="2" y1="9" x2="22" y2="9" stroke={color} strokeWidth="2"/>
  </svg>
);

// Helper function to get icon by emoji or name
export const getIconComponent = (iconName: string, size: number = 24, color?: string) => {
  const props = { size, color };
  
  switch (iconName) {
    case '🎯':
    case 'target':
      return TargetIcon(props);
    case '📣':
    case 'megaphone':
      return MegaphoneIcon(props);
    case '📱':
    case 'phone':
      return PhoneIcon(props);
    case '📊':
    case 'chart':
      return BarChartIcon(props);
    case '💬':
    case 'chat':
      return ChatBubbleIcon(props);
    case '📸':
    case 'camera':
      return CameraIcon(props);
    case '🌐':
    case 'globe':
      return GlobeIcon(props);
    case '🎁':
    case 'gift':
      return GiftIcon(props);
    default:
      return null;
  }
};
