/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../styles/componentStyles.css';
import PersonalInformation from './PersonalInformation';
import Education from './Education';
import Experience from './Experience';
import { TbPlus } from 'react-icons/tb';
import uniqid from 'uniqid';

class CVForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			educationArray: [],
			experienceArray: []
		};

		// for add/removing an education
		this.addNewEducation = this.addNewEducation.bind(this);
		this.deleteEducation = this.deleteEducation.bind(this);

		// for add/removing an experience
		this.addNewExperience = this.addNewExperience.bind(this);
		this.deleteExperience = this.deleteExperience.bind(this);
	}

	// add a new education
	addNewEducation() {
		this.setState({
			educationArray: this.state.educationArray.concat({
				id: uniqid()
			})
		});
	}

	// remove the education with id
	deleteEducation(id) {
		console.log(`Deleting education with id ${id}`);
		const educationSectionUpdate = this.state.educationArray.filter(current => current.id !== id);

		this.setState({
			educationArray: educationSectionUpdate
		});
	}

	addNewExperience() {
		this.setState({
			experienceArray: this.state.experienceArray.concat({ id: uniqid() })
		});
	}

	deleteExperience(id) {
		const experienceSectionUpdate = this.state.experienceArray.filter(current => current.id !== id);

		this.setState({
			experienceArray: experienceSectionUpdate
		});
	}

	render() {
		const { educationArray, experienceArray } = this.state;

		return (
			<div className="cv-form-container">
				<h1>Personal Information</h1>
				<PersonalInformation />
				<h1>Education</h1>

				{educationArray.map(currentEducation => (
					<Education
						key={currentEducation.id}
						deleteEducation={this.deleteEducation}
						educationId={currentEducation.id}
					/>
				))}

				<button className="btn add-edu-btn" onClick={this.addNewEducation} disabled={educationArray.length > 3}>
					Add Education <TbPlus className="icon" />
				</button>

				<h1>Experience</h1>
				{experienceArray.map(currentExperience => (
					<Experience
						key={currentExperience.id}
						deleteExperience={this.deleteExperience}
						experienceId={currentExperience.id}
					/>
				))}
				<button className="btn add-edu-btn" onClick={this.addNewExperience} disabled={experienceArray.length > 3}>
					Add Experience <TbPlus className="icon" />
				</button>
			</div>
		);
	}
}

export default CVForm;
