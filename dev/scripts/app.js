import React from 'react';
import ReactDOM from 'react-dom';

function firstComponent() {
	return(
		<p>Guy is a cat! 🐱</p>
	);
}

const secondComponent = () => {
	return (
		<p>Bobo is a dog! 🐶</p>
	)
}

// const masterComponent = () => {
// 	return(
		
// 	);
// }

ReactDOM.render(<firstComponent />, document.getElementById('hook'));
