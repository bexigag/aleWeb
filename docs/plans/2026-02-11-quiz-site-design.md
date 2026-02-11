# Quiz Site para a Ale

## Conceito

Site-quiz interativo e troll com visual fofo cor-de-rosa. A Ale tem de acertar 6 fases seguidas para chegar ao final. Se errar qualquer uma, recomeça tudo do início. Mensagens de erro dramáticas. Prémio final: imagem do dedo do meio.

Hospedado no GitHub Pages. HTML + CSS + JS puro, zero dependências.

## Fases

| Fase | Tipo | Conteúdo |
|------|------|----------|
| 1 | Pergunta (escolha múltipla) | "Quando nasceu o Bexiga?" — 29/02/2005 (certa), 27/02/2005, 06/04/1990, 27/03/2005 |
| 2 | Pergunta (escolha múltipla) | "Quem tem o maior tronco?" — Ale (certa), Bexiga, Pai Ale, Pai Bexiga |
| 3 | Desafio de tempo | Carregar num botão 30 vezes em 7 segundos |
| 4 | Pergunta (escolha múltipla) | "1+1=?" — 2, 3 (certa) |
| 5 | Desafio troll | "Queres continuar?" — Botão "Não" grande, botão "Sim" foge do rato, "sim" minúsculo escondido no canto |
| 6 | Pergunta (escolha múltipla) | "A Ale é..." — Linda, Maravilhosa, Incrível, Necessária no mundo, Todas as anteriores (certa) |

Respostas sempre na mesma ordem (não baralhar).

## Fluxo

1. **Ecrã inicial** — Título "Será que me conheces mesmo?" com botão "Começar"
2. **Fases 1-6** — Cada fase ocupa o ecrã inteiro, transição suave ao acertar
3. **Erro** — Ecrã dramático (shake, fundo vermelho momentâneo), mensagem aleatória, reset à fase 1 após 2-3 segundos
4. **Final** — Texto "Parabéns, passaste o teste!", depois a imagem do dedo do meio com confetti

## Mensagens de Erro (aleatórias)

- "COMO ASSIM NÃO SABES?!"
- "Eu a achar que me conhecias..."
- "ERRADO! Volta ao início, sem piedade!"
- "A relação está em risco..."
- "Nem a minha avó errava esta..."

## Visual

- **Estilo:** Cor-de-rosa/fofo com contraste troll
- **Fundo:** Rosa claro (#ffe4ec) com corações subtis
- **Botões:** Rosa forte, bordas arredondadas
- **Fonte:** Quicksand ou Poppins (Google Fonts)
- **Emojis** de coração nos títulos
- **Responsivo:** Funciona bem no telemóvel

## Ecrã Final

- Fundo muda para preto (estilo inesperado)
- Texto "Parabéns, passaste o teste!" com delay
- Depois "Agora toma:" + imagem (img/final.png)
- Confetti a cair por cima

## Ficheiros

```
index.html
style.css
script.js
img/
  final.png    (imagem fornecida pelo utilizador)
```

## Detalhes Técnicos

- GitHub Pages direto do branch main
- HTML + CSS + JS puro, sem frameworks
- Sem bypass possível (não se pode saltar fases pela URL)
