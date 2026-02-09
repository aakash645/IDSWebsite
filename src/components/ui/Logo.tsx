import Image from 'next/image';
import LogoImage from '@/assets/logo/logo.png';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={LogoImage}
        alt="IDS SmartTech Logo"
        width={150}
        height={50}
        className="h-12 w-auto object-contain"
        priority
      />
    </div>
  );
};
