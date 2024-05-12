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
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
           Be Vlounteer
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
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
