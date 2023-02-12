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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0JxOP71HMYcsv3WRgTTr_Ly6YZRLTnhcVUOOfilCG8ue886r5qQYt_B_pQJxYhhrs4o&usqp=CAU"
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
    <div className="blogs-container">

      {/* <div className="searchBlog-container">
        <form>
          <input type="text" placeholder="Search for Blogs.." name="search" />
          <button type="submit"><i className="fa fa-search blog-magnifier" /></button>
        </form>
      </div> */}

      {blogs == 0 ? (
        
        <NoBlogs />
      ) : (
        <>
          <Chatbot cbot={cbot} />
          <div className="blogs-intro container">
            <h2>Take a time to read our blogs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nobis unde corporis est iste vero, aperiam quia beatae minima nesciunt libero. Ut quo, voluptas odit exercitationem illo officia a consequatur beatae minima nesciunt libero. Ut quo, voluptas odit exercitationem illo officia a consequatur beatae minima nesciunt libero. Ut quo, voluptas odit exercitationem illo officia a consequatur.</p>
          </div>

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
