import Gallary from './components/Gallary'
import Hero from './components/Hero'
import About from './components/News'
import Service from './components/Service'

export default function Home() {
  return (
    <main className="max-sm:px-3">
      <Hero />
      <Service />
      <Gallary />
      <About/>
    </main>
  )
}
