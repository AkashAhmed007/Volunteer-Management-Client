import PropTypes from "prop-types";
import {Link} from "react-router-dom";
const SingleUserPost = ({post,handleDeletePost}) => {
const {Thumbnail,Title,name,Location,_id} = post
return (
    <div>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={Thumbnail}
                        alt="image"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-black">{name}</div>
                    <div className="text-sm opacity-50">{Title}</div>
                  </div>
                </div>
              </td>
              <td>
                {Title}
              </td>
              <td>{Location}</td>
              <th>
                <Link to={`/updatepost/${_id}`} className="btn btn-primary btn-md mr-3">Update</Link>
                <Link onClick={()=>handleDeletePost(_id)} className="btn btn-warning btn-md">Delete</Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

SingleUserPost.propTypes = {
    post: PropTypes.object,
    handleDeletePost:PropTypes.func
  };
export default SingleUserPost;
