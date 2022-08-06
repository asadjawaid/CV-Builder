/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../styles/componentStyles.css';
import { TbPlus, TbMinus } from 'react-icons/tb';

class PersonalInformation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLinks: false
		};

		this.addLinks = this.toggleLinks.bind(this);
	}

	// updates the state of the showLink
	toggleLinks = e => {
		console.log('showing links');
		this.setState({
			showLinks: !this.state.showLinks
		});
	};

	render() {
		const { showLinks } = this.state;

		return (
			<section className="cv-form-section">
				{/* <h1>Personal information</h1> */}
				<div className="user-input-section">
					<input type="text" placeholder="First Name" minLength={3} maxLength={15} required />
					<input type="text" placeholder="Last Name" minLength={3} maxLength={15} required />
					<input type="text" placeholder="Title" minLength={5} maxLength={30} required />
					<input type="email" placeholder="Email" required />
					<input type="tel" id="phone" name="phone" placeholder="Phone Number" />
					{showLinks ? (
						<>
							<input type="url" placeholder="Github" size="30" />
							<input type="url" placeholder="LinkedIn" size="30" />
							<input type="url" placeholder="Portfolio" size="30" />
							<button onClick={this.toggleLinks}>
								Remove links <TbMinus className="icon minus-icon" />
							</button>
						</>
					) : (
						<button className="btn addLinks-btn" onClick={this.toggleLinks}>
							Add Links <TbPlus className="icon plus-icon" />
						</button>
					)}
				</div>
			</section>
		);
	}
}

export default PersonalInformation;
