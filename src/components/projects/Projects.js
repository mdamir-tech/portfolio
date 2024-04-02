import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectFor} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Placement Management System"
          des="Designed and implemented a sophisticated Placement Management System using advanced Java programming within Eclipse IDE."
          src={projectOne}
        />
        <ProjectsCard
          title="Library Management System"
          des="Add a Designed a user-friendly interface for library staff and patrons, ensuring ease of use a efficient management of library resources little bit of body text."
          src={projectTwo}
        />
        <ProjectsCard
          title="Learning Management System"
          des="Integrated features such as quizzes, assignments, discussion forums, and grading systems to support diverse learning activities and assessments."
          src={projectFor}
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects