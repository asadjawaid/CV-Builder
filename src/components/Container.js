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
			from: '',
			to: '',
			gpa: ''
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

	render() {
		const { userPersonalInfo, userEducationList, userExperienceList, userSkillInfo, userProjectInfo } = this.state;

		console.log(userEducationList);

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

		const personalInfoFunctions = {
			handlePersonalInformationChange: this.handlePersonalInformationChange,
			removeUserLinks: this.removeUserLinks
		};

		return (
			<div className={this.props.nameOfClass}>
				<CVForm
					userPersonalInfo={userPersonalInfo}
					userSkillInfo={userSkillInfo}
					userProjectInfo={userProjectInfo}
					resetInformation={this.resetInformation}
					experienceInfo={experienceInfo}
					educationInfo={educationInfo}
					personalInfoFunctions={personalInfoFunctions}
				/>
				<CVPreview userPersonalInfo={userPersonalInfo} userExperienceList={userExperienceList} />
			</div>
		);
	}
}

export default Container;
