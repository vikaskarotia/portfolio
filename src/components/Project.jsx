import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons';

function Project() {
 
  const Projects = [

    {
      name: "E-commerce Site",
      image: "https://res.cloudinary.com/dvcwh1gaq/image/upload/v1685880211/Screen_Shot_2023-06-04_at_16.59.13_pixphk.png",
      gitlink:"https://github.com/sagar7170/clone-amazon",
      url:"https://647d90c965687c3ee86b27a2--merry-pika-5c91c5.netlify.app/",
      about:"The Amazon Clone using React. I have used Firebase for Authentication, Users can login/logout all users credentials saved on firebase. It has all basic features like cart , checkout , orders section . It also supports user signUp,Login,Logut and CRUD Operations "
    }
    ,

    {
      name: "Netflix-Clone",
      image: "https://res.cloudinary.com/dvcwh1gaq/image/upload/v1685880225/Screen_Shot_2023-06-04_at_17.09.07_nspp0o.png",
      gitlink:"https://github.com/sagar7170/Netflix-clone",
      url:"https://netflix-clone-e141d.web.app/",
      about:"The NETFLIX using React. All the movie and poster pulled out from TMDB API through Axios , Movies can play and pause , NETFLIX background image changed dynamically on every refresh"
    }
    ,
    {
      name: "Login/registration(MERN stack)",
      image: "https://res.cloudinary.com/dvcwh1gaq/image/upload/v1685880166/Screen_Shot_2023-06-04_at_17.10.58_nkipno.png",
      gitlink:"https://github.com/sagar7170/fullstach_app",
      url:"https://6460bf2a0a414872ddb9afd3--creative-cendol-6273ef.netlify.app/",
      about:"This project is fully responsive for mobile and desktop User can Login/Logout through JWT authentication and can upload their profile picture if User do not have account User can Register , all the User Data stored on MongoDB database User data can pull out dynamically from the database"
    }
    ,
    {
      name: "real-state",
      image: "https://res.cloudinary.com/dvcwh1gaq/image/upload/v1685880144/Screen_Shot_2023-06-04_at_17.20.31_yqi9no.png",
      gitlink:"https://github.com/notnishant/realstate",
      url:"https://sagar7170.github.io/real_state/",
      about:"It is a awesome responsive real estate website"
    }

  ]

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 space-y-10 '>
      <h1 className='uppercase absolute top-24  tracking-[20px] text-gray-500 text-2xl'>Projects</h1>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:mt-28 '>
        {Projects.map((project) => (
          <div className=' w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>  
            <a href={project.url}><motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='md:h-52 rounded-lg'
              src={project.image}
              alt="" /></a>

            <div className='space-y-2 px-0 md:px-10 max-w-6xl'>
              <div className='flex justify-center items-center'>
                <SocialIcon className='hover:scale-150 ' url={project.gitlink}
                  fgColor='gray'
                  bgColor='transparent' />
                <a href={project.url}><img className='w-8 h-8 mr-2 opacity-75 hover:scale-150 ' src="https://res.cloudinary.com/dvcwh1gaq/image/upload/v1685947559/link_owvsrd.png" alt="" /></a>
  
              </div>
              <h4 className='text-2xl font-semibold text-center'> <span className='underline decoration-[#F7AB0A]/50'>{project.name}</span>
                </h4>
              <p className=' text-center  md:px-10 max-w-7xl'>{project.about}</p>
            </div> 
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12'>
      </div>
     
    </div>
  )
}

export default Project