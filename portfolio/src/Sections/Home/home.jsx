import About from "../../Components/About/about"
import Skills from "../../Components/Skills/skills"
import Projects from "../../Components/Projects/projects"
import Logo from "../../Components/Logo/logo"
import about from "../../Data/about.json"
import skills from "../../Data/skills.json"
import projects from "../../Data/projects.json"
import general from "../../Data/general.json"
import "./home.css"

const Home = () => {
    return (
        <main>
            <Logo data={general.header}/>
            <section className="presentation">
                <div className="about">
                    <About data={about}/>
                </div>
                <div className="skills">
                    <div className="border">
                        <h2>{general.home.skillsTitle}</h2>
                    </div>
                    <div className="skills-container">
                        {skills.map((data) =>
                            <Skills pictures={data.pictures} description={data.description} key={data.description} />
                        )}
                    </div>
                </div>
            </section>
            <section className="projects">
                {projects.map((data) =>
                    <Projects label={data.label} pictures={data.pictures} description={data.description} stack={data.stack} 
                    link={data.link} stackDescription={data.stackDescription} text={data.text} title={data.title} key={data.title} />
                )}
            </section>
        </main>
    )
}

export default Home