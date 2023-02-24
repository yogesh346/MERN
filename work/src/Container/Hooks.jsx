import React, { useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import {
  Notes,
  CustomCheckbox,
  CustomDropdown,
  CustomInput,
  RadioButton,
  firstnamevalidation,
  lastnamevalidation,
  Agevalidation,
  Gendervalidation,
  Phonevalidation,
  Termsvalidation,
  Emailvalidation,
  normalizePhone,
  Departmentvalidation,
} from "../Component";

export default function FormValidation() {
  const {
    register, //Trake or manage krta hai input field ko
    setValue, //khud se value update krne k liye use kiya hai
    trigger,
    getValues, //check hone lgta hai dubara agr koi field khali ha to usko bhro
    handleSubmit, //react hook form ka method hai from submit krne k liye
    formState: { errors }, //sare errors ki information rhti h isme
  } = useForm(); //sara hook form ka function return krte hai phr humne
  //iska destructur kr k alg alg name de diye hai upr register setvalue  trigger  etc

  //ye validation ka rule hai ki kon se validation m kya hona chahiye

  // register kr rha hai input field ko and validation lga rha hai
  useEffect(() => {
    register("firstname", firstnamevalidation);
    register("lastname", lastnamevalidation);
    register("Phone", Phonevalidation);
    register("Email", Emailvalidation);
    register("Age", Agevalidation);
    register("Gender", Gendervalidation);
    register("Department", Departmentvalidation);
    register("Terms", Termsvalidation);
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="HooksForm">
      {/*css use ki hai mene hooksform pe*/}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>React Hook Form</h3>

        <CustomInput
          name="firstname" //register krne k liye firstname  diya hai
          placeholder="First Name"
          register={register} // hook form ka register use kr re  hai
          errors={errors} //error pass kr raa hai  error object hook form ka
          setValue={setValue}
          trigger={trigger} //
          validations={firstnamevalidation}
        />

        <CustomInput
          name="lastname"
          placeholder="Last Name"
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
          validations={lastnamevalidation}
        />
        <span>Gender</span>
        <RadioButton
          name="Gender"
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
          getValues={getValues}
          validations={Gendervalidation}
        />

        <CustomInput
          name="Email"
          placeholder="Email"
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
          validations={Emailvalidation}
        />
        <CustomInput
          name="Age"
          placeholder="Age"
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
          validations={Agevalidation}
        />
        <CustomInput
          name="Phone"
          placeholder="Phone"
          register={register}
          errors={errors}
          normalize={normalizePhone}
          setValue={setValue}
          trigger={trigger}
          validations={Phonevalidation}
        />
        <CustomDropdown
          name="Department"
          placeholder="department"
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
          validations={Phonevalidation}
        />

        <div className="from-group">
          {/*yha notes bali file chal re hai */}
          <Notes register={register} errors={errors} />
        </div>
        <Form.Field>
          <CustomCheckbox
            name="Terms"
            errors={errors}
            setValue={setValue}
            trigger={trigger}
            register={register}
            getvalues={getValues}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
