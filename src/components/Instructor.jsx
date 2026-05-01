import { Card } from "@heroui/react";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";


const Instructor = () => {
    return (

       <div className="bg-gray-200">
         <h1 className="font-bold text-center text-5xl pt-5">Top Instructors</h1>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 place-items-center max-w-8xl px-40 mx-auto">
            
        <div className="card bg-base-100 w-full max-w-sm shadow-sm ">
        <figure>
            <div className="relative w-full aspect-square">
                 <Image
                    src="/Assets/FaisalBhai.jpg"
                    alt="Instructor Sarah Ahmed"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-2xl object-cover"
                    />
            </div>
        </figure>
        <div className="card-body space-y-1">
            <h2 className="card-title">Abu Nayim Faisal</h2>
            <div className="text-yellow-400 flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="text-gray-500">Passionate educator simplifying complex topics into easy, practical learning.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary w-full ">Explore more</button>
            </div>
        </div>
        </div>

        <div className="card bg-base-100 w-full shadow-sm max-w-sm ">
        <figure>

            <div className="relative w-full aspect-square">
                 <Image
                    src="/Assets/jhankarBhai.jpg"
                    alt="Instructor Sarah Ahmed"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-2xl object-cover"
                    />
            </div>
            
        </figure>
        <div className="card-body space-y-1">
            <h2 className="card-title">Jhankar Mahbub</h2>
            <div className="text-yellow-400 flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="text-gray-500">Industry professional sharing hands-on knowledge to accelerate your career.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary w-full ">Explore more</button>
            </div>
        </div>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <figure>
            <div className="relative w-full aspect-square">
                 <Image
                    src="/Assets/UtshoBhai.jpg"
                    alt="Instructor Sarah Ahmed"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-2xl object-cover"
                    />
            </div>
        </figure>
        <div className="card-body space-y-1">
            <h2 className="card-title">Ahashan Habib Utsho</h2>
            <div className="text-yellow-400 flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="text-gray-500">Experienced instructor helping students master real-world, job-ready skills.</p>
            
            <div className="card-actions justify-end">
            <button className="btn btn-primary w-full ">Explore more</button>
            </div>
        </div>
        </div>

        
            
        </div>
       </div>
    );
};

export default Instructor;



// <div className="border border-transparent shadow-xl flex flex-col mx-auto">
            //     <div className="relative w-full">
            //         <img className=" rounded-2xl object-cover border border-transparent" src="/Assets/FaisalBhai.jpg" fill alt="" />
            //     </div>
            //     <div>
            //         <h1 className="font-bold text-xl">Abu Nayim Faisal</h1>
            //         <h1 className="text-gray-400">Junior Instructor</h1>
            //     </div>
            //     <div className="text-orange-400 flex gap-2"><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            //     <button className="btn">Explore more</button>
            // </div>

            // <div className="border border-transparent shadow-xl flex flex-col mx-auto">
            //     <div className="relative w-full">
            //         <img className=" rounded-2xl object-cover border border-transparent" src="/Assets/jhankarBhai.jpg" fill alt="" />
            //     </div>
            //     <div>
            //         <h1 className="font-bold text-xl">Jhankar Mahbub</h1>
            //         <h1 className="text-gray-400">Senior Instructor</h1>
            //     </div>
            //     <div className="text-orange-400 flex gap-2"><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            //     <button className="btn">Explore more</button>
            // </div>

            // <div className="border border-transparent shadow-xl flex flex-col mx-auto p-4">
            //     <div className="relative w-full">
            //         <img className=" rounded-2xl object-cover border border-transparent" src="/Assets/UtshoBhai.jpg" fill alt="" />
            //     </div>
            //     <div>
            //         <h1 className="font-bold text-xl">Ahashan Habib Utsho</h1>
            //         <h1 className="text-gray-400">Junior Instructor</h1>
            //     </div>
            //     <div className="text-orange-400 flex gap-2"><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            //     <button className="btn">Explore more</button>
            // </div>