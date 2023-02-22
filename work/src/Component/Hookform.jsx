// import React from "react";
// import { useForm } from "react-hook-form";
// import "./Hookform.css";

// function Hookform() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//     },
//   });
//   const onSubmit = (data) => console.log(data);
//   return (
//     <div className="formfield">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="inputField">
//           <input
//             {...register("firstName", { required: true })}
//             placeholder="First Name"
//           />
//           {errors.firstName?.type === "required" && "name is required"}
//         </div>
//         <div className="inputField">
//           <input
//             {...register("lastName", { required: true })}
//             placeholder="Last Name"
//           />
//           {errors.lastName && <p> Last name is required.</p>}
//         </div>
//         <div className="inputField">
//           <input
//             {...register("Email", { required: true })}
//             placeholder="Email"
//           />
//           {errors.Email && <p>Email is required.</p>}
//         </div>
//         <div className="inputField">
//           <input
//             {...register("Contact", { required: true })}
//             placeholder="Contact"
//           />
//           {errors.Contact && <p>Contact is required.</p>}
//         </div>
//         <div className="inputField">
//           <input
//             {...register("Gender", { required: true })}
//             placeholder="Gender"
//           />
//           {errors.Gender && <p>Gender is required.</p>}
//         </div>
//         <div className="inputField">
//           <input {...register("age", { pattern: /\d+/ })} placeholder="age" />
//           {errors.age && <p>Please enter number for age.</p>}
//         </div>
//         <div className="inputField">
//           <button className="ui button">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default Hookform;
