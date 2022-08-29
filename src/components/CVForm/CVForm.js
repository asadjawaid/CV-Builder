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
			projectArray: []
		};

		// for add/removing an education
		this.addNewEducation = this.addNewEducation.bind(this);
		this.deleteEducation = this.deleteEducation.bind(this);

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
		const { educationArray, projectArray } = this.state;

		const {
			userPersonalInfo,
			userEducationInfo,
			// userSkillInfo,
			userProjectInfo,
			resetInformation,
			personalInfoFunctions,
			experienceInfo
		} = this.props;

		const { addExperience, removeExperience, userExperienceList, handleExperienceInfo } = experienceInfo;

		return (
			<div className="cv-form-container">
				<h1>Personal Information</h1>
				<PersonalInformation
					userPersonalInfo={userPersonalInfo}
					handlePersonalInformationChange={personalInfoFunctions.handlePersonalInformationChange}
					removeUserLinks={personalInfoFunctions.removeUserLinks}
				/>

				{/* Experience Section(s) */}
				<h1>Experience</h1>
				{userExperienceList.map(currentExperience => (
					<Experience
						handleExperienceInfo={handleExperienceInfo}
						key={currentExperience.id}
						deleteExperience={removeExperience}
						experienceId={currentExperience.id}
					/>
				))}
				<button className="btn add-edu-btn" onClick={addExperience} disabled={userExperienceList.length > 3}>
					Add Experience <TbPlus className="icon" />
				</button>

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
