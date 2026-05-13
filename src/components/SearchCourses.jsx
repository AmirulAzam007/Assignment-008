"use client";
import React from 'react';
import { useState } from "react";

const SearchCourses = ({data}) => {
    
    const [search, setSearch] = useState("");

    const filteredCourses = data.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

    return (
        <div>
            <div>
      <input
        type="text"
        placeholder="Search courses..."
        className="input input-bordered w-full mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (<div className="grid md:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>)}
    </div>
        </div>
    );
};

export default SearchCourses;