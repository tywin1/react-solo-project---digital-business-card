import avatar from '../assets/avatar.png';
import emailIcon from '../assets/email-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';

export default function Info() {
	return (
		<section className="info">
			<div className="info-banner">
				<img src={avatar} alt="Ramon Ewington" />
			</div>
			<div className="info-details">
				<h1>Ramon Ewington</h1>
				<p>Front End Developer, NZ</p>
				<a
					className="info-website"
					href="https://tywin1.website"
					target="_blank"
					rel="noopener noreferrer"
				>
					website goes here
				</a>
			</div>
			<div className="info-social-buttons">
				<a
					href="mailto:ramon@example.com"
					className="info-social-button__email"
				>
					<img
						className="email-icon"
						src={emailIcon}
						aria-hidden="true"
						alt=""
					/>{' '}
					Email
				</a>
				<a
					href="https://www.linkedin.com/in/ramon-ewington"
					target="_blank"
					rel="noopener noreferrer"
					className="info-social-button__linkedin"
				>
					<img
						className="linkedin-icon"
						src={linkedinIcon}
						aria-hidden="true"
						alt=""
					/>{' '}
					LinkedIn
				</a>
			</div>
		</section>
	);
}
