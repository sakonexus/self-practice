import React, { useState } from 'react';
import heroImage from '../assets/images/asher-legg-skateboarder-blur.jpg';
import background from '../assets/images/annie-spratt-concrete-bg.jpg';

const About = () => {
	const [messageSubject, setMessageSubject] = useState('');
	const [messageBody, setMessageBody] = useState('');

	const onSubmit = (event) => {
		console.log(
			`messageSubject: ${messageSubject} \n messageBody: ${messageBody}`
		);

		return true;
	};

	return (
		<div align='center'>
			<div>
				<figure
					style={{
						width: '100%',
						overflow: 'hidden',
						margin: '-20% 0 0 0',
					}}
				>
					<img
						src={heroImage}
						className='img-fluid'
						alt='Skateboarder with blur'
					/>
				</figure>
			</div>
			<div
				className='container'
				style={{
					background: `#88a0a2 url('${background}') no-repeat fixed center`,
					backgroundSize: 'cover',
					paddingBottom: '15%',
				}}
			>
				<br />
				<div
					style={{
						backgroundColor: 'rgba(51, 51, 51, 0.5)',
						width: '30rem',
						padding: '10px 0 5px 15px',
						margin: '0 0 10px',
					}}
				>
					<h1 style={{ color: '#fff' }}>About Skate-From-Scratch</h1>
				</div>
				<div className='card border-dark mb-3' style={{ maxWidth: '30rem' }}>
					<div className='card-body'>
						<p className='card-text'>
							Skate-From-Scratch is a tool created to help people learn about
							skateboarding tricks and progress whether they are a new or
							experienced skater. The first iteration of this app will be mostly
							a educational tool that shows how to do tricks. Future iterations
							will contain sections allowing for user generated content. Feel
							free to make suggestions of what you would like to see in an app
							like this using the form below.
						</p>
					</div>
				</div>
				<br />
				<div
					style={{
						backgroundColor: 'rgba(51, 51, 51, 0.5)',
						width: '30rem',
						padding: '10px 0 5px 15px',
						margin: '10px 0',
					}}
				>
					<h2 style={{ color: '#fff' }}>Disclaimer</h2>
				</div>
				<div className='card border-dark mb-3' style={{ maxWidth: '30rem' }}>
					<div className='card-body'>
						<p className='card-text'>
							This is my first real project using a React front-end with a
							Node.js backend so please expect there to be bug and strange
							behaviors. If you do come across any issues, please feel free to
							send a message using the form below.
						</p>
					</div>
				</div>
				<br />
				<div
					style={{
						backgroundColor: 'rgba(51, 51, 51, 0.5)',
						width: '30rem',
						padding: '10px 0 5px 15px',
						margin: '10px 0',
					}}
				>
					<h2 style={{ color: '#fff' }}>Send Me Input</h2>
				</div>
				<div className='card border-dark mb-3' style={{ maxWidth: '30rem' }}>
					<div className='card-body'>
						<div className='form-group'>
							<form>
								<label
									className='col-form-label col-form-label-lg'
									htmlFor='messageSubject'
								>
									Subject
								</label>
								<input
									className='form-control form-control-lg'
									type='text'
									placeholder='Message Subject'
									id='messageSubject'
									onChange={(e) => setMessageSubject(e.target.value)}
								/>
								<br />
								<br />
								<label
									htmlFor='messageArea'
									className='col-form-label col-form-label-lg'
								>
									Message
								</label>
								<textarea
									className='form-control'
									id='messageArea'
									rows='3'
									placeholder='Message Body'
									onChange={(e) => setMessageBody(e.target.value)}
								></textarea>
								<br />
								<br />
								<button
									style={{ display: 'block' }}
									type='button'
									className='btn btn-primary btn-lg btn-block'
									onClick={onSubmit}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
