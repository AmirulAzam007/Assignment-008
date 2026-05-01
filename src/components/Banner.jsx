import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = () => {
    return (
       <div>
<div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-15">
    <img className="rounded-xl shadow-xl"
      src="/Assets/Banner.jpg"
       width="500"
       height="00"
    />
    <div>
        <button className="btn text-purple-700 bg-gray-200 rounded-3xl">New: AI-Powered Courses Available</button>
      <h1 className="text-7xl font-bold pt-2">Level Up Your Learning Journey</h1>
      <p className="py-6">
        Access expert-led courses, practical resources, and skill-building tools—all in one place. <br /> Start learning smarter and achieve your goals faster.
      </p>
      <div className="space-x-3">
        <button className="btn btn-primary rounded-3xl">Start your free trial <FaLongArrowAltRight /></button>
        <button className="btn border-primary text-primary rounded-3xl">Browse Courses</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;