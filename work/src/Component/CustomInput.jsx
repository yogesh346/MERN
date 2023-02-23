import React from "react";
import { Input, Form, Popup, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function CustomInput({
  //ye sare hooks bali file se aa re  hai destructor ho kr
  setValue,
  trigger, // check hone lgta hai dubara agr koi field khali ha to usko bhro
  errors,
  name,
  placeholder,
}) {
  const Change = (e, { name, value }) => {
    //change ka function bnaya change krne k liye, e  event receive kr ra hai
    setValue(name, value); //react hook form m store ki value change krne k liye
    trigger(name);
  };

  return (
    <div>
      <Form.Field>
        <div>
          <label>{name}</label>
          {name === "Age" && (
            <Popup
              trigger={
                <Icon color="grey" name="question circle" size="small" />
              }
              content="Age is between 18 and 40"
            />
          )}
        </div>
        <Input
          type="text"
          name={name}
          onChange={Change}
          placeholder={placeholder}
          //   {register(name, validations)}
        />
        {errors[name]?.type === "required" && <p>Please check the {name}</p>}
      </Form.Field>
    </div>
  );
}

export default CustomInput;
