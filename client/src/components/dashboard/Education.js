import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education , deleteEducation }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        {/* Use Moment.js to format the 'from' date */}
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - 
        {/* Handle 'to' date, defaulting to 'Now' if it's not present */}
        {edu.to ? <Moment format='YYYY/MM/DD'>{edu.to}</Moment> : ' Now'}
      </td>
      <td>
        <button onClick={() => deleteEducation(edu._id)} className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string, // 'to' can be null or undefined
    })
  ).isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null,{deleteEducation})(Education);
