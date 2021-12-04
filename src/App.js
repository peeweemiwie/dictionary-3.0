import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Form defaultValue='general' />
		</div>
	);
}

export default App;
