import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const InstagramLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size }) => {
  const style = size ? { width: size, height: size } : undefined;
  const rawId = React.useId ? React.useId() : 'ig-grad';
  const gradId = `ig-${rawId.replace(/:/g, '')}`;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={gradId} cx="30%" cy="107%" r="135%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradId})`} />
      <path
        d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 15.2C10.2327 15.2 8.8 13.7673 8.8 12C8.8 10.2327 10.2327 8.8 12 8.8C13.7673 8.8 15.2 10.2327 15.2 12C15.2 13.7673 13.7673 15.2 12 15.2Z"
        fill="white"
      />
      <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
    </svg>
  );
};

export const FacebookLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size }) => {
  const style = size ? { width: size, height: size } : undefined;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#1877F2" />
      <path
        d="M14 13.5L14.5 9.5H11V7.5C11 6.47 11.3 5.8 12.8 5.8H14.5V2.2C14.2 2.16 13.2 2 12 2C9.4 2 7.6 3.6 7.6 6.5V9.5H4V13.5H7.6V22H11V13.5H14Z"
        fill="white"
      />
    </svg>
  );
};

export const TikTokLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size }) => {
  const style = size ? { width: size, height: size } : undefined;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="6" fill="#010101" />
      {/* Cyan offset shadow */}
      <path
        d="M16.1 7.2C15.1 6.3 14.5 5 14.5 3.5H11.8V15.2C11.8 16.7 10.5 18 8.9 18C7.3 18 6 16.7 6 15.2C6 13.6 7.3 12.3 8.9 12.3C9.3 12.3 9.7 12.4 10 12.6V9.8C9.6 9.7 9.3 9.6 8.9 9.6C5.8 9.6 3.3 12.1 3.3 15.2C3.3 18.3 5.8 20.8 8.9 20.8C12 20.8 14.5 18.3 14.5 15.2V9.1C15.8 10 17.3 10.5 19 10.5V7.8C17.9 7.8 16.9 7.6 16.1 7.2Z"
        fill="#25F4EE"
        transform="translate(-0.6, -0.6)"
      />
      {/* Magenta offset shadow */}
      <path
        d="M16.1 7.2C15.1 6.3 14.5 5 14.5 3.5H11.8V15.2C11.8 16.7 10.5 18 8.9 18C7.3 18 6 16.7 6 15.2C6 13.6 7.3 12.3 8.9 12.3C9.3 12.3 9.7 12.4 10 12.6V9.8C9.6 9.7 9.3 9.6 8.9 9.6C5.8 9.6 3.3 12.1 3.3 15.2C3.3 18.3 5.8 20.8 8.9 20.8C12 20.8 14.5 18.3 14.5 15.2V9.1C15.8 10 17.3 10.5 19 10.5V7.8C17.9 7.8 16.9 7.6 16.1 7.2Z"
        fill="#FE2C55"
        transform="translate(0.6, 0.6)"
      />
      {/* Primary white path */}
      <path
        d="M16.1 7.2C15.1 6.3 14.5 5 14.5 3.5H11.8V15.2C11.8 16.7 10.5 18 8.9 18C7.3 18 6 16.7 6 15.2C6 13.6 7.3 12.3 8.9 12.3C9.3 12.3 9.7 12.4 10 12.6V9.8C9.6 9.7 9.3 9.6 8.9 9.6C5.8 9.6 3.3 12.1 3.3 15.2C3.3 18.3 5.8 20.8 8.9 20.8C12 20.8 14.5 18.3 14.5 15.2V9.1C15.8 10 17.3 10.5 19 10.5V7.8C17.9 7.8 16.9 7.6 16.1 7.2Z"
        fill="white"
      />
    </svg>
  );
};

export const WhatsAppLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size }) => {
  const style = size ? { width: size, height: size } : undefined;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#25D366" />
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"
        fill="white"
      />
    </svg>
  );
};
