import React from 'react';
import { TbMinus } from 'react-icons/tb';

class Experience extends React.Component {
	// constructor(props) {
	//   super(props);
	//   this.state = {
	//     name: 'Hi'
	//   }
	// }

	render() {
		const { experienceId, deleteExperience } = this.props;

		return (
			<section className="cv-form-section">
				<div className="user-input-section">
					<input type="text" placeholder="Position" minLength={5} maxLength={50} />
					<input type="text" placeholder="Company" minLength={5} maxLength={30} />
					<input type="number" placeholder="From" min={1900} max={2099} />
					<input type="text" placeholder="to" minLength={5} maxLength={30} />
					<textarea rows={5} placeholder="Responsibilities"></textarea>
					<button onClick={() => deleteExperience(experienceId)} className="btn remove-btn">
						Remove Experience <TbMinus className="icon minus-icon" />
					</button>
				</div>
			</section>
		);
	}
}

export default Experience;
