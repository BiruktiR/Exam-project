import React from 'react';
import './App.css';
// import ClassroomForm from './Create/components/classroomPopUp';
// import CreateClassroom from './Create/components/classroom';
// import CreateCourses from './Create/components/courses';
// import CourseForm from './Create/components/coursePopUp';
// import AddTeacher from './newAssign/AddTeacher';
// import ManageCourses from './Assign/Pages/ManageCourses';
import SignIn from './Components/login';
import {AccountProfileDetails} from './Components/editProfile';
import Admin from './Pages/Adimn/index';

function App() {
  return (
    <div className="App">
      {/* <CreateClassroom title="Create Classroom">
      <ClassroomForm />
        </CreateClassroom>
        <CreateCourses title="Create Course">
      <CourseForm />
        </CreateCourses> */}
        <Admin/>
    </div>
  ); 
}

export default App;
