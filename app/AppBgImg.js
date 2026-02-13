import Image from 'next/image';

export default function AppBgImg() {
  return (
    <Image
      src="/swirly-background.png"
      alt="Background"
      fill
      style={{ objectFit: 'cover', zIndex: -1}}
      sizes="100vw"
    />
  );
}