import { Link } from "react-router-dom";
<<<<<<< Updated upstream
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>
      </div>
    </div>
);}
=======
import { useState } from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { enroll, unenroll } from "./reducer";
// import * as db from "./Database";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: (course:any) => void; }){
  const dispatch = useDispatch()
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);


  const [showFilteredCourses, setShowFilteredCourses] = useState(true);


  const displayedCourses = showFilteredCourses
  ? courses.filter((course) =>
      enrollments.some(
        (enrollment:any) =>
          enrollment.user === currentUser._id && enrollment.course === course._id
      )
    )
  : courses;
  


  console.log(currentUser)
  console.log(courses)
  if (currentUser.role === "FACULTY"){
    return (

      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} >
                    Add
            </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={()=>{
                      updateCourse(course);}} id="wd-update-course-click">
                    Update
            </button>
              
        </h5> <br />
        <FormControl value={course.name} className="mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) }  />
        <FormControl value={course.description} as = "textarea" rows={3}
                    onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
        
        <hr />

        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {courses/* .filter((course) =>
              enrollments.some((enrollment) =>
                enrollment.user === currentUser._id && enrollment.course === course._id
          )) */.map((course) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} </Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description} </Card.Text>
                      <Button variant="primary"> Go </Button>
                      <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </button>
                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </button>


                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>);}
  else if (currentUser.role === "STUDENT") {
    return (
      <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      
      <hr />
      <Row>
        <Col>
          <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
        </Col>
        <Col>
          <button className="btn btn-lg btn-primary float-end"
                        onClick={() => setShowFilteredCourses(!showFilteredCourses)} >
                        Enrollment
          </button>
        </Col>
      </Row>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course) => {
            const isEnrolled = enrollments.some(
              (enrollment:any) =>
                enrollment.user === currentUser._id && enrollment.course === course._id
            );

            return (
              <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
                <Card>
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    {isEnrolled ? (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(unenroll({ user: currentUser._id, course: course._id }));
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Unenroll
                      </button>
                    ) : (
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(enroll({ user: currentUser._id, course: course._id }));
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Enroll
                      </button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
  else {
    return(
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>

      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <button className="btn btn-warning me-2 float-end">
                      Enrolled
                    </button>
                  </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);}
    }
>>>>>>> Stashed changes
