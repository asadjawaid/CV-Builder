/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../styles/componentStyles.css';
import PersonalInformation from './PersonalInformation';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import { TbPlus } from 'react-icons/tb';

class CVForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			userPersonalInfo,
			educationInfo,
			resetInformation,
			personalInfoFunctions,
			experienceInfo,
			projectInfo,
			skillInfo
		} = this.props;

		// get functions and objects from experienceInfo object
		const { addExperience, removeExperience, userExperienceList, handleExperienceInfo } = experienceInfo;

		// get functions and objects from educationInfo object
		const { addNewEducation, removeEducation, userEducationList, handleEducationInfo } = educationInfo;

		// get functions and objects from projectInfo object
		const { addNewProject, removeProject, userProjectList, handleProjectInfo } = projectInfo;

		// get skill function and list
		const { handleSkillInput, addSkill, userSkillList, skillInput } = skillInfo;

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
				<button className="btn add-edu-btn" onClick={addExperience} disabled={userExperienceList.length > 2}>
					Add Experience <TbPlus className="icon" />
				</button>

				{/* Education Section(s) */}
				<h1>Education</h1>
				{userEducationList.map(currentEducation => (
					<Education
						handleEducationInfo={handleEducationInfo}
						key={currentEducation.id}
						removeEducation={removeEducation}
						educationId={currentEducation.id}
					/>
				))}
				<button className="btn add-edu-btn" onClick={addNewEducation} disabled={userEducationList.length > 1}>
					Add Education <TbPlus className="icon" />
				</button>

				{/* Project Section(s) */}
				<h1>Projects</h1>
				{userProjectList.map(currentProject => (
					<Project
						handleProjectInfo={handleProjectInfo}
						key={currentProject.id}
						removeProject={removeProject}
						projectId={currentProject.id}
					/>
				))}
				<button className="btn add-edu-btn" onClick={addNewProject} disabled={userProjectList.length > 2}>
					Add Project <TbPlus className="icon" />
				</button>

				{/* Skills section */}
				<h1 id="skills-cv-form">Skills and Achievements</h1>
				<input
					id="skill-input"
					name="skill"
					value={skillInput}
					type="text"
					onChange={e => handleSkillInput(e)}
					placeholder="Enter a skill"
					minLength={5}
					maxLength={50}
				/>
				<button className="btn add-skill-btn" onClick={addSkill} disabled={userSkillList.length > 4}>
					Add Skill <TbPlus className="icon" />
				</button>

				{/* Button to reset the data */}
				<button onClick={resetInformation} className="btn reset-btn">
					Reset Information
				</button>
			</div>
		);
	}
}

export default CVForm;
