import type { NtIconName } from "./icon-paths";

/** Соответствие подписи из конфигурации сайта → иконка New-Themes (Free Theme Icons / social media_black). */
export const platformToNtIcon = (platform: string): NtIconName | null => {
  const p = platform.trim().toLowerCase();
  if (p.includes("vk")) return "social-vk";
  if (p.includes("youtube") || p.includes("ютуб")) return "social-youtube";
  if (p.includes("telegram") || p.includes("телег")) return "social-telegram";
  if (p.includes("tiktok")) return "social-tiktok";
  if (p.includes("zen") || p.includes("дзен")) return "social-yandex-dzen";
  if (p.includes("facebook") || p.includes("meta")) return null;
  if (p.includes("instagram")) return null;
  if (p.includes("twitter") || p.includes("x.com")) return null;
  return null;
};

/** Белые варианты (секция Figma 567:13065) — для тёмного фона футера/оверлея. */
export const platformToNtIconOnDark = (platform: string): NtIconName | null => {
  const p = platform.trim().toLowerCase();
  if (p.includes("vk")) return "social-vk-white";
  if (p.includes("youtube") || p.includes("ютуб")) return "social-youtube-white";
  if (p.includes("telegram") || p.includes("телег")) return "social-telegram-white";
  if (p.includes("tiktok")) return "social-tiktok-white";
  if (p.includes("zen") || p.includes("дзен")) return "social-yandex-dzen-white";
  if (p.includes("facebook") || p.includes("meta")) return null;
  if (p.includes("instagram")) return null;
  if (p.includes("twitter") || p.includes("x.com")) return null;
  return null;
};
