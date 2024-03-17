import React, { useState, useEffect } from 'react';
import FilterImg from '../../../public/images/filter-edit-svgrepo-com.svg'
import BlogCard from "../../components/BlogCard.jsx";

export default function Blog({ allData }) {

  const [blogData, setBlogData] = useState(allData);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // If no filter is selected, show all posts
    if (!filter) {
      setBlogData(allData);
    } else {
      // Filter posts based on selected category
      const filteredData = allData.filter(post => post.data.category.toLowerCase() === filter.toLowerCase());
      setBlogData(filteredData);
    }
  }, [filter, allData]);


  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <section>
      {/* {filter} */}
      <header className="header">
        <h1 className="blog-title"> {filter || 'Blog'} </h1>

        <ul className="header-categories">
          <li onClick={() => setFilter('')}>All</li>
          <li>Latest</li>

          <div className="filter">
            <select id="dropdownSelect" onChange={handleFilterChange} value={filter}>
              <option value="" disabled selected>Filter By:</option>
              {
                [...new Set(allData.map(item => item.data.category.toLowerCase()))].map((category, idx) => (
                  <option value={category} key={idx} style={{'textTransform':'capitalize'}}>{category}</option>
                ))
              }
              <option value="">All</option>
            </select>
            <img className="li-img" src={FilterImg} alt="Filter Icon" />
          </div>
        </ul>

      </header>

      <main className="blog_container">
        {
          blogData.map((post, idx) => {
            return <BlogCard fullData={post} key={idx} />;
          })
        }
      </main>
    </section>
  );
}
