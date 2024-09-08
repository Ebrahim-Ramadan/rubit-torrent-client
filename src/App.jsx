import { useState, useEffect } from 'react'
import { Download, Github, Terminal, FileDown, Layers, Wifi, Share2, Cog, HardDrive, Code, Cpu, BarChart } from "lucide-react"
import { GithubIcon } from 'lucide-react'
import { CopyComponent } from './CopyComponent'
import { ArrowRightIcon } from 'lucide-react'

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
    <div className="flex flex-col min-h-screen text-white">
     
        <header className="w-full  py-6 px-4 md:px-6">
        <div className=" mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src='/rubit.svg' className="h-8 w-8 text-primary-foreground" />
            {/* <span className="text-lg font-bold text-primary-foreground">TypeShit</span> */}
          </a>
          <nav className="hidden gap-1 md:flex items-center text-[#DB2777] bg-[#4f0724] px-2 py-1 rounded-xl">
           <svg fill="none" viewBox="0 0 16 16" width="16" height="16">
            <path stroke="currentColor" d="M6.833 2C6.368 4.356 6.365 4.356 4 4.833M6.833 2c.47 2.363.473 2.366 2.834 2.833M6.833 2v5.667m2.834-2.834c-2.36.468-2.36.472-2.834 2.834m2.834-2.834H4m2.833 2.834C6.365 5.3 6.358 5.3 4 4.833m0 4.834c-.328 1.663-.33 1.663-2 2m2-2c.332 1.668.334 1.67 2 2m-2-2v4m2-2c-1.666.33-1.666.332-2 2m2-2H2m2 2c-.33-1.67-.336-1.67-2-2m9.667-4.334c-.383 1.94-.386 1.94-2.334 2.334m2.334-2.334c.386 1.946.39 1.949 2.333 2.334m-2.333-2.334V12M14 9.667c-1.944.385-1.944.388-2.333 2.333M14 9.667H9.333M11.667 12c-.386-1.948-.392-1.948-2.334-2.333" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
           <span className='text-sm font-medium'>Welcome</span>
          </nav>
          <a href='https://github.com/spectre-xenon/rubit' target='_blank' className='bg-white rounded-full p-2 flex flex-row items-center gap-2'>
            <GithubIcon size='20' color='black' />
            </a>
        </div>
      </header>
      <section className='w-full min-h-screen md:block hidden  opacity-20 '>
        <div class="bg-gradient-to-t from-[#171717] to-black/20 h-96 w-full absolute bottom-[-63px] left-0 z-10">
        </div>
          <div class="absolute -bottom-16 -left-40 w-[85vw] h-[85vw] rounded-full transform -rotate-12">
        <img 
        className='w-full'
        src='/rust.svg'
        alt='Top left sphere'
      />
      </div>
      <div class="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full ">
        <img 
        src='/rust.svg'
        alt='Top left sphere'
      />
      </div>
    </section>

    <section className='relative h-48 w-full md:hidden flex items-center justify-center'>
      {/* bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-black/20 z-10"></div>

      {/* Content */}
      <div className="flex flex-col h-full items-center justify-center py-4 relative ">
        <img 
        className='w-full'
          src='/rust.svg'
          alt='Top left sphere'
        />
      </div>
</section>
      <main className="flex-1 md:mt-[-20rem] z-20">
        <section className="w-full">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <span className='text-[#DB2777]'>Rubit </span>:The Rust-Powered BitTorrent Client
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Lightning-fast, efficient, and secure. Experience the power of Rust in your torrenting.
                </p>
              </div>
              <div className="md:space-x-4 flex md:flex-row flex-col items-center gap-2">
                <a href='https://github.com/spectre-xenon/rubit?tab=readme-ov-file#installation' className="bg-white text-black hover:bg-gray-200 px-2 py-1 rounded-lg">
                  Install Rubit
                </a>
                {/* <a href='https://github.com/spectre-xenon/rubit' className='flex flex-row items-center bg-white text-black hover:bg-gray-200 px-2 py-1 rounded-lg'>
                  Documentation
                </a> */}
                <a href='https://github.com/spectre-xenon/rubit' className='hover:text-neutral-300 flex flex-row gap-2 items-center text-neutral-400'>
                Documentation
                <ArrowRightIcon size='20' color='#CCCCCC' />
              </a>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-neutral-950 border-gray-700 rounded-3xl">
                  <div className="flex flex-col items-center p-6 text-center">
                    <feature.icon className="h-12 w-12 mb-4 text-[#DB2777]" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get Started with Rubit
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Experience the future of torrenting. Download Rubit now and unleash the power of Rust.
                </p>
              </div>
              <CopyComponent/>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className=" px-4 md:px-6">
          <div className="grid gap-4 md:gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#DB2777] px-3 py-1 text-sm">
                Powered by Rust
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Blazing Fast. Memory Safe.
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rubit leverages the power of Rust to deliver unparalleled performance and safety. With features like zero-cost abstractions and memory safety without garbage collection, Rubit sets a new standard for BitTorrent clients.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row [&>*]:rounded-lg">
              <a href='https://github.com/spectre-xenon/rubit?tab=readme-ov-file#installation' className="px-2 py-1 bg-white text-black hover:bg-gray-200">
                Learn More
              </a>
              <a href='https://github.com/spectre-xenon/rubit?tab=readme-ov-file#contributing' className='flex flex-row gap-2 items-center text-neutral-400'>
               Contribute
                <ArrowRightIcon size='16'  />
              </a>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center bg-gradient-to-b from-[#2c003e] via-[#1d1b3a] to-[#4a1a12] h-[300px] rounded-lg" >
            <div className="absolute text-white text-center text-2xl">
              <div className='flex flex-col gap-2 items-center'>
              <img src='/rubit.svg' className="h-8 w-8 text-primary-foreground" />

<p className='text-neutral-400 text-xs'>Rubit</p>
              </div>
            </div>
          </div>
        </div>

          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2025 Rubit. All rights reserved.</p>
        <a href='https://github.com/spectre-xenon' className="ml-auto text-neutral-400 text-xs">
          Spectre-Xenon
        </a>
      </footer>
    </div>
  )
}