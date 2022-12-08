const Hero = () => {
    return (
        <section>
        <div className="hero--container">
            <img className="hero--banner" src='/images/hero.png' alt="Hero Banner"/>
        </div>

        <div className="hero--mainContent">
            <h1 className="hero--mainHeader">Online Experiences</h1>
            <p className="hero--mainPara">Join unique interactive activities led by one-of-a-kind 
                hosts—all without leaving home.</p>
        </div>
        </section>

    )
}

export default Hero