import PropTypes from 'prop-types'

const Link = ({ pictures, description, link }) => {
    return (
        <>
            <div className="border border-animation">
                <a href={link}>
                    <div className="border-icon">
                        <img src={"/PortfolioProject/Pictures/Icons/" + pictures} alt={description} />
                    </div>
                </a>
            </div>
        </>
    )
}

Link.propTypes = {
    link: PropTypes.string.isRequired,
    pictures: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Link