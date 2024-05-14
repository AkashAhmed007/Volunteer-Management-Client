import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NeedVolunteerCard = ({ volunteer }) => {
  const {
    _id,
    Thumbnail,
    Title,
    Category,
    Location,
    volunteers,
    OrganizeEmail,
    UserEmail,
    OrganizeName,
    Description,
    date,
    UserName,
    Status
  } = volunteer;
  return (
    <div>
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src={Thumbnail}
          alt="Article"
        />
        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {Title}
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              role="link"
            >
              {Category}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {Description}
            </p>
            <p>Location: {Location}</p>
            <p>Volunteer Need: {volunteers}</p>
            <p>{OrganizeName}</p>
            <p>{UserName}</p>
            <p className="mr-2">{UserEmail}</p>
            <p>{Status}</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full mr-2"
                  src={Thumbnail}
                  alt="Avatar"
                />
                <p className="mr-2">{OrganizeEmail}</p><br />
                
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  role="link"
                >
                  
                  
                </a>
              </div>
              <span className="mx-4 text-xs text-gray-600 dark:text-gray-300">
                Deadline: {date}
              </span>
              <Link to={`/addvolunteerdata/${_id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
NeedVolunteerCard.propTypes = {
  volunteer: PropTypes.object,
};
export default NeedVolunteerCard;
