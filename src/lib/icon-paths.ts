/** Базовый URL для SVG из public consuming-приложения (rose-theme: /icons/). */
export const getNtIconUrl = (name: NtIconName, basePath = "/icons") =>
  `${basePath.replace(/\/$/, "")}/${NT_ICON_FILES[name]}`;

export type NtIconName =
  | "search-lg"
  | "search-sm"
  | "cart"
  | "cart-sm"
  | "user"
  | "user-sm"
  | "dropdown-chevron"
  | "dropdown-collapsed"
  | "dropdown-expanded"
  | "nav-underline"
  | "menu-burger"
  | "menu-close"
  | "favourite"
  | "social-vk"
  | "social-vk-white"
  | "social-youtube"
  | "social-youtube-white"
  | "social-telegram"
  | "social-telegram-white"
  | "social-tiktok"
  | "social-tiktok-white"
  | "social-yandex-dzen"
  | "social-yandex-dzen-white"
  | "icon-filter"
  | "arrow-left"
  | "arrow-right"
  | "arrow-slide-left"
  | "arrow-slide-right"
  | "share"
  | "plus"
  | "minus"
  | "delete"
  | "radio-unchecked"
  | "radio-checked"
  | "scroll-track-vertical";

const NT_ICON_FILES: Record<NtIconName, string> = {
  "search-lg": "search-lg.svg",
  "search-sm": "search-sm.svg",
  cart: "cart.svg",
  "cart-sm": "cart-sm.svg",
  user: "user.svg",
  "user-sm": "user-sm.svg",
  "dropdown-chevron": "dropdown-chevron.svg",
  "dropdown-collapsed": "dropdown-collapsed.svg",
  "dropdown-expanded": "dropdown-expanded.svg",
  "nav-underline": "nav-underline.svg",
  "menu-burger": "menu-burger.svg",
  "menu-close": "menu-close.svg",
  favourite: "favourite.svg",
  "social-vk": "social-vk.svg",
  "social-vk-white": "social-vk-white.svg",
  "social-youtube": "social-youtube.svg",
  "social-youtube-white": "social-youtube-white.svg",
  "social-telegram": "social-telegram.svg",
  "social-telegram-white": "social-telegram-white.svg",
  "social-tiktok": "social-tiktok.svg",
  "social-tiktok-white": "social-tiktok-white.svg",
  "social-yandex-dzen": "social-yandex-dzen.svg",
  "social-yandex-dzen-white": "social-yandex-dzen-white.svg",
  "icon-filter": "icon-filter.svg",
  "arrow-left": "arrow-left.svg",
  "arrow-right": "arrow-right.svg",
  "arrow-slide-left": "arrow-slide-left.svg",
  "arrow-slide-right": "arrow-slide-right.svg",
  share: "share.svg",
  plus: "plus.svg",
  minus: "minus.svg",
  delete: "delete.svg",
  "radio-unchecked": "radio-unchecked.svg",
  "radio-checked": "radio-checked.svg",
  "scroll-track-vertical": "scroll-track-vertical.svg",
};

/** Полный перечень имён иконок (витрина DS, тесты). */
export const NT_ICON_NAMES = Object.keys(NT_ICON_FILES) as NtIconName[];
