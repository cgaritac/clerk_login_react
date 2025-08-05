import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.tsx'
  import { ClerkProvider } from '@clerk/clerk-react'

  const PUBLISHABLE_KEY = "pk_test_Y2F1c2FsLXRvdWNhbi0zMy5jbGVyay5hY2NvdW50cy5kZXYk"

  if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </StrictMode>
  )