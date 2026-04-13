import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './src/Root.tsx'
import AuthLayout from './src/AuthLayout.tsx'

import LandingPage from './src/views/pages/LandingPage.tsx'
import ArticleAndTips from './src/views/pages/ArticleAndTips.tsx'
import Dashboard from './src/views/pages/Dashboard.tsx'
import Login from './src/views/pages/Login.tsx'
import Register from './src/views/pages/Register.tsx'
import Footer from './src/views/components/Footer.tsx'
import ChatBotPage from './src/views/components/ChatBotPage.tsx'

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
    element: <AuthLayout />, // TANPA navbar/footer
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/articles", element: <ArticleAndTips /> },
      { path: "/chatbot", element: <ChatBotPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
