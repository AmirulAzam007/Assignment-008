import Banner from "@/components/Banner";
import Instructor from "@/components/Instructor";
import LearningTips from "@/components/LearningTips";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      <Banner></Banner>
      <Instructor></Instructor>
      <LearningTips></LearningTips>
      
    </div>
  );
}
