import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TopNews from './pages/topNews';
import MovieNews from './pages/movieNews';
import TVNews from './pages/TVNews';
import UpNextMedias from './pages/upNextMedia'
import FeaturedToday from './pages/featuredToday'
import BornToday from './pages/bornToday'
import Movie from './pages/movie'
import MovieRating from './pages/movieRating'
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
Amplify.configure(config);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TopNews />,
      },
      {
        path: "/topNews",
        element: <TopNews />,
      },
      {
        path: "/movieNews",
        element: <MovieNews />,
      },
      {
        path: "/TVNews",
        element: <TVNews />,
      },
      {
        path: "/upNextMedias",
        element: <UpNextMedias />,
      },
      {
        path: "/featuredToday",
        element: <FeaturedToday />,
      },
      {
        path: "/bornToday",
        element: <BornToday />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/movieRating",
        element: <MovieRating />
      }
      
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
