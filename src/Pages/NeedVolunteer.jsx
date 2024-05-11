import { Link, useLoaderData } from "react-router-dom";

const NeedVolunteer = () => {
  const volunteerDetails = useLoaderData()
  const {Thumbnail,Title,Category,Location,volunteers,Deadline,email,name,Description} = volunteerDetails
  return (
    <>
    <div className="min-h-screen my-20">
      <div className="bg-[url('https://i.ibb.co/tQ0T4Db/pexels-rdne-6646918.jpg')] bg-no-repeat bg-cover bg-center w-full h-96 flex flex-col items-center justify-center mb-5">
        <h1 className="text-5xl text-white font-bold">Need Volunteer</h1>
        <div className="w-1/2 mx-auto mt-8">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <img className="w-full mx-auto border rounded-xl" src={Thumbnail} alt="" />
        <div className="bg-gray-400 text-xl rounded-xl">
          <p>Title-{Title}</p>
          <p>Category-{Category}</p>
          <p>Location-{Location}</p>
          <p>No of volunteers-{volunteers}</p>
          <p>Deadline{Deadline}</p>
          <p>email-{email}</p>
          <p>name-{name}</p>
          <p>Description-{Description}</p>
        </div>
      </div>
      <div className="text-center">
        <Link to='/needvolunteer' className="btn btn-primary w-1/2">Be a Volunteer</Link >
      </div>
    </div>
    
    </>
  );
};

export default NeedVolunteer;
