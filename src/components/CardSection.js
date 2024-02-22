import React, { useState } from 'react';
import Card from './Card';
import data from "../data/generated.json";

const CardSection = () => {
  const [filteredData, setFilteredData] = useState(data);

  const category = ["All", "html/css", "Javascript", "Bootstarp", "Tailwind", "React"];

  const handleButtonClick = (event) => {
    const { value } = event.target;

    if (value === "All") {
      setFilteredData(data); // Display all data when "All" is clicked
    } else {
      // Filter the data based on the selected category
      const newData = data.filter(item => item.category === value);
      setFilteredData(newData);
    }
  };

  return (
    <>
      <div className="post-filter container">
        {category.map((val) => (
          <button className="filter-item active-filter" value={val} onClick={handleButtonClick} style={{ border: "none" }} data-filter="all" key={val}>
            {val}
          </button>
        ))}
      </div>
      <div className="post container">
        {/* Display filtered data */}
        {filteredData.map((item, index) => (
          <Card key={index} img={item.picture} category={item.category} data={item} />
        ))}
      </div>
    </>
  );
};

export default CardSection;
