import { MFNWidget } from '../components/MFNWidget'

export function Pressmeddelanden() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Pressmeddelanden och Nyheter
        </h1>
        <p className="text-gray-600">
          Här hittar du de senaste pressmeddelanden och nyheter från oss.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <MFNWidget />
      </div>
    </div>
  )
}