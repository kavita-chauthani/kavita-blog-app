import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./CreateBlog.css";

const CreateBlog = () => {
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  //input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/blog/create-blog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog Created");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <h2>Create A Post</h2>
          <label htmlFor="title">Title</label>
          <input
            type="title"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            className="sentence"
            required
          />

          <label htmlFor="description">Description</label>
          <input
            type="description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            className="sentence"
            required
          />

          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            name="image"
            width="50px"
            height="50px"
            value={inputs.image}
            onChange={handleChange}
            className="sentence"
            required
          />
          <button type="submit" className="submite">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateBlog;
