import logo from '../assets/brand/logo-stacked.webp'
import { Container } from './Section'
import { WhatsAppIcon } from './icons'
import { AGENCY, CLIENT, PHONE_DISPLAY, PROPOSAL_DATE, waLink } from '../lib/site'

export default function Footer() {
  return (
    <footer className="relative bg-noite text-white">
      <Container className="pb-10 pt-16">
        <div className="flex flex-col gap-10 border-b border-white/[.08] pb-10 sm:flex-row sm:items-center sm:justify-between">
          <img src={logo} alt={CLIENT} loading="lazy" className="h-auto w-[150px]" />
          <a
            href={waLink('Oi Victor! Li a proposta e quero conversar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex h-13 items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[16px] font-medium"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] text-lima" />
            {PHONE_DISPLAY}
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-3 text-[14px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Proposta para {CLIENT}, {PROPOSAL_DATE}.
          </p>
          <p>
            Feito por <span className="font-semibold tracking-[0.02em] text-white/75">{AGENCY}</span>
          </p>
        </div>
      </Container>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </footer>
  )
}
