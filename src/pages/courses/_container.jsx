import React, { useState } from 'react';
import PremiumCard from '../../components/PremiumCard';
import YoutubeCard from '../../components/YoutubeCard';

export default function Container({ data }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterCourses = (category) => {
    console.log(`Filtering courses by category: ${category}`);
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory === 'all'
    ? data
    : data.filter(item => item.data.category === selectedCategory);

  return (
    <>
      <section className="courses_header">
        <section className="headerNav">
          <img className="li-img" src="/images/search-svgrepo-com.svg" alt="Search Icon" />

          <ul className="selection">
            <li onClick={() => filterCourses('all')}>All</li>
            <li onClick={() => filterCourses('latest')}>Latest</li>
          </ul>

          <div className="filter">
            <img className="li-img" style={{ width: '20px' }} src="/images/filter-list-svgrepo-com.svg" alt="Filter Icon" />

            <select id="dropdownSelect" onChange={(e) => filterCourses(e.target.value)} value={selectedCategory}>
              <option value="" disabled>
                Filter By:
              </option>
              {Array.from(new Set(data.map((item) => item.data.category))).map((category) => (
                <option style={{'textTransform':'capitalize'}} key={category} value={category}>{category}</option>
              ))}
              <option value={'all'}>All</option>
            </select>
          </div>
        </section>
      </section>

      {/* Cards ..... */}
      <main className="courses_box">
        {filteredData.map((item, index) => {
          const type = item.collection.toLowerCase();
          return type === 'premiumcourses' ? <PremiumCard key={index} course={item.data} /> : <YoutubeCard key={index} course={item.data} />;
        })}
      </main>
    </>
  );
}
