import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProgramDetailsCard = ({program}) => {
  const {_id,Thumbnail, Title, Category, date} = program
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
          <Link to={`/addvolunteerdata/${_id}`}
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
           Be Vlounteer
          </Link>
        </div>
      </div>
    </div>
  );
};
ProgramDetailsCard.propTypes = {
  program: PropTypes.object,
};
export default ProgramDetailsCard;
