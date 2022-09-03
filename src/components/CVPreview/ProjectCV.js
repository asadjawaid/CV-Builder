import React from 'react';

export default class ProjectCV extends React.Component {
	render() {
		const { currentProject } = this.props;
		const { projectName, description } = currentProject;

		return (
			<div className="common-class project-cv-preview">
				{projectName ? <p id="project-name-preview">{projectName}</p> : <p>Project Name</p>}
				{description ? (
					<p id="project-description-preview">- {description}</p>
				) : (
					<p id="project-description-preview">Project Description</p>
				)}
			</div>
		);
	}
}
