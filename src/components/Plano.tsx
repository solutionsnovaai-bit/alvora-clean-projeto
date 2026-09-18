import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Sheet, Container, Heading } from './Section'
import { Sparkle } from './icons'

const FASES = [
  {
    fase: 'Fase 1',
    prazo: 'Primeiras duas semanas',
    titulo: 'Ativação',
    tag: 'Já no primeiro mês',
    itens: [
      'Posts de fundação para a grade não nascer vazia',
      'Instagram como conta empresarial, com bio, destaques e link do site',
      'Conta de anúncios criada e ligada ao Instagram e ao Facebook',
      'WhatsApp comercial montado, com saudação e respostas rápidas',
      'Perfil da empresa no Google criado e verificado',
      'Site conectado ao anúncio, para saber de onde vêm os contatos',
    ],
  },
  {
    fase: 'Fase 2',
    prazo: 'Do mês 1 em diante',
    titulo: 'Constância',
    tag: 'Plano mensal',
    itens: [
      'Publicações toda semana, no padrão da marca',
      'Conteúdo que mostra serviço, antes e depois e rotina',
      'Stories para o perfil não ficar mudo entre os posts',
      'Legenda sempre terminando em chamada para o WhatsApp',
    ],
  },
  {
    fase: 'Fase 3',
    prazo: 'A partir do mês 1',
    titulo: 'Tráfego pago',
    tag: 'Incluso nos planos',
    itens: [
      'Campanha no Instagram e no Facebook mirando a região atendida',
      'Anúncio que abre a conversa direto no WhatsApp',
      'A verba é de vocês e vai direto para a Meta, sem passar por mim',
      'Acompanhamento, ajuste e leitura do resultado no relatório',
    ],
  },
]

export default function Plano() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.6'] })
  const progresso = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <Sheet id="plano" tone="graphite">
      <Container>
        <Heading
          title="O plano, em três fases."
          lead="A montagem toda entra no primeiro mês de plano. Assim que o pagamento entra, o trabalho começa."
        />

        <div ref={ref} className="relative mt-12 lg:mt-16">
          <div aria-hidden className="absolute bottom-6 left-[27px] top-2 w-px bg-white/10 lg:hidden" />
          <motion.div
            aria-hidden
            className="absolute bottom-6 left-[27px] top-2 w-px origin-top bg-gradient-to-b from-folha to-lima lg:hidden"
            style={{ scaleY: progresso }}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {FASES.map((f, i) => (
              <motion.article
                key={f.fase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="relative flex gap-6 rounded-[28px] border border-white/[.09] bg-white/[.02] p-7 lg:block"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-lima/40 bg-noite text-[17px] font-bold tabular-nums text-lima lg:mb-7">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/40">{f.prazo}</span>
                    <span className="rounded-full bg-lima px-2.5 py-0.5 text-[12px] font-semibold text-tinta">{f.tag}</span>
                  </div>
                  <h3 className="mt-3 text-[26px] font-bold tracking-[-0.025em] text-white">{f.titulo}</h3>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {f.itens.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[15.5px] leading-snug text-white/60">
                        <Sparkle className="mt-1.5 h-2.5 w-2.5 shrink-0 text-lima" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </Sheet>
  )
}
