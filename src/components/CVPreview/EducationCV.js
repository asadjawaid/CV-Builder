import React from 'react';

export default class EducationCV extends React.Component {
	render() {
		const { currentEducation } = this.props;
		const { id, school, major, from, to, gpa } = currentEducation;
		return (
			<div>
				<div>
					<p>{school ? school : 'School'}</p>
					{from ? (
						<p>
							{from} - {to ? to : 'Present'}
						</p>
					) : (
						<p>Date</p>
					)}
				</div>
				<p>{major ? major : 'Major'}</p>
				<p>{gpa ? gpa : 'GPA'}</p>
			</div>
		);
	}
}
