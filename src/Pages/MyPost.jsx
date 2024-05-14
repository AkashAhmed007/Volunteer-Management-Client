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
  if(userPosts.length === 0){
    return (<p className="min-h-screen my-20">dont have data</p>);
  }else{
    return (
      <div className="min-h-screen my-20">
        <p className="text-3xl font-bold text-center border border-b-2 p-4">My Need Volunteer</p>
          {
            userPosts.map(post=><SingleUserPost key={post._id} post={post}></SingleUserPost>)
            
          }
      </div>
    );
  }
  
};

export default MyPost;
