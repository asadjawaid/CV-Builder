import React from 'react';

export default class SkillCV extends React.Component {
	render() {
		const { currentSkill } = this.props;

		return (
			<>
				<p id="skill-input-cv">{currentSkill}</p>
			</>
		);
	}
}
