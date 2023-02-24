import React, { useState } from "react";
import { Form, Radio } from "semantic-ui-react";
const RadioButton = ({
  //hook bali file se aa rha hai destructor ho k
  setValue,
  trigger,
  getValues,
  name,
}) => {
  const value = getValues(name);

  const handleChange = (event, { value }) => {
    setValue(name, value);
    trigger(name);
  };
  return (
    <>
      <Form.Field>
        {/*semantic ui ka dropdown use krne k liye*/}
        <Radio
          label="Male" //ye dikhega screen pe
          name="radioGroup"
          value="Male"
          checked={value === "Male"}
          onChange={handleChange} //yha pe mene function pass kiya jb b m handlechange bala function call hoga
        />
      </Form.Field>
      <Form.Field>
        {" "}
        {/*same upr bale k jaise hoga*/}
        <Radio
          label="Female"
          name="radioGroup"
          value="Female"
          checked={value === "Female"}
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
