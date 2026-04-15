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
      { path: "dashboard", Component: Dashboard },
      { path: "footer", Component: Footer }
    ],
  }, {
    element: <AuthLayout />,
    children: [
<<<<<<< HEAD
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/articles", element: <ArticleAndTips /> },
      { path: "/chatbot", element: <ChatBotPage /> },
=======
      { path: "/auth", element: <Auth /> },
>>>>>>> 7f735724eeda4ca43fffc3ab8bfe23b6c323c494
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
