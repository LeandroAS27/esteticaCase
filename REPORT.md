# Relatório dos ajustes da demo — 16/11/2026

## Estado inicial

O repositório já tinha alterações locais em `package.json` e `package-lock.json`: Next estava em `^16.4.6` no lugar de `15.5.29`. Preservei essa atualização. Os 13 JPGs novos de Leandro estavam em `public/images/`; os WebP antigos não tinham autoria ou licença documentadas. No PowerShell, `npm run` foi bloqueado pela política de scripts, então usei `npm.cmd run`. Antes dos ajustes, o lint falhava porque o script chamava `next lint`, removido na versão instalada. O build compilava, mas parava em `spawn EPERM` no sandbox.

## Fotos trocadas

Os números são bytes do arquivo antigo do repositório e do arquivo final em `public/`. Dimensões em pixels. Os 13 JPGs fornecidos foram a única fonte das novas fotos; não houve download de fotos. Os derivados WebP não contêm EXIF. Autor, URL de cada foto e licença constam de [CREDITS.md](CREDITS.md).

| Uso | Antes (bytes; dimensões) | Depois (bytes; dimensões) |
| --- | --- | --- |
| Hero | `profissional.webp` (26.952; 1096×617) | `hero.webp` (62.672; 1600×1068) |
| Quem atende | `profissional.webp` (26.952; 1096×617) | `quem-atende.webp` (36.082; 960×1200, recorte 4:5 à esquerda) |
| Limpeza de Pele | `limpeza.webp` (24.884; 960×768) | `servico-limpeza-de-pele.webp` (38.248; 960×640) |
| Drenagem Linfática | `drenagem-linfatica.webp` (13.940; 800×533) | `servico-drenagem-linfatica.webp` (15.896; 960×640) |
| Drenagem Facial | `drenagem-facial.webp` (4.606; 300×168) | `servico-drenagem-facial.webp` (20.678; 960×641) |
| Radiofrequência | `radiofrequencia.webp` (14.116; 960×960) | `servico-radiofrequencia.webp` (23.106; 960×640) |
| Esfoliação Corporal | `esfoliacao.webp` (6.462; 275×183) | `servico-esfoliacao-corporal.webp` (27.326; 960×640) |
| Massagem Modeladora | `massagem-modeladora.webp` (5.384; 232×217) | `servico-massagem-modeladora.webp` (35.608; 960×640) |
| Galeria: sala | `ambiente.webp` (27.118; 800×600) | `galeria-sala.webp` (53.054; 800×534) |
| Galeria: recepção | `equipamentos.webp` (60.044; 960×640) | `galeria-recepcao.webp` (36.812; 800×533) |
| Galeria: produtos | `tratamentos.webp` (31.602; 720×720) | `galeria-produtos.webp` (36.884; 800×533) |
| Galeria: detalhe | não havia quarta foto | `galeria-detalhe.webp` (15.852; 800×533) |
| Open Graph | `og.jpg` (57.851; 1200×630) | `og.jpg` (98.099; 1200×630) |

O hero e os seis serviços têm `srcset` e `sizes`; o hero tem variantes de 480 e 960 px, os serviços de 384 e 768 px. Quem atende tem variante de 480 px. A galeria usa grade 2×2 no celular e quatro colunas no desktop. O maior arquivo de imagem em `out/` é `og.jpg`, com 98.099 bytes. Nenhuma imagem é exibida acima da resolução original no desktop.

## Conteúdo e comportamento

`site.demo` continua `true`, com `noindex`. Horários, nome, formação e bio são exemplos fictícios marcados com `TODO(cliente)` no código. O registro profissional continua vazio. O JSON-LD traz terça a sexta das 09:00 às 19:00 e sábado das 09:00 às 15:00; domingo e segunda fechados não entram em `openingHoursSpecification`. O card de resultados não aparece na demo; a validação de dados da seção permanece para uso futuro. Não foram criados nota, avaliações, anos de experiência, preço, registro ou promessa de resultado.

A barra fixa usa `IntersectionObserver`: aparece após o hero e se oculta quando o rodapé entra na viewport. Sem JavaScript, o HTML a mantém visível. A pílula desktop segue a mesma regra e não cobre a foto do hero. O `framer-motion` sem uso saiu do manifesto e do lockfile. O script de lint agora usa `eslint src`.

## Verificação

- `npm.cmd run lint`: passou.
- `npm.cmd run build`: passou fora do sandbox, com export estático em `out/`; dentro do sandbox ainda ocorre `spawn EPERM` depois da compilação.
- Lighthouse mobile local, Chrome headless, export servido com gzip e cache de assets: **Performance 98, Acessibilidade 100, Boas práticas 100, SEO 63**. O SEO baixo é esperado pelo `noindex` da demo. O primeiro ensaio em servidor sem compressão/cache e antes das variantes do hero marcou 83/100/100/63.
- Chrome local em 360×844: h1 termina em y=521 px; botão “Agendar pelo WhatsApp” em y=681 px; largura de rolagem 360 px. Em 390×844: h1 em y=540 px; botão em y=700 px; largura de rolagem 390 px. A barra está oculta nas duas primeiras telas, aparece depois do hero e se oculta no rodapé.
- Chrome local em 1440×900: pílula oculta enquanto o hero está visível e exibida após sair da tela. Galeria medida com duas colunas de 154 px em 360 px e duas de 169 px em 390 px.
- Export verificado sem “A confirmar”, “Formação a confirmar”, “Este texto é um exemplo” ou `aggregateRating` visíveis.

## `TODO(cliente)` ainda abertos

- Identidade, bairro, endereço, domínio, telefone, WhatsApp, mapas, redes e SEO reais.
- Horários, nome, formação, bio, eventual registro profissional e processo de agendamento aprovados pela cliente.
- Descrições, indicação, duração e preços dos serviços, quando confirmados; sem preencher dados não comprovados.
- Fotos reais autorizadas do espaço e da profissional para uma versão de cliente, com créditos atualizados.
- Avaliações verificadas, se existirem; FAQ, estacionamento e pagamento confirmados.
- Resultados apenas com fotos próprias autorizadas, TCLE e requisitos profissionais válidos.
- CNPJ e responsável técnica, quando aplicáveis e verificados.

Nenhum deploy foi feito.
