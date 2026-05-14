"use client";
import { useState } from "react";
import PopularCard from "./PopularCard";

const SearchCourses = ({ courses }) => {

    const [search, setSearch] = useState("");

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>

            <input
                type="text"
              placeholder="Search courses..."
              className="input input-bordered w-full mb-6"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid grid-cols-4 gap-5 pb-10">

                {
                    filteredCourses.map(course => (
                      <PopularCard
                            key={course.id}
                         data={course}
                        />
                    ))
                }

            </div>

        </div>
    );
};

export default SearchCourses;