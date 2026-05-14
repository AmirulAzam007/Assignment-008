import PopularCard from "@/components/PopularCard";
import SearchCourses from "@/components/SearchCourses";


const allcoursespage = async () => {

     const res = await fetch('https://assignment-008-ten.vercel.app/data.json')

    const data = await res.json()

    



    return (
        <div>
            <h1 className="font-bold text-2xl m-4">All Courses</h1>

            <SearchCourses courses={data}></SearchCourses>

            

            {/* <div className='grid grid-cols-4 gap-5 pb-10'>
                {
                    data.map(data => <PopularCard key={data.id} data={data}></PopularCard> )
                }
            </div> */}
        </div>
    );
};

export default allcoursespage;