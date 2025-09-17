import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              Hemsida
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              to="/pressmeddelanden" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Pressmeddelanden
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}