import React from "react";
import "./cv.css"


function Cv({ fullName, mail, phoneNumber, schoolName, degree, startDate, endDate, jobTitle, positionTitle, from, to, textArea }) {

    return (
        <div className="cv-container">
            <div className="cv">
                <div className="cv-title">
                    <h1>{fullName}</h1>
                    <h2>{jobTitle}</h2>
                </div>
                <div className="cv-info">
                    <div className="contact-info">
                        <h2>Contact me</h2>
                        <div className="email">
                            <h3>Email:</h3>
                            <p>{mail}</p>
                        </div>
                        <div className="phone">
                            <h3>Phone:</h3>
                            <p>{phoneNumber}</p>
                        </div>
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <div className="school-name">
                            <h3>School name:</h3>
                            <p>{schoolName}</p>
                        </div>
                        <div className="degree-name">
                            <h3>Degree name:</h3>
                            <p>{degree}</p>
                        </div>
                        <div className="education-date">
                            <h3>Time of study</h3>
                            <div className="date-format">
                                <div className="start-education">
                                    <h3>Start date:</h3>
                                    <p>{startDate}</p>
                                </div>
                                <div className="end-education">
                                    <h3>End date:</h3>
                                    <p>{endDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-container">
                        <div className="experience">
                            <h2>Experience</h2>
                            <div className="job-title">
                                <h3>Job name:</h3>
                                <p>{jobTitle}</p>
                            </div>
                            <div className="position-name">
                                <h3>Position name:</h3>
                                <p>{positionTitle}</p>
                            </div>
                            <div className="job-date-container">
                                <div className="experience-date-container">
                                    <div className="start-job-date">
                                        <h3>Worked from:</h3>
                                        <p>{from}</p>
                                    </div>
                                    <div className="end-job-date">
                                        <h3>To:</h3>
                                        <p>{to}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="experience-text">
                                <h3>Responsibities of the job</h3>
                                <div className="text-area-div">
                                    <p>{textArea}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cv;