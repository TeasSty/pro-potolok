import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Stage } from './components/Stage'
import { Story } from './components/Story'
import { Work } from './components/Work'
import './styles/site.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Stage />
        <Work />
        <Story />
      </main>
      <Contact />
    </>
  )
}
