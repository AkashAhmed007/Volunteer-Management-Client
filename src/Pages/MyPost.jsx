import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import SingleUserPost from "../Components/SingleUserPost";
const MyPost = () => {
  const { user } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/addvolunteerdataByEmail/${user?.email}`)
      .then((data) => {
        setUserPosts(data.data);
      });
  }, [user]);
  return (
    <div className="min-h-screen my-20">
        {
          userPosts.map(post=><SingleUserPost key={post._id} post={post}></SingleUserPost>)
          
        }
    </div>
  );
};

export default MyPost;
