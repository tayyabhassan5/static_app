import Link from "next/link";
import NavBar from "@/components/NavBar";
import AboutComponent from "@/components/about/AboutComponent";
export default function Home() {
  return (
    <>
<div className="bg-cover lg:bg-contain bg-center h-screen" style={{ backgroundImage: `url(/images/home/backgroundImageHomePage.jpg)` }}>
      <NavBar />
    </div>
    <AboutComponent />
    
    </>

    
  );
}
