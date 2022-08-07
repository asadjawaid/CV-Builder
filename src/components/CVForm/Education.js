/* eslint-disable no-useless-constructor */
import React from 'react';
// import '../../styles/componentStyles.css';
import { TbMinus } from 'react-icons/tb';

class Education extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { deleteEducation, educationId } = this.props;

		return (
			<section className="cv-form-section">
				<div className="user-input-section">
					<input type="text" placeholder="School" minLength={15} maxLength={50} />
					<input type="text" placeholder="Major" minLength={15} maxLength={50} />
					<input type="number" placeholder="From" min={1900} max={2099} />
					<input type="number" placeholder="To" min={1900} max={2099} />
					<input type="number" placeholder="GPA" step="0.01" min={1} max={4} />
					<textarea rows={5} placeholder="Description"></textarea>
					<button onClick={() => deleteEducation(educationId)} className="btn remove-btn">
						Remove Education <TbMinus className="icon minus-icon" />
					</button>
				</div>
			</section>
		);
	}
}

export default Education;
