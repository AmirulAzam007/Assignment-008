import React from 'react';
import { IoBookSharp, IoTimer } from 'react-icons/io5';
import { SiBoosty } from 'react-icons/si';

const LearningTips = () => {
    return (
        <div className=" mx-auto py-16 border border-transparent rounded-xl bg-blue-50">

  <div className='w-[95%] mx-auto'>
    <div className="text-center space-y-3 mb-12">
    <h1 className="text-4xl md:text-5xl font-bold">
      Learning Tips
    </h1>

    <p className="text-gray-500">
      Improve your productivity and learning experience with smart study habits.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="card bg-base-100 shadow-lg rounded-3xl">
      <div className="card-body">

        <h2 className="text-2xl font-bold flex items-center jus gap-2"><IoBookSharp />Study Techniques</h2>

        <p className="text-gray-500 text-sm">
          Learn smarter with effective learning methods and proven study strategies.
        </p>

        <ul className="mt-4 space-y-3 text-sm">

          <li>✔ Break lessons into focused sessions</li>
          <li>✔ Take notes while watching videos</li>
          <li>✔ Practice immediately after learning</li>
          <li>✔ Revise consistently to retain concepts</li>

        </ul>

      </div>
    </div>

    <div className="relative card bg-purple-500 shadow-xl rounded-3xl">

      <div className="card-body">
        <h2 className="text-2xl font-bold text-white flex items-center jus gap-2">
          <IoTimer /> Time Management
        </h2>

        <p className="text-sm text-purple-100">
          Stay productive and manage your learning efficiently.
        </p>

            <ul className="mt-4 space-y-3 text-sm text-white">

            <li>✔ Follow a daily study routine</li>
            <li>✔ Use the Pomodoro technique</li>
            <li>✔ Avoid multitasking during study</li>
            <li>✔ Set realistic weekly goals</li>

            </ul>

      </div>
    </div>

    <div className="card bg-base-100 shadow-lg rounded-3xl">
      <div className="card-body">

        <h2 className="text-2xl font-bold flex items-center jus gap-2">
          <SiBoosty /> Productivity Boost
        </h2>

        <p className="text-gray-500 text-sm">
          Build strong habits that improve consistency, focus, and long-term growth.
        </p>

        <ul className="mt-4 space-y-3 text-sm">

          <li>✔ Keep your study space distraction-free</li>
          <li>✔ Track progress regularly</li>
          <li>✔ Take short breaks between sessions</li>
          <li>✔ Stay consistent instead of cramming</li>

        </ul>

      </div>
    </div>

  </div>
  </div>

</div>
    );
};

export default LearningTips;