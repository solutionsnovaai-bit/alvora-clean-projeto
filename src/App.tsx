import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Seo from './components/Seo'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { CrossBands, MarqueeBand } from './components/Marquee'
import Diagnostico from './components/Diagnostico'
import Plano from './components/Plano'
import Planos from './components/Planos'
import Custos from './components/Custos'
import Cronograma from './components/Cronograma'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

const FAIXA_A = ['Instagram', 'Tráfego pago', 'Perfil no Google', 'Artes semanais', 'WhatsApp organizado']
const FAIXA_B = ['Sem fidelidade', 'Aprovação antes de publicar', 'Relatório todo mês', 'Fala direto comigo']
const FAIXA_C = ['Franco da Rocha', 'Francisco Morato', 'Jundiaí', 'e região']

export default function App() {
  const [loading, setLoading] = useState(true)
  const finish = useCallback(() => setLoading(false), [])

  useEffect(() => {
    document.body.classList.toggle('is-loading', loading)
    if (loading) window.scrollTo(0, 0)
  }, [loading])

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      <Seo />
      <AnimatePresence>{loading && <Loader key="loader" onFinish={finish} />}</AnimatePresence>
      <Navbar show={!loading} />

      <main>
        <Hero ready={!loading} />
        <CrossBands a={FAIXA_A} b={FAIXA_B} />
        <Diagnostico />
        <Plano />
        <Planos />
        <Custos />
        <div className="relative z-10 -mt-12">
          <MarqueeBand items={FAIXA_C} tone="lima" duration={45} reverse />
        </div>
        <Cronograma />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppFab show={!loading} />
    </>
  )
}
