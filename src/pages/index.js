import Image from "next/image";
import localFont from "next/font/local";
import HomePage from "../components/ui/HomePage.jsx";
import Background from "@/components/common/Background.jsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="bg-[#FFF7ED] h-screen text-black">
      <Background/>
      <HomePage/>
    </div>
  );
}
