# Матрица New-Themes ↔ код

**Файл Figma:** `QfF9NPZBoQX6vCRg560Qcb` · canvas **Components** (`0:1`).

Инвентарь по `get_metadata` (снимок структуры верхнего уровня).

## Секции страницы Components

| Figma section (node-id) | Название | Покрытие в коде |
|-------------------------|----------|-----------------|
| `15:3607` | Free Theme Icon's | [`icon-paths.ts`](../src/lib/icon-paths.ts), `public/new-themes/icons/` |
| `17:1738` | Header | [`NtHeaderStacked.astro`](../src/components/ui/NtHeaderStacked.astro) |
| `421:7230` | Изображение | [`NtImageFrame.astro`](../src/components/ui/NtImageFrame.astro) |
| `189:4972` | Товар | [`NtProductCard`](../src/components/ui/NtProductCard.astro), свотчи/варианты 494:*, Puck media |
| `189:7440` | Панель объявлений | [`NtPromoBanner.astro`](../src/components/ui/NtPromoBanner.astro) |
| `421:10533` | Коллекция товаров | [`NtCollectionCard.astro`](../src/components/ui/NtCollectionCard.astro) |
| `590:22300` | UNIVERSAL PICTURES PRESENT | [`NtButton.astro`](../src/components/ui/NtButton.astro) (кнопки sm/md/lg) |
| `669:31395` | (справочник) | Типографика → [`tokens.css`](../src/tokens.css) |
| `669:31431` | Отступы страницы | `--spacing-nt-page-*` в [`tokens.css`](../src/tokens.css) |
| `669:31444` | Высоты кнопок по ширине | `--height-nt-btn-*` в [`tokens.css`](../src/tokens.css) |

## Ключевые узлы из комментариев в коде

| node-id | Компонент / блок |
|---------|------------------|
| 493:5448 / 493:5443 | [`NtFiltersRow.astro`](../src/components/ui/NtFiltersRow.astro) |
| 493:5523 / 493:5524 | [`NtFilterSidebar.astro`](../src/components/ui/NtFilterSidebar.astro) |
| 493:5453 | [`NtSearchBar.astro`](../src/components/ui/NtSearchBar.astro) |
| 494:10669 / 494:10684 / 494:10699 | [`NtSwatchDropdown.astro`](../src/components/ui/NtSwatchDropdown.astro) |
| 494:10711 / 494:10723 | [`NtVariantSwatchRow.astro`](../src/components/ui/NtVariantSwatchRow.astro) |
| 494:10735 | [`NtVariantTextRow.astro`](../src/components/ui/NtVariantTextRow.astro) |
| 494:10771 / 494:10839 / 494:10849 | [`NtModalPopup.astro`](../src/components/ui/NtModalPopup.astro) |
| 494:10961 | [`NtAuthPanel.astro`](../src/components/ui/NtAuthPanel.astro), [`NtTextField.astro`](../src/components/ui/NtTextField.astro) |
| 495:11038 | [`NtBurgerPanel.astro`](../src/components/ui/NtBurgerPanel.astro) |

## Статус (легенда)

- **done** — есть Astro/React-обёртка, привязка к node в комментариях.
- **partial** — часть вариантов или только Puck-демо.
- **n/a** — конструктор Figma (сайдбар настроек), не целевой runtime UI магазина.

## Витрина и QA

- **Витрина компонентов:** в проекте **rose-theme** страница `/design-system/` (файл `rose-theme/src/pages/design-system.astro`, импорты из `@new-themes-ui`).
- **Чек-лист приёмки:** [NEW-THEMES-QA.md](./NEW-THEMES-QA.md).
- **Список имён иконок в коде:** экспорт `NT_ICON_NAMES` из [`icon-paths.ts`](../src/lib/icon-paths.ts).

Обновляйте таблицу при добавлении компонентов или при смене node-id в Figma.
