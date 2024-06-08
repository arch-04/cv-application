import React from "react";
import './EducationInfo.css'
import { useState } from "react";

function EducationInfo({schoolName, setSchoolName, degree, setDegree, startDate, setStartDate, endDate, setEndDate}) {

  
    const [submitted, setSubmitted] = useState(false);
    const [educations, setEducations] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleSchoolNameChange = (e) => {
        setSchoolName(e.target.value);
    }

    const handleDegreeChange = (e) => {
        setDegree(e.target.value);
    }

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    }

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    }

    const handleAddEducation = () => {
        const newEducation = {
            schoolName: schoolName,
            degree: degree,
            startDate: startDate,
            endDate: endDate
        }

        setEducations([...educations, newEducation])
        setSchoolName('');
        setDegree('');
        setStartDate('');
        setEndDate('');
    }

    const handleDeleteEducation = (index) => {
        const updatedEducations = [...educations];
        updatedEducations.splice(index, 1);
        setEducations(updatedEducations);
    }

    const handleEditEducation = (index) => {
        const educationToEdit = educations[index];
        setSchoolName(educationToEdit.schoolName);
        setDegree(educationToEdit.degree);
        setStartDate(educationToEdit.startDate);
        setEndDate(educationToEdit.endDate);
        setEditingIndex(index);
    }

    const handleSaveEducation = () => {
        const updatedEducations = [...educations];
        updatedEducations[editingIndex] = {
            schoolName: schoolName,
            degree: degree,
            startDate: startDate,
            endDate: endDate
        }
        setEducations(updatedEducations);
        setEditingIndex(null);
        setSchoolName('');
        setDegree('');
        setStartDate('');
        setEndDate('');
    }

    const handleReset = () =>{
        if(submitted){
            setSubmitted(false);
        }else{
            setSubmitted(true);
        }
    }

    return (
        <div className={`education-info ${submitted ? 'submitted' : ''}`}>
            <div className="education-title">
                <h1>Education</h1>
                <span className="material-symbols-outlined" onClick={handleReset}>edit_note
                </span>
            </div>
            {!submitted && (
                <>
                    <label >School Name</label>
                    <input type="text" value={schoolName} onChange={handleSchoolNameChange} />
                    <label>Degree</label>
                    <input type="text" value={degree} onChange={handleDegreeChange} />
                    <label>Start Date</label>
                    <input type="date" value={startDate} onChange={handleStartDateChange} />
                    <label>End Date</label>
                    <input type="date" value={endDate} onChange={handleEndDateChange} />
                    <div className="education-btn">
                        {editingIndex === null ? (
                            <button onClick={handleAddEducation}>Add Education</button>
                        ) : (
                            <button onClick={handleSaveEducation}>Save</button>
                        )}
                    </div>
                </>
            )}
            {educations.map((education, index) => (
                <div key={index} className="education-box">
                    <div className="education-box-title">
                        <h2>Education</h2>
                        <div className="education-box-btns">
                            <button onClick={() => handleEditEducation(index)}>Edit</button>
                            <button onClick={() => handleDeleteEducation(index)}>Delete</button>
                        </div>
                    </div>
                    <p><strong>School Name:</strong> {education.schoolName}</p>
                    <p><strong>Degree:</strong> {education.degree}</p>
                    <p><strong>Start Date:</strong> {education.startDate}</p>
                    <p><strong>End Date:</strong> {education.endDate}</p>
                </div>
            ))}
        </div>
    )
}

export default EducationInfo