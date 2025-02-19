import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
            defaultValue="alice"
            placeholder="username"
            className="mb-2"/>
      <Form.Control id="wd-password"
            defaultValue="123"
            placeholder="password"
            type="password"
            className="mb-2"/>
      <Form.Control id="wd-firstname"
            defaultValue="Alice"
            placeholder="First Name"
            className="mb-2"/>
      <Form.Control id="wd-lastname"
            defaultValue="Wonderland"
            placeholder="Last Name"
            className="mb-2"/>
{/*       <Form.Control id="wd-dob"
            defaultValue="mm/dd/yyyy"
            placeholder="Date of Birth"
            type="date"
            className="mb-2"/> */}
      <InputGroup className="mb-2">
            <Form.Control id="wd-dob"
                  defaultValue="mm/dd/yyyy"
                  placeholder="Date of Birth"
                  type="text"
                  className="border-end-0"/>
            <InputGroup.Text className="bg-white border-start-0"><IoCalendarOutline className="fs-6"/></InputGroup.Text>
      </InputGroup>
      <Form.Control id="wd-email"
            defaultValue="alice@wonderland.com"
            placeholder="name@example.com"
            type="email"
            className="mb-2"/>
      <Form id="wd-role" className="mb-2">
      <select id="wd-role" defaultValue="User" className="form-select">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select>
      </Form>
      

      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Sign Out </Link>
    </div>
);}
