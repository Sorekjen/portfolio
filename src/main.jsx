import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import About from './routes/About.jsx';
import Projects from './routes/Projects.jsx';
import Contact from './routes/Contact.jsx';
import Toolbox from './routes/Toolbox.jsx';

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
				path: '/toolbox',
				element: <Toolbox />,
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
