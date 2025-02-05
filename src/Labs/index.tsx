import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <p>Yiqian Zhang  CS4550.37031.202530</p>
      <a href="https://yiqian-zhang-lab2.netlify.app/#/Kambaz/Account/Signin" id="wd-kambaz">Kambaz Application</a>
      <br></br>
      <a href="https://github.com/Aaron093/kambaz-react-web-app" id="wd-github">Github Repo</a>

      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
);}
