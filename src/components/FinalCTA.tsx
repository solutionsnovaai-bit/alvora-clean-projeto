import { Container } from './Section'
import { WhatsAppIcon, Sparkle } from './icons'
import { PLANOS, waLink, PHONE_DISPLAY, VALID_DAYS } from '../lib/site'

export default function FinalCTA() {
  return (
    <section
      aria-label="Escolher plano"
      className="grain relative -mt-12 overflow-hidden rounded-t-[40px] bg-noite pb-32 pt-24 sm:rounded-t-[56px] lg:rounded-t-[72px] lg:pb-40 lg:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[80vmin] w-[140vmin] -translate-x-1/2 rounded-[50%]"
        style={{ background: 'radial-gradient(closest-side, rgba(124,194,66,.3), rgba(63,154,44,.1) 45%, transparent)' }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <Container className="relative text-center">
        <h2 className="mx-auto max-w-[16ch] text-[clamp(2.6rem,7vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.04em] text-white">
          Escolham o tamanho e a gente começa.
        </h2>
        <p className="mx-auto mt-6 max-w-[46ch] text-[17px] leading-relaxed text-white/55">
          É só tocar no plano que fizer sentido. A mensagem já vai pronta para o meu WhatsApp e eu respondo com os
          próximos passos.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
          {PLANOS.map((p) => (
            <a
              key={p.id}
              href={waLink(`Oi Victor! Quero fechar o plano ${p.nome} (R$ ${p.preco}/mês) para a Alvora Clean.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-14 items-center justify-center gap-2.5 rounded-full px-7 text-[16px] font-semibold ${p.destaque ? 'btn-lima' : 'btn-ghost'}`}
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              {p.nome}, R$ {p.preco}
            </a>
          ))}
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-[14.5px] text-white/40">
          <Sparkle className="h-3 w-3 text-lima" />
          Proposta válida por {VALID_DAYS} dias. WhatsApp {PHONE_DISPLAY}
        </p>
      </Container>
    </section>
  )
}
