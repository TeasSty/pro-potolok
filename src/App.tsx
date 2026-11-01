import { Construction } from './components/Construction'
import { Contact } from './components/Contact'
import { Directions } from './components/Directions'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Systems } from './components/Systems'
import { Works } from './components/Works'
import './styles/site.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Systems />
        <Works />
        <Construction />
        <Directions />
      </main>
      <Contact />
    </>
  )
}
