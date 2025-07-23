"use client"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-lg">
        <div className="animate-fade-in-up">
          <div className="mb-6 inline-block">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-label="Play button"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 animate-fade-in-up-delay">
            SeeznTV
          </h1>
        </div>

        <div className="animate-fade-in-delay">
          <h2 className="text-2xl font-light mb-8 text-gray-300">
            Tez orada
            <span className="inline-block ml-2 relative">
              <span className="absolute -right-2 top-0 h-2 w-2 bg-purple-500 rounded-full animate-ping" />
            </span>
          </h2>

          <p className="text-gray-400 mb-8">Online kinoteatr</p>
          
          {/* Telegram Support Button */}
          <div className="mb-8">
            <a
              href="https://t.me/mkarimovdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Telegram orqali bog'lanish"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram orqali bog'lanish
            </a>
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white rounded-full animate-pulse"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-gray-500 text-sm animate-fade-in-slow">
        <a 
          href="https://seezntv.uz" 
          className="hover:text-gray-300 transition-colors duration-200"
          aria-label="SeeznTV website"
        >
          seezntv.uz
        </a>
      </footer>
    </div>
  )
}
