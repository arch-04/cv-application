import React from 'react'
import { useState } from 'react'
import './Info.css'

function Info({ firstName, setFirstName, lastName, setLastName, setFullName, mail, setMail, phoneNumber, setPhoneNumber}) {
    const [submitted, setSubmitted] = useState(false);


    const handleSubmitt = () => {
    }

    const handleReset = () => {
        if(submitted){
            setSubmitted(false);
        }else{
            setSubmitted(true);
        }
    }

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        setFullName(`${e.target.value} ${lastName}`)
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
        setFullName(`${firstName} ${e.target.value}`)
    }

    function handleMailChange(e){
        setMail(e.target.value);
    }

    function handlePhoneNumberChange(e){
        setPhoneNumber(e.target.value);
    }


    return (
        <div className={`user-info ${submitted ? `submitted` : ''}`}>
            <div className='info-title'>
                <h1>Personal Info</h1>
                <span className="material-symbols-outlined" onClick={handleReset}>edit_note
                </span>
            </div>
            {!submitted && (
                <>
                    <label>First Name</label>
                    <input type="text"
                        value={firstName}
                        onChange={handleFirstNameChange} />
                    <label>Last Name</label>
                    <input type="text"
                        value={lastName}
                        onChange={handleLastNameChange} />
                    <label>Email</label>
                    <input type="mail" 
                    value={mail}
                    onChange={handleMailChange}/>
                    <label>Phone Number</label>
                    <input type="tel" 
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}/>
                    <div className='info-btn'>
                        <button onClick={handleSubmitt}>Submit</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Info