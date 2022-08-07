/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../styles/componentStyles.css';
import PersonalInformation from './PersonalInformation';
import Education from './Education';
import { TbPlus } from 'react-icons/tb';
import uniqid from 'uniqid';

class CVForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			educationArray: []
		};

		this.addNewEducation = this.addNewEducation.bind(this);
	}

	addNewEducation() {
		this.setState({
			educationArray: this.state.educationArray.concat({
				id: uniqid()
			})
		});
	}

	render() {
		const { educationArray } = this.state;

		console.log(educationArray);

		return (
			<div className="cv-form-container">
				<h1>Personal Information</h1>
				<PersonalInformation />
				<h1>Education</h1>

				{educationArray.map(currentEducation => (
					<Education key={currentEducation.id} />
				))}

				<button className="btn add-edu-btn" onClick={this.addNewEducation}>
					Add Education <TbPlus className="icon" />
				</button>
			</div>
		);
	}
}

export default CVForm;
