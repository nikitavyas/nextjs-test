import React from 'react'

const Headers = () => {
  return (
    <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
      <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
             aria-current="page">Posts</a>
           </div>
        </div>
      </div>
    </div>
  </nav>
  
  )
}

export default Headers