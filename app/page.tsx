export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 text-4xl sm:text-5xl lg:text-6xl">
        Welcome to Our Awesome App
      </h1>
      <p className="text-gray-300 text-center mb-8 text-lg sm:text-xl max-w-2xl">
        Discover amazing features and boost your productivity!
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="/fe/fe/login" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
          Log In
        </a>
        <a href="/fe/fe/signup" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 transition duration-150 ease-in-out">
          Sign Up
        </a>
      </div>
    </div>
  )
}