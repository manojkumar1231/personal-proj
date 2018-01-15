import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './FormComponents.scss';

const FilterBox = ({ reset, children, className, loading }) => (
  <div className={`${styles.filter} shadow_one`}>
    <h2>
      <img src="./filter.png" className="img-responsive" alt="filter-pic" />
      FILTERS
      <i
        className={`fa fa-repeat ${styles.reset} ${className} ${loading ? styles.fa_disabled : ''}`}
        title="Reset your filters"
        role="button"
        aria-hidden="true"
        onClick={reset}
      />
    </h2>
    <Row className="m-0">
      {children}
    </Row>
  </div>
);

FilterBox.defaultProps = {
  className: ''
};

FilterBox.propTypes = {
  children: PropTypes.node.isRequired,
  reset: PropTypes.func.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default FilterBox;
