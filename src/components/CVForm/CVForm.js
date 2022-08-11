/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../styles/componentStyles.css';
import PersonalInformation from './PersonalInformation';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
// import Skill from './Skill';
import { TbPlus } from 'react-icons/tb';
import uniqid from 'uniqid';

class CVForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			educationArray: [],
			experienceArray: [],
			projectArray: []
		};

		// for add/removing an education
		this.addNewEducation = this.addNewEducation.bind(this);
		this.deleteEducation = this.deleteEducation.bind(this);

		// for add/removing an experience
		this.addNewExperience = this.addNewExperience.bind(this);
		this.deleteExperience = this.deleteExperience.bind(this);

		// for add/removing a project
		this.addNewProject = this.addNewProject.bind(this);
		this.deleteProject = this.deleteProject.bind(this);

		// for add/removing a skill
		this.addNewSkill = this.addNewSkill.bind(this);
		this.deleteSkill = this.deleteSkill.bind(this);
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

	// add new experience
	addNewExperience() {
		this.setState({
			experienceArray: this.state.experienceArray.concat({ id: uniqid() })
		});
	}

	// remove experience
	deleteExperience(id) {
		const experienceSectionUpdate = this.state.experienceArray.filter(current => current.id !== id);

		this.setState({
			experienceArray: experienceSectionUpdate
		});
	}

	// add a new project
	addNewProject() {
		this.setState({
			projectArray: this.state.projectArray.concat({ projectId: uniqid() })
		});
	}

	// remove a new project
	deleteProject(id) {
		const projectSectionUpdate = this.state.projectArray.filter(current => current.projectId !== id);

		this.setState({
			projectArray: projectSectionUpdate
		});
	}

	// for adding a new skill
	addNewSkill() {}

	// for removing a skills section
	deleteSkill() {}

	render() {
		const { educationArray, experienceArray, projectArray } = this.state;
		const {
			userPersonalInfo,
			userEducationInfo,
			userExperienceInfo,
			userSkillInfo,
			userProjectInfo,
			handlePersonalInformationChange,
			resetInformation,
			removeUserLinks
		} = this.props;

		return (
			<div className="cv-form-container">
				<h1>Personal Information</h1>
				<PersonalInformation
					userPersonalInfo={userPersonalInfo}
					handlePersonalInformationChange={handlePersonalInformationChange}
					removeUserLinks={removeUserLinks}
				/>
				{/* Education Section(s) */}
				<h1>Education</h1>
				{educationArray.map(currentEducation => (
					<Education
						userEducationInfo={userEducationInfo}
						key={currentEducation.id}
						deleteEducation={this.deleteEducation}
						educationId={currentEducation.id}
					/>
				))}
				<button className="btn add-edu-btn" onClick={this.addNewEducation} disabled={educationArray.length > 3}>
					Add Education <TbPlus className="icon" />
				</button>

				{/* Experience Section(s) */}
				<h1>Experience</h1>
				{experienceArray.map(currentExperience => (
					<Experience
						userExperienceInfo={userExperienceInfo}
						key={currentExperience.id}
						deleteExperience={this.deleteExperience}
						experienceId={currentExperience.id}
					/>
				))}
				<button className="btn add-edu-btn" onClick={this.addNewExperience} disabled={experienceArray.length > 3}>
					Add Experience <TbPlus className="icon" />
				</button>

				{/* Project Section(s) */}
				<h1>Projects</h1>
				{projectArray.map(currentProject => (
					<Project
						userProjectInfo={userProjectInfo}
						key={currentProject.projectId}
						deleteProject={this.deleteProject}
						projectId={currentProject.projectId}
					/>
				))}
				<button className="btn add-edu-btn" onClick={this.addNewProject} disabled={projectArray.length > 2}>
					Add Project <TbPlus className="icon" />
				</button>

				{/* Skills section */}
				<h1>Skills and Achievements</h1>

				{/* Button to reset the data */}
				<button onClick={resetInformation} className="btn reset-btn">
					Reset Information
				</button>
			</div>
		);
	}
}

export default CVForm;
