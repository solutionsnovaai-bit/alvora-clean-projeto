import { motion } from 'framer-motion'
import { Sheet, Container, Heading } from './Section'
import { Icon, type IconName } from './icons'
import { EASE } from '../lib/site'

const PONTOS: { icon: IconName; titulo: string; texto: string; estado: 'feito' | 'aberto' }[] = [
  {
    icon: 'casa',
    titulo: 'O site já está pronto',
    texto: 'A página completa já está montada: serviços, promoção de lançamento e botão de WhatsApp em cada seção. Falta publicar e ligar no Instagram e no Google.',
    estado: 'feito',
  },
  {
    icon: 'conversa',
    titulo: 'O Instagram está parado',
    texto: 'Quem chega no perfil hoje não vê trabalho, não vê rosto e não vê movimento. Sem isso, a pessoa não chama no WhatsApp.',
    estado: 'aberto',
  },
  {
    icon: 'relogio',
    titulo: 'Ninguém acha vocês no Google',
    texto: 'Quem procura "faxineira em Franco da Rocha" não encontra a Alvora, porque o perfil da empresa no Google ainda não existe.',
    estado: 'aberto',
  },
]

export default function Diagnostico() {
  return (
    <Sheet id="diagnostico" tone="dark">
      <Container>
        <Heading
          title="Onde vocês estão hoje."
          lead="Antes de falar de preço, o retrato honesto da situação. Hoje, quem procura limpeza na região não tem como achar vocês."
        />
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {PONTOS.map((p, i) => (
            <motion.article
              key={p.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-[28px] border p-7 ${
                p.estado === 'feito' ? 'border-lima/30 bg-lima/[.06]' : 'border-white/[.09] bg-white/[.02]'
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon name={p.icon} className={`h-8 w-8 ${p.estado === 'feito' ? 'text-lima' : 'text-white/45'}`} />
                <span
                  className={`rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] ${
                    p.estado === 'feito' ? 'bg-lima text-tinta' : 'bg-white/[.07] text-white/55'
                  }`}
                >
                  {p.estado === 'feito' ? 'Feito' : 'Em aberto'}
                </span>
              </div>
              <h3 className="mt-7 text-[22px] font-semibold tracking-[-0.02em] text-white">{p.titulo}</h3>
              <p className="mt-2.5 text-[16px] leading-relaxed text-white/55">{p.texto}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Sheet>
  )
}
