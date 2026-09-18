import { Sheet, Container, Heading } from './Section'
import { Sparkle, WhatsAppIcon } from './icons'
import { waLink } from '../lib/site'

const SEMANAS = [
  {
    quando: 'Dias 1 a 3',
    titulo: 'Alinhamento',
    itens: ['Conversa de 30 minutos sobre serviços, região e agenda', 'Envio do material que vocês já têm: fotos, vídeos e áudios', 'Definição do tom de voz do perfil'],
  },
  {
    quando: 'Dias 4 a 8',
    titulo: 'Produção da fundação',
    itens: ['Criação dos primeiros criativos da grade', 'Bio, destaques e link montados', 'Aprovação de vocês antes de qualquer publicação'],
  },
  {
    quando: 'Dias 9 a 12',
    titulo: 'Perfil no Google e WhatsApp',
    itens: ['Perfil da empresa no Google criado e verificado', 'WhatsApp comercial com saudação e respostas rápidas', 'Site conectado a tudo'],
  },
  {
    quando: 'Dias 13 a 15',
    titulo: 'Publicação e primeira campanha',
    itens: ['Grade publicada e perfil no ar de verdade', 'Primeira campanha montada e no ar', 'Calendário do mês seguinte definido'],
  },
]

const PRECISO = [
  'Fotos e vídeos dos serviços feitos, mesmo que do celular',
  'Uma foto de vocês duas, para o perfil ter rosto',
  'Acesso ao Instagram e ao número comercial',
  'Confirmação das cidades atendidas e da faixa de preço',
  'Resposta rápida nas aprovações, para não travar a fila',
]

export default function Cronograma() {
  return (
    <Sheet id="cronograma" tone="light">
      <Container>
        <Heading tone="light" title="Como começam os primeiros 15 dias." lead="Tudo isso acontece antes da primeira mensalidade." />

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-4">
          {SEMANAS.map((s, i) => (
            <article key={s.quando} className="relative rounded-[26px] border border-tinta/[.08] bg-white p-7">
              <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-folha">{s.quando}</span>
              <h3 className="mt-3 text-[21px] font-semibold tracking-[-0.02em] text-tinta">{s.titulo}</h3>
              <ul className="mt-5 flex flex-col gap-2.5">
                {s.itens.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[15px] leading-snug text-tinta/60">
                    <Sparkle className="mt-1.5 h-2.5 w-2.5 shrink-0 text-folha" />
                    {it}
                  </li>
                ))}
              </ul>
              <span className="absolute right-7 top-7 text-[42px] font-bold leading-none tracking-[-0.04em] text-tinta/[.07]">{i + 1}</span>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 rounded-[28px] bg-tinta p-7 text-white sm:p-9 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center">
          <div>
            <h3 className="text-[26px] font-bold tracking-[-0.025em] text-white">O que eu preciso de vocês</h3>
            <p className="mt-3 max-w-[38ch] text-[16px] leading-relaxed text-white/55">
              Minha parte é a execução. A de vocês é pequena, mas sem ela nada sai do papel.
            </p>
            <a
              href={waLink('Oi Victor! Já consigo mandar o material que você precisa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lima mt-7 inline-flex h-13 items-center gap-2.5 rounded-full px-6 py-3.5 text-[16px] font-semibold"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Mandar o material
            </a>
          </div>
          <ul className="flex flex-col gap-3">
            {PRECISO.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl bg-white/[.03] px-5 py-3.5 text-[15.5px] text-white/75">
                <Sparkle className="mt-1.5 h-2.5 w-2.5 shrink-0 text-lima" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Sheet>
  )
}
