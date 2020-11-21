import react from 'react'


const Skills = () => {
    return (
        <section className="skills section">
            <h2 className="section-title">Skills</h2>


            <div className="skills__container bd-grid">
                <div>
                    <h2 className="skills__subtitle">Professional Skills</h2>
                    <p className="skills__text">Some text here etc.. etc.. etc..</p>
                </div>

                <div className="skills__data">
                    <div className="skills__names">
                        <i className="bx bxl-javascript skills__icon"></i>
                        <span className="skills__name">HTML</span>
                    </div>

                    <div>
                        <span className="skills__percentage">100%</span>
                    </div>

                    <div className="skills__bar skills__html"></div>
                </div>

                <div className="skills__data">
                    <div className="skills__names">
                        <i className="bx bxl-javascript skills__icon "></i>
                        <span className="skills__name">HTML</span>
                    </div>

                    <div>
                        <span className="skills__percentage">50%</span>
                    </div>

                    <div className="skills__bar skills__javascript"></div>
                </div>

                <div className="skills__data">
                    <div className="skills__names">
                        <i className="bx bxl-html5 skills__icon "></i>
                        <span className="skills__name">HTML</span>
                    </div>

                    <div>
                        <span className="skills__percentage">100%</span>
                    </div>

                    <div className="skills__bar skills__html"></div>
                </div>

                <div className="skills__data">
                    <div className="skills__names">

                        <i className="bx bxl-css3 skills__icon"></i>
                        <span className="skills__name">HTML</span>
                    </div>

                    <div>
                        <span className="skills__percentage">100%</span>
                    </div>

                    <div className="skills__bar skills__html"></div>
                </div>
            </div>
        </section>
    )
}

export default Skills;