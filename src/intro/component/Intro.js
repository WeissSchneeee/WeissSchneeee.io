import '../style/style.css'
import {useState, useEffect} from "react";
import { Time } from "./Time";
import ProjectImg from "../../image/Project1.png"

function MyResume({name, image}){
  return (
    <div>
      <header>
          <a href='https://au.linkedin.com/in/yuanming-leo-huang-993266224' target="_blank" rel = "noreferrer">
            <img src = {image} alt = 'myPhoto' width={179} height={179} className = 'myPhoto'/>
          </a>
          <div class="content-wrap">
            <h1>Yuanming (Leo) Huang</h1>
            <h2>Student at University of Technology, Sydney</h2>
            <p>{MorningAvoEven(Time())} Thank you for visiting my portfolio</p>
            <p>As a software engineering student, I am interested in field of Machine Learning, decsion support system and web development in industry.
            I am a practicing learning and self-motivated student with strong academic transcript in software engineering related subjects.</p>
          </div>
      </header>
      {/* project */}
      <section className='projects'>
        <div class="content-wrap divider">
        <h2>Featured Projects</h2>
        <p>View selected projects below.</p>

        <section className='project1'>
          <h3>Course Recommendation System</h3>
          <p>Developed a course recommendation system with machine learning filtering algorithm(KNN), and deployed using heroku(AWS) cloud platform</p>
          <img src= {ProjectImg} alt='pic1' width={900} height={453}/>
          <div>
            <a class="btn" href="https://github.com/WeissSchneeee/41127-Software-Design-Studio-Group1" target="_blank" rel="noreferrer">View the github repository</a>
          </div>
        </section>
        </div>
      </section>
      {/*Technical Skills*/}
      <section class='skills'>
      <div class="content-wrap tSkills">
        <h2>Technical Skills</h2>
        <section>
          <p><strong>Languages</strong>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C, C++, C#, CSS, HTML, Java (JavaFX for GUI), JavaScript, Python, TypeScript, Visual Basic (for applications) <br/>
          <strong>Frontend Framework</strong>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React.js <br/>
          <strong>Backend Environment</strong>:&nbsp;&nbsp;&nbsp;Node.js <br/>
          <strong>Database</strong>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL, PostgreSQL, MongoDB   <br/>
          <strong>Cloud Application Platform</strong>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Heroku     <br/>
          <strong>Scripting Languages</strong>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PowerShell        <br/>
          <strong>Software</strong>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adobe Photoshop, AutoCAD, Docker, Mathematica, MS Office (Excel, Outlook, PowerPoint, Word)   <br/>
          </p>
        </section>
        </div>
      </section>
      {/* work */}
      <section class='work-experience'>
      <div class="content-wrap Exp">
        <h2>Work Experience</h2>
        <section>
          <h3>Software Engineer Intern</h3>
          <p>Optik Consultancy</p>
          <p>November 2022 - Present</p>
          <p>• Working in a team of four interns to design a firestop selector website for Hilti Australia</p>
          <p>•	Developing a user-friendly UI following the client’s requirements by using React.js</p>
          <p>•	Developing the functionality in the backend by using Node.js</p>
          <p>•	Deploying the website and the database on Heroku cloud application platform</p>

        </section>
      </div>
      </section>
      {/* education */}
      <section class='education'>
        <div class="content-wrap uts">
        <h2>Education</h2>
        <section>
          <h3>University of Technology, Sydney - Sydney, NSW</h3>
          <p>Bachelor of Engineering (Honours), 2021-2023</p>
          <p>Major in Software Engineering</p>
          <p>Currently achieving a 6.8/7 GPA(High Distinction Average) WAM = 89.88</p>
        </section>
        <section>
          <h3>UTS College - Sydney, NSW</h3>
          <p>Diploma of Engineering, 2020 - 2021</p>
          <p>Grade: 6.7/7</p>
        </section>
        </div>
      </section>
      <section class='honours'>
        <div class="content-wrap item-details">
          <h2>Honours & Awards</h2>
          <section>
            <h3>Dean's List Engineering 2022</h3>
            <h5>Issued by Anne Gardner · Jul 2022</h5>
            <p>The Dean’s List recognises outstanding academic achievement in undergraduate 
            and postgraduate courses in Engineering and Information Technology.</p>
          </section>
         </div> 
      </section>

    </div>
  )
}

const MorningAvoEven = (time) => {
  if(!time){
    return(
      <text>Hello Null Pointer!</text>
    )
  }
  else if(time >= 0 && time <= 12){
    return(
      <text>Good Morning!</text>
    )
  }
  else if(time > 12 && time <= 17){
    return(
    <text>Good Afternoon!</text>
    )
  }
  else if(time > 17 && time <= 24){
    return(
    <text>Good Evening!</text>
    )
  }
  else{
    return(
    <text>Hello Alien!</text>
    )
  }
}


export const Intro = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://api.github.com/users/WeissSchneeee`
    )
      .then(response => response.json())
      .then(data => setData(data));
  }, []);


  if(data){
  return (
    <div className='leftBar'>
    <MyResume name = {data.login} image = {data.avatar_url}/>
    </div>
  );
  }
  else{
    return(
      <div className='LoadingPage'>
        <h3>
          Loading the dishwasher... Please wait
        </h3>
      </div>
    )
  }
}

