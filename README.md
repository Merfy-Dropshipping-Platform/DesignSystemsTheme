# DesignSystemsTheme

**Дизайн-система тем** — общий код из Figma New-Themes (`fileKey` `QfF9NPZBoQX6vCRg560Qcb`): Astro-компоненты (`Nt*`), токены (`tokens.css`), иконки, React-обёртки для Puck.

## Структура

- `src/components/ui/` — UI-компоненты
- `src/icons/` — SVG (источник правды; копии в каждой теме в `public/new-themes/icons/`)
- `src/react/PuckBlocks.tsx` — блоки для редактора Puck
- `src/lib/` — `icon-paths`, `social-map`
- `docs/` — инвентарь Figma, чек-лист QA

## Подключение в теме (Astro)

Рядом с клоном этого репозитория должна лежать папка темы, например:

```text
workspace/
  DesignSystemsTheme/    ← этот репозиторий
  rose-theme/            ← тема
```

В `astro.config.mjs` темы:

```js
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

vite: {
  resolve: {
    alias: {
      "@new-themes-ui": path.resolve(__dirname, "../DesignSystemsTheme/src"),
    },
  },
},
```

В `tsconfig.json`:

```json
"compilerOptions": {
  "baseUrl": ".",
  "paths": {
    "@new-themes-ui/*": ["../DesignSystemsTheme/src/*"]
  }
}
```

В `src/styles/global.css` после `@import "tailwindcss"`:

```css
@import "../../../DesignSystemsTheme/src/tokens.css";
```

(глубина `../` зависит от расположения `global.css` — из `src/styles` обычно три уровня вверх до корня монорепы с темой и DS.)

Публичные иконки для рантайма:

```bash
mkdir -p public/new-themes/icons
cp ../DesignSystemsTheme/src/icons/*.svg public/new-themes/icons/
```

## Лицензия

Приватный пакет Merfy; использование по согласованию с командой.
