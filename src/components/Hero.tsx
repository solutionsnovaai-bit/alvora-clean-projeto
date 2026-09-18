import { motion } from 'framer-motion'
import heroDesktop from '../assets/brand/hero-desktop.webp'
import heroMobile from '../assets/brand/hero-mobile.webp'
import { waLink, EASE, PROPOSAL_DATE, VALID_DAYS } from '../lib/site'
import { WhatsAppIcon, Sparkle } from './icons'

export default function Hero({ ready }: { ready: boolean }) {
  const item = (delay: number) => ({
    initial: { opacity: 0, y: 26, filter: 'blur(8px)' },
    animate: ready ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {},
    transition: { duration: 1, ease: EASE, delay: 0.35 + delay },
  })

  return (
    <section id="inicio" className="hero grain relative isolate min-h-[100svh] overflow-hidden bg-noite pb-20 lg:flex lg:items-center lg:pb-0">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={ready ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
      >
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="Logo da Alvora Clean"
            className="hero-img"
            {...({ fetchpriority: 'high' } as Record<string, string>)}
            decoding="async"
          />
        </picture>
      </motion.div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-noite" />

      <div className="hero-copy relative z-10 px-6 text-center sm:px-10 lg:px-0 lg:text-left">
        <motion.span {...item(0)} className="inline-flex items-center gap-2.5 rounded-full border border-lima/30 bg-lima/[.08] py-1.5 pl-2.5 pr-4 text-[13px] text-white/85">
          <Sparkle className="h-3 w-3 text-lima" />
          Proposta comercial, {PROPOSAL_DATE}
        </motion.span>

        <motion.h1 {...item(0.08)} className="hero-title mt-5 font-bold leading-[1] tracking-[-0.035em] text-white">
          O site está no ar.
          <span className="block font-light text-white/75">Agora falta gente ver.</span>
        </motion.h1>

        <motion.p {...item(0.18)} className="mx-auto mt-6 max-w-[34rem] text-[17px] leading-relaxed text-white/60 lg:mx-0 lg:text-[18px]">
          Um plano para a Alvora Clean aparecer todo dia no Instagram, ser encontrada no Google e receber pedido de
          orçamento no WhatsApp. Sem taxa de setup e sem fidelidade.
        </motion.p>

        <motion.div {...item(0.3)} className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
          <a href="#planos" className="btn-lima inline-flex h-14 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 text-[17px] font-semibold">
            Ver os planos
          </a>
          <a
            href={waLink('Oi Victor! Li a proposta e quero tirar uma dúvida.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex h-14 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 text-[17px] font-medium"
          >
            <WhatsAppIcon className="h-5 w-5 text-lima" />
            Tirar dúvida
          </a>
        </motion.div>

        <motion.ul {...item(0.4)} className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14.5px] text-white/55 lg:justify-start">
          {['Setup: R$ 0', 'Sem fidelidade', `Proposta válida por ${VALID_DAYS} dias`].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <Sparkle className="h-3 w-3 text-lima" />
              {t}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
