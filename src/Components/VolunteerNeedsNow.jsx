import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const VolunteerNeedsNow = ({volunteer}) => {
const {_id,Thumbnail,Title,Category,date,volunteers,} = volunteer;
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={Thumbnail}
            alt="Thumbnails"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Post Title: {Title}</h2>
          <p>Category: {Category}</p>
          <p>Deadline: {date}</p>
          <p>volunteers Need:{volunteers}</p>
          <div className="card-actions">
            <Link to={`/addvolunteerdata/${_id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

VolunteerNeedsNow.propTypes = {
    volunteer: PropTypes.object
}
export default VolunteerNeedsNow;
