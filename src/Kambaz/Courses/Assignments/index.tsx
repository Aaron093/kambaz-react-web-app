<<<<<<< Updated upstream
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input placeholder="Search for Assignments"
               id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A1 - ENV + HTML
            </a> </li>
              Mutiple Modules | Not available until May 6 at 12:00am |
              <br></br>
              Due May 13 at 11:59pm | 100 pts
          <li className="wd-assignment-list-item">
            {/* Complete On Your Own */}
            <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A2 - CSS + BOOTSTRAP
            </a> </li>
            Mutiple Modules | Not available until May 13 at 12:00am |
              <br></br>
              Due May 20 at 11:59pm | 100 pts
            <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A1 - JAVASCRIPT + REACT
            </a> </li>
            Mutiple Modules | Not available until May 20 at 12:00am |
              <br></br>
              Due May 27 at 11:59pm | 100 pts
            
          </li>
        </ul>
      </div>
  );}
=======
import { Link, useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";

import AssignmentsControls from "./AssignmentsControls" 
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentsSubControlButtons from "./AssignmentsSubControlButtons";
import "./styles.css"
// import { assignments } from "../../Database";

import {deleteAssignment }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";


export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  console.log(assignments)
  return (


    <div id="wd-assignments d-flex" >
    <AssignmentsControls />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-assignments bg-secondary p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-1 d-flex">
            <div className="wd-title p-3 ps-1 d-flex align-self-center">
              <BsGripVertical className="me-2 fs-3 "/>
              <FaCaretDown className="me-2 fs-3 "/>
              ASSIGNMENTS
            </div>
            <div className="d-flex align-self-center ms-auto">
              <AssignmentsControlButtons />
            </div>
          </div>


      {assignments
        .filter((assignment:any) => assignment.course === cid)
        .map((assignment:any) => (
        <ListGroup className="wd-assignment-details rounded-0" style={{ borderLeft: '3px solid green' }} >
          <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none">
          <ListGroup.Item className="wd-assignment-detail p-3 ps-1 d-flex">
              <BsGripVertical className="me-3 fs-3 align-self-center" />
              <MdEditDocument className="me-3 fs-3 text-success align-self-center"/>
            <div >
              <p className="mb-0 fs-5 fw-bold">
                {assignment.name && assignment.title
                  ? `${assignment.name} ${assignment.title}`
                  : assignment.name || assignment.title}
              </p>
              <p className="mb-0 fs-6 text-muted">
                <span className="text-danger ">Multiple Modules </span>
                <span> | </span> 
                <span className="fw-bold"> Not available until </span>
                <span className="">
                  {assignment.availableDate!=="" ? assignment.availableDate + " at 12:00am" : "not released yet"}  |
                </span> <br />
                <span className="fw-bold"> Due </span>
                <span> 
                  {assignment.due_date!=="" ? assignment.dueDate + " at 11.59pm" : "not released yet"} | 
                  {assignment.points!=="" ? assignment.points : " Unreleased"}
                </span></p>
            </div>
            <div className="d-flex align-self-center ms-auto">
              <AssignmentsSubControlButtons 
                assignmentId={assignment._id}
                deleteAssignment={(assignmentId) => {
                dispatch(deleteAssignment(assignmentId));}}/>
            </div>
          </ListGroup.Item>
          </Link>
        </ListGroup>))}
        </ListGroup.Item>
      </ListGroup>
  </div>
    );}
  {/*         */}



>>>>>>> Stashed changes
  