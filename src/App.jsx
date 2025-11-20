import { useState } from 'react'
import {
  Camera,
  Zap,
  Sparkles,
  Play,
  X,
  Check,
  ChevronDown,
  Circle
} from 'lucide-react'

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glassmorphism border-b border-soft-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="font-serif font-bold text-2xl text-soft-black">
              Hyper Film
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-soft-black hover:text-sunset-orange transition-colors"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection('plans')}
                className="text-soft-black hover:text-sunset-orange transition-colors"
              >
                Plans
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-soft-black hover:text-sunset-orange transition-colors"
              >
                FAQ
              </button>
              <button className="px-6 py-3 bg-white border-2 border-soft-black rounded-full font-medium hover:bg-soft-black hover:text-white transition-all duration-300">
                Get Strategy Audit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-soft-black/10 mb-8">
            <Circle className="w-2 h-2 fill-green-500 text-green-500 animate-pulse" />
            <span className="text-sm text-warm-grey">Taking new partners for Q2</span>
          </div>

          {/* H1 Headline */}
          <h1 className="font-serif font-bold text-5xl md:text-7xl text-soft-black mb-6 leading-tight">
            The video team you wish you hired sooner.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-warm-grey mb-12 max-w-3xl mx-auto leading-relaxed">
            We turn your product into months of high-performing video ads. No scheduling actors.
            No renting gear. We handle the hard stuff.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={() => scrollToSection('plans')}
              className="px-8 py-4 bg-soft-black text-white rounded-full font-medium hover:bg-soft-black/90 transition-all hover-lift text-lg"
            >
              See our plans
            </button>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="px-8 py-4 bg-transparent border-2 border-soft-black text-soft-black rounded-full font-medium hover:bg-soft-black hover:text-white transition-all hover-lift text-lg flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch our work
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-warm-grey uppercase tracking-wide">Trusted by</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              <span className="text-2xl font-bold text-soft-black">Nike</span>
              <span className="text-2xl font-bold text-soft-black">Adidas</span>
              <span className="text-2xl font-bold text-soft-black">BBC</span>
              <span className="text-2xl font-bold text-soft-black">Samsung</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Bento Grid */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-soft-black text-center mb-16">
            How it works
          </h2>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Large */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 hover-lift border border-soft-black/10">
              <div className="w-16 h-16 bg-sunset-orange/10 rounded-2xl flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-sunset-orange" />
              </div>
              <h3 className="font-serif font-bold text-3xl text-soft-black mb-4">
                We shoot once, you post for months.
              </h3>
              <p className="text-lg text-warm-grey leading-relaxed">
                Instead of booking a shoot every time you need an ad, we do one massive 'Bank Shoot'
                every quarter. We capture everything—product shots, demos, lifestyle. This creates a
                library of footage we can use forever.
              </p>
            </div>

            {/* Card 2 - Tall */}
            <div className="lg:row-span-2 bg-soft-black text-white rounded-3xl p-8 md:p-12 hover-lift">
              <div className="w-16 h-16 bg-warm-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-warm-yellow" />
              </div>
              <h3 className="font-serif font-bold text-3xl mb-4">
                Unlimited Remixing.
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Want to change the headline? Swap the music? Try a new hook? Just ask. We edit
                unlimited variations until you find the winner.
              </p>
            </div>

            {/* Card 3 - Small */}
            <div className="lg:col-span-2 bg-warm-yellow/20 rounded-3xl p-8 md:p-12 hover-lift border border-warm-yellow/30">
              <div className="w-16 h-16 bg-warm-yellow rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-soft-black" />
              </div>
              <h3 className="font-serif font-bold text-3xl text-soft-black mb-4">
                Speed of software.
              </h3>
              <p className="text-lg text-warm-grey leading-relaxed">
                Submit a request on Monday, get your first draft by Wednesday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-soft-black text-center mb-4">
            Simple, transparent plans.
          </h2>
          <p className="text-xl text-warm-grey text-center mb-16">
            Choose the plan that fits your growth goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - The Polisher */}
            <div className="bg-white rounded-3xl p-8 border border-soft-black/10 hover-lift">
              <h3 className="font-serif font-bold text-2xl text-soft-black mb-2">
                The Polisher
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-soft-black">$2,495</span>
                <span className="text-warm-grey">/mo</span>
              </div>
              <p className="text-warm-grey mb-8">
                We polish your existing footage.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sunset-orange flex-shrink-0 mt-1" />
                  <span className="text-soft-black">Unlimited Editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sunset-orange flex-shrink-0 mt-1" />
                  <span className="text-soft-black">Motion Graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sunset-orange flex-shrink-0 mt-1" />
                  <span className="text-soft-black">No Filming</span>
                </li>
              </ul>
              <button className="w-full px-6 py-4 bg-soft-black text-white rounded-full font-medium hover:bg-soft-black/90 transition-all">
                Get Started
              </button>
            </div>

            {/* Card 2 - The Studio (Highlighted) */}
            <div className="bg-soft-black text-white rounded-3xl p-8 border-4 border-sunset-orange hover-lift relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sunset-orange text-white px-4 py-1 rounded-full text-sm font-medium">
                Best Value
              </div>
              <h3 className="font-serif font-bold text-2xl mb-2">
                The Studio
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$4,995</span>
                <span className="text-white/60">/mo</span>
              </div>
              <p className="text-white/80 mb-8">
                A full production team in your pocket.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-warm-yellow flex-shrink-0 mt-1" />
                  <span>Quarterly Shoot Included (The Bank)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-warm-yellow flex-shrink-0 mt-1" />
                  <span>Unlimited Ad Variations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-warm-yellow flex-shrink-0 mt-1" />
                  <span>Strategy & Scripting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-warm-yellow flex-shrink-0 mt-1" />
                  <span>2x Faster Delivery</span>
                </li>
              </ul>
              <button className="w-full px-6 py-4 bg-warm-yellow text-soft-black rounded-full font-medium hover:bg-warm-yellow/90 transition-all">
                Get Started
              </button>
            </div>

            {/* Card 3 - The Partner */}
            <div className="bg-white rounded-3xl p-8 border border-soft-black/10 hover-lift">
              <h3 className="font-serif font-bold text-2xl text-soft-black mb-2">
                The Partner
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-soft-black">$9,995</span>
                <span className="text-warm-grey">/mo</span>
              </div>
              <p className="text-warm-grey mb-8">
                For brands spending $50k+ on ads.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sunset-orange flex-shrink-0 mt-1" />
                  <span className="text-soft-black">Monthly Fresh Shoots</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sunset-orange flex-shrink-0 mt-1" />
                  <span className="text-soft-black">Casting Included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sunset-orange flex-shrink-0 mt-1" />
                  <span className="text-soft-black">Priority Support</span>
                </li>
              </ul>
              <button className="w-full px-6 py-4 bg-soft-black text-white rounded-full font-medium hover:bg-soft-black/90 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-soft-black text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl border border-soft-black/10 overflow-hidden">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-cream/50 transition-colors"
              >
                <span className="font-semibold text-lg text-soft-black">
                  Is there a long-term contract?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-soft-black transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaqIndex === 0 && (
                <div className="px-8 pb-6 text-warm-grey leading-relaxed">
                  For the Studio plan, yes (3 months) because we invest in the shoot upfront.
                  For the Polisher, it's monthly.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl border border-soft-black/10 overflow-hidden">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-cream/50 transition-colors"
              >
                <span className="font-semibold text-lg text-soft-black">
                  What does Unlimited mean?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-soft-black transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaqIndex === 1 && (
                <div className="px-8 pb-6 text-warm-grey leading-relaxed">
                  Add as many requests to your queue as you want. We work through them one by one
                  to ensure perfection.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-soft-black rounded-t-3xl rounded-b-3xl p-12 md:p-16 text-center">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to grow?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's see if we're a good fit. We'll review your current ads for free.
          </p>
          <button className="px-10 py-5 bg-warm-yellow text-soft-black rounded-full font-bold text-lg hover:bg-warm-yellow/90 transition-all hover-lift">
            Get Free Strategy Audit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-soft-black/10">
        <div className="max-w-7xl mx-auto text-center text-warm-grey text-sm">
          <p>© 2024 Hyper Film. All rights reserved.</p>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-soft-black/90 flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-warm-yellow transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative pb-[56.25%] rounded-2xl overflow-hidden bg-soft-black">
              <video
                className="absolute inset-0 w-full h-full"
                controls
                autoPlay
                src="https://video.wixstatic.com/video/c9f3ed_e02672c23a11491d836441a40fc88ea8/1080p/mp4/file.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
