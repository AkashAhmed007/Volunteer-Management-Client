import { useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "../Components/NeedVolunteerCard";
const NeedVolunteer = () => {
  const needVolunteer = useLoaderData()
  const handleSearch = (e)=>{
    e.preventDefault();
    const search = e.target.value
    console.log(search)
  }
  return (
    <>
    <div className="min-h-screen my-20">
      <div className="bg-[url('https://i.ibb.co/wB26ZL8/pexels-cottonbro-6590920.jpg')] bg-no-repeat bg-cover bg-center w-full h-96 flex flex-col items-center justify-center mb-5">
        <h1 className="text-5xl text-white font-bold">Need Volunteer</h1>
        <div className="w-1/2 mx-auto mt-8">
          <label className="input input-bordered flex items-center gap-2">
            <form  onClick={handleSearch}>
            <input type="text" name='search' className="grow" placeholder="Search" />
            <button className="ml-96">
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
            </button>
            </form>
          </label>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 m-5">
        {
          needVolunteer.map(volunteer=><NeedVolunteerCard key={volunteer._id} volunteer={volunteer}></NeedVolunteerCard>)
        }
      </div>
    </div>
    
    </>
  );
};

export default NeedVolunteer;
