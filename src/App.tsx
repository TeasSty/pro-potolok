import { Audience } from './components/Audience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Solutions } from './components/Solutions'
import { Technologies } from './components/Technologies'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Projects />
        <Technologies />
        <Audience />
      </main>
    </>
  )
}
