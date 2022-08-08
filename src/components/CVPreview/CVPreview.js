/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../styles/componentStyles.css';

class CVPreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// user personal information:
		const { userPersonalInfo } = this.props;
		const { firstName, lastName, title, description, email, phoneNumber, linkedin, github, portfolio } =
			userPersonalInfo;

		return (
			<div className="cv-preview-container">
				{/* Header */}
				<div className="cv-preview-header">
					<div className="header-left">
						<h1>Title</h1>
						<p>Name</p>
						<p>Phone: (xxx) xxx-xxxx</p>
						<p>Email: example@mail.com</p>
					</div>
					<div className="header-right">
						<p>
							<strong>LinkedIn</strong>:{' '}
						</p>
						<p>
							<strong>GitHub</strong>:{' '}
						</p>
						<p>
							<strong>Portfolio</strong>:{' '}
						</p>
					</div>
				</div>
				{/* Section */}
				<div className="cv-preview-description">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged.
				</div>
				{/* Experience Section */}
				<section className="cv-preview-experience"></section>
				{/* Education section */}
				<section className="cv-preview-education"></section>
				{/* Project section */}
				<section className="cv-preview-project"></section>
				{/* Skills section */}
				<section className="cv-preview-skill"></section>
			</div>
		);
	}
}

export default CVPreview;
