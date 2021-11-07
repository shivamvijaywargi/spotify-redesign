import { ThreeBounce } from 'better-react-spinkit';
import Image from 'next/image';

function Loader() {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col items-center pt-40 space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
            src="https://rb.gy/y9mwtb"
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
          />
        </span>
        <ThreeBounce size={23} color="#15883e" />
      </div>
    </div>
  );
}

export default Loader;
