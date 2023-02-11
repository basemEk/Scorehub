import React from "react";
import "./Blog.css";
import Chatbot from "../../components/Chatbot/Chatbot";
import cbot from "../../assets/chatbot.png";
import NoBlogs from "../NoBlogs/NoBlogs";

const blogs = [1, 2, 3, 4, 5, 6];

const BlogCard = ({ blog }) => (
  <div className="blog-wrapper">
    <div className="blog-square">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDeegHFQgnzvog9sHSdnTq5U3Qs7CaNS_3PA&usqp=CAU"
        alt={`photos for item `}
        className="blog-img"
      />
      <div className="blog-h1">Blog Title comes here</div>
      <p>
        {`Lorem ipsum dolor sit amet consectetur adipisicing elit Assumenda, ullam. Assumenda, ullam
            : ${blog}`}
      </p>
      <div>
        <a href="/blogs/blog-details" target="_" className="blog-btn">
          {`Read More`}
        </a>
      </div>
    </div>
  </div>
);

export default function Blog() {
  return (
    <div>

      <div className="searchBlog-container">
        <form>
          <input type="text" placeholder="Search for Blogs.." name="search" />
          <button type="submit"><i className="fa fa-search blog-magnifier" /></button>
        </form>
      </div>

      {blogs == 0 ? (
        <NoBlogs />
      ) : (
        <>
          <Chatbot cbot={cbot} />
          <div className="blog-wrapper">
            {blogs.map((blog) => (
              <BlogCard key={blog} blog={blog} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
