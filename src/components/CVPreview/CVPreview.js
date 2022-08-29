/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../styles/componentStyles.css';
import { TbBrandLinkedin, TbBrandGithub, TbUser } from 'react-icons/tb';
import ExperienceCV from './ExperienceCV';
class CVPreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// user personal information:
		const { userPersonalInfo } = this.props;
		const { firstName, lastName, title, description, email, phoneNumber, linkedin, github, portfolio } =
			userPersonalInfo;

		// user experience
		const { userExperienceList } = this.props;

		return (
			<div className="cv-preview-container">
				{/* Header */}
				<div className="cv-preview-header">
					<div className="header-left">
						{/* Title */}
						{!title ? <h1>TITLE</h1> : <h1>{title}</h1>}
						{/* Name */}
						{!firstName && !lastName ? (
							<p>Name</p>
						) : (
							<p className="personal-info-light">
								{firstName} {lastName}
							</p>
						)}
						{/* Phone Number: */}
						{!phoneNumber ? <p>Phone: (xxx) xxx-xxxx</p> : <p className="personal-info-light">{phoneNumber}</p>}
						{/* Email */}
						{!email ? (
							<p>Email: example@example.com</p>
						) : (
							<p>
								Email: <span className="personal-info-light">{email}</span>
							</p>
						)}
					</div>
					<div className="header-right">
						{/* Linkedin */}
						{!linkedin ? (
							<p></p>
						) : (
							<p>
								<TbBrandLinkedin className="icon" />
								<a target="_blank" rel="noopener noreferrer" href={'https://www.linkedin.com/in/' + linkedin}>
									{linkedin}
								</a>
							</p>
						)}
						{/* Github */}
						{!github ? (
							<p></p>
						) : (
							<p>
								<TbBrandGithub className="icon" />
								<a target="_blank" rel="noopener noreferrer" href={'https://www.github.com/' + github}>
									{github}
								</a>
							</p>
						)}
						{/* Portfolio */}
						{!portfolio ? (
							<></>
						) : (
							<p>
								<TbUser className="icon" />
								<a target="_blank" rel="noopener noreferrer" href={'https://' + portfolio}>
									{portfolio}
								</a>
							</p>
						)}
					</div>
				</div>
				{/* Section */}
				<div className="cv-preview-description">
					{!description ? (
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</p>
					) : (
						<p>{description}</p>
					)}
				</div>

				{/* Experience Section */}
				<section className="cv-preview-experience">
					<h1 className="cv-preview-header-text">Professional Experience</h1>
					<hr></hr>
					{userExperienceList.length <= 0 ? (
						<p>No experience</p>
					) : (
						userExperienceList.map(currentExperience => (
							<ExperienceCV key={currentExperience.id} currentExperience={currentExperience} />
						))
					)}
				</section>

				{/* Education section */}
				<section className="cv-preview-education">
					<h1 className="cv-preview-header-text">Education</h1>
					<hr></hr>
				</section>

				{/* Project section */}
				<section className="cv-preview-project">
					<h1 className="cv-preview-header-text">Projects</h1>
					<hr></hr>
				</section>
				{/* Skills section */}
				<section className="cv-preview-skill">
					<h1 className="cv-preview-header-text">Relevant Skills</h1>
					<hr></hr>
				</section>
			</div>
		);
	}
}

export default CVPreview;
