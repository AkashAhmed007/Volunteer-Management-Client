import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
const SingleRequestPost = ({req}) => {
const {_id,Thumbnail,Title,name,Location,Description} = req;
const navigate = useNavigate()
const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/requestvolunteer/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Request has been Canceled.",
                  icon: "success"
                });
            }
            navigate('/mypost')
          });
      }
    });
  };
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
  };
export default SingleRequestPost;