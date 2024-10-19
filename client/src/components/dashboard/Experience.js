import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        {/* Use Moment.js to format the 'from' date */}
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - 
        {/* Handle 'to' date, defaulting to 'Now' if it's not present */}
        {exp.to ? <Moment format='YYYY/MM/DD'>{exp.to}</Moment> : ' Now'}
      </td>
      <td>
        {/* Use the correct identifier 'exp._id' */}
        <button onClick={() => deleteExperience(exp._id)} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string, // 'to' can be null or undefined
    })
  ).isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
