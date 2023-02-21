import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import Notes from "./Notes";

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>User Registration Form</h3>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register("firstName", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.firstName && <p>This field is required</p>}

        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            {...register("lastName", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.lastName && <p>This field is required</p>}
        <Form.Field>
          <label>Age</label>
          <input
            placeholder="Age"
            type="text"
            {...register("Age", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.Age && <p>This field is required</p>}
        <Form.Field>
          <label>Gender</label>
          <input
            placeholder="Gender"
            type="text"
            {...register("Gender", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.Gender && <p>This field is required</p>}

        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Field>
        {errors.email && <p>This field is required</p>}
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
          />
        </Form.Field>
        {errors.password && <p>This field is required</p>}
        <Form.Field>
          <label>Phoneno</label>
          <input
            placeholder="phoneno"
            type="text"
            {...register("Phoneno", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.Phoneno && <p>This field is required</p>}

        <div className="from-group">
          {" "}
          {/*yha notes bali file chal re hai */}
          <Notes register={register} errors={errors} />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
