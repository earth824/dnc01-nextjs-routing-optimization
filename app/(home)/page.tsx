import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Home'
};

export default function Home() {
  return (
    <>
      {/* <Image
        src="/icon.png"
        alt="exmaple"
        width={100}
        height={100}
        quality={75}
      /> */}
      {/* <Image
        alt="teststets"
        width={100}
        height={200}
        src="https://images.pexels.com/photos/11703240/pexels-photo-11703240.jpeg?_gl=1*fpwv4k*_ga*MTU2MDc4MDE2Ny4xNzcwMDY0NzA3*_ga_8JE65Q40S6*czE3NzAzNjk3NzMkbzQkZzEkdDE3NzAzNjk3ODEkajUyJGwwJGgw"
      /> */}
      <div className="w-16 h-30 relative">
        <Image
          fill
          alt="teststets"
          src="https://images.pexels.com/photos/11703240/pexels-photo-11703240.jpeg?_gl=1*fpwv4k*_ga*MTU2MDc4MDE2Ny4xNzcwMDY0NzA3*_ga_8JE65Q40S6*czE3NzAzNjk3NzMkbzQkZzEkdDE3NzAzNjk3ODEkajUyJGwwJGgw"
        />
      </div>
    </>
  );
}
