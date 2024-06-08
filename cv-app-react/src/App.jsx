import './App.css'
import Info from './components/Info';
import EducationInfo from './components/EducationInfo';
import Experience from './components/Experience'
import Cv from './components/Cv';
import { useState } from 'react';

function App() {

  //info 
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Smith');
  const [fullName, setFullName] = useState('John Smith');
  const [mail, setMail] = useState('johnsmithmail@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('+32134233');

  //education
  const [schoolName, setSchoolName] = useState('Sinner university');
  const [degree, setDegree] = useState('Computer engineer');
  const [startDate, setStartDate] = useState('2020-06-06');
  const [endDate, setEndDate] = useState('2024-06-06');

  //experience
  const [jobTitle, setJobTitle] = useState('Web developer');
  const [positionTitle, setPositionTitle] = useState('Employee');
  const [from, setFrom] = useState('2022-07-06');
  const [to, setTo] = useState('2023-04-03');
  const [textArea, setTextArea] = useState('I developed, maintained, and optimized websites and web applications, ensuring functionality, responsiveness, and user experience across devices.')



  return (
    <div className='page'>
      <div className='left-side'>
        <Info 
        firstName={firstName} setFirstName={setFirstName} 
        lastName={lastName} setLastName={setLastName}
        setFullName={setFullName}
        mail={mail} setMail={setMail} 
        phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
        <EducationInfo
        schoolName={schoolName} setSchoolName={setSchoolName}
        degree={degree} setDegree={setDegree}
        startDate={startDate} setStartDate={setStartDate}
        endDate={endDate} setEndDate={setEndDate}
        />
        <Experience
        jobTitle={jobTitle} setJobTitle={setJobTitle}
        positionTitle={positionTitle} setPositionTitle={setPositionTitle}
        from={from} setFrom={setFrom}
        to={to} setTo={setTo}
        textArea={textArea} setTextArea={setTextArea}
        />
      </div>
      <div className='right-side'>
        <Cv  fullName={fullName} mail={mail} phoneNumber={phoneNumber} schoolName={schoolName} degree={degree} startDate={startDate} endDate={endDate} jobTitle={jobTitle} positionTitle={positionTitle} from={from} to={to} textArea={textArea}/>
      </div>
    </div>
  );
}

export default App;
