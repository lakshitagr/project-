import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = async (data) => {
    console.log(data.avatar[0]);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('password', data.password);
    formData.append('avatar', data.avatar[0]);
    console.log(formData);
    const res = await axios.post(
      'http://localhost:3000/auth/register',
      formData
    );
    console.log(res);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-sm font-semibold mb-2">Name</label>
        <input
          className="w-64 border border-slate-500 rounded-full p-2"
          placeholder="Enter name"
          type="text"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
        <label className="block">Email</label>
        <input
          className="w-64 border border-slate-500 rounded-full p-2"
          type="email"
          {...register('email')}
        />
        <label className="block">Phone Number</label>
        <input
          className="w-64 border border-slate-500 rounded-full p-2"
          type="number"
          {...register('phoneNumber')}
        />
        <label className="block">Password</label>
        <input
          className="w-64 border border-slate-500 block rounded-full p-2"
          type="password"
          {...register('password')}
        />

        <label className="block">Profile</label>
        <input
          className="w-64 border border-slate-500 block rounded-full p-2"
          type="file"
          {...register('avatar')}
        />
        <button
          className="px-10 cursor-pointer py-2 bg-sky-500 text-white font-smibold rounded-full mt-2"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;





// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   console.log(errors);

//   const onSubmit = async (data) => {
//     const res = await axios.post("http://localhost:5000/auth/register", data);
//     console.log(res);
//   };
//   return (
    
//     <div className="flex items-center justify-center min-h-screen bg-gray-600">
//       <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Left Panel - Sign In */}
//         <div className="w-1/2 bg-teal-600 text-white flex flex-col items-center justify-center p-8">
//           <h2 className="text-2xl font-semibold">Welcome Back!</h2>
//           <p className="text-center mt-2 text-sm">
//             To keep connected with us, please login with your personal info.
//           </p>
//           <button className="mt-6 px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-teal-600 transition">
//             SIGN IN
//           </button>
//         </div>
        
//         {/* Right Panel - Sign Up */}
//         <div className="w-1/2 p-8 flex flex-col justify-center">
//           <h2 className="text-2xl font-semibold text-teal-600 text-center">Create Account</h2>
//           <div className="flex justify-center space-x-4 mt-4">
//             <button className="border p-2 rounded-full">f</button>
//             <button className="border p-2 rounded-full">G+</button>
//             <button className="border p-2 rounded-full">in</button>
//           </div>
//           <p className="text-sm text-center mt-2">or use your email for registration:</p>
          
//           <form className="mt-4">
//             <input className="w-full p-2 border rounded mt-2" type="text" placeholder="Name" />
//             <input className="w-full p-2 border rounded mt-2" type="email" placeholder="Email" />
//             <input className="w-full p-2 border rounded mt-2" type="text" placeholder="Phone Number" />
//             <input className="w-full p-2 border rounded mt-2" type="password" placeholder="Password" />
//             <button className="w-full mt-4 bg-red-600 text-white py-2 rounded hover:bg-teal-700 transition">
//               SIGN UP
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     // <div className="h-screen flex items-center justify-center">
//     //   <form onSubmit={handleSubmit(onSubmit)}>
//     //     <label className="block text-sm font-semibold mb-2">Name</label>
//     //     <input
//     //       className="w-64 border border-slate-500 rounded-full p-2"
//     //       placeholder="Enter name"
//     //       type="text"
//     //       {...register("name", { required: "Name is required" })}
//     //     />
//     //     {errors.name && (
//     //       <p className="text-red-500 text-xs">{errors.name.message}</p>
//     //     )}
//     //     <label className="block">Email</label>
//     //     <input
//     //       className="w-64 border border-slate-500 rounded-full p-2"
//     //       type="email"
//     //       {...register("email",{ required: 'Email is required' })}
//     //     />
//     //     {errors.name && (
//     //       <p className="text-red-500 text-xs">{errors.name.message}</p>
//     //     )}
//     //     <label className="block">Phone Number</label>
//     //     <input
//     //       className="w-64 border border-slate-500 rounded-full p-2"
//     //       type="number"
//     //       {...register("phoneNumber", { required: 'PhoneNumber is required' })}
//     //     />
//     //     {errors.name && (
//     //       <p className="text-red-500 text-xs">{errors.name.message}</p>
//     //     )}
//     //     <label className="block">Password</label>
//     //     <input
//     //       className="w-64 border border-slate-500 block rounded-full p-2"
//     //       type="password"
//     //       {...register("password", { required: 'Password is required' })}
//     //     />
//     //     {errors.name && (
//     //       <p className="text-red-500 text-xs">{errors.name.message}</p>
//     //     )}
//     //     <button
//     //       className="px-10 cursor-pointer py-2 bg-sky-500 text-white font-smibold rounded-full mt-2"
//     //       type="submit"
//     //     >
//     //       Register
//     //     </button>
//     //   </form>
//     // </div>
//   );
// };

// export default Register;
