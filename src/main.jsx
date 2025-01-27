import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Route.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx'



import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      {/*  Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-[1920px] mx-auto'>
            <RouterProvider router={router}></RouterProvider>
          </div>
        </HelmetProvider>
      </QueryClientProvider>

    </AuthProvider>
  </React.StrictMode>,
)
