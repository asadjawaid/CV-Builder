import React from 'react';

export default class ProjectCV extends React.Component {
	render() {
		const { currentProject } = this.props;
		const { id, projectName, description } = currentProject;

		return (
			<div>
				<p>{projectName ? projectName : 'Project Name'}</p>
				<p>{description ? description : 'Description'}</p>
			</div>
		);
	}
}
