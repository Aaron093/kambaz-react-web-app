<<<<<<< Updated upstream
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
          your web application running on Netlify. The landing page should include
          the following: your full name and section links to each of the lab
          assignments Link to the kanbas application Links to all relevant source code repositories
          The kanbas application should include a link to navigate back to the landing page
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          {/* Complete on your own */}
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Assignment Group</label>
            </td>
            <td>
            <select id="wd-select-one-genre">
              <option selected value="PA">
                 ASSIGNMENTS</option>
            </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Display Grade as</label>
            </td>
            <td>
            <select id="wd-select-one-genre">
              <option selected value="PA">
                 PERCENTAGE</option>
            </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Submission Type</label>
            </td>
            <td>
            <select id="wd-select-one-genre">
              <option selected value="PA">
                 Online</option>
            </select>
            </td>
          </tr>
          <label>Online Entry Options</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
        <label htmlFor="wd-chkbox-comedy">Text Entry</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
        <label htmlFor="wd-chkbox-drama">Website URL</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
        <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
        <label htmlFor="wd-chkbox-fantasy">Student Annotations</label>
        <br></br>
        <input type="checkbox" name="check-genre" id="wd-chkbox-fu"/>
        <label htmlFor="wd-chkbox-fu">File Uploads</label>

        <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Assign Assign to</label>
            </td>
            <td>
                <br></br>
              <input id="wd-points" value = 'Everyone' />
            </td>
        </tr>

        <label htmlFor="wd-text-fields-dob"> Due </label>
        <br></br>
        <input type="date"
       value="2024-05-13"
       id="wd-text-fields-dob"/><br/>

        <label htmlFor="wd-text-fields-dob"> Available from </label>
        <br></br>
        <input type="date"
       value="2024-05-06"
       id="wd-text-fields-dob"/><br/>

        <label htmlFor="wd-text-fields-dob"> Until </label>
        <br></br>
        <input type="date"
       value="2024-05-14"
       id="wd-text-fields-dob"/><br/>
       <hr style={{ width: '300%', height: '3px', backgroundColor: 'black', border: 'none', margin: '20px auto' }} />
       <button>Cancel</button> <button>Save</button>

        </table>
      </div>
  );}
  
  
=======
import { Form, Row, Col } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment, addAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find((a:any) => a._id === aid);

  const [name, setName] = useState(assignment?.name || "");
  const [title, setTitle] = useState(assignment?.title || "");
  const [description, setDescription] = useState(assignment?.description || "");
  const [points, setPoints] = useState(assignment?.points || 100);
  const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
  const [availableDate, setAvailableDate] = useState(assignment?.availableDate || "");
  const [availableUntil, setAvailableUntil] = useState(assignment?.availableUntil || "");
  const [assignmentGroup, setAssignmentGroup] = useState(assignment?.assignmentGroup || "1");
  const [gradeDisplay, setGradeDisplay] = useState(assignment?.gradeDisplay || "1");
  const [submission, setSubmission] = useState(assignment?.submission || "1");
  const initialEntry = {
    textEntry: false,
    websiteURL: false,
    mediaRecordings: false,
    studentAnnotation: false,
    fileUploads: false,
  }
  const [entry, setEntry] = useState(assignment?.entry || initialEntry);
  


  useEffect(() => {
    if (aid === "new") {
      setName("")
      setTitle("");
      setDescription("");
      setPoints(100);
      setDueDate("");
      setAvailableDate("");
      setAvailableUntil("");
      setAssignmentGroup("1");
      setGradeDisplay("1");
      setSubmission("1");
      setEntry(initialEntry);
    }
  }, [aid]);

  const handleEntryChange = (option:any) => {
    setEntry((prevEntry:any) => ({
      ...prevEntry,
      [option]: !prevEntry[option],
    }));
  };

  const handleSave = () => {
    const assignmentData = {
      _id: aid === "new" ? uuidv4() : aid,
      name,
      title,
      description,
      points,
      dueDate: dueDate,
      availableDate: availableDate,
      availableUntil: availableUntil,
      course: cid,
      gradeDisplay: gradeDisplay,
      assignmentGroup: assignmentGroup,
      submission: submission,
      entry: entry,
    };

    if (aid === "new") {
      dispatch(addAssignment(assignmentData));
      console.log("New Assignment Created:", assignmentData);
    } else {
      dispatch(updateAssignment(assignmentData));
    }

    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div>
      <div style={{ width: '1100px' }}>
        <Form.Group className="mb-3 col-6" controlId="AssignmentName">
          <Form.Label className="mtext-muted">Assignment Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please input Assignment Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label className="mtext-muted">Assignment Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please input Assignment Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-6" controlId="AssignmentDescription">
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Please write assignment description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
      </div>

      <div style={{ width: "1100px" }}>
        <Row className="mb-3">
          <Col className="col-2">
            <Form.Label className="col-form-label float-end">Points</Form.Label>
          </Col>
          <Col className="col-4">
            <Form.Control
              type="number"
              value={points}
              onChange={(e) => setPoints(parseInt(e.target.value))}
            />
          </Col>
        </Row>

        <Row className="mb-3">
                <Col className="col-2">
                    <Form.Label className="col-form-label float-end">Assignment Group</Form.Label>
                </Col>
                <Col className="col-4">
                    <Form.Select value={assignmentGroup} 
                     onChange={(e) => setAssignmentGroup(e.target.value)}>
                        <option value="1">Assignment</option>
                        <option value="2">Quiz</option>
                        <option value="3">Exam</option>
                    </Form.Select>
                </Col>
        </Row>

        <Row className="mb-3">
            <Col className="col-2 float-end">
                <Form.Label className="col-form-label float-end">Display Grade as</Form.Label>
            </Col>
            <Col className="col-4">
                <Form.Select value={gradeDisplay}
                 onChange={(e) => setGradeDisplay(e.target.value)}>
                    <option value="1">Percentage</option>
                    <option value="2">Points</option>
                    <option value="3">Level</option>
                </Form.Select>
            </Col>
        </Row>

        <Row className="mb-3">
            <Col className="col-2">
                <Form.Label className="col-form-label float-end">Submission Type</Form.Label>
            </Col>
            <Col className="col-4">
                <Card className="p-2">
                    <Form.Select className="mb-3" value={submission}
                     onChange={(e) => setSubmission(e.target.value)}>
                        <option value="1">Online</option>
                        <option value="2">Offline</option>
                        <option value="3">No Submisiion needed</option>
                    </Form.Select>
                    <h6 className="fw-bold mb-3">Online Entry Options</h6>
                    <Form.Check className="mb-3" label="Text Entry"
                    checked={entry.textEntry} 
                    onChange={() => handleEntryChange("textEntry")}/>
                    <Form.Check className="mb-3" label="Website URL"
                    checked={entry.websiteURL} 
                    onChange={() => handleEntryChange("websiteURL")}/>
                    <Form.Check className="mb-3" label="Media Recordings"
                    checked={entry.mediaRecordings} 
                    onChange={() => handleEntryChange("mediaRecordings")}/>
                    <Form.Check className="mb-3" label="Student Annotation"
                    checked={entry.studentAnnotation} 
                    onChange={() => handleEntryChange("studentAnnotation")}/>
                    <Form.Check className="mb-3" label="File Uploads"
                    checked={entry.fileUploads} 
                    onChange={() => handleEntryChange("fileUploads")}/>

                </Card>
            </Col>
        </Row>

        <Row className="mb-3">
          <Col className="col-2">
            <Form.Label className="col-form-label float-end">Assign</Form.Label>
          </Col>
          <Col className="col-4">
            <Card className="p-2">
              
              <h6 className="fw-bold mb-0">Due</h6>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  placeholder="Assignment Due Date"
                />
                <InputGroup.Text><FaCalendarAlt className="fs-6" /></InputGroup.Text>
              </InputGroup>
              <Row className="p-0">
                <Col className="pe-0">
                <h6 className="fw-bold mb-0">Available from</h6>
                <InputGroup className="mb-3">
                  <Form.Control
                        type="text"
                        value={availableDate}
                        onChange={(e) => setAvailableDate(e.target.value)}
                        placeholder="Available from Date"
                      />
                    <InputGroup.Text><FaCalendarAlt className="fs-6"/></InputGroup.Text>
                </InputGroup>
                </Col>

                <Col className="ps-0">
                <h6 className="fw-bold mb-0">Until</h6>
                <InputGroup className="mb-3">
                  <Form.Control
                          type="text"
                          value={availableUntil}
                          onChange={(e) => setAvailableUntil(e.target.value)}
                          placeholder="Available Until Date"
                        />
                    <InputGroup.Text><FaCalendarAlt className="fs-6"/></InputGroup.Text>
                </InputGroup>
                </Col>
                </Row>
            </Card>
          </Col>
        </Row>

        <hr className="m-3" style={{ width: "600px" }} />

        <Row className="mb-3">
          <Col className="col-4"></Col>
          <Col className="col-2">
            <Link
              to={`/Kambaz/Courses/${cid}/Assignments`}
              className="btn btn-light text-decoration-none me-3"
              onClick={handleCancel}
            >
              Cancel
            </Link>
            <Link
              to={`/Kambaz/Courses/${cid}/Assignments`}
              className="btn btn-danger text-decoration-none"
              onClick={handleSave}
            >
              Save
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
>>>>>>> Stashed changes
