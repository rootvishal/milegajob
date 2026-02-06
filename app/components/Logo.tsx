import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 hover:opacity-90 transition-opacity">
      <Image
        src="/logo2.png"
        alt="Milega Job Logo"
        width={200}
        height={67}
        className="h-20 w-auto"
        priority
      />
    </div>
  );
}
