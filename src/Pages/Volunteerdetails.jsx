import {useLoaderData } from "react-router-dom";

const Volunteerdetails = () => {
  const volunteerDetails = useLoaderData();
  const {Thumbnail,Title,Category,date} = volunteerDetails
  return (
    <>
      <div className="min-h-screen my-20">
        <img src={Thumbnail} alt="" />
        <p>{Title}</p>
        <p>{Category}</p>
        <p>{date}</p>
      </div>
    </>
  );
};

export default Volunteerdetails;
