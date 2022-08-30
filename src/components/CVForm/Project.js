import React from 'react';
import { TbMinus } from 'react-icons/tb';

class Project extends React.Component {
	render() {
		const { handleProjectInfo, projectId, removeProject } = this.props;

		return (
			<section className="cv-form-section">
				<div className="user-input-section">
					<input
						name="projectName"
						type="text"
						placeholder="Project Name"
						minLength={15}
						maxLength={50}
						onChange={e => handleProjectInfo(e, projectId)}
					/>
					<textarea
						rows={5}
						name="description"
						placeholder="Description"
						onChange={e => handleProjectInfo(e, projectId)}
					></textarea>
					<button onClick={() => removeProject(projectId)} className="btn remove-btn">
						Remove Project <TbMinus className="icon minus-icon" />
					</button>
				</div>
			</section>
		);
	}
}

export default Project;
