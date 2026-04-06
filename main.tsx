import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './src/Root.tsx'
import LandingPage from './src/views/pages/LandingPage.tsx'
import ArticleAndTips from './src/views/pages/ArticleAndTips.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  once: false,
  duration: 600,
  delay: 150,
  startEvent: 'DOMContentLoaded'
});


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "articles", Component: ArticleAndTips }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
