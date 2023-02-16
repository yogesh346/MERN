import React from "react";
import Input from "../../container/Input";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="Contact">
        <form>
          <fieldset>
            {" "}
            {/* drawn a box around the related element*/}
            <legend>Contact</legend> {/*box k beach m hota hai*/}
            <label for="fname" className="lbl">
              {" "}
              {/*name of the test field*/}
              First name:
            </label>
            <input type="text" id="fname" name="fname" className="inp" />
            <label for="lname" className="lbl">
              Last name:
            </label>
            <input type="text" id="lname" name="lname" className="inp" />
            <label for="email" className="lbl">
              Email
            </label>
            <input type="email" id="email" name="email" className="inp" />
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Contact;
