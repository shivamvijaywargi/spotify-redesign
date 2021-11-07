// Next built-in feature related imports
import Image from 'next/image';

// Icon imports
import { FaMicrophoneAlt } from 'react-icons/fa';
import { RiCompassFill } from 'react-icons/ri';
import { HiClock, HiDotsHorizontal, HiHome, HiChartBar } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
      <Image
        src="https://rb.gy/xkacau"
        height={56}
        width={56}
        alt="Spotify Logo"
        objectFit="contain"
      />
      <div className="flex flex-col space-y-8">
        <HiHome className="sidebarIcon text-white opacity-[0.85] text-2xl" />
        <RiCompassFill className="sidebarIcon  text-2xl" />
        <FaMicrophoneAlt className="sidebarIcon ml-1" />
        <HiChartBar className="sidebarIcon text-2xl" />
        <HiClock className="sidebarIcon text-2xl" />
        <HiDotsHorizontal className="sidebarIcon text-2xl" />
      </div>
    </section>
  );
};

export default Sidebar;
