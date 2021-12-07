import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ keyword }) => {
	return (
		<nav className='Navigation'>
			<h2 className='section-title'>
				<NavLink to='/' className='link'>
					Definition
				</NavLink>
			</h2>
			<h2 className='section-title'>
				<NavLink to='images/' className='link'>
					Images
				</NavLink>
			</h2>
		</nav>
	);
};

export default Navigation;
