import { useContext } from "react";
import {Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";

const Volunteerdetails = () => {
  const volunteerDetails = useLoaderData();
  const {user} = useContext(AuthContext)
  const {_id, Thumbnail, Title, Category, date,Description,Location,volunteers,email,name} = volunteerDetails
  return (
    <>
      <div className="min-h-screen my-20">
        <img src={Thumbnail} alt="" />
        <p>{Title}</p>
        <p>{Category}</p>
        <p>{date}</p>
        <div className="card-actions justify-end">
          <Link to={`/addvolunteerdata/${_id}`}
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
           Be Vlounteer
          </Link>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
            <img src={Thumbnail}/>
              <h3 className="font-bold text-lg underline">Program-Title: {Title}</h3>
              <p className="font-bold">Category: {Category}</p>
              <p className="py-4 underline">
               Description: {Description}
              </p>
              <p className="font-bold">Location: {Location}</p>
              <p className="font-bold">No of Volunteers: {volunteers}</p>
              <p className="font-bold">Organizer-Email: {email}</p>
              <p className="font-bold">LoggedIn User Email: {user?.email}</p>
              <p className="font-bold">Organizaation-Name: {name}</p>
              <p className="font-bold">LoggedIn User Name: {user?.displayName}</p>
              
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-secondary">Request</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default Volunteerdetails;
