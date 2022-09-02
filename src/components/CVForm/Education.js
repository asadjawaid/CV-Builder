/* eslint-disable no-useless-constructor */
import React from 'react';
// import '../../styles/componentStyles.css';
import { TbMinus } from 'react-icons/tb';

class Education extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { handleEducationInfo, removeEducation, educationId } = this.props;

		return (
			<section className="cv-form-section">
				<div className="user-input-section">
					<input
						type="text"
						name="school"
						placeholder="School"
						minLength={15}
						maxLength={50}
						onChange={e => handleEducationInfo(e, educationId)}
					/>
					<input
						type="text"
						name="major"
						placeholder="Major"
						minLength={15}
						maxLength={70}
						onChange={e => handleEducationInfo(e, educationId)}
					/>
					<input
						type="text"
						name="minor"
						placeholder="Minor"
						minLength={5}
						maxLength={70}
						onChange={e => handleEducationInfo(e, educationId)}
					/>
					<input
						type="number"
						name="from"
						placeholder="From"
						min={1900}
						max={2099}
						onChange={e => handleEducationInfo(e, educationId)}
					/>
					<input
						type="number"
						name="to"
						placeholder="To"
						min={1900}
						max={2099}
						onChange={e => handleEducationInfo(e, educationId)}
					/>
					<input
						type="number"
						name="gpa"
						placeholder="GPA"
						step="0.01"
						min={1}
						max={4}
						onChange={e => handleEducationInfo(e, educationId)}
					/>
					<textarea
						name="description"
						rows={5}
						placeholder="Description"
						onChange={e => handleEducationInfo(e, educationId)}
						maxLength={300}
					></textarea>
					<button onClick={() => removeEducation(educationId)} className="btn remove-btn">
						Remove Education <TbMinus className="icon minus-icon" />
					</button>
				</div>
			</section>
		);
	}
}

export default Education;
