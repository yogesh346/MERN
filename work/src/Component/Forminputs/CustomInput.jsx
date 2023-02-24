import React from "react";
import { Input, Form, Popup, Icon } from "semantic-ui-react";
import { Fragment } from "react";

function CustomInput({
  //ye sare hooks bali file se aa re  hai destructor ho kr
  validation,
  register,
  setValue,
  text,
  focus,
  normalize,
  trigger, // check hone lgta hai dubara agr koi field khali ha to usko bhro
  errors,
  name,
}) {
  const handleChange = (e, { name, value }) => {
    //change ka function bnaya change krne k liye, e  event receive kr ra hai
    setValue(name, value); //react hook form m store ki value change krne k liye
    if (normalize) {
      console.log(normalize(value));
      e.target.value = normalize(value);
      setValue(name, normalize(value));
    } else {
      setValue(name, value);
    }
    trigger(name);
  };

  return (
    <Form.Field>
      <div className="input-box">
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
          type={text}
          name={name}
          validation={validation}
          {...register(name, validation)}
          onChange={handleChange}
          //    onBlur={handleBlur}
          focus={focus}
          //   {register(name, validations)}
        />
        {errors[name]?.type === "required" && (
          <label basic color="red" pointing="left">
            Please Enter your {name}
          </label>
        )}
        {errors[name]?.type === "pattern" && (
          <p>Please Check pattern of {name}</p>
        )}
        {errors[name]?.type !== "required" && errors[name]?.type === "min" && (
          <p>{name} is greater than 17</p>
        )}
        {errors[name]?.type !== "required" && errors[name]?.type === "max" && (
          <p>{name}is below 40</p>
        )}
      </div>
    </Form.Field>
  );
}

export default CustomInput;
