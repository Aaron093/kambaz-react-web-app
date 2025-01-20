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
       value="2024-05-"
       id="wd-text-fields-dob"/><br/>
       <hr style={{ width: '300%', height: '3px', backgroundColor: 'black', border: 'none', margin: '20px auto' }} />
       <button>Cancel</button> <button>Save</button>

        </table>
      </div>
  );}
  
  