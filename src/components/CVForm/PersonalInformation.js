/* eslint-disable no-useless-constructor */
import React from 'react';
// import Input from '../Utils/Input';
import { TbPlus, TbMinus } from 'react-icons/tb';

class PersonalInformation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLinks: false
		};
		this.toggleLinks = this.toggleLinks.bind(this);
	}

	// updates the state of the showLink
	toggleLinks = e => {
		this.setState({
			showLinks: !this.state.showLinks
		});

		if (this.state.showLinks) {
			this.props.removeUserLinks();
		}
	};

	render() {
		// get the props values:
		const { userPersonalInfo, handlePersonalInformationChange } = this.props;
		const { showLinks } = this.state;
		const { firstName, lastName, title, email, phoneNumber, linkedin, github, portfolio } = userPersonalInfo;

		return (
			<section className="cv-form-section">
				{/* <h1>Personal information</h1> */}
				<div className="user-input-section">
					<input
						type="text"
						value={firstName}
						placeholder="First Name"
						minLength={3}
						maxLength={15}
						onChange={handlePersonalInformationChange}
						name="firstName"
					/>
					<input
						type="text"
						value={lastName}
						name="lastName"
						onChange={handlePersonalInformationChange}
						placeholder="Last Name"
						minLength={3}
						maxLength={15}
					/>
					<input
						type="text"
						value={title}
						name="title"
						onChange={handlePersonalInformationChange}
						placeholder="Title"
						minLength={3}
						maxLength={28}
					/>
					<input
						type="email"
						value={email}
						name="email"
						maxLength={49}
						onChange={handlePersonalInformationChange}
						placeholder="Email"
					/>
					<input
						type="tel"
						value={phoneNumber}
						name="phoneNumber"
						onChange={handlePersonalInformationChange}
						id="phone"
						placeholder="Phone Number"
					/>
					{showLinks ? (
						<>
							<input
								type="text"
								value={github}
								name="github"
								onChange={handlePersonalInformationChange}
								placeholder="Github (enter your username)"
								maxLength={20}
							/>
							<input
								type="text"
								value={linkedin}
								name="linkedin"
								onChange={handlePersonalInformationChange}
								placeholder="LinkedIn (enter your username)"
								maxLength={20}
							/>
							<input
								type="text"
								value={portfolio}
								name="portfolio"
								onChange={handlePersonalInformationChange}
								placeholder="Portfolio (format: example.com)"
								maxLength={50}
							/>
							<button onClick={this.toggleLinks} className="btn remove-btn">
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
