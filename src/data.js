import aboutImg from './assets/profiledp.jpg'
// import homeImg  from'./assets/profiledb.png'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
import { Link } from 'react-router-dom'




export const aboutImage = [
    {
        image:aboutImg
    }
]

export const aboutData = [
    {
        heading:"About",
        subHeading:"Me",
        title:"MERN STACK DEVELOPER",
        desc:"Hi. I am a MERN stack developer. I build web applications using technologies like MongoDB, Express, React, and Node.js. I create user-friendly websites and solve problems through code. You can check my portfolio to see the projects I have worked on. I am eager to share my work with you!",
        button:"Read more"
    }
    
]


export const navbar = [
    {
        logo:"Portfolio",
        path:"#"
    },
    {
        item:"Home",
        path:"#home",
        class:"active"
    },
    {
        item:"About",
        path:"#about"
    },
    {
        item:"Services",
        path:"#services"
    },
    {
        item:"Project",
        path:"#project"
    },
    {
        item:"Contact",
        path:"#contact"
    }
    
]




export const service = [
{
    title:"Frontend Development",
    desc:  "We specialize in creating stunning and interactive websites using the latest frontend technologies like HTML, CSS, and JavaScript. Your website will be visually appealing, easy to navigate, and fully responsive, ensuring a seamless experience for visitors across all devices..",
    button:"Read more",
   Link:"/service/frontend"
},
{
    title:"Backend Development",
    desc:  "Our backend development services focus on building powerful and scalable server-side solutions. From database management to server configuration, we ensure your website runs smoothly and securely, with a robust backend that supports your business needs.",
    button:"Read more",
    Link:"/service/Backend"
},
{
    title:"Full Stack Development",
    desc:  "As full-stack developers, we handle both the frontend and backend, ensuring your website is cohesive and efficient from start to finish. Whether it's building a new website or integrating with existing systems, we create complete, end-to-end solutions.",
    button:"Read more",
    Link:"/service/FullStack"
},
]


export const home = [
    {
        intro:"Hi, Myself",
        name:"Rahul Jangir",
        subTitle:"I'm a",
        title:"MERN Stack Developer",
        desc:"Hello. I'm a MERN stack developer. I have experience building full-stack web applications. In the MERN stack I use MongoDB for database management, Express.js for backend development React.js for creating dynamic user interfaces, and Node.js for server-side logic. I'm passionate about coding and enjoy new challenges for user-friendly applications. In my portfolio, you can find My projects that showcase my skills and creativity.",
        // homeImage :homeImg

    }

]

export const project = [
    {
        image:img1,
        title:"Web Design",
        desc :"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        image:img2,
        title:"Web Design",
        desc :"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        image:img3,
        title:"Web Design",
        desc :"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        image:img4,
        title:"Web Design",
        desc :"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        image:img5,
        title:"Web Design",
        desc :"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        image:img6,
        title:"Web Design",
        desc :"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
]