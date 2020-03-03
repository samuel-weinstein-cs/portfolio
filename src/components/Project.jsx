import React from 'react';

const Project = (props) => {
  console.log(props);
  return(
    <div>
      <h2>{props.project.title}</h2>
    </div>
  )
}

export default Project;
