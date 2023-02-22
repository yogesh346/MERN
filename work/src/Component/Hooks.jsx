import React, { useEffect } from "react";
import { Form, Checkbox, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import Notes from "./Notes";
import CustomInput from "./CustomInput";
import RadioButton from "./RadioButton";

export default function FormValidation() {
  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //const namevalidation = { required: true };
  const firstnamevalidation = { required: true };
  const lastnamevalidation = { required: true };
  const Phonevalidation = { required: true };
  const Emailvalidation = { required: true };
  const passwordvalidation = { required: true };
  const Gendervalidation = { required: true };

  useEffect(() => {
    register("firstname", firstnamevalidation);
    register("lastname", lastnamevalidation);
    register("Phone", Phonevalidation);
    register("Email", Emailvalidation);
    register("password", passwordvalidation);
    register("Gender", Gendervalidation);
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  // console.log(errors);
  return (
    <div className="HooksForm">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>React Hook Form</h3>

        <CustomInput
          name="firstname"
          placeholder="First Name"
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
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
          name="password"
          placeholder="password"
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
          validations={passwordvalidation}
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

        <div className="from-group">
          {" "}
          {/*yha notes bali file chal re hai */}
          <Notes register={register} errors={errors} />
        </div>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
