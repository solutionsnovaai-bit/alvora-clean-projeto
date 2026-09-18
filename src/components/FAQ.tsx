import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sheet, Container, Heading } from './Section'
import { PlusIcon, WhatsAppIcon } from './icons'
import { waLink, EASE } from '../lib/site'

const QA: { q: string; a: ReactNode }[] = [
  { q: 'Tem fidelidade?', a: 'Não. É mês a mês. Se quiserem parar, é só avisar com 15 dias e a gente encerra sem multa.' },
  { q: 'Por que o setup é zero?', a: 'Porque vocês estão começando agora e eu prefiro entrar junto no início. A ativação vale R$ 600 e entra por minha conta no lançamento.' },
  { q: 'Quanto preciso colocar de anúncio?', a: 'Quem decide são vocês. A minha recomendação é começar com R$ 150 a R$ 200 por mês, que já dá para sentir a primeira campanha e entender de onde vêm os pedidos. Esse valor vai direto para a Meta, no cartão de vocês, e não passa por mim.' },
  { q: 'O que é esse teste A/B do plano Crescimento?', a: 'São duas versões do mesmo anúncio rodando ao mesmo tempo, com imagem ou frase diferente. Depois de alguns dias, a que trouxe mais conversa continua e a outra sai. Assim a verba não fica presa no que não funciona.' },
  { q: 'Por que o Instagram precisa virar conta empresarial?', a: 'É o que libera anunciar e ver os números do perfil. Eu faço essa troca na ativação, junto com a conta de anúncios, e tudo fica no nome da empresa de vocês. Não muda nada no perfil por fora, os seguidores continuam os mesmos.' },
  { q: 'Posso trocar de plano depois?', a: 'Pode, a qualquer momento. Subir vale já no mês seguinte e descer também. A ideia é acompanhar o ritmo da agenda de vocês.' },
  { q: 'Quem responde o WhatsApp dos clientes?', a: 'Vocês. Eu levo a pessoa até a conversa e deixo o atendimento organizado com saudação e respostas rápidas, mas quem fecha o serviço é quem faz o serviço.' },
  { q: 'Como aprovo os posts?', a: 'Eu mando tudo antes de publicar. Vocês respondem com um ok ou pedem ajuste. Só vai para o ar o que estiver aprovado.' },
  { q: 'E se eu não gostar do resultado?', a: 'A gente conversa no relatório mensal, ajusta o que não funcionou e segue. Sem fidelidade, vocês não ficam presas a nada.' },
]

function Item({ q, a, aberto, onToggle, id }: { q: string; a: ReactNode; aberto: boolean; onToggle: () => void; id: string }) {
  return (
    <div className={`rounded-[24px] border transition-colors duration-300 ${aberto ? 'border-lima/30 bg-white/[.04]' : 'border-white/[.08]'}`}>
      <h3>
        <button onClick={onToggle} aria-expanded={aberto} aria-controls={id} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6">
          <span className="text-[17.5px] font-semibold tracking-[-0.01em] text-white sm:text-[19px]">{q}</span>
          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${aberto ? 'rotate-45 bg-lima text-tinta' : 'bg-white/[.06] text-white'}`}>
            <PlusIcon className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {aberto && (
          <motion.div id={id} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="overflow-hidden">
            <p className="px-6 pb-6 text-[16.5px] leading-relaxed text-white/60 sm:px-7 sm:pb-7">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [aberto, setAberto] = useState(0)
  return (
    <Sheet id="duvidas" tone="dark">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading title="Dúvidas." lead="Se ficar qualquer coisa no ar, me chama que eu explico na hora." />
          <a
            href={waLink('Oi Victor! Tenho uma dúvida sobre a proposta: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-8 inline-flex h-13 items-center gap-2.5 rounded-full px-6 py-3.5 text-[16px] font-medium"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] text-lima" />
            Perguntar
          </a>
        </div>
        <div className="flex flex-col gap-3">
          {QA.map((item, i) => (
            <Item key={item.q} id={`faq-${i}`} q={item.q} a={item.a} aberto={aberto === i} onToggle={() => setAberto(aberto === i ? -1 : i)} />
          ))}
        </div>
      </Container>
    </Sheet>
  )
}
