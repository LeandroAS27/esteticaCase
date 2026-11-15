# Relatório da transformação

## Estado inicial e adaptações

`npm.cmd install` passou; `npm.cmd run lint` passou; `npm.cmd run build` falhou com `spawn EPERM` no sandbox antes das alterações. O mesmo build passou fora do sandbox. Usei `npm.cmd` porque a política do PowerShell bloqueou `npm.ps1`. O código correspondia à ordem de seções e aos problemas descritos no pedido. As fotos existentes vieram do próprio repositório, sem autoria/licença documentada; por isso são ilustrativas e requerem troca ou verificação. A faixa de confiança fica oculta porque não há credenciais confirmadas. Avaliações e agenda online também ficam ocultas enquanto não houver dados reais.

## Arquivos

- Criados: `src/config/site.ts`, `src/lib/whatsapp.ts`, `src/app/components/Gallery.tsx`, `Faq.tsx`, `Resultados.tsx`, `FinalCta.tsx`, `CREDITS.md`, `REPORT.md`, `public/og.jpg`, `public/images/*.webp`.
- Alterados: `next.config.ts`, `package.json`, `package-lock.json`, `tailwind.config.ts`, `src/app/layout.tsx`, `page.tsx`, `globals.css` e os nove componentes originais em `src/app/components/`.
- Apagados: 21 arquivos públicos antigos, incluindo `wallpaper.png`, `wallpaper2.jpg`, `icons8-marcador-96.png` e os cinco SVGs do template. As imagens usadas foram substituídas por WebP.

## Imagens, bytes antes → depois

| Origem | Novo arquivo | Antes → depois |
| --- | --- | ---: |
| `profissionalEstetica.jpg` | `profissional.webp` | 39.140 → 26.952 |
| `limpeza-de-pele-1024x819.png` | `limpeza.webp` | 963.470 → 24.884 |
| `drenagemLinfatica.webp` | `drenagem-linfatica.webp` | 15.922 → 13.940 |
| `drenagemFacial.jpg` | `drenagem-facial.webp` | 5.533 → 4.606 |
| `radiofrequencia.png` | `radiofrequencia.webp` | 647.339 → 14.116 |
| `esfoliacaoSimples.jpg` | `esfoliacao.webp` | 6.425 → 6.462 |
| `massagemModeladora.jpg` | `massagem-modeladora.webp` | 6.302 → 5.384 |
| `ambientEstetica.webp` | `ambiente.webp` | 55.908 → 27.118 |
| `equipamentosEstetica.jpg` | `equipamentos.webp` | 373.650 → 60.044 |
| `tratamentosEstetica.jpg` | `tratamentos.webp` | 40.333 → 31.602 |
| `profissionalEstetica.jpg` | `og.jpg` | 39.140 → 57.851 (novo recorte 1200×630) |

`wallpaper.png` (12.358.153 bytes) e `wallpaper2.jpg` (201.751 bytes) foram removidos. A maior imagem em `out/` mede 60.044 bytes.

## Contraste calculado

| Texto / fundo | Razão |
| --- | ---: |
| `texto` / `creme` | 12,67:1 |
| `texto2` / `creme` | 6,40:1 |
| `destaque` / `creme` | 5,70:1 |
| branco / `destaque` | 6,39:1 |
| branco / `escuro` | 9,67:1 |
| `escuro` / `salvia` | 7,50:1 |
| `texto2` / `salvia` | 5,57:1 |

## Verificação

`npm.cmd run lint`, `npx.cmd tsc --noEmit` e `npm.cmd run build` passaram. O export gerou `out/index.html` com um `h1`, sem `aggregateRating`, com `noindex` e sem referências aos arquivos públicos removidos. Não há formulário nem script de analytics. A verificação visual de 360/390px e notas Lighthouse mobile não foram obtidas neste ambiente: o pacote Lighthouse não está instalado nem disponível no cache offline. Portanto, Performance, Acessibilidade, Boas práticas e SEO ficam **sem nota medida**.

## Pendências `TODO(cliente)`

Todos os itens abaixo ficam em `src/config/site.ts`, salvo onde indicado.

| Grupo | Linhas | Pendências |
| --- | --- | --- |
| Geral | 22 | Substituir todos os exemplos antes de publicar. |
| Identidade e contato | 24–36, 79–80 | Nome, rótulo, bairro, cidade, domínio, título, apoio, WhatsApp, telefone, endereço com sala, mapas, agenda online e SEO. |
| Horários e confiança | 43–44, 64 | Horários, credenciais confirmadas e processo de agendamento. |
| Serviços | 53–59 | Revisar cada descrição e foto; confirmar duração e preço antes de preencher. |
| Profissional | 46–50 | Nome, formação, registro, bio e retrato autorizado. |
| Avaliações | 38 | Nota, total e URL verificados. |
| Fotos | 50, 53–58, 69, 81, 84; `CREDITS.md` | Hero, cards, galeria, OG, créditos e licenças. |
| FAQ | 76 | Validar respostas, estacionamento e pagamento. |
| Resultados | 77 | Fotos próprias com TCLE, legendas e requisitos profissionais. |
| Redes | 37 | Perfis reais apenas. |
| CNPJ e responsável técnica | 85 | Preencher quando aplicável e verificado. |

As linhas são as da versão atual de `src/config/site.ts` e devem ser conferidas se o arquivo for editado.
