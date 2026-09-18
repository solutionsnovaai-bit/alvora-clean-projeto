import { Sheet, Container, Heading } from './Section'
import { Icon, Sparkle } from './icons'

const FORA = [
  {
    icon: 'conversa' as const,
    titulo: 'Verba de anúncio',
    valor: 'vocês decidem quanto investir',
    texto: 'O valor é escolhido por vocês duas e vai direto para a Meta, no cartão de vocês. Minha recomendação é começar com R$ 150 a R$ 200 por mês, o suficiente para sentir a primeira campanha. Depois a gente sobe conforme a agenda encher.',
  },
]

export default function Custos() {
  return (
    <Sheet tone="dark">
      <Container>
        <Heading
          title="A verba de anúncio."
          lead="Prefiro deixar claro agora: esse é o único valor que não passa por mim."
        />

        <div className="mt-12 grid gap-5 lg:mt-16">
          {FORA.map((f) => (
            <article key={f.titulo} className="rounded-[28px] border border-white/[.09] bg-white/[.02] p-7">
              <Icon name={f.icon} className="h-8 w-8 text-lima" />
              <h3 className="mt-6 text-[22px] font-bold tracking-[-0.02em] text-white">{f.titulo}</h3>
              <p className="mt-1 text-[17px] font-semibold text-lima">{f.valor}</p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-white/55">{f.texto}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-[24px] border border-lima/25 bg-lima/[.07] p-6">
          <Sparkle className="mt-1 h-4 w-4 shrink-0 text-lima" />
          <p className="text-[16px] leading-relaxed text-white/75">
            O objetivo não é gastar com anúncio, é transformar anúncio em diária marcada. E a conta fica boa rápido:
            uma cliente que entra no plano quinzenal volta duas vezes por mês, todo mês, sem custo novo de anúncio.
            Poucas clientes fixas já sustentam o investimento inteiro.
          </p>
        </div>
      </Container>
    </Sheet>
  )
}
