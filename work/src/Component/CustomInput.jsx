import React from "react";
import { Input, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function CustomInput({
  setValue,
  trigger,
  errors,
  name,
  validations,
  register,
  placeholder,
}) {
  const Change = async (e, { name, value }) => {
    setValue(name, value);
    await trigger(name);
  };

  return (
    <div>
      <Form.Field>
        <label>{name}</label>
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
