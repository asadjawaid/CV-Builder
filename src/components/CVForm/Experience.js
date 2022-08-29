import React from 'react';
import { TbMinus } from 'react-icons/tb';

class Experience extends React.Component {
	render() {
		const { experienceId, deleteExperience, handleExperienceInfo } = this.props;

		return (
			<section className="cv-form-section">
				<div className="user-input-section">
					<input
						type="text"
						name="position"
						placeholder="Position"
						minLength={5}
						maxLength={50}
						onChange={e => handleExperienceInfo(e, experienceId)}
					/>
					<input
						type="text"
						name="company"
						placeholder="Company"
						minLength={5}
						maxLength={30}
						onChange={e => handleExperienceInfo(e, experienceId)}
					/>
					<input
						type="number"
						name="from"
						placeholder="From"
						min={1900}
						max={2099}
						onChange={e => handleExperienceInfo(e, experienceId)}
					/>
					<input
						type="text"
						name="to"
						placeholder="to"
						minLength={5}
						maxLength={30}
						onChange={e => handleExperienceInfo(e, experienceId)}
					/>
					<textarea
						rows={5}
						name="responsibilities"
						placeholder="Responsibilities"
						onChange={e => handleExperienceInfo(e, experienceId)}
					></textarea>
					<button className="btn add-experience-btn" onClick={() => console.log('Adding experience')}>
						Add Current Experience
					</button>
					<button onClick={() => deleteExperience(experienceId)} className="btn remove-btn">
						Remove Experience <TbMinus className="icon minus-icon" />
					</button>
				</div>
			</section>
		);
	}
}

export default Experience;
