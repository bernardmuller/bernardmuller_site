import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div className="resume">
            <div className="resume_Container">
                <div className="career_Objective">
                    <h2>Career Objective</h2>
                    <p>Proactive professional with 2+ years of experience in a work environment and a proven knowledge of design and documentation. Actively expanding my skillset and aiming to leverage my skills to successfully fill the Software Developer role at your company.</p>
                </div>            
                <div className="experience_Container">
                    <h2>Experience</h2>
                    <div className="experience_Role">
                        <h3>Software Developer</h3>
                        <span>Freelance, Cape Town (Jun 2020 - Present)</span>
                        <p>Design and development of software with technologies like: Python, Node.js, MongoDB, React, HTML, CSS, JavaScript.</p>
                    </div>
                    <div className="experience_Role">
                        <h3>Architectural Technologist</h3>
                        <span> CNR Architects CC, Cape Town, (Feb 2019 - Present)</span>
                        <p>- Generate 3D models of luxury hotels in countries like Greeece, Vietnam, Seychelles and Saudi Arabia that are designed by <a href="https://www.denniston.com.my/">Denniston</a>.</p>
                        <p>- Draw detailed design documentation based on the 3d models.</p>
                        <p>Maintain the basic Building Information Management (BIM) of the projects.</p>
                    </div>
                    <div className="experience_Role">
                        <h3>Mosaics Commisioner</h3>
                        <span>Deo Gloria Glass, Pretoria, (Mar 2015 - Nov 2018)</span>
                        <p>Design and commision of mosaic pieces for clients.</p>
                    </div>
                    <div className="experience_Role">
                        <h3>Volunteer</h3>
                        <span>Pioneer's Museum, Pretoria, (Mar 2016 - Aug 2016)</span>
                        <p>Design and construction of children's new playground area.</p>
                    </div>
                    <div className="experience_Role">
                        <h3>Front Desk Worker</h3>
                        <span>Bubble Tea Company, Pretoria, (Apr 2014 - Sept 2014)</span>
                    </div>
                    <div className="experience_Role">
                        <h3>Volunteer</h3>
                        <span>Uitkoms Home For Downsyndrome Childen, Pretoria, (Aug - 2013)</span>
                    </div>
                </div>
                <div className="education_Container">
                    <h2>Education</h2>
                    <div className="education_Role">
                        <h3>The Web Developer Bootcamp 2021, by Colt Steele</h3>
                        <span>(Dec 2020 - Apr 2021)</span>
                        <p><a href="https://www.udemy.com/certificate/UC-cd94563c-1bb4-4feb-9354-21da9d340675/">Certificate of Completion</a></p>
                    </div>
                    <div className="education_Role">
                        <h3>BSc Architecture</h3>
                        <span>University of Pretoria, (Jan 2015 - Nov 2018)</span>
                    </div>
                    <div className="education_Role">
                        <h3>National Senior Certificate</h3>
                        <span>Montana HighSchool, (Jan 2010 - Dec 2014)</span>
                        <p>Top 50 academic student with 2 destictions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
