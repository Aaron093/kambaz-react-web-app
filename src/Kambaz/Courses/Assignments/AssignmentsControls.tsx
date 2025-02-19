import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';


export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
      </Button>
      <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
      </Button>

      <InputGroup className="mb-3 border-0" float-start size="lg" style={{ width: "30%" }} id="wd-assignment-search-bar">
        <InputGroup.Text className="bg-white border-end-0" style={{paddingRight:"0px"}}>
          <CiSearch />
        </InputGroup.Text>
        <Form.Control className="border-start-0 z-1" style={{borderLeft:"None"}}
          placeholder="Search..."
          aria-label="Search"
        />
      </InputGroup>
    </div>
);}
