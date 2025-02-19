import { Form, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';


import { RxCross2 } from "react-icons/rx";
import { FaCalendarAlt } from "react-icons/fa";
import { assignments } from "../../Database";



export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = assignments.find((assignment) => assignment._id === aid);
    return (
        <div>
            <div style={{ width: '1100px'}}>
            <Form.Group className="mb-3 col-6" controlId="AssignmentName">
                <Form.Label className="mtext-muted"> Assignment Name </Form.Label>
                <Form.Control type="text"
                     placeholder="Please input Assignment Name"
                     defaultValue= {assignment && assignment.title}/>
            </Form.Group>
            <Form.Group className="mb-3 col-6" controlId="AssignmentDescription">
                <Card className="p-3">
                    <br />
                    <p> The Assignment is <span className="text-danger"> available online </span></p>
                    <p> Submit a link to the landing page of your Web application running on Netlify.</p>
                    <p> The landing page should include the following:</p>
                    <ul className="ps-4">
                        <li>Your full name and section</li>
                        <li>Links to each of the lab assignments</li>
                        <li>Link to the Kambaz application</li>
                        <li>Links to all relevant source code repositories</li>
                    </ul>
                    <p> The Kambaz application should include a link to navigate back to the landing page.</p>
                </Card>
            </Form.Group>
            </div>

            <div style={{width:"1100px"}}>
            <Row className="mb-3">
                <Col className="col-2">
                    <Form.Label className="col-form-label float-end">Points</Form.Label>
                </Col>
                <Col className="col-4">
                    <Form.Control type="number"
                        id="inputPoint"
                        className="form-control"
                        defaultValue="100" />
                </Col>
            </Row>

            <Row className="mb-3">
                <Col className="col-2">
                    <Form.Label className="col-form-label float-end">Assignment Group</Form.Label>
                </Col>
                <Col className="col-4">
                    <Form.Select defaultValue="Assignment">
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
                    <Form.Select defaultValue="Assignment">
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
                        <Form.Select className="mb-3" defaultValue="Online">
                            <option value="1">Online</option>
                            <option value="2">Offline</option>
                            <option value="3">No Submisiion needed</option>
                        </Form.Select>
                        <h6 className="fw-bold mb-3">Online Entry Options</h6>
                        <Form.Check className="mb-3" label="Text Entry" />
                        <Form.Check className="mb-3" label="Website URL" />
                        <Form.Check className="mb-3" label="Media Recordings" />
                        <Form.Check className="mb-3" label="Student Annotation" />
                        <Form.Check className="mb-3" label="File Uploads" />

                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col className="col-2">
                    <Form.Label className="col-form-label float-end">Assign</Form.Label>
                </Col>
                <Col className="col-4">
                    <Card className="p-2">
                        <h6 className="fw-bold mb-3">Assign to</h6>
                            <Card className="p-1 mb-3">
                            <div className="input-group">
                                <Button className="btn-light btn-sm">Everyone <RxCross2 /></Button>
                            </div>
                            </Card>
                        <h6 className="fw-bold mb-0">Due</h6>

                        <InputGroup className="mb-3">
                            <Form.Control 
                                defaultValue={
                                    assignment && assignment.due_date !=="" ?
                                    assignment.due_date + ", 2024" + ", " + assignment.due_date
                                    : ""
                                }
                                placeholder="Assignment Due Date"
                                type="text"/>
                            <InputGroup.Text><FaCalendarAlt className="fs-6"/></InputGroup.Text>
                        </InputGroup>
                    <Row className="p-0">

                        <Col className="pe-0">
                        <h6 className="fw-bold mb-0">Available from</h6>
                        <InputGroup className="mb-3">
                            <Form.Control 
                                defaultValue={
                                    assignment && assignment.available_date !=="" ?
                                    assignment.available_date + ", 2024" + ", " + assignment.available_time
                                    : ""
                                }
                                placeholder="Available from Date"
                                type="text"/>
                            <InputGroup.Text><FaCalendarAlt className="fs-6"/></InputGroup.Text>
                        </InputGroup>
                        </Col>
                        
                        <Col className="ps-0">
                        <h6 className="fw-bold mb-0">Until</h6>
                        <InputGroup className="mb-3">
                            <Form.Control 
                                defaultValue={
                                    assignment && assignment.due_date !=="" ?
                                    assignment.due_date + ", 2024" + ", " + assignment.due_date
                                    : ""
                                }
                                placeholder="Until Date"
                                type="text"/>
                            <InputGroup.Text><FaCalendarAlt className="fs-6"/></InputGroup.Text>
                        </InputGroup>
                        </Col>
                    </Row>

                    </Card>
                </Col>
                <hr className="m-3" style={{width:"600px"}}/>

            <Row className="mb-3">

                <Col className="col-4">
                </Col>
                <Col className="col-2">
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`} 
                        className="btn btn-light text-decoration-none me-3"> Cancel </Link>
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`}
                        className="btn btn-danger text-decoration-none"> Save </Link>
                </Col>
            </Row>

            </Row>

 


            </div>
        </div>
            
    );
};