/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Package, 
  Factory, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ChevronRight,
  Target,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Process', href: '#process' },
    { name: 'Categories', href: '#categories' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-150 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center shadow-lg border-2 border-cyan-400/50">
              <Globe className="text-cyan-400 w-7 h-7 animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
              Weo<span className="text-cyan-500">source</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 leading-none mt-1">
              Global Sourcing
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#inquiry-form"
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all text-center"
          >
            Get an Estimate
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#inquiry-form"
                className="bg-slate-900 text-white px-5 py-3 rounded-xl text-center font-medium mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get an Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all group"
  >
    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
      <Icon className="text-slate-900 group-hover:text-white transition-colors w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

const CategoryItem = ({ name, image, count }) => (
  <div className="relative group overflow-hidden rounded-2xl aspect-[4/5]">
    <img 
      src={image} 
      alt={name} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
      <p className="text-white font-bold text-lg">{name}</p>
      <p className="text-slate-300 text-xs italic">{count}+ Manufacturers</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold mb-6 tracking-wide uppercase"
            >
              <TrendingUp className="w-3 h-3" />
              Global Sourcing & Supply Chain Experts
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
            >
              Premium Sourcing. <br />
              <span className="text-slate-400">Unlimited Potential.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              Elevate your business with bespoke manufacturing and end-to-end supply chain solutions. Premium quality, ethical sourcing, and scale-ready pricing for modern corporations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#inquiry-form"
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-all group"
              >
                Begin Sourcing Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all">
                View Sample Portfolio
              </button>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#e2e8f0,transparent_50%)]" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
              alt="Industrial Precision" 
              className="w-4/5 h-4/5 object-cover rounded-3xl shadow-2xl -rotate-3"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Global Manufacturers', value: '500+' },
              { label: 'Countries Reached', value: '45+' },
              { label: 'Quality Assurance Rank', value: 'Tier 1' },
              { label: 'Cost Reduction Avg', value: '28%' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 underline decoration-slate-300 underline-offset-8">Our Specialties</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expertise across the entire supply chain.</h3>
              <p className="text-slate-600 text-lg">We don't just find suppliers. We build robust, ethical, and highly efficient production ecosystems for your brand.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-slate-900 font-semibold group border-b border-transparent hover:border-slate-900 pb-1 transition-all mb-2">
              Full Service Catalog <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Factory}
              title="Global Product Sourcing"
              description="Leverage our network of 500+ pre-vetted manufacturers across Asia, Europe, and LATAM. We handle finding the right fit for your quality and price specs."
              delay={0.1}
            />
            <ServiceCard 
              icon={Target}
              title="Custom OEM/ODM"
              description="Bring unique products to life. Our engineering team assists with technical drawings, prototyping, and material selection for bespoke manufacturing."
              delay={0.2}
            />
            <ServiceCard 
              icon={ShieldCheck}
              title="Quality Assurance"
              description="Rigorous multi-stage inspections. From raw material auditing to final container loading, we ensure zero defects before a single unit leaves the floor."
              delay={0.3}
            />
            <ServiceCard 
              icon={Truck}
              title="End-to-End Logistics"
              description="Complete freight management, customs brokerage, and last-mile delivery. We optimize routes to reduce lead times and shipping overhead."
              delay={0.4}
            />
            <ServiceCard 
              icon={Users}
              title="Corporate Gifting"
              description="Premium branded merchandise for employee engagement and client appreciation. High-retention products that reflect your corporate values."
              delay={0.5}
            />
            <ServiceCard 
              icon={Package}
              title="Private Label Strategy"
              description="Full branding, packaging design, and retail-ready fulfillment. We help retailers launch captive brands with minimal friction and maximum margin."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Categories Horizontal Scroll/Grid */}
      <section id="categories" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Sourcing Categories</h3>
            <p className="text-slate-600 max-w-xl mx-auto">Diverse capabilities across multiple sectors, maintained by specialist category managers.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryItem 
              name="Electronics & Tech" 
              image="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800" 
              count={120} 
            />
            <CategoryItem 
              name="Home & Lifestyle" 
              image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" 
              count={85} 
            />
            <CategoryItem 
              name="Apparel & Textiles" 
              image="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800" 
              count={150} 
            />
            <CategoryItem 
              name="Industrial Goods" 
              image="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=800" 
              count={95} 
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">How we work</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">From Inquiry to Delivery. <br />Seamlessly.</h3>
              
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Requirement Analysis', text: 'We deep dive into your product specs, target price points, and quality standards.' },
                  { step: '02', title: 'Manufacturer Selection', text: 'We shortlist factories that match your technical needs and ethical audit requirements.' },
                  { step: '03', title: 'Sampling & Validation', text: 'Iterative prototyping until the product perfectly matches your vision.' },
                  { step: '04', title: 'Production & Inspection', text: 'Mass production with our inspectors on the ground for every milestone.' },
                  { step: '05', title: 'Logistics Fulfillment', text: 'Sea/Air freight, customs clearance, and delivery to your warehouse.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <span className="text-slate-700 font-black text-2xl group-hover:text-slate-400 transition-colors">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50" />
              <div className="relative z-10 border border-slate-800 p-8 rounded-3xl bg-slate-800/20 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Project Success Rate</p>
                    <p className="text-slate-400 text-xs">Based on 2,000+ fulfillments</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-slate-300 italic text-lg leading-relaxed">
                    "Weosource transformed our procurement process. We reduced our manufacturing costs by 32% while actually improving the final build quality of our consumer electronics line."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-600" />
                    <div>
                      <p className="font-bold text-sm">Marcus Chen</p>
                      <p className="text-slate-500 text-xs">Director of Ops, Lumos Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form / CTA */}
      <section id="inquiry-form" className="py-24 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-slate-900 p-12 lg:p-20 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-bold mb-6">Ready to scale your production?</h3>
                <p className="text-slate-400 mb-12">Submit a sourcing brief and our category managers will get back to you within 24 hours.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>info@wesource.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>+60 13 323-2888</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>Malaysia · Singapore · Hong Kong · China</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-slate-800">
                <p className="text-sm font-semibold opacity-50 mb-4">TRUSTED BY</p>
                <div className="flex gap-8 grayscale opacity-30">
                  <div className="font-black text-xl italic tracking-tighter">CORP-X</div>
                  <div className="font-black text-xl italic tracking-tighter">GLOBAL-N</div>
                  <div className="font-black text-xl italic tracking-tighter">Z-APPS</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5 p-12 lg:p-20">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                    <input type="text" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                    <input type="email" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Company</label>
                    <input type="text" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Interest</label>
                    <select className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors">
                      <option>Sourcing Inquiry</option>
                      <option>OEM Manufacture</option>
                      <option>Corporate Gifts</option>
                      <option>Logistics Only</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Project Brief</label>
                  <textarea rows={4} className="w-full border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-slate-900 bg-transparent transition-colors" placeholder="Describe your product, quantity, and requirements..."></textarea>
                </div>
                
                <button className="w-full bg-slate-900 text-white rounded-xl py-5 font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  Submit Inquiry <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-slate-400 text-xs">
                  By clicking submit, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-cyan-400/30">
                  <Globe className="text-cyan-400 w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                    Weo<span className="text-cyan-500">source</span>
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-slate-400 leading-none mt-1">
                    Global Sourcing
                  </span>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Empowering businesses to manufacture anywhere, sell everywhere. Your global partner in premium supply chain management.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-slate-900">Custom Sourcing</a></li>
                <li><a href="#" className="hover:text-slate-900">Quality Control Audit</a></li>
                <li><a href="#" className="hover:text-slate-900">OEM Development</a></li>
                <li><a href="#" className="hover:text-slate-900">Global Logistics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-slate-900">About Us</a></li>
                <li><a href="#" className="hover:text-slate-900">Network Map</a></li>
                <li><a href="#" className="hover:text-slate-900">CSR Commitment</a></li>
                <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
              <p className="text-sm text-slate-500 mb-4">Sourcing insights and supply chain updates delivered monthly.</p>
              <div className="flex border border-slate-200 rounded-lg overflow-hidden">
                <input type="text" placeholder="Email address" className="flex-1 px-4 py-2 text-sm outline-none" />
                <button className="bg-slate-900 text-white px-4 py-2">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-400">© 2026 Weosource Global Solutions. All rights reserved.</p>
            <div className="flex gap-8 text-xs text-slate-400">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Use</a>
              <a href="#" className="hover:text-slate-900">Cookie Data</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

