import { useState, useEffect } from 'react'
import { Download, Github, Terminal, FileDown, Layers, Wifi, Share2, Cog, HardDrive, Code, Cpu, BarChart } from "lucide-react"

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    { icon: FileDown, title: "Bencode Decoding", description: "Efficiently decode torrent file structures" },
    { icon: Layers, title: "Multi-file Support", description: "Handle both single and multi-file torrents" },
    { icon: Wifi, title: "Tracker Communication", description: "HTTP and UDP tracker announce support" },
    { icon: Share2, title: "Peer Wire Protocol", description: "Robust implementation of the BitTorrent protocol" },
    { icon: Cog, title: "Multi-threading", description: "Handle peers and pieces concurrently for optimal performance" },
    { icon: HardDrive, title: "Advanced File System Handling", description: "Efficient piece writing and existing file handling" },
    { icon: Terminal, title: "CLI Interface", description: "User-friendly command-line interface with progress bar" }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-white/20 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <img src='/rubit.svg' alt='Rubit Logo' className="h-6 w-6 mr-2" />
          <span className="font-bold text-xl">Rubit</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#get-started">
            Get Started
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="https://github.com/yourusername/rubit">
            GitHub
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Rubit: The Rust-Powered BitTorrent Client
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Lightning-fast, efficient, and secure. Experience the power of Rust in your torrenting.
                </p>
              </div>
              <div className="space-x-4 flex md:flex-row flex-col items-center gap-2">
                <button className="bg-white text-black hover:bg-gray-200 px-2 py-1 rounded-lg">
                  Download Rubit
                </button>
                <button className='flex flex-row items-center gap-2 bg-white text-black hover:bg-gray-200 px-2 py-1 rounded-lg'>
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 border-gray-700">
                  <div className="flex flex-col items-center p-6 text-center">
                    <feature.icon className="h-12 w-12 mb-4 text-blue-400" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get Started with Rubit
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Experience the future of torrenting. Download Rubit now and unleash the power of Rust.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <button className="w-full bg-white text-black hover:bg-gray-200">
                  Download for Windows
                </button>
                <button className="w-full bg-white text-black hover:bg-gray-200">
                  Download for macOS
                </button>
                <button className="w-full bg-white text-black hover:bg-gray-200">
                  Download for Linux
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
                    Powered by Rust
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Blazing Fast. Memory Safe.
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Rubit leverages the power of Rust to deliver unparalleled performance and safety. With features like zero-cost abstractions and memory safety without garbage collection, Rubit sets a new standard for BitTorrent clients.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="bg-white text-black hover:bg-gray-200">
                    Learn More
                  </button>
                  <button >
                    View Benchmarks
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[300px] h-[300px]" style={{ perspective: '1000px', transform: `rotateY(${scrollY * 0.1}deg) rotateX(${scrollY * 0.1}deg)` }}>
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-500 rounded-lg shadow-lg" style={{ transform: 'translateZ(75px)' }}>
                    <Code className="w-24 h-24 text-white" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-green-500 rounded-lg shadow-lg" style={{ transform: 'translateZ(50px) translateX(25px) translateY(25px)' }}>
                    <Cpu className="w-24 h-24 text-white" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-yellow-500 rounded-lg shadow-lg" style={{ transform: 'translateZ(25px) translateX(-25px) translateY(-25px)' }}>
                    <BarChart className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2023 Rubit. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}