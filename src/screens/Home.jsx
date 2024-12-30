import React from 'react';
import '../css/Home.css';
import topRightIcon from '../assets/top-right.png';
import topArrow from '../assets/top-right.png';

const Home = () => {
	return (
		<div className="home-container">
			{/* Main Section */}
			<section className="main-section">
				<h1 className="main-title">
					IGNITE THE STORY
					<br />
					SHAPE THE LEGACY
				</h1>
				<p className="main-subtitle">
					Create experiences, connect audiences and spark ideas that drive your
					brand forward
				</p>
				<div className="start-project">
					START PROJECT
					<img src={topArrow} alt="arrow" className="arrow" />
				</div>
			</section>

			{/* Showcase Section */}
			<section className="showcase">
				<h2>Showcase</h2>
				<p>Crafting Digital Success Stories, One Project at a Time</p>
				<div className="showcase-card">
					<div className="project-image"></div>
					<div className="project-info">
						<span>Website</span>
            <h3>Doctor of Bat</h3>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="services">
				<h2>Services</h2>
				<div className="d-grid gap-3">
					<button className="btn btn-outline-light">
						<span className="text">Web Design & Development</span>
						<img src={topRightIcon} alt="arrow icon" className="icon" />
					</button>
					<button className="btn btn-outline-light">
						<span className="text">Branding</span>
						<img src={topRightIcon} alt="arrow icon" className="icon" />
					</button>
					<button className="btn btn-outline-light">
						<span className="text">Social Media Management</span>
						<img src={topRightIcon} alt="arrow icon" className="icon" />
					</button>
				</div>
			</section>
		</div>
	);
};

export default Home;
