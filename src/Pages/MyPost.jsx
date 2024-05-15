import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import SingleUserPost from "../Components/SingleUserPost";
import SingleRequestPost from "../Components/SingleRequestPost";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const MyPost = () => {
  const { user } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState([]);
  const [requestPosts,setRequestPosts] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`https://volunteer-management-server-side.vercel.app/addvolunteerdataByEmail/${user?.email}`)
      .then((data) => {
          setUserPosts(data.data);
      });
      axios.get('https://volunteer-management-server-side.vercel.app/requestvolunteer')
      .then(data=>{
        setRequestPosts(data.data)
      })
  }, [user]);


  const handleDeletePost = (_id) => {
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
        fetch(`https://volunteer-management-server-side.vercel.app/updatepost/${_id}`, {
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
                const remainingPost = userPosts.filter(post=>post._id !== _id)
                setUserPosts(remainingPost)
            }
            navigate('/mypost')
          });
      }
    });
  };

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
          fetch(`https://volunteer-management-server-side.vercel.app/requestvolunteer/${_id}`, {
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
                  const remainingRequest = requestPosts.filter(req=>req._id !== _id)
                  setRequestPosts(remainingRequest)
              }
              navigate('/mypost')
            });
        }
      });
    };


  if(userPosts.length === 0){
    return (<p className="min-h-screen my-20">dont have data</p>);
  }else{
    return (
      <div className="min-h-screen my-20">
        <p className="text-3xl font-bold text-center border border-b-2 p-4">My Need Volunteer</p>
          <div>
          {
            userPosts.map(post=><SingleUserPost key={post._id} post={post} handleDeletePost={handleDeletePost}></SingleUserPost>)
            
          }
          </div>
          <div>
          <p className="text-3xl font-bold text-center border border-b-2 p-4">My Volunteer Request Post</p>
          {
            requestPosts.map(req=><SingleRequestPost key={req._id} req={req} handleDelete={handleDelete}></SingleRequestPost>)
          }
          </div>
      </div>
    );
  }
  
};

export default MyPost;
