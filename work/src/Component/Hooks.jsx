import React, { useEffect } from "react";
import { Form, Checkbox, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import Notes from "./Notes";
import CustomInput from "./CustomInput";
import RadioButton from "./RadioButton";
import CustomDropdown from "./Dropdown";
import CustomCheckbox from "./Checkbox";

export default function FormValidation() {
  const {
    register, //trake or manage krta hai input field ko
    setValue, //khud se value update krne k liye use kiya hai
    trigger, //check hone lgta hai dubara agr koi field khali ha to usko bhro
    handleSubmit, //react hook form ka method hai from submit krne k liye
    formState: { errors }, //sare errors ki information rhti h isme
  } = useForm(); //sara hook form ka function return krte hai phr humne iska destructur kr k alg alg name de diye hai

  //ye validation ka rule hai ki kon se validation m kya hona chahiye
  const firstnamevalidation = { required: true };
  const lastnamevalidation = { required: true };
  const Phonevalidation = { required: true };
  const Emailvalidation = { required: true };
  const Agevalidation = { required: true, min: 18, max: 40 };
  const Departmentvalidation = { required: true };
  const Gendervalidation = { required: true };
  const Termsvalidation = { required: true };

  //register kr rha hai sbko input field ko
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
    //console m data dekhne k liye lgaya hai
    console.log(data);
  };
  //console.log(errors); //console m error dekhne k liye
  return (
    <div className="HooksForm">
      {" "}
      {/*css use ki hai mene hooksform pe*/}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>React Hook Form</h3>

        <CustomInput
          name="firstname" //register krne k liye name  diya hai
          placeholder="First Name"
          register={register} // yha pe sare method pass ho ra hai upr bala  jo useform se aa ra hai
          errors={errors}
          setValue={setValue}
          trigger={trigger}
          validations={firstnamevalidation}
        />

        <CustomInput
          name="lastname"
          placeholder="last Name"
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
          // placeholder={"Gender"}
          setValue={setValue}
          trigger={trigger}
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
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
