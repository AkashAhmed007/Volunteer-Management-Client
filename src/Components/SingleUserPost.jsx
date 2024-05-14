import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const SingleUserPost = ({post}) => {
const {Thumbnail,Title,name,Location,_id} = post
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
      fetch(`http://localhost:8000/updatepost/${_id}`, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
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
                <Link onClick={()=>handleDelete(_id)} className="btn btn-warning btn-md">Delete</Link>
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
  };
export default SingleUserPost;
