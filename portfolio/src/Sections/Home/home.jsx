
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
        <>
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
                        {skills.map((data) =>
                            <Skills pictures={data.pictures} description={data.description} key={data.description} />
                        )}
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
        </>
    )
}

export default Home