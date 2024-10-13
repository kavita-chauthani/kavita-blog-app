import React from "react";
import "./BlogCard.css";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const BlogCard = ({
  title,
  description,
  image,
  username,
  time,
  id,
  isUser,
}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data.success) {
        toast.success("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li className="card">
      {isUser && (
        <div className="icon">
          <button onClick={handleEdit}>
            <MdModeEdit color="info" />
          </button>
          <button onClick={handleDelete}>
            <MdDelete color="red" />
          </button>
        </div>
      )}
      <div className="heading">
        <div>
          <RxAvatar />
        </div>
        <div>
          <p>Name:{username}</p>
          <p>Created At:{time}</p>
        </div>
      </div>
      <div>
        <img src={image} alt="an image" width="40%" height="40%" />
      </div>

      <div>
        <h2>Title:{title}</h2>
        <p>Description:{description}</p>
      </div>
    </li>
  );
};

export default BlogCard;
