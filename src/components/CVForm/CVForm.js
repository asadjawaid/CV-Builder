/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../styles/componentStyles.css';
import PersonalInformation from './PersonalInformation';
import Education from './Education';
import { TbPlus } from 'react-icons/tb';

class CVForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="cv-form-container">
				<h1>Personal Information</h1>
				<PersonalInformation />
				<h1>Education</h1>
				<Education />
				<button className="btn add-edu-btn">
					Add Education <TbPlus className="icon" />
				</button>
			</div>
		);
	}
}

export default CVForm;
