import PropTypes from "prop-types";
const SingleUserPost = ({post}) => {
    const {Thumbnail,Title,name,Location} = post
    console.log(Thumbnail,Title,name,Location)
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
                <button className="btn btn-primary btn-xs mr-3">Update</button>
                <button className="btn btn-warning btn-xs">Delete</button>
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
