import React from 'react';
import ReactDOM from 'react-dom';



const SecondComponent = () => {
	return (
		<p>Bobo is a dog! 🐶</p>
	)
};

const MasterComponent = () => {
	const greeting = 'I am a string!';
	return(
		<div>

			<p>{greeting}</p>
			<PlayButton />
			<SecondComponent />
		</div>
	);
}

function PlayButton(props) {
	const className = props.isMusicPlaying ? 'play active' : 'play';
	return <a onClick={props.onClick} href="#" title="Play video" className={className} />;
}

class Container extends React.Component {
	constructor() {
		super();
		this.state = { 
			isMusicPlaying: false 
		}
		
	}

	handleClick() {
		// if (this.state.isMusicPlaying) {
		// 	this.setState({ isMusicPlaying: false });
		// }
		// else {
		// 	this.setState({ isMusicPlaying: true });
		
		// }

		if (this.state.isMusicPlaying) {
			this.audio.pause();
		}
		else {
			this.audio.play();
		}

		this.setState(prevState => {
			return {
				isMusicPlaying: !prevState.isMusicPlaying
			};
		});
	};


	render() {
		const status = this.state.isMusicPlaying ? 'Playing' : 'Not Playing';
		return (
			<div>
			
				
				<PlayButton 
					onClick={this.handleClick.bind(this)}
					isMusicPlaying={this.state.isMusicPlaying} 
				/>
				<audio id="audio" ref={(audioTag) => { this.audio = audioTag }} />
			</div>
		);
	}
}

// const placeWeWantToPutComponent = document.getElementById('hook');
ReactDOM.render(<Container />, document.getElementById('hook'));

