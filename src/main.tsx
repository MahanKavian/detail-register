import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Address } from "./pages/Address.tsx";
import { Layout } from "./components/layout/Layout.tsx";
import { Error } from "./pages/Error.tsx";
import { Addresses } from "./pages/Addresses.tsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout><Address /></Layout>,
    errorElement: <Error />
  },
  {
    path: '/addresses',
    element: <Layout><Addresses /></Layout>
  }
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        draggable={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme={"light"} position={"top-right"} />
    </QueryClientProvider>
  </StrictMode>,
)
