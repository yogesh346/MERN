import React, { Fragment, useState } from "react";
import { Form, Radio } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const RadioButton = ({
  register,
  errors,
  setValue,
  trigger,
  name,
  validations,
}) => {
  const [gender, setGender] = useState(null);
  const handleChange = (event, { value }) => {
    setValue(name, value);
    trigger(name);
    setGender(value);
  };
  return (
    <>
      <Form.Field>
        <Radio
          label="Male"
          name="radioGroup"
          value="Male"
          checked={gender === "Male"}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label="Female"
          name="radioGroup"
          value="Female"
          checked={gender === "Female"}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label="Other"
          name="radioGroup"
          value="Other"
          checked={gender === "Other"}
          onChange={handleChange}
        />
      </Form.Field>
    </>
  );
  // return(
  //     <>
  //     <span className="gender-title">Gender</span>
  //     <div className="gender-category">
  //     {/* <Form.Group>
  //     <Form.Field>
  //     <label htmlFor="Male">
  //         <input type="radio" id="M" name="Gender" value="Male" {...register("Gender",{required:true})}/>
  //         Male</label>
  //     </Form.Field>
  //      <Form.Field>
  //      <label htmlFor="Female" >
  //      <input type="radio" id="F" name="Gender" value="Female" {...register("Gender",{required:true})}/>
  //      Female</label>
  //  </Form.Field>
  //  <Form.Field>
  //  <label htmlFor="Other" >
  //     <input type="radio" id="O" name="Gender" value="Other" {...register("Gender",{required:true})}/>
  //      Other</label>
  //  </Form.Field>
  //  </Form.Group> */}

  // <Radio />
  //  </div>
  //  </>
  // )
};
export default RadioButton;
