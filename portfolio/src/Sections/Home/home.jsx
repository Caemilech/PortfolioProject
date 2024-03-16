
import Skills from "../../Components/Skills/skills"
import Projects from "../../Components/Projects/projects"
import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import "./home.css"
import "../../Components/Border/border.css"
import skills from "../../Data/skills.json"
import projects from "../../Data/projects.json"

const Home = () => {
    return (
        <div className="main">
        <div className="main-container">
            <div className="main-container-inner">
            <div>
            <Header/>
            <main>
                <div className="presentation">
                    <div className="about">
                        <h1>Nicolas Morandi</h1>
                        <h2>Intégrateur Web</h2>
                        <p>
                        Je suis Intégrateur Web. J'ai intégré plusieurs applications côté Front-End pendant ma formation
                        OpenClassroom d'intégratuer web. Je suis créatif, j'aime concevoir des projets et j'aime apprendre.
                        </p>
                    </div>
                    <div className="skills">
                        <div className="border">
                        <h2>Skills</h2>
                        </div>
                        <div className="skills-container">
                        {skills.map((data) =>
                            <Skills pictures={data.pictures} description={data.description} key={data.description} />
                        )}
                        </div>
                    </div>
                </div>
                <div className="projects">
                    {projects.map((data) =>
                        <Projects pictures={data.pictures} description={data.description} stack={data.stack}
                            stackDescription={data.stackDescription} text={data.text} title={data.title} key={data.title} />
                    )}
                </div>
            </main>
            <Footer/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Home