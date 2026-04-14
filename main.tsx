import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './src/Root.tsx'
import AuthLayout from './src/AuthLayout.tsx'

import LandingPage from './src/views/pages/LandingPage'
import ArticleAndTips from './src/views/pages/ArticleAndTips'
import Dashboard from './src/views/pages/Dashboard'
import Auth from './src/views/pages/Auth'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  once: false,
  duration: 600,
  startEvent: 'DOMContentLoaded',
  easing: "ease-out-back"
});


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "articles", Component: ArticleAndTips },
      { path: "dashboard", Component: Dashboard }
    ],
  }, {
    element: <AuthLayout />,
    children: [
      { path: "/auth", element: <Auth /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
