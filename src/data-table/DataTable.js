import React from 'react';
import Row from './Row';

const filterCategory = (item, filterValue) => {
  return item.type === filterValue;
};

const CATEGORY_OPTIONS = [
  'Assault Rifles',
  'LMGs',
  'Secondaries',
  'Sniper Rifles',
  'Submachine Guns',
  'Tactical Rifles',
];

export const DataTable = (props) => {
  const [category, setCategory] = React.useState('');

  const onSelectCategory = (event) => {
    setCategory(event.target.value);
  };

  const resetFilters = () => {
    setCategory('');
  };

  const filteredRows = props.rows.filter((item) => {
    if (category === '') {
      return true
    }
    return filterCategory(item, category);
  });

  return (
    <div>
      <div className="DataTable-filters">
        <select onChange={ onSelectCategory } value={ category}>
          <option value="">All Categories</option>
          {
            CATEGORY_OPTIONS.map((option) => (
              <option key={option} value={ option }>{option}</option>
            ))
          }
        </select>
        <button type="button" onClick={resetFilters}>Clear Filters</button>
      </div>
      { filteredRows.map((row) => <Row key={row.name} data={ row } />) }
    </div>
  );
};

export default DataTable;