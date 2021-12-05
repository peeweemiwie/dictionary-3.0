import { NavLink } from 'react-router-dom';
const Navigation = () => {
	return (
		<nav className='Navigation'>
			<NavLink to='/'>
				<h2 className='section-title'>Definition</h2>
			</NavLink>
			<NavLink to='/images'>
				<h2 className='section-title'>Images</h2>
			</NavLink>
		</nav>
	);
};

export default Navigation;
