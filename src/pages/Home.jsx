import React from 'react'
import GithubIcon from '@mui/icons-material/GitHub'


function Home()
{
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Nick</h2>
          <div className="prompt">
            <p>A web developer with a passion for learning and creating.</p>
              <a href="https://github.com/kNickGHubAcc" target="_blank"> <GithubIcon /> </a>
          </div>
      </div>

      <div className="skills">
        <h1> Skills </h1>
          <ol className="list">
            <li className="item">
              <h2>Front-End</h2>
              <span> HTML5 | CSS3 | SASS | LESS | Bootstrap | TailwindCSS | jQuery | ReactJS | React Native | Material UI | VueJS </span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span> NodeJS | ExpressJS | mySQL | MongoDB | Mongoose | Firebase | Cloudinary | Accesibility & Security</span>
            </li>
            <li className="item">
              <h2>Languages</h2>
              <span> C | C++ | Java | Javascript | Typescript | SQL | PHP | Python | Matlab | Assembly</span>
            </li>
            <li className="item">
              <h2>Other Technologies</h2>
              <span> APIs | RESTful APIs | Git | GitHub | Axios | Redux | Redux Toolkit | Vuex | Stripe</span>
            </li>
          </ol>
      </div>
    </div>
  )
}

export default Home;
