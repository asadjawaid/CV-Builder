/* eslint-disable no-useless-constructor */
import React from 'react';
import Header from './components/Header';
import CVForm from './components/CVForm/CVForm';
import CVPreview from './components/CVPreview/CVPreview';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<Header />
				<div className="cv-container">
					<CVForm />
					<CVPreview />
				</div>
			</>
		);
	}
}

export default App;
