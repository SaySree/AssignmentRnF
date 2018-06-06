import React from 'react';
import Planet from './planet';
import './results.scss';

const Results = props => (
  <ul className="results">
    {props.items.map((item, i) => {
      switch (item.type) {
        case 'planet':
          return <Planet popData={i + 1} key={i} item={item} />;
        default:
          return <div></div>;
      }
    })}
  </ul>
);

/*Results.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
*/
export default Results;