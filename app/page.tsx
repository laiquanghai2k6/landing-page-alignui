import { LabelDemo } from '@/components/layout/LabelDemo';
import { TextareaInteractiveCounter } from '@/components/layout/TextAreaCountChar';
import { InputDemo } from '@/components/layout/InputDemo';
import { ButtonDemo } from '@/components/layout/ButtonDemo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="w-full border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">MyLanding</h1>
          <nav className="space-x-4">
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>
            <a href="#pricing" className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 bg-[var(--information-light)] flex items-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Build your next <span className="text-blue-600">amazing app</span>
          </h2>
          <p className="mb-6 text-[var(--text-sub-600)]">
            Start faster with our ready-made components and beautiful design.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold mb-2">Easy to Use</h4>
            <p className="text-gray-600">
              Simple and intuitive components for fast development.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold mb-2">Fully Responsive</h4>
            <p className="text-gray-600">
              Works perfectly on mobile, tablet, and desktop.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold mb-2">Customizable</h4>
            <p className="text-gray-600">
              Tailor the look and feel to your brand needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Pricing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition text-center">
            <h4 className="text-xl font-semibold mb-2">Free</h4>
            <p className="text-4xl font-bold mb-4">$0</p>
            <p className="mb-4 text-gray-600">Perfect for individuals</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition text-center">
            <h4 className="text-xl font-semibold mb-2">Pro</h4>
            <p className="text-4xl font-bold mb-4">$19</p>
            <p className="mb-4 text-gray-600">Best for small teams</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Choose Pro
            </button>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition text-center">
            <h4 className="text-xl font-semibold mb-2">Enterprise</h4>
            <p className="text-4xl font-bold mb-4">Contact Us</p>
            <p className="mb-4 text-gray-600">For large organizations</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Contact Us</h3>
        <form className="max-w-2xl mx-auto space-y-4">
          <div>
            <LabelDemo label='Name' />

            <InputDemo placeholder='Your name' className='w-full' />
          </div>
          <div>
            <LabelDemo label='Email' />

            <InputDemo placeholder='yvl@gmail.com' className='w-full' type='email' />

          </div>
          <div>
            <LabelDemo label='Message' />

            <TextareaInteractiveCounter />
          </div>
          <ButtonDemo text='Submit' type='submit' />
        </form>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--primary-base)] text-white text-center py-16">
        <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
        <p className="mb-6">Join thousands of developers building beautiful apps.</p>
        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition">
          Sign Up Free
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--faded-lighter)] py-6">
        <div className="container mx-auto px-4 text-center text-[var(--copy-right)]">
          © 2025 MyLanding. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
