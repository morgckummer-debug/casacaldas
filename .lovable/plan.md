## Problema

O preview está quebrado porque `src/styles.css` (linha 1) faz `@import url("https://fonts.googleapis.com/...")`. O Lightning CSS (usado pelo Tailwind v4) tenta abrir essa URL como arquivo local e falha com `ENOENT`, devolvendo erro 500 para o CSS — o site carrega sem estilo nenhum.

Log do dev-server confirma:
```
[lightningcss] ENOENT: no such file or directory, open 'https://fonts.googleapis.com/css2?...'
File: /dev-server/src/styles.css:2:0
```

## Correção

1. **`src/styles.css`** — remover a linha 1 (`@import url("https://fonts.googleapis.com/...")`). Manter o resto (`@import "tailwindcss" source(none);`, `@import "tw-animate-css";`, tokens, etc.).

2. **`src/routes/__root.tsx`** — no `head()`, adicionar três entradas em `links` (junto do `appCss` já existente):
   - `{ rel: "preconnect", href: "https://fonts.googleapis.com" }`
   - `{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }`
   - `{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Inter:wght@300;400;500&display=swap" }`

Isso carrega Cormorant Garamond + Inter via `<link>` no documento (caminho oficial), sem passar pelo bundler de CSS.

## Verificação

- Conferir logs do Vite para confirmar que o erro do lightningcss sumiu.
- Abrir o preview e verificar que a Casa Caldas renderiza com as fontes corretas (display serif + sans).
