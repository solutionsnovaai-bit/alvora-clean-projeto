# Proposta comercial — Alvora Clean

Proposta de presença digital da NOVA AI SOLUTIONS para a Alvora Clean, publicada como site.

O site institucional aparece como pagamento único de R$ 300, dentro da seção de investimento.

## Stack

Vite + React 18 + TypeScript + Tailwind CSS v4 + Framer Motion + React Helmet Async.

## Rodar local

```bash
npm install
npm run dev
```

## Build e deploy

```bash
npm run build     # gera dist/
npm run preview
```

Na Vercel: importe o repositório, e em Settings → Environment Variables crie `VITE_SITE_URL`
com o domínio final, sem barra no fim. É o que monta as URLs do card de compartilhamento.

A página está com `noindex` no `index.html` e `Disallow` no `robots.txt`, porque é uma proposta
e não deve aparecer no Google.

## Números desta proposta

| Item | Valor |
| --- | --- |
| Site institucional | R$ 300, pagamento único, com ajustes inclusos |
| Plano Essencial | R$ 500/mês |
| Plano Crescimento (recomendado) | R$ 700/mês |
| Plano Constância | R$ 900/mês |
| Verba de anúncio (paga por ela, valor definido por ela) | sugestão de R$ 150 a R$ 200/mês |

Tudo isso está em `src/lib/site.ts` (planos) e em `src/components/Custos.tsx` (tabela de
investimento total). Mexeu no preço em um, confira o outro.

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Preços, escopo dos planos, WhatsApp, data e validade | `src/lib/site.ts` |
| Tabela de custo total por plano | `src/components/Custos.tsx` |
| Diagnóstico inicial | `src/components/Diagnostico.tsx` |
| Fases do plano | `src/components/Plano.tsx` |
| Cronograma dos 15 dias | `src/components/Cronograma.tsx` |
| Dúvidas | `src/components/FAQ.tsx` |
| Cores | `src/index.css` (bloco `@theme`) |

Os botões abrem o WhatsApp da agência já com a mensagem do plano escolhido.
