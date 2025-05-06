import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([...routes]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position='top-center' />
    <RouterProvider router={router} />
  </StrictMode>,
)