import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Firebase/FirebaseProvider";
const AddVolunteer = () => {
  const {user} = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const date = startDate.toISOString().substr(0, 10)
  const onSubmit = (data) => {
    const {
      Thumbnail,
      Title,
      Category,
      Location,
      volunteers,
      email,
      name,
      Description,
    } = data;
    const addVolunteerInfo = {
      Thumbnail,
      Title,
      Category,
      Location,
      volunteers,
      email,
      name,
      Description,
      date
    };
    console.log(addVolunteerInfo)

    fetch("http://localhost:8000/addvolunteerdata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addVolunteerInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "You have added Volunteer Info successfully!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    setRegisterError("");
  };
  return (
    <div className="min-h-screen my-20">
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900 bg-[url('https://i.ibb.co/vQ1vX8N/pexels-cottonbro-6565759.jpg')] bg-no-repeat bg-center bg-cover">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          {registerError && <p className="text-red-500">{registerError}</p>}
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1 text-white w-3/4">
              <p className="text-2xl underline">Volunteers Information</p>
              <p className="text-base font-bold">
                Help The Future collects volunteers information in future
                purpose when need so that we can find you.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="Thumbnail"
                  className="text-xl font-bold text-white"
                >
                  Thumbnail
                </label>
                <input
                  name="Thumbnail"
                  type="text"
                  placeholder="Thumbnail"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("Thumbnail", { required: true })}
                />
                {errors.Thumbnail && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Title" className="text-xl font-bold text-white">
                  Post Title
                </label>
                <input
                  name="Title"
                  type="text"
                  placeholder="Post Title"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("Title", { required: true })}
                />
                {errors.Title && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="Category"
                  className="text-xl font-bold text-white"
                >
                  Category
                </label>
                <input
                  name="Category"
                  type="text"
                  placeholder="Category"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("Category", { required: true })}
                />
                {errors.Category && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="Location"
                  className="text-xl font-bold text-white"
                >
                  Location
                </label>
                <input
                  name="Location"
                  type="text"
                  placeholder="Location"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("Location", { required: true })}
                />
                {errors.Location && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="volunteers"
                  className="text-xl font-bold text-white"
                >
                  No. of volunteers needed
                </label>
                <input
                  name="volunteers"
                  type="text"
                  placeholder="No. of volunteers needed"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("volunteers", { required: true })}
                />
                {errors.volunteers && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="Deadline"
                  className="text-xl font-bold text-white"
                >
                  Deadline
                </label>
                <br />
                <DatePicker
                className="w-full px-4 py-2 rounded-md"
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-xl font-bold text-white">
                  Organizer email
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="User Email"
                  defaultValue={user?.email}
                  disabled
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-xl font-bold text-white">
                  Organizer name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Organizer name"
                  defaultValue={user?.displayName}
                  disabled
                  className="w-full px-4 py-2 rounded-md focus:ring dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="Description"
                  className="text-xl font-bold text-white"
                >
                  Description
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="Description"
                  className="w-80 h-20"
                  placeholder="Enter your description"
                  {...register("Description", { required: true })}
                />
              </div>
              <div className="w-full">
                <button className="btn btn-secondary mb-2">Add Post</button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddVolunteer;
