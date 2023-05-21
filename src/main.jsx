import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import About from './routes/About.jsx';
import Projects from './routes/Projects.jsx';
import Contact from './routes/Contact.jsx';
import Resume from './routes/Resume.jsx';

import './index.css';

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <About />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/resume',
				element: <Resume />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
