import PropTypes from "prop-types";
const ProgramDetailsCard = ({ program }) => {
  const { Thumbnail, Title, Category, date } = program;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={Thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Title}</h2>
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
    </div>
  );
};
ProgramDetailsCard.propTypes = {
  program: PropTypes.object,
};
export default ProgramDetailsCard;
