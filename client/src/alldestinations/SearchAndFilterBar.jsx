import React from "react";

export default function SearchAndFilterBar({ searchValue, onSearchChange, sortOrder, onSortOrderChange }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="search-filter-bar" style={{ display: 'flex', gap: '1rem', alignItems: 'center', margin: '1rem 0', width: 'fit-content', borderRadius: '1.5rem', padding: '0.5rem 1.5rem', boxShadow: 'none', background: 'none' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchValue}
          onChange={e => onSearchChange(e.target.value)}
          style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '1rem', border: '1px solid #ccc', background: '#fff', color: '#222', outline: 'none' }}
        />
        <select
          value={sortOrder}
          onChange={e => onSortOrderChange(e.target.value)}
          style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '1rem', border: '1px solid #ccc', background: '#fff', color: '#222' }}
        >
          <option value="asc">Price: Ascending</option>
          <option value="desc">Price: Descending</option>
        </select>
      </div>
    </div>
  );
} 