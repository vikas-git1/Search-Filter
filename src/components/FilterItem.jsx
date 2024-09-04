import React, { useState } from "react";

const FilterItem = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredItems = users.filter((item) =>
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserName = (userName) => {
    setSearchTerm(userName);
  };
  return (
    <div className="filter-item-container">
      <input
        type="text"
        className="filter-input"
        placeholder="Search by username..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="filtered-list">
        {searchTerm.length > 0 &&
          filteredItems.map((user) => (
            <li
              key={user.id}
              className="filtered-item"
              onClick={() => handleUserName(user.username)}
            >
              {user.username}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilterItem;
