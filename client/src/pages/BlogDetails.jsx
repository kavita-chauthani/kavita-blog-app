import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetails = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const id = useParams().id;
  const [inputs, setInputs] = useState({});
  //get blog details
  const getBlogDetail = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogDetail;
  }, [id]);
  console.log(blog);

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
      const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog Updated");
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
          <h2>Update A Post</h2>
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
          <button type="submit" className="update">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default BlogDetails;
