"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer className="bg-zinc-950 text-slate-300">
        <div className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Newsletter */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-medium text-lg mb-2">Stay Updated</h3>
                <p className="text-slate-400 font-light">Get exclusive insights and product updates.</p>
              </div>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-slate-900 font-medium px-4 py-3 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-medium text-lg mb-6">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-white transition-colors font-light">Home</Link>
                </li>
                <li>
                  <Link href="/features" className="text-slate-400 hover:text-white transition-colors font-light">Features</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-400 hover:text-white transition-colors font-light">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/policy" className="text-slate-400 hover:text-white transition-colors font-light">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/data-processing" className="text-slate-400 hover:text-white transition-colors font-light">Data Processing Agreement</Link>
                </li>
              </ul>
            </div>

            {/* Ready to Start */}
            <div>
              <h3 className="text-white font-medium text-lg mb-6">Get Started</h3>
              <ul className="space-y-3">
                <li>
                  <Link  href="https://app.twinninglabs.com/" target="_blank" className="text-slate-400 hover:text-white transition-colors font-light">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="https://calendly.com/twinningaiteam/30min" target="_blank" className="text-slate-400 hover:text-white transition-colors font-light">
                    Book a Demo
                  </Link>
                </li>
                <li>
                  <p className="text-slate-500 text-sm font-light">Twinning Labs © 2025. All rights reserved</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
