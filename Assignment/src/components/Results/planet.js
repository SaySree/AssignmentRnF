import React from 'react';

const Planet = props => (
  <li className="results__item">
    <h3 className="results__title">
      {props.item.population !== 301 && props.item.population !== 601 ? props.item.name + '-Population(' + props.item.population + ')'
      : `${props.item.name}-Population(unknown)`
      }
    </h3>
    <div id="circle" style={{ width: `${props.item.data}px`, height: `${props.item.data}px` }}></div>
  </li>
);

/*Planet.propTypes = {
  item: PropTypes.shape({
    terrain: PropTypes.string,
    gravity: PropTypes.string,
    name: PropTypes.string.isRequired,
    population: PropTypes.string,
    type: PropTypes.string,
  }),
};*/

export default Planet;