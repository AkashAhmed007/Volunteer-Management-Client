import { Link} from "react-router-dom";
import PropTypes from "prop-types";
const SingleRequestPost = ({req,handleDelete}) => {
const {_id,Thumbnail,Title,name,Location,Description} = req;
return (
        <div>
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
               {Description}
              </td>
              <td>{Location}</td>
              <th>
                <Link onClick={()=>handleDelete(_id)}  className="btn btn-accent btn-md">Cancel</Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 
        </div>
    );
};
SingleRequestPost.propTypes = {
    req: PropTypes.object,
    handleDelete: PropTypes.func
  };
export default SingleRequestPost;