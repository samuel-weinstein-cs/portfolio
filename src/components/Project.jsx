import React from 'react';

const Project = (props) => {
  console.log(props);
  return(
    <div className='project'>
      <img src={props.project.image} />
      <div>
        <h2 className="project-header"><a href={props.project.url}>{props.project.title}</a></h2>
        <p>{props.project.description}</p>
      </div>

    </div>
  )
}

export default Project;
