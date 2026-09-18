import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../lib/site'

const TITLE = 'Proposta comercial | Alvora Clean e NOVA AI SOLUTIONS'
const DESCRIPTION =
  'Proposta de presença digital para a Alvora Clean: Instagram, tráfego pago e perfil no Google, com setup zerado e planos mensais a partir de R$ 500.'

export default function Seo() {
  const url = `${SITE_URL}/`
  const image = `${SITE_URL}/og-proposta.jpg`
  return (
    <Helmet htmlAttributes={{ lang: 'pt-BR' }}>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="NOVA AI SOLUTIONS" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="Proposta comercial | Alvora Clean" />
      <meta property="og:description" content="Instagram, tráfego pago e perfil no Google para a Alvora Clean. Setup zerado e planos a partir de R$ 500 por mês." />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Proposta comercial | Alvora Clean" />
      <meta name="twitter:description" content="Instagram, tráfego pago e perfil no Google para a Alvora Clean." />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
