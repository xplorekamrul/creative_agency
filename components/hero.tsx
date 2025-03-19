import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-indigo-600 py-16 md:py-24">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We Are Digital
              <br />
              Product Design
              <br />
              Agency
            </h1>
            <p className="mb-8 opacity-90 max-w-md">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>

          <div className="md:w-1/2 relative">
            {/* Main Illustration */}
            <div className="relative z-10">
              <Image
                src="/hero.png"
                alt="hero.png"
                width={500}
                height={500}
                className="max-w-full h-auto"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

