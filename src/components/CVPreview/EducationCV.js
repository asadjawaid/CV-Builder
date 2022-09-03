import React from 'react';

export default class EducationCV extends React.Component {
	render() {
		const { currentEducation } = this.props;
		const { school, major, minor, from, to, gpa, description } = currentEducation;
		return (
			<div className="common-class education-cv-preview">
				<div className="school-info">
					<p>{school ? school : 'School'}</p>
					{from ? (
						<p id="education-date">
							{from} - {to ? to : 'Present'}
						</p>
					) : (
						<p id="date-info">Date</p>
					)}
				</div>
				<p id="major-info">
					{major ? major : 'Major'} (<span>{gpa ? 'Major GPA: ' + gpa : 'GPA'})</span>
				</p>
				{minor ? <p id="minor-info">- {minor}</p> : <></>}
				<p id="description-info">
					- {description ? 'Course work/Description: ' + description : 'Description/Course Work'}
				</p>
			</div>
		);
	}
}
