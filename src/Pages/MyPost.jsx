import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import SingleUserPost from "../Components/SingleUserPost";
import SingleRequestPost from "../Components/SingleRequestPost";
const MyPost = () => {
  const { user } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState([]);
  const [requestPosts,setRequestPosts] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8000/addvolunteerdataByEmail/${user?.email}`)
      .then((data) => {
          setUserPosts(data.data);
      });
      axios.get('http://localhost:8000/requestvolunteer')
      .then(data=>{
        setRequestPosts(data.data)
      })
  }, [user]);
  if(userPosts.length === 0){
    return (<p className="min-h-screen my-20">dont have data</p>);
  }else{
    return (
      <div className="min-h-screen my-20">
        <p className="text-3xl font-bold text-center border border-b-2 p-4">My Need Volunteer</p>
          <div>
          {
            userPosts.map(post=><SingleUserPost key={post._id} post={post}></SingleUserPost>)
            
          }
          </div>
          <div>
          <p className="text-3xl font-bold text-center border border-b-2 p-4">My Volunteer Request Post</p>
          {
            requestPosts.map(req=><SingleRequestPost key={req._id} req={req}></SingleRequestPost>)
          }
          </div>
      </div>
    );
  }
  
};

export default MyPost;
