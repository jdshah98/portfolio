import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
	return (
		<>
		<Routes>
			<Route path="/portfolio/" element={<Home />} />
			<Route path="/portfolio/project" element={<Project />} />
			<Route path="/portfolio/about" element={<About />} />
			<Route path="/portfolio/contact" element={<Contact />} />
		</Routes>
		</>
    );
}

export default App;
