export const AGENCY = 'NOVA AI SOLUTIONS'
export const CLIENT = 'Alvora Clean'
export const CONTACT_NAME = 'Victor'

/* WhatsApp da agência: é para cá que os botões da proposta levam */
export const PHONE_DISPLAY = '(11) 95100-7967'
export const PHONE_E164 = '5511951007967'

export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? '').replace(/\/$/, '')
export const PROPOSAL_DATE = 'setembro de 2026'
export const VALID_DAYS = 15

export function waLink(message: string) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`
}

export const NAV_ITEMS = [
  { id: 'diagnostico', label: 'Onde vocês estão' },
  { id: 'plano', label: 'O plano' },
  { id: 'planos', label: 'Investimento' },
  { id: 'cronograma', label: 'Cronograma' },
  { id: 'duvidas', label: 'Dúvidas' },
] as const

export const EASE = [0.22, 1, 0.36, 1] as const

export type Plano = {
  id: string
  nome: string
  resumo: string
  preco: number
  destaque?: boolean
  itens: string[]
  total: string
}

export const PLANOS: Plano[] = [
  {
    id: 'essencial',
    nome: 'Essencial',
    resumo: 'O perfil vivo e o primeiro anúncio no ar',
    preco: 500,
    itens: [
      'Criativos novos publicados toda semana, no padrão da marca',
      'Legendas com chamada para o WhatsApp',
      'Agendamento e publicação por minha conta',
      'Instagram configurado como conta empresarial, do jeito que o anúncio exige',
      'Perfil da empresa no Google mantido em dia',
      'Uma campanha de anúncios no ar, criada e acompanhada por mim',
      'Relatório no fim do mês',
    ],
    total: 'R$ 500 + a verba de anúncio',
  },
  {
    id: 'crescimento',
    nome: 'Crescimento',
    resumo: 'Marca redonda e anúncio testado',
    preco: 700,
    destaque: true,
    itens: [
      'Tudo do Essencial',
      'Mais criativos por semana, com stories entre as publicações',
      'Identidade visual da marca: paleta, tipografia e padrão dos criativos',
      'Teste A/B: duas versões do anúncio disputando, fica no ar a que traz mais conversa',
      'Anúncio direcionado para as cidades e o tipo de cliente que vocês querem',
      'Catálogo dos serviços montado no WhatsApp',
      'Relatório mensal com leitura por chamada',
    ],
    total: 'R$ 700 + a verba de anúncio',
  },
  {
    id: 'constancia',
    nome: 'Constância',
    resumo: 'Presença diária e menos trabalho manual',
    preco: 900,
    itens: [
      'Tudo do Crescimento',
      'Presença diária: criativos, stories e vídeos curtos',
      'Anúncio de lembrete para quem já viu vocês e não chamou',
      'Uma automação para tirar trabalho manual da rotina de vocês',
      'Ajustes de campanha durante o mês, sem esperar o relatório',
      'Prioridade nas demandas do dia a dia',
    ],
    total: 'R$ 900 + a verba de anúncio',
  },
]
