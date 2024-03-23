import mentionslegales from "../../Data/mentionslegales.json"
import "./mentionslegales.css"
import Logo from "../../Components/Logo/logo"
import general from "../../Data/general.json"

const MentionsLegales = () => {
    return (
        <>
            <section className="mentions-legales">
                <Logo data={general.mentionsLegales} />
                <h1>{mentionslegales.title}</h1>
                <p>{mentionslegales.textLaw}</p>
                <div className="editeurdusite">
                    <h2>{mentionslegales.titleEditeurSite}</h2>
                    <p>{mentionslegales.textSite}</p>
                    <a href={mentionslegales.siteLink}>
                        <p>{mentionslegales.siteName}</p>
                    </a>
                    <p>{mentionslegales.textEditeurSite}</p>
                </div>
                <div className="hebergement">
                    <h2>{mentionslegales.titleHebergement}</h2>
                    <p>{mentionslegales.textHebergement}</p>
                </div>
                <div className="contact">
                    <h2>{mentionslegales.titleContact}</h2>
                    <p>{mentionslegales.textContact}</p>
                    <a href={mentionslegales.contactLink}>
                        <p>{mentionslegales.textContactLink}</p>
                    </a>
                </div>
            </section>
        </>
    )
}

export default MentionsLegales