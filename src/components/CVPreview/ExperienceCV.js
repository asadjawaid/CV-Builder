import React from 'react';

class ExperienceCV extends React.Component {
	render() {
		const { currentExperience } = this.props;

		const { id, position, company, location, from, to, responsibilities } = currentExperience;

		// console.log(`responsibilities = ${responsibilities}`);

		return (
			<div className="cv-preview-current-experience">
				<p id="company-name">
					{company ? company : 'Company'} / {location ? location : 'Location'}
				</p>
				<div className="position-info">
					<p>{position ? position : 'Position'}</p>
					{from ? (
						<p>
							{from} - {to ? to : 'Present'}
						</p>
					) : (
						<p>Date</p>
					)}
				</div>
				{!responsibilities ? (
					<p className="responsibilities">Responsibilities</p>
				) : (
					<ul className="responsibilities">
						<li>Hi</li>
						<li>Hi</li>
					</ul>
				)}
			</div>
		);
	}
}

export default ExperienceCV;
