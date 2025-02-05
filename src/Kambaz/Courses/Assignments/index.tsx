import { Link } from "react-router";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

import AssignmentsControls from "./AssignmentsControls" 
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentsSubControlButtons from "./AssignmentsSubControlButtons";

import "./styles.css"


export default function Assignments() {
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

          <ListGroup className="wd-assignment-details rounded-0" >
            <Link to="/Kambaz/Courses/1234/Assignments/1234" className="text-decoration-none">
            <ListGroup.Item className="wd-assignment-detail p-3 ps-1 d-flex">
                <BsGripVertical className="me-3 fs-3 align-self-center" />
                <MdEditDocument className="me-3 fs-3 text-success align-self-center"/>
              <div >
                <p className="mb-0 fs-5 fw-bold">A1</p>
                <p className="mb-0 fs-6 text-muted">
                  <span className="text-danger ">Multiple Modules </span>
                  <span> | </span> 
                  <span className="fw-bold"> Not available until </span>
                  <span className=""> May 6 at 12:00am | </span> <br />
                  <span className="fw-bold"> Due </span>
                  <span> May 13 at 11:59pm | 100 pts </span></p>
              </div>
              <div className="d-flex align-self-center ms-auto">
                <AssignmentsSubControlButtons />
              </div>
          </ListGroup.Item>
          </Link>

          <Link to="/Kambaz/Courses/1234/Assignments/1234" className="text-decoration-none">
          <ListGroup.Item className="wd-assignment-detail p-3 ps-1 d-flex">
                <BsGripVertical className="me-3 fs-3 align-self-center" />
                <MdEditDocument className="me-3 fs-3 text-success align-self-center"/>
              <div >
                <p className="mb-0 fs-5 fw-bold">A2</p>
                <p className="mb-0 fs-6 text-muted">
                  <span className="text-danger ">Multiple Modules </span>
                  <span> | </span> 
                  <span className="fw-bold"> Not available until </span>
                  <span className=""> May 6 at 12:00am | </span> <br />
                  <span className="fw-bold"> Due </span>
                  <span> May 13 at 11:59pm | 100 pts </span></p>
              </div>
              <div className="d-flex align-self-center ms-auto">
                <AssignmentsSubControlButtons />
              </div>
          </ListGroup.Item>
          </Link>

          <Link to="/Kambaz/Courses/1234/Assignments/1234" className="text-decoration-none">
          <ListGroup.Item className="wd-assignment-detail p-3 ps-1 d-flex">
                <BsGripVertical className="me-3 fs-3 align-self-center" />
                <MdEditDocument className="me-3 fs-3 text-success align-self-center"/>
              <div >
                <p className="mb-0 fs-5 fw-bold">A3</p>
                <p className="mb-0 fs-6 text-muted">
                  <span className="text-danger ">Multiple Modules </span>
                  <span> | </span> 
                  <span className="fw-bold"> Not available until </span>
                  <span className=""> May 6 at 12:00am | </span> <br />
                  <span className="fw-bold"> Due </span>
                  <span> May 13 at 11:59pm | 100 pts </span></p>
              </div>
              <div className="d-flex align-self-center ms-auto">
                <AssignmentsSubControlButtons />
              </div>
          </ListGroup.Item>
          </Link>
          
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
      </div>
  );}
  