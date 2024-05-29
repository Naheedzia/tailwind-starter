import Image from "next/image";
import { Inter } from "next/font/google";
import styles from './page.module.css'
import Carwheel from "@/components/Wheel";
import CarHeadlight from "@/components/Headlight";
import CarSeat from "@/components/Seat";

const inter = Inter({ subsets: ['latin'] });

// export default function Home() {
//   return (
//     <div className="flex justify-center bg-sky-300">
//       <div className="mx-8 order-last self-center">
//         <Image src="/next.svg" alt="Next Logo" width={100} height={100} />
//       </div>
//       <div className="mx-4 self-center text-center">
//         <h1 className="text-6xl font-bold text-blue-700">Ziaullah Khan</h1>
//         <h2 className="text-3xl font-semibold text-blue-700">Learning Next.JS Tailwind CSS</h2>
//         <button className="my-4 px-4 py-2 border-2 bg-blue-700 border-blue-700 rounded-lg text-sky-300">Learn More</button>
//       </div>
//     </div>
//   );
// }
export default function Home() {
  return (
    <div className="flex justify-center mt-8">
      {/* <p className="text-xs">This is the one with 12px font size</p>
      <br />
      <p className="text-lg">This is the one with 18px font size</p>
      <br />
      <p className="text-2xl">This is the one with 24px font size</p> */}
      <div className="bg-blue-500 h-24 w-52 hover:scale-125"></div>
      <div>
        <Carwheel />
        <Carwheel />
        <Carwheel />
        <Carwheel />
      </div>
      <div>
        <CarHeadlight />
        <CarHeadlight />
      </div>
      <div>
        <CarSeat />
        <CarSeat />
        <CarSeat />
        <CarSeat />
        <CarSeat />
      </div>
    </div>
  );
}