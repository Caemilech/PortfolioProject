const About = (props) => {
    const {name, job, text} = props.data
    return (
        <>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{text}</p>
        </>
    )
}

export default About