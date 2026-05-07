import Banner from "@/components/Banner";
import Instructor from "@/components/Instructor";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      <Banner></Banner>
      <Instructor></Instructor>
      <LearningTips></LearningTips>
      <PopularCourses></PopularCourses>
      
    </div>
  );
}
