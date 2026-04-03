import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './src/views/pages/LandingPage.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  once: false,
  duration: 600,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
