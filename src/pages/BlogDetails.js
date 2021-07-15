import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import axios from "axios";
import Layout from "../components/Layout";

function BlogDetails(props) {
  const [content, setContent] = useState("");
  const blogFile = props.match.params.title;

  useEffect(() => {
    axios
      .get(require(`../blog/${blogFile}.md`))
      .then(result => {
        setContent(result.data);
      })
      .catch(err => console.log(err));
  }, [content]);

  return (
    <Layout>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown>
          </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
