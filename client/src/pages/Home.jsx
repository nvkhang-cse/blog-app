import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.length !== 0 ? (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={`../upload/${post.img}`} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.desc)}</p>
                <button
                  onClick={() => {
                    navigate(`/post/${post.id}`);
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty">
            <span>There is no suitable blog. Please see another topic.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
