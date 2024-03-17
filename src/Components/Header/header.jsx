import "./header.css"
import Link from "../../Components/Link/link"
import links from "../../Data/links.json"

const Header = () => {
        return (
                <header>
                        <div className="header-text">
                                <span>Nicolas Morandi</span>
                        </div>       
                        <div className="header-link">
                                {links.map((data) =>
                                        <Link link={data.link} pictures={data.pictures} description={data.description} key={data.description} />
                                )}
                        </div>
                </header>
        )
}

export default Header