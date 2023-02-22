// import React from "react"; //react import ki
// import { useForm } from "react-hook-form";
// import { Form } from "semantic-ui-react";
// import Notes from "./Notes";

// const GENDER_OPTIONS = [
//   { text: "Male", value: "male" }, //gender k liye option liye hai
//   { text: "Female", value: "female" },
//   { text: "Other", value: "other" },
// ];
// const UserRegistrationForm = () => {
//   //function bnaya
//   const {
//     //destructor kiye kuch method
//     register, //form ki jitni b field hai unko hum register krte hai
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (values) => console.log(values);

//   function formatData(item) {
//     console.log(item.value);
//     item.value = item.value.replace(/(\d{5})(\d{5})/, `$1-$2`);
//   }

//   return (
//     <Form.Field onSubmit={handleSubmit(onSubmit)}>
//       <h3>User Registration Form</h3>
//       <div className="form-group">
//         <label htmlFor=" firstName"> Enter the First Name</label>{" "}
//         {/*phli field */}
//         {/*yha mene input field li hai jiska mene type text diya */}
//         {/*spred oprater use krege register k andr hum argument pass krege firstname*/}
//         <input
//           type="text"
//           className="form-control fname"
//           {...register("firstName", {
//             required: true,
//           })}
//         />
//         {errors.firstName && (
//           <span className="field_level_error">This field is required</span>
//         )}
//       </div>

//       <div className="form-group">
//         <label htmlFor="lastName">Last Name</label>
//         <input
//           type="text"
//           className="form-control"
//           {...register("lastName", {
//             required: true,
//           })}
//         />
//         {errors.lastName && (
//           <span className="field_level_error">This field is required</span>
//         )}
//       </div>

//       <div className="form-group">
//         <label htmlFor="phoneno">Phone No</label>
//         <input
//           type="text"
//           className="form-control"
//           {...register("phoneno", {
//             required: true,
//           })}
//         />
//         {errors.phoneno && (
//           <span className="field_level_error">This field is required</span>
//         )}
//       </div>

//       <div className="form-group">
//         <label htmlFor="age">Age</label>
//         <input
//           type="text"
//           className="form-control"
//           {...register("age", {
//             required: true,
//           })}
//         />
//         {errors.age && (
//           <span className="field_level_error">This field is required</span>
//         )}
//       </div>

//       <div className="form-group">
//         <label htmlFor="gender">Gender</label>
//         <select
//           className="form-control"
//           {...register("gender", { required: true })}
//         >
//           <option value=" Select Gender"></option>{" "}
//           {/*text show hoga secreen pe */}
//           {GENDER_OPTIONS.map((option, index) => (
//             <option key={index} value={option.value}>
//               {option.text}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input type="text" className="form-control" {...register("email")} />
//       </div>

//       <div className="from-group">
//         <Notes register={register} errors={errors} />
//       </div>

//       <div className="from-group">
//         <label htmlFor="passward">Passward</label>
//         <input
//           type="password"
//           className="form-control"
//           {...register("passward", {
//             required: true,
//           })}
//         />
//         {errors.password && (
//           <span className="field_level_error">This field is required</span>
//         )}
//       </div>

//       <button
//         type="submit"
//         onClick={handleSubmit(onSubmit)}
//         className="btn btn-primary mt-2"
//       >
//         Submit
//       </button>
//     </Form.Field>
//   );
// };

// export default UserRegistrationForm;
