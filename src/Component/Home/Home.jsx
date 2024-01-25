import React from 'react'
import Layout from '../Layout'

function Home( {children}) {
  return (
    <div>
      <div className="flex  bg-primary h-full w-full fixed">
      <Layout />
      <div className="h-screen mt-2 w-full overflow-y-scroll">
        {children}
      </div>
    </div>
    </div>
  )
}

export default Home
