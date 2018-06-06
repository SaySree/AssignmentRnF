import React from 'react';
import './search.scss';
//import icon from './images/search.svg';

const Search = (props) => {
  const { value, onChange } = props;

  return (
    <div className="search">
      <div className="search__title">This Page Displayed all the Planets Population in circle if the Population is Large the Circle is large if the population is small showing small circle. by default it showing all the planets you can search by typing keyword then can see matching keyword Planets(Note: Some Planets have population unkown)</div>
      <div className="search__input">
        <div
          className="search__icon"
          
        />
        <input
          type="text"
          placeholder="Enter key to Search"
          onChange={e => onChange(e.target.value)}
          value={value}
          autoFocus
        />
      </div>
    </div>
  );
};

/*Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};*/

export default Search;