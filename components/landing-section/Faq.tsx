"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What is Twinning Labs?",
    answer:
      "Twinning Labs is a Next-Gen Intelligence Platform that allows businesses to test products, packaging, and marketing campaigns with real customers before launch - reducing risk and maximizing success.",
  },
  {
    question: "How does the Twinning Engine work?",
    answer:
      "The Twinning Engine uses AI-powered simulations to create digital replicas of your target audience. It predicts outcomes, personalizes interactions, and helps you optimize campaigns across the entire customer journey.",
  },
  {
    question: "Can Twinning Labs integrate with my existing tools?",
    answer:
      "Yes! Twinning Labs seamlessly integrates with your sales, marketing, and data stack. From CRMs to ad platforms, you can connect in minutes and start simulating smarter campaigns.",
  },
  {
    question: "What are the benefits of simulating before launching?",
    answer:
      "By testing before launch, you eliminate guesswork, reduce wasted spend, and ensure your products and campaigns resonate with customers. This leads to higher retention, loyalty, and lifetime value.",
  },
  {
    question: "What kind of campaigns can I simulate?",
    answer:
      "You can simulate product launches, ad creatives, lifecycle marketing strategies, and even customer journeys - helping you refine every message before going live.",
  },
  {
    question: "How quickly can I start using Twinning Labs?",
    answer:
      "Getting started is simple - integrate your existing tools, build your customer twins, and begin running simulations in just a few steps.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      {/* FAQ Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-slate-900 mb-4 tracking-tight text-balance">Questions & Answers</h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto text-pretty">
              Everything you need to know about Twinning Labs and how it transforms your business decisions.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="group border border-slate-200/60 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:border-slate-300/60 transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <button
                  className="flex justify-between items-center w-full text-left p-8 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-xl font-medium text-slate-900 pr-8 group-hover:text-slate-800 transition-colors text-balance">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center transition-all duration-300">
                    {openIndex === index ? (
                      <Minus className="h-4 w-4 text-slate-600" />
                    ) : (
                      <Plus className="h-4 w-4 text-slate-600" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div className="h-px bg-gradient-to-r from-slate-200 to-transparent mb-6" />
                        <p className="text-slate-600 text-lg leading-relaxed font-light text-pretty">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
