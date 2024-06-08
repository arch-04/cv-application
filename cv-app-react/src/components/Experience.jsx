import React from "react";
import { useState } from "react";
import './Experience.css'

function Experience({jobTitle, setJobTitle, positionTitle, setPositionTitle, from, setFrom, to, setTo, textArea, setTextArea}) {

    const [submitted, setSubbmited] = useState(false);
    const [experiences, setExpirience] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const jobTitleOnChange = (e) => {
        setJobTitle(e.target.value);
    }

    const positionTitleOnChange = (e) => {
        setPositionTitle(e.target.value);
    }

    const fromOnChange = (e) => {
        setFrom(e.target.value);
    }

    const toOnChange = (e) => {
        setTo(e.target.value);
    }

    const textAreaOnChange = (e) => {
        setTextArea(e.target.value)
    }

    const handleReset = () => {
        if (submitted)
            setSubbmited(false);
        else {
            setSubbmited(true);
        }
    }


    const handleAddExperience = () => {
        const newExperience = {
            jobTitle: jobTitle,
            positionTitle: positionTitle,
            from: from,
            to: to,
            textArea: textArea
        }

        setExpirience([...experiences, newExperience]);
        setJobTitle('');
        setPositionTitle('');
        setFrom('');
        setTo('');
        setTextArea('');
    }

    const handleDeleteExperience = (index) => {
        const updatedExperiences = [...experiences];
        updatedExperiences.splice(index, 1);
        setExpirience(updatedExperiences);

    }

    const handleEditExperience = (index) => {
        const experienceToEdit = experiences[index];
        setJobTitle(experienceToEdit.jobTitle);
        setPositionTitle(experienceToEdit.positionTitle);
        setFrom(experienceToEdit.from);
        setTo(experienceToEdit.to);
        setTextArea(experienceToEdit.textArea);
        setEditingIndex(index);   
    }

    const handleSaveExperience = () =>{
        const updatedExperiences = [...experiences];
        updatedExperiences[editingIndex] = {
            jobTitle: jobTitle,
            positionTitle: positionTitle,
            from: from,
            to: to,
            textArea: textArea
        }
        setEditingIndex(null);
        setJobTitle('');
        setPositionTitle('');
        setFrom('');
        setTo('');
        setTextArea('');
    }

    return (
        <div className={`experience-info ${submitted ? 'submitted' : ''}`}>
            <div className="experience-title">
                <h1>Experience</h1>
                <span className="material-symbols-outlined" onClick={handleReset}>edit_note
                </span>
            </div>
            {!submitted && (
                <>
                    <label>Job title</label>
                    <input type="text" value={jobTitle} onChange={jobTitleOnChange} />
                    <label>Position title</label>
                    <input type="text" value={positionTitle} onChange={positionTitleOnChange} />
                    <label>Working from</label>
                    <input type="date" value={from} onChange={fromOnChange} />
                    <label>To</label>
                    <input type="date" value={to} onChange={toOnChange} />
                    <label>Job responsibilites </label>
                    <textarea cols="40" rows='5' value={textArea} onChange={textAreaOnChange}></textarea>
                    <div className="experience-btn">
                        {editingIndex === null ? (
                            <button onClick={handleAddExperience}>Add Education</button>
                        ) : (
                            <button onClick={handleSaveExperience}>Save</button>
                        )}
                    </div>
                </>
            )}
            {experiences.map((experience, index) => (
                <div key={index} className="experience-box">
                    <div className="experience-box-title">
                        <h2>Experience</h2>
                        <div className="experience-box-btns">
                            <button onClick={() => handleEditExperience(index)}>Edit</button>
                            <button onClick={() => handleDeleteExperience(index)}>Delete</button>
                        </div>
                    </div>
                    <p><strong>Job title:</strong>{experience.jobTitle}</p>
                    <p><strong>Degree:</strong>{experience.positionTitle}</p>
                    <p><strong>Start Date:</strong>{experience.from}</p>
                    <p><strong>End Date:</strong>{experience.to}</p>
                    <div className="experience-text-area">
                        <h3>Job responsibilites:</h3>
                        <div className="text-area-container">
                            <p>{experience.textArea}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience;