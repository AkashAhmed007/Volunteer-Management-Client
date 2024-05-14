import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UpdatePost = () => {
const navigate = useNavigate();
const data = useLoaderData()
const {_id,
  Thumbnail,
  Title,
  Category,
  Location,
  volunteers,
  email,
  name,
  Description,} = data
const [startDate, setStartDate] = useState(new Date());
const date = startDate.toISOString().substr(0, 10);
const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const Thumbnail = form.Thumbnail.value
        const Title = form.Title.value
        const Description = form.Description.value
        const Category = form.Category.value
        const Location = form.Location.value
        const volunteers = form.volunteers.value
        const email = form.email.value
        const name = form.name.value
        const UpdatepostedData ={
            Thumbnail,Title,Description,Category,Location,volunteers,date,email,name
        }
fetch(`http://localhost:8000/updatepost/${_id}`,{
      method: 'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(UpdatepostedData)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'You have Updated Post successfully!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
      navigate('/mypost')
    })
  }
return (
<div className="min-h-screen my-20">
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900 bg-[url('https://i.ibb.co/Lp1cRjr/background-2203989-1280.jpg')] bg-no-repeat bg-center bg-cover">
        <form onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
         
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-4 col-span-full lg:col-span-1 text-white text-center">
              <p className="text-2xl font-bold">
               Update Your Information
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Thumbnail" className="text-xl font-bold text-white">
                Thumbnail
                </label>
                <input
                  name="Thumbnail"
                  type="text"
                  placeholder="Thumbnail"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  defaultValue={Thumbnail}
                />
                
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Title" className="text-xl font-bold text-white">
                Title
                </label>
                <input
                  name="Title"
                  type="text"
                  placeholder="Title"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                 defaultValue={Title}
                />
               
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Description" className="text-xl font-bold text-white">
                Description
                </label>
                <input
                  name="Description"
                  type="text"
                  placeholder="Description"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                 defaultValue={Description}
                />
                
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Category" className="text-xl font-bold text-white">
                Category
                </label>
                <input
                  name='Category'
                  type="text"
                  placeholder="Category"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  defaultValue={Category}
                />
                 
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Location" className="text-xl font-bold text-white">
                Location

                </label>
                <input
                  name="Location"
                  type="text"
                  placeholder="Location"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  defaultValue={Location}
                />
                
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="volunteers" className="text-xl font-bold text-white">
                No. of volunteers
                </label>
                <input
                  name = "volunteers"
                  type="text"
                  placeholder="No. of volunteers need"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  defaultValue={volunteers}
                />
                 
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
                  placeholder="Logged In User Email"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  defaultValue={email}
                />
                 
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-xl font-bold text-white">
                Organizer name
                </label>
                <input
                  name = 'name'
                  type="text"
                  placeholder="User Name"
                  className="w-full px-4 py-2 mb-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  defaultValue={name}
                />
                <input className="btn btn-secondary" type="submit" value="Update" />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
    );
};

export default UpdatePost;