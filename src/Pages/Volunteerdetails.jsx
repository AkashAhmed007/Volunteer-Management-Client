import { useContext } from "react";
import {Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
import Swal from "sweetalert2";

const Volunteerdetails = () => {
  const volunteerDetails = useLoaderData();
  const {user} = useContext(AuthContext)
  const {_id,Thumbnail, Title, Category,date,Description,Location,volunteers,email,name} = volunteerDetails
  const navigate = useNavigate()
  const requestData = {
    "Thumbnail" : Thumbnail,
    "Title" : Title,
    "Category":Category,
    "date":date,
    "Description":Description,
    "Location":Location,
    "volunteers":volunteers,
    "OrganizeEmail":email,
    "UserEmail":user?.email,
    "OrganizeName":name,
    "UserName":user?.displayName,
    "Status": "Requested"
  }
  const handleRequest = ()=>{
    fetch('http://localhost:8000/requestvolunteer',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(requestData),
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.insertedId) {
        Swal.fire({
          title: "You have requested successfully!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
      navigate(location?.state || "/",{replace:true});
    })
  }
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
              <p className="font-bold">Status: Requested</p>
              <div className="modal-action">
                <form method="dialog">
                  <Link to='/' className="btn btn-primary mr-5">Go Back</Link>
                  <button onClick={handleRequest} className="btn btn-secondary">Request</button>
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
