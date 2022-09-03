import React from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import uniqid from 'uniqid';

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userPersonalInfo: {
				firstName: '',
				lastName: '',
				title: '',
				description: '',
				email: '',
				phoneNumber: '',
				linkedin: '',
				github: '',
				portfolio: ''
			},
			userEducationList: [],
			userExperienceList: [],
			userSkillList: [],
			userProjectList: []
		};

		this.handlePersonalInformationChange = this.handlePersonalInformationChange.bind(this);
		this.resetInformation = this.resetInformation.bind(this);
		this.removeUserLinks = this.removeUserLinks.bind(this);

		// user experience functions:
		this.handleExperienceInfo = this.handleExperienceInfo.bind(this);
		this.addNewExperience = this.addNewExperience.bind(this);
		this.removeExperience = this.removeExperience.bind(this);

		// education functions
		this.handleEducationInfo = this.handleEducationInfo.bind(this);
		this.addNewEducation = this.addNewEducation.bind(this);
		this.removeEducation = this.removeEducation.bind(this);

		// project functions
		this.handleProjectInfo = this.handleProjectInfo.bind(this);
		this.addNewProject = this.addNewProject.bind(this);
		this.removeProject = this.removeProject.bind(this);
	}

	// function to update state for user personal information
	handlePersonalInformationChange = e => {
		this.setState({
			userPersonalInfo: { ...this.state.userPersonalInfo, [e.target.name]: e.target.value }
		});
	};

	// Function to reset all the information
	resetInformation = e => {
		this.setState({
			userPersonalInfo: {
				firstName: '',
				lastName: '',
				title: '',
				email: '',
				phoneNumber: '',
				linkedin: '',
				github: '',
				portfolio: ''
			},
			userEducationList: [],
			userExperienceList: [],
			userSkillList: [],
			userProjectList: []
		});
	};

	// used to remove links:
	removeUserLinks = e => {
		this.setState({
			userPersonalInfo: { ...this.state.userPersonalInfo, linkedin: '', github: '', portfolio: '' }
		});
	};

	// for handling experience input fields:
	handleExperienceInfo = (e, id) => {
		const updateUserExperienceList = this.state.userExperienceList.map(current => {
			if (current.id === id) {
				return { ...current, [e.target.name]: e.target.value };
			}
			return current;
		});

		this.setState({
			userExperienceList: updateUserExperienceList
		});
	};

	// add a new experience:
	addNewExperience = e => {
		const newExperience = {
			id: uniqid(),
			position: '',
			company: '',
			location: '',
			from: '',
			to: '',
			responsibilities: ''
		};

		this.setState({
			userExperienceList: this.state.userExperienceList.concat(newExperience)
		});
	};

	// remove experience:
	removeExperience = id => {
		const experienceListUpdate = this.state.userExperienceList.filter(current => current.id !== id);

		this.setState({
			userExperienceList: experienceListUpdate
		});
	};

	// handle input for education form
	handleEducationInfo = (e, id) => {
		const updateUserEducationList = this.state.userEducationList.map(current => {
			if (current.id === id) {
				return { ...current, [e.target.name]: e.target.value };
			}
			return current;
		});

		this.setState({
			userEducationList: updateUserEducationList
		});
	};

	// add new education
	addNewEducation = e => {
		const newEducation = {
			id: uniqid(),
			school: '',
			major: '',
			minor: '',
			from: '',
			to: '',
			gpa: '',
			description: ''
		};

		this.setState({
			userEducationList: this.state.userEducationList.concat(newEducation)
		});
	};

	// remove education
	removeEducation = id => {
		const educationListUpdate = this.state.userEducationList.filter(current => current.id !== id);

		this.setState({
			userEducationList: educationListUpdate
		});
	};

	// handle input for project form
	handleProjectInfo = (e, id) => {
		const updateUserProjectList = this.state.userProjectList.map(current => {
			if (current.id === id) {
				return { ...current, [e.target.name]: e.target.value };
			}
			return current;
		});

		this.setState({
			userProjectList: updateUserProjectList
		});
	};

	// add new project function
	addNewProject = e => {
		const newProject = {
			id: uniqid(),
			projectName: '',
			description: ''
		};

		this.setState({
			userProjectList: this.state.userProjectList.concat(newProject)
		});
	};

	// remove any project from the list
	removeProject = id => {
		const projectListUpdate = this.state.userProjectList.filter(current => current.id !== id);
		this.setState({
			userProjectList: projectListUpdate
		});
	};

	render() {
		const { userPersonalInfo, userEducationList, userExperienceList, userSkillList, userProjectList } = this.state;

		// wrapping all functions into objects
		const experienceInfo = {
			addExperience: this.addNewExperience,
			removeExperience: this.removeExperience,
			userExperienceList: userExperienceList,
			handleExperienceInfo: this.handleExperienceInfo
		};

		// wrap all education related function
		const educationInfo = {
			addNewEducation: this.addNewEducation,
			removeEducation: this.removeEducation,
			userEducationList: userEducationList,
			handleEducationInfo: this.handleEducationInfo
		};

		// wrap all project related functions
		const projectInfo = {
			addNewProject: this.addNewProject,
			removeProject: this.removeProject,
			userProjectList: userProjectList,
			handleProjectInfo: this.handleProjectInfo
		};

		const personalInfoFunctions = {
			handlePersonalInformationChange: this.handlePersonalInformationChange,
			removeUserLinks: this.removeUserLinks
		};

		return (
			<div className={this.props.nameOfClass}>
				<CVForm
					userPersonalInfo={userPersonalInfo}
					resetInformation={this.resetInformation}
					experienceInfo={experienceInfo}
					educationInfo={educationInfo}
					projectInfo={projectInfo}
					personalInfoFunctions={personalInfoFunctions}
				/>
				<CVPreview
					userPersonalInfo={userPersonalInfo}
					userExperienceList={userExperienceList}
					userProjectList={userProjectList}
					userEducationList={userEducationList}
				/>
			</div>
		);
	}
}

export default Container;
