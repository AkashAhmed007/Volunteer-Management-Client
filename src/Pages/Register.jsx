import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2'
import { AuthContext } from "../Firebase/FirebaseProvider";
const Register = () => {
    const {createUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword,setShowPassword] = useState(false)
  const [registerError,setRegisterError] = useState('');
  const {register,handleSubmit,formState: { errors }} = useForm()

  const onSubmit = (data)=>{
    const {name,email,password,image} = data
    if(password < 6){
      setRegisterError('Password should be at least 6 characters or longer')
      return;
    }else if(!/[A-Z]/.test(password)){
      setRegisterError('Your Password Should have at least one Uppercase character')
      return;
    }else if(!/[a-z]/.test(password)){
      setRegisterError('Your Password Should have at least one Lowercase character')
      return;
    }
    setRegisterError('')

    createUser(email,password,name,image)
    .then(()=>{
      Swal.fire({
        title: 'You have register successfully!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      navigate(location?.state || "/",{replace:true})
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="min-h-screen my-20 bg-[#4B5563] mx-5">
      <div className="px-6 mx-auto max-w-md p-10 space-y-3 bg-white  rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-3xl font-bold text-center">Register Now!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          {registerError && <p className="text-red-500">{registerError}</p>}
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500">This field is required</span>
            )}
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3  border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
            <label htmlFor="image" className="block dark:text-gray-600">
              PhotoURL
            </label>
            <input
              {...register("image")}
              type="text"
              name="image"
              id="image"
              placeholder="PhotURL"
              className="w-full px-4 py-3  border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <div className="flex justify-center items-center">
              <input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <span className="" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 bg-[#27b6de] text-white">
            Create Account
          </button>
        </form>
        <p className="text-sm text-center dark:text-gray-600">
          Already Registerd?
          <Link
            to="/login"
            href="#"
            className="focus:underline hover:underline text-blue-600 ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
