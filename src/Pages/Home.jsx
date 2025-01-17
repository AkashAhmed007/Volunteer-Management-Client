import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import VolunteerNeedsNow from "../Components/VolunteerNeedsNow";
import Hero from "../Components/Hero";
import {Helmet} from "react-helmet";
const Home = () => {
  const volunteerData = useLoaderData();
  return (
   
    <div className="min-h-screen my-20">
      <Helmet>
        <title>HelpTheFuture-Home</title>
      </Helmet>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <h1 className="text-2xl bg-gray-200 text-center p-12 my-5">
        This is Volunteer Needs Now section
      </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 ">
        {volunteerData.map((volunteer) => (
          <VolunteerNeedsNow key={volunteer._id} volunteer={volunteer}></VolunteerNeedsNow>
        ))}
        </div>
      <div className="text-center">
        <Link to='/allprogram' className="btn btn-primary w-1/2">View All</Link >
      </div>
    </div>
  );
};

export default Home;
