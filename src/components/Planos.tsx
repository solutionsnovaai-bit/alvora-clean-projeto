import { motion } from 'framer-motion'
import { Sheet, Container, Heading } from './Section'
import { Sparkle, WhatsAppIcon } from './icons'
import { PLANOS, waLink, EASE } from '../lib/site'

export default function Planos() {
  return (
    <Sheet id="planos" tone="light">
      <Container>
        <Heading
          tone="light"
          title="Quanto custa."
          lead="Três tamanhos, todos sem fidelidade. Dá para começar pelo menor e subir quando a agenda apertar."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] sm:items-center lg:mt-14">
          <div className="rounded-[26px] border border-folha/25 bg-folha/[.07] p-6 sm:p-8">
            <p className="text-[13.5px] font-semibold uppercase tracking-[0.14em] text-folha">O site</p>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="text-[19px] font-medium text-tinta/45">R$</span>
              <span className="text-[44px] font-bold leading-none tracking-[-0.03em] text-tinta">300</span>
            </p>
            <p className="mt-2 text-[15.5px] text-tinta/60">Pagamento único, na publicação.</p>
          </div>
          <div className="px-1 sm:px-2">
            <p className="text-[16.5px] leading-relaxed text-tinta/70">
              A página já está montada e entra no ar assim que vocês derem o ok. Nesse valor estão inclusos a
              publicação, a ligação do site com o Instagram, o Google e o WhatsApp, e os ajustes de texto e de fotos
              que vocês pedirem depois de pronto.
            </p>
            <p className="mt-3 text-[15px] text-tinta/50">
              O site é cobrado uma vez só. O plano mensal abaixo é a parte que faz gente chegar até ele.
            </p>
          </div>
        </div>

        {/* planos mensais */}
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {PLANOS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-[32px] p-8 sm:p-9 ${
                p.destaque
                  ? 'bg-tinta text-white shadow-[0_40px_90px_-40px_rgba(23,25,22,.65)] lg:-my-4 lg:py-12'
                  : 'border border-tinta/[.08] bg-white text-tinta'
              }`}
            >
              {p.destaque && (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full"
                    style={{ background: 'radial-gradient(closest-side, rgba(124,194,66,.3), transparent)' }}
                  />
                  <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-lima px-3.5 py-1.5 text-[13px] font-semibold text-tinta">
                    <Sparkle className="h-3 w-3" />
                    Recomendado para começar
                  </span>
                </>
              )}
              <p className={`relative text-[15px] font-semibold ${p.destaque ? 'text-white/55' : 'text-tinta/45'}`}>{p.nome}</p>
              <p className={`relative mt-1 text-[16px] ${p.destaque ? 'text-white/75' : 'text-tinta/70'}`}>{p.resumo}</p>
              <p className="relative mt-6 flex items-baseline gap-1.5">
                <span className={`text-[19px] font-medium ${p.destaque ? 'text-white/50' : 'text-tinta/45'}`}>R$</span>
                <span className={`text-[54px] font-bold leading-none tracking-[-0.04em] ${p.destaque ? 'text-white' : 'text-tinta'}`}>{p.preco}</span>
                <span className={`text-[17px] ${p.destaque ? 'text-white/50' : 'text-tinta/45'}`}>/mês</span>
              </p>

              <ul className={`relative mt-8 flex flex-col gap-3.5 border-t pt-7 ${p.destaque ? 'border-white/10' : 'border-tinta/[.08]'}`}>
                {p.itens.map((it) => (
                  <li key={it} className={`flex items-start gap-3 text-[15.5px] leading-snug ${p.destaque ? 'text-white/80' : 'text-tinta/70'}`}>
                    <Sparkle className={`mt-1.5 h-2.5 w-2.5 shrink-0 ${p.destaque ? 'text-lima' : 'text-folha'}`} />
                    {it}
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-9">
                <a
                  href={waLink(`Oi Victor! Quero fechar o plano ${p.nome} (R$ ${p.preco}/mês) para a Alvora Clean.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2.5 rounded-full py-3.5 text-[16px] font-semibold transition-colors ${
                    p.destaque ? 'btn-lima' : 'border border-tinta/15 bg-tinta text-white hover:bg-tinta/90'
                  }`}
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                  Quero esse
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-[14.5px] text-tinta/45">
          Mensalidade paga por Pix, sempre no mesmo dia do mês. O trabalho começa quando o primeiro mês entra. Para
          encerrar, basta avisar com 15 dias.
        </p>
      </Container>
    </Sheet>
  )
}
