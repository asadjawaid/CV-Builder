import React from 'react';
import { TbMinus } from 'react-icons/tb';

class Project extends React.Component {
	render() {
		const { projectId, deleteProject } = this.props;

		return (
			<section className="cv-form-section">
				<div className="user-input-section">
					<input type="text" placeholder="Project Name" minLength={15} maxLength={50} />
					<textarea rows={5} placeholder="Description"></textarea>
					<button onClick={() => deleteProject(projectId)} className="btn remove-btn">
						Remove Project <TbMinus className="icon minus-icon" />
					</button>
				</div>
			</section>
		);
	}
}

export default Project;
