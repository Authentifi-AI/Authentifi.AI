import { Logo } from "@/components/layout/logo"

export function AuthentifiFeatures() {
  return (
    <section className="w-full py-16 md:py-24 authentifi-gradient-bg text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 text-sm text-white font-medium">
              <Logo size="sm" showText={false} />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Authenticity in the AI Era</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="authentifi-card rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <div className="w-16 h-16 relative">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                    fill="#4F46E5"
                  />
                  <path
                    d="M35 60C48.8071 60 60 48.8071 60 35C60 21.1929 48.8071 10 35 10C21.1929 10 10 21.1929 10 35C10 48.8071 21.1929 60 35 60Z"
                    fill="#818CF8"
                  />
                  <path
                    d="M35 50C43.2843 50 50 43.2843 50 35C50 26.7157 43.2843 20 35 20C26.7157 20 20 26.7157 20 35C20 43.2843 26.7157 50 35 50Z"
                    fill="#C7D2FE"
                  />
                  <path
                    d="M35 40C38.866 40 42 36.866 42 33C42 29.134 38.866 26 35 26C31.134 26 28 29.134 28 33C28 36.866 31.134 40 35 40Z"
                    fill="white"
                  />
                  <path
                    d="M35 35C36.1046 35 37 34.1046 37 33C37 31.8954 36.1046 31 35 31C33.8954 31 33 31.8954 33 33C33 34.1046 33.8954 35 35 35Z"
                    fill="#4F46E5"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Choose your favorite AI platform and begin working</h3>
          </div>

          {/* Feature Card 2 */}
          <div className="authentifi-card rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <div className="w-16 h-16 relative">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="35" fill="#1E40AF" />
                  <path
                    d="M20 25H50V50C50 52.7614 47.7614 55 45 55H25C22.2386 55 20 52.7614 20 50V25Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M20 20C20 17.2386 22.2386 15 25 15H45C47.7614 15 50 17.2386 50 20V25H20V20Z"
                    fill="#60A5FA"
                  />
                  <path
                    d="M35 45C39.9706 45 44 40.9706 44 36C44 31.0294 39.9706 27 35 27C30.0294 27 26 31.0294 26 36C26 40.9706 30.0294 45 35 45Z"
                    fill="white"
                  />
                  <path
                    d="M35 40C37.2091 40 39 38.2091 39 36C39 33.7909 37.2091 32 35 32C32.7909 32 31 33.7909 31 36C31 38.2091 32.7909 40 35 40Z"
                    fill="#1E40AF"
                  />
                  <path
                    d="M35 37C35.5523 37 36 36.5523 36 36C36 35.4477 35.5523 35 35 35C34.4477 35 34 35.4477 34 36C34 36.5523 34.4477 37 35 37Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Record your progress in real time, tracking progress and sources
            </h3>
          </div>

          {/* Feature Card 3 */}
          <div className="authentifi-card rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <div className="w-16 h-16 relative">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="35" fill="black" />
                  <circle cx="35" cy="35" r="32" stroke="#FF9CCD" strokeWidth="6" />
                  <path
                    d="M25 35H45M45 35L35 25M45 35L35 45"
                    stroke="#FF9CCD"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 25H30M25 30H28M25 40H28M25 45H30M40 25H45M42 30H45M42 40H45M40 45H45"
                    stroke="#FF9CCD"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Publish your work with confidence</h3>
          </div>
        </div>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-2xl font-medium text-white leading-relaxed">
            "Verify your authorship while working with AI to prove your contributions and authenticity."
          </p>
        </div>
      </div>
    </section>
  )
}
