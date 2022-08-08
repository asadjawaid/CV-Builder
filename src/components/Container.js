import React from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

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
			userEducationInfo: [],
			userExperienceInfo: [],
			userSkillInfo: [],
			userProjectInfo: []
		};

		this.handlePersonalInformationChange = this.handlePersonalInformationChange.bind(this);
		this.resetInformation = this.resetInformation.bind(this);
	}

	// function to update state for user personal information
	handlePersonalInformationChange = e => {
		console.log(e.target.value);

		this.setState({
			userPersonalInfo: { ...this.state.userPersonalInfo, [e.target.name]: e.target.value }
		});
	};

	// Function to reset all the information
	resetInformation = e => {
		this.setState({});
	};

	render() {
		const { userPersonalInfo, userEducationInfo, userExperienceInfo, userSkillInfo, userProjectInfo } = this.state;

		return (
			<div className={this.props.nameOfClass}>
				<CVForm
					userPersonalInfo={userPersonalInfo}
					userEducationInfo={userEducationInfo}
					userExperienceInfo={userExperienceInfo}
					userSkillInfo={userSkillInfo}
					userProjectInfo={userProjectInfo}
					handlePersonalInformationChange={this.handlePersonalInformationChange}
					resetInformation={this.resetInformation}
				/>
				<CVPreview
					userPersonalInfo={userPersonalInfo}
					userEducationInfo={userEducationInfo}
					userExperienceInfo={userExperienceInfo}
					userSkillInfo={userSkillInfo}
					userProjectInfo={userProjectInfo}
				/>
			</div>
		);
	}
}

export default Container;
