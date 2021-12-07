import './Footer.scss';
const Footer = () => {
	return (
		<footer className='Footer'>
			<small>
				Design + code by{' '}
				<a
					href='https://miwayagi.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='link'
				>
					Miwa Kaur
				</a>
				.{' '}
				<a
					href='https://www.linkedin.com/in/miwayagi/'
					target='_blank'
					rel='noopener noreferrer'
					className='link'
				>
					LinkedIn
				</a>
				.{' '}
				<a
					href='https://github.com/peeweemiwie/dictionary-3.0'
					target='_blank'
					rel='noopener noreferrer'
					className='link'
				>
					GitHub Repo
				</a>
				.
			</small>
		</footer>
	);
};

export default Footer;
