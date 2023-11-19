import React from 'react';
import Score from './Score';

const Student = ({ student }) => {
  return (
    <div>
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      <h3>Scores:</h3>
      {student.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
};

export default Student;
