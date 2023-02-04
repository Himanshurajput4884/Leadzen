import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Display from './Display'
import axios from "axios";


export default function Getdata() {
  const [data, setdata] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
   setIsLoading(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users`
      )
      .then((res) => {
        setIsLoading(false);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  console.log(data)
  
  if (data !== null) {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
      <div className="container mt-5">
      <Display item={currentPosts} loading={isLoading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
    );
  } else {
    return false;
  }
}
