import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";

import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";

export default function Kambaz() {
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const dispatch = useDispatch();
  const { courses } = useSelector((state: any) => state.coursesReducer);

  const handleAddCourse = () => {
    dispatch(addCourse(course));
    setCourse({...course, name: "", description: "" });
  };

  const handleDeleteCourse = (courseId:any) => {
    dispatch(deleteCourse(courseId));
  };

  const handleUpdateCourse = (course:any) => {
    dispatch(updateCourse(course)); 
    setCourse(course);
  };



  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
      <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={
              <ProtectedRoute>
              <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={handleAddCourse}
              deleteCourse={handleDeleteCourse}
              updateCourse={handleUpdateCourse}/>
              </ProtectedRoute> }
            />
            
            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
      </div>
    </div>
  );
}

