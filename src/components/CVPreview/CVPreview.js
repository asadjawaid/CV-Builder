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
				<div className="cv-preview-header"></div>
			</div>
		);
	}
}

export default CVPreview;
