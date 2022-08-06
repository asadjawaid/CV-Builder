/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../styles/componentStyles.css';

class CVPreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="cv-preview-container">
				<p>Form preview</p>
			</div>
		);
	}
}

export default CVPreview;
