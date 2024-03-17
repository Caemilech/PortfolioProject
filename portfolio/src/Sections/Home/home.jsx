import Skills from "../../Components/Skills/skills"
import Projects from "../../Components/Projects/projects"
import skills from "../../Data/skills.json"
import projects from "../../Data/projects.json"
import "./home.css"

const Home = () => {
    return (
        <main>
            <div className="presentation">
                <div className="about">
                    <h1>Nicolas Morandi</h1>
                    <h2>Intégrateur Web</h2>
                    <p>
                        Durant ma formation OpenClassroom d'Intégrateur Web, j'ai intégré plusieurs applications qui m'ont permis
                        d'apprendre les bases du Front-End. Etant quelqu'un de créatif, j'aime créer et apprendre de nouvelles
                        méthodes de création.
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
                    <Projects pictures={data.pictures} description={data.description} stack={data.stack} link={data.link}
                        stackDescription={data.stackDescription} text={data.text} title={data.title} key={data.title} />
                )}
            </div>
        </main>
    )
}

export default Home