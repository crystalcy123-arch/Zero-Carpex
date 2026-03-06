/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Zap, 
  Shield, 
  TrendingDown, 
  Wrench, 
  GraduationCap, 
  Phone, 
  Mail, 
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const BenefitCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
      <Icon className="text-emerald-600 w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Step = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header / Hero Section */}
      <header className="relative bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000" 
            alt="Solar Panels" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter">POWER SOLUTION</span>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">Think Unlimited</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-wider">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#benefits" className="hover:text-emerald-400 transition-colors">Benefits</a>
            <a href="#process" className="hover:text-emerald-400 transition-colors">Process</a>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Ontario's Clean Energy Partner
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              GREEN <br />
              <span className="text-emerald-400">ENERGY</span> <br />
              UPGRADE
            </h1>
            <p className="text-xl text-emerald-50/80 mb-10 max-w-xl leading-relaxed">
              Lower your carbon footprint and electricity bills with our unique 
              <span className="text-white font-bold"> Zero-CAPEX model</span>. 
              No upfront costs, just immediate savings.
            </p>
            <div className="flex flex-wrap gap-4 print:hidden">
              <button 
                onClick={() => window.print()}
                className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-lg"
              >
                Download PDF <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 border border-white/20 rounded-xl backdrop-blur-sm">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">20% Guaranteed Savings</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Diagonal Cutout */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 clip-path-slant" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">About Us</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              We believe the future of Ontario's grid is distributed.
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Power Solution is a Niagara-based Independent Power Producer (IPP) specializing in "Behind-the-Meter" solar and storage solutions.
              </p>
              <p>
                Our mission is to make energy independence accessible through a unique Zero-CAPEX model, allowing all businesses to lower their carbon footprint and electricity bills without upfront costs.
              </p>
              <p>
                With 20+ years of large consultant company and Ontario Hydro experience, we bridge the gap between global technology and local application.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Architecture with Solar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-[240px] border border-slate-100">
              <div className="text-4xl font-black text-emerald-600 mb-1">20+</div>
              <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">Years Experience</div>
              <div className="text-xs text-slate-500 mt-2 leading-tight">In Ontario Hydro and large-scale energy consulting.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">Strategic Benefits for Your Business</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our fully-funded clean-energy transformation handles the complexity so you can focus on your business.
          </p>
        </div>

        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard 
            icon={TrendingDown} 
            title="Guaranteed Savings" 
            description="20% electricity bill saving guaranteed from day one of commissioning."
          />
          <BenefitCard 
            icon={Shield} 
            title="Unmatched Resilience" 
            description="State-of-the-art backup power system ensures your campus stays powered during grid outages."
          />
          <BenefitCard 
            icon={Wrench} 
            title="Zero Maintenance" 
            description="We handle all maintenance, licensing, and 24/7 power management. Zero burden on your team."
          />
          <BenefitCard 
            icon={GraduationCap} 
            title="Sustainable Innovation" 
            description="Position your company as a leader in the green transition, showcasing your commitment to a sustainable Ontario grid."
          />
        </div>

        <div className="container mx-auto px-6 mt-16">
          <div className="bg-emerald-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-2xl font-bold mb-2">The "Zero-Cost" Partnership Model</h4>
              <p className="text-emerald-50/80">
                We act as the developer, owner, and operator. We handle the $500k+ initial cost, all IESO licensing, and ongoing operations.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="text-5xl font-black mb-1">$0.00</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">Your Upfront Investment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">The Next Step</h2>
            <h3 className="text-4xl font-black text-slate-900">Simple 3-Step Launch</h3>
          </div>
          
          <div className="grid gap-12 relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 hidden sm:block"></div>
            
            <Step 
              number="01" 
              title="Site Access Agreement" 
              description="A simple 1-page document allowing our engineers to finalize the system design and layout."
            />
            <Step 
              number="02" 
              title="Energy Service Agreement (ESA)" 
              description="We define the discounted rate you'll pay for the clean power generated on-site."
            />
            <Step 
              number="03" 
              title="The 'Switch'" 
              description="We install and manage the system. You start saving from Day 1 of commissioning."
            />
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex flex-col mb-6">
                <span className="text-3xl font-black tracking-tighter">POWER SOLUTION</span>
                <span className="text-xs tracking-[0.3em] uppercase opacity-50">Think Unlimited</span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed">
                Building long-term energy partnerships that support local business growth and sustainable infrastructure through smart, reliable battery storage.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 uppercase tracking-widest text-sm text-emerald-400">Contact Us</h5>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  905-348-8834
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-emerald-500" />
                  sales@powersolution.ca
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Globe className="w-4 h-4 text-emerald-500" />
                  powersolution.ca
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase tracking-widest text-sm text-emerald-400">Location</h5>
              <p className="text-slate-300 leading-relaxed">
                Niagara Region,<br />
                Ontario, Canada
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest font-bold">
            <div>© {new Date().getFullYear()} Power Solution. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
