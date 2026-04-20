/**
 * React-обёртки для редактора Puck (визуал совпадает с компонентами New-Themes).
 */
import { useState } from "react";

const promoHeight: Record<"sm" | "md" | "lg", string> = {
	sm: "min-h-8",
	md: "min-h-10",
	lg: "min-h-12",
};

const promoText: Record<"sm" | "md" | "lg", string> = {
	sm: "text-[12px]",
	md: "text-[14px]",
	lg: "text-[16px]",
};

export const PuckPromoBanner = ({
	text,
	link,
	linkText = "Перейти",
	textSize = "lg",
}: {
	text: string;
	link: string;
	linkText?: string;
	textSize?: "sm" | "md" | "lg";
}) => (
	<div
		className={`bg-[#000000] text-[#FFFFFF] flex ${promoHeight[textSize]} items-center justify-center overflow-hidden px-4 md:px-20 xl:px-[300px] 2xl:px-[680px]`}
		data-nt-text-size={textSize}
	>
		<p
			className={`text-center font-roboto font-light leading-normal max-w-full ${promoText[textSize]}`}
		>
			<span className="whitespace-pre-wrap">{text}</span>{" "}
			<a
				href={link}
				className="underline underline-offset-2 [text-decoration-skip-ink:none] decoration-solid hover:opacity-90"
			>
				{linkText}
			</a>
		</p>
	</div>
);

export const PuckHeroSection = ({
	title,
	subtitle,
	ctaText,
	ctaLink,
	aboutText,
	aboutLink,
	backgroundImage,
}: {
	title: string;
	subtitle: string;
	ctaText: string;
	ctaLink: string;
	aboutText: string;
	aboutLink: string;
	backgroundImage: string;
}) => (
	<section
		className="relative bg-white w-full h-[1080px] overflow-hidden"
		aria-labelledby="hero-title-puck"
	>
		<div
			className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-[1080px]"
			style={{ backgroundImage: `url('${backgroundImage}')` }}
			role="img"
			aria-label="Hero background"
		/>
		<div className="relative z-10 flex h-full w-full flex-col justify-between pb-10 pl-4 pr-4 pt-[132px] md:px-20 2xl:px-[300px]">
			<div className="flex max-w-[432px] flex-col gap-10">
				<div className="flex flex-col gap-2">
					<h1
						id="hero-title-puck"
						className="font-comfortaa text-[32px] font-medium leading-[1.115] text-white"
					>
						{title}
					</h1>
					<p className="font-manrope text-[20px] font-medium leading-[1.366] text-white">{subtitle}</p>
				</div>
				<div className="flex gap-3">
					<a
						href={ctaLink}
						className="flex h-12 items-center justify-center rounded-[6px] bg-white px-4 font-manrope text-[16px] font-normal text-[#000000] hover:opacity-95"
					>
						{ctaText}
					</a>
					<a
						href={aboutLink}
						className="flex h-12 items-center justify-center rounded-[6px] border border-white px-4 font-manrope text-[16px] font-normal text-white hover:bg-white/10"
					>
						{aboutText}
					</a>
				</div>
			</div>
			<div className="mt-auto w-full max-w-[1320px] self-center">
				<form
					className="flex h-12 w-full items-center justify-between overflow-hidden rounded-[4px] border border-[#000000] bg-[#FFFFFF] pl-3 pr-1 py-3"
					action="#"
					role="search"
				>
					<input
						type="search"
						name="q"
						placeholder="Поиск..."
						className="min-w-0 flex-1 border-none bg-transparent font-manrope text-[16px] font-light text-[#000000] placeholder:text-[#999999] outline-none"
					/>
					<button
						type="submit"
						className="flex h-10 shrink-0 items-center justify-center rounded-[4px] bg-[#000000] px-3 font-manrope text-[14px] font-normal text-[#FFFFFF]"
					>
						Найти
					</button>
				</form>
			</div>
		</div>
	</section>
);

export const PuckSectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
	<div className="mb-12 flex max-w-[90vw] flex-col items-center gap-[5px] md:mb-16 xl:mb-20">
		<h2 className="text-center font-comfortaa text-xl font-normal uppercase leading-[1.115] text-[#000000] md:text-2xl lg:text-[32px]">
			{title}
		</h2>
		{subtitle && (
			<p className="text-center font-manrope text-sm font-normal leading-[1.366] text-[#999999] px-2 md:text-lg xl:text-[24px]">
				{subtitle}
			</p>
		)}
	</div>
);

export const PuckProductCard = ({
	name,
	price,
	oldPrice,
	image,
}: {
	name: string;
	price: string;
	oldPrice: string;
	image: string;
}) => (
	<article className="group flex cursor-pointer flex-col gap-6 lg:gap-[25px]">
		<div className="relative aspect-[318/515] w-full overflow-hidden rounded-[10px] bg-[#F5F5F5]">
			<img
				src={image}
				alt={name}
				loading="lazy"
				className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
		</div>
		<div className="flex flex-col gap-2.5 px-3 md:gap-[10px] md:px-[15px]">
			<h3 className="font-manrope text-lg font-normal leading-[1.366] text-[#000000] md:text-[24px]">{name}</h3>
			<div className="flex flex-wrap items-center gap-3 md:gap-[15px]">
				<span className="font-manrope text-xl font-normal leading-[1.366] text-[#000000] md:text-[32px]">{price}</span>
				<span className="font-manrope text-base font-medium leading-[1.366] text-[#999999] line-through md:text-[20px]">
					{oldPrice}
				</span>
			</div>
		</div>
	</article>
);

const PRODUCT_CAROUSEL_DEMO_IMAGES = [
	"/images/4x/Товар_1.png",
	"/images/4x/Товар_2.png",
	"/images/4x/Товар_3.png",
	"/images/4x/Товар_4.png",
] as const;

/** Главное фото + ряд миниатюр (как на PDP), демо для Puck */
export const PuckProductMediaCarousel = () => {
	const [active, setActive] = useState(0);
	const n = PRODUCT_CAROUSEL_DEMO_IMAGES.length;
	const src = PRODUCT_CAROUSEL_DEMO_IMAGES[active] ?? PRODUCT_CAROUSEL_DEMO_IMAGES[0]!;
	const goPrev = () => setActive((i) => (i - 1 + n) % n);
	const goNext = () => setActive((i) => (i + 1) % n);

	return (
		<div className="w-full max-w-[318px] font-manrope" data-nt="product-media-carousel">
			<div className="relative aspect-[318/515] w-full overflow-hidden rounded-[10px] bg-[#F5F5F5]">
				<img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
				<button
					type="button"
					onClick={goPrev}
					className="absolute left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-[#F5F5F5] bg-[#FFFFFF]/95 shadow-sm outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
					aria-label="Предыдущее фото"
				>
					<img src="/new-themes/icons/arrow-slide-left.svg" alt="" className="size-6" />
				</button>
				<button
					type="button"
					onClick={goNext}
					className="absolute right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-[#F5F5F5] bg-[#FFFFFF]/95 shadow-sm outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
					aria-label="Следующее фото"
				>
					<img src="/new-themes/icons/arrow-slide-right.svg" alt="" className="size-6" />
				</button>
			</div>
			<div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Галерея фото товара">
				{PRODUCT_CAROUSEL_DEMO_IMAGES.map((url, i) => {
					const isOn = active === i;
					return (
						<button
							key={url}
							type="button"
							role="tab"
							aria-selected={isOn}
							tabIndex={isOn ? 0 : -1}
							onClick={() => setActive(i)}
							className={`relative size-16 shrink-0 overflow-hidden rounded-[6px] border-2 bg-[#F5F5F5] p-0 outline-none transition-[border-color] focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2 ${
								isOn ? "border-[#000000]" : "border-[#F5F5F5]"
							}`}
							aria-label={`Фото ${i + 1}`}
						>
							<img src={url} alt="" className="h-full w-full object-cover" loading="lazy" />
						</button>
					);
				})}
			</div>
		</div>
	);
};

const puckRadioRing = (d: "1920" | "1280") =>
	d === "1920"
		? "relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#999999] after:pointer-events-none after:absolute after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#000000] after:opacity-0 after:content-[''] peer-checked:border-[#000000] peer-checked:after:opacity-100"
		: "relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#999999] after:pointer-events-none after:absolute after:h-[8px] after:w-[8px] after:rounded-full after:bg-[#000000] after:opacity-0 after:content-[''] peer-checked:border-[#000000] peer-checked:after:opacity-100";

/** 493:5523 (1920) / 493:5524 (1280) */
export const PuckFilterSidebar = ({ density = "1920" }: { density?: "1920" | "1280" }) => {
	const is = density === "1280";
	const w = is ? "w-[172px]" : "w-[294px]";
	const pad = is ? "p-1" : "p-3";
	const gapStack = is ? "gap-1" : "gap-3";
	const titleS = is ? "text-[12px]" : "text-[16px]";
	const titlePrice = is ? "text-[14px]" : "text-[16px]";
	const txt = is ? "text-[12px]" : "text-[16px]";
	const sfx = is ? "-1280" : "";
	const priceH = is ? "h-9" : "h-10";
	const priceGap = is ? "gap-1" : "gap-2";
	const priceText = is ? "text-[14px]" : "text-[16px]";
	return (
		<aside className={`flex ${w} max-w-full flex-col gap-4 bg-white font-manrope`} data-nt-density={density}>
			<div className={`flex flex-col rounded-[8px] ${pad} ${is ? "gap-2" : "gap-3"}`}>
				<p className={`${titleS} text-black`}>Сортировать</p>
				<div className={`flex flex-col ${gapStack}`}>
					{[
						[`nt-sort-r${sfx}`, "popularity", "По популярности", true],
						[`nt-sort-r${sfx}`, "new", "По новизне", false],
						[`nt-sort-r${sfx}`, "price-desc", "По убыванию цены", false],
						[`nt-sort-r${sfx}`, "price-asc", "По возрастанию цены", false],
					].map(([name, value, label, checked]) => (
						<label key={String(value)} className={`group flex cursor-pointer items-center gap-2 leading-normal ${txt}`}>
							<input
								type="radio"
								name={String(name)}
								value={String(value)}
								defaultChecked={Boolean(checked)}
								className="peer sr-only"
							/>
							<span aria-hidden className={puckRadioRing(density)} />
							<span className="text-[#999999] peer-checked:text-[#000000]">{String(label)}</span>
						</label>
					))}
				</div>
			</div>
			<div className={`flex flex-col rounded-[8px] ${pad} ${is ? "gap-2" : "gap-3"}`}>
				<p className={`${titleS} text-black`}>Наличие</p>
				<div className={`flex flex-col ${gapStack}`}>
					{[
						[`nt-stock-r${sfx}`, "all", "Все", true],
						[`nt-stock-r${sfx}`, "in", "В наличии", false],
						[`nt-stock-r${sfx}`, "out", "Распродано", false],
					].map(([name, value, label, checked]) => (
						<label key={String(value)} className={`group flex cursor-pointer items-center gap-2 ${txt}`}>
							<input
								type="radio"
								name={String(name)}
								value={String(value)}
								defaultChecked={Boolean(checked)}
								className="peer sr-only"
							/>
							<span aria-hidden className={puckRadioRing(density)} />
							<span className="text-[#999999] peer-checked:text-[#000000]">{String(label)}</span>
						</label>
					))}
				</div>
			</div>
			<div className={`flex flex-col rounded-[8px] ${pad} ${is ? "gap-2" : "gap-3"}`}>
				<p className={`${titlePrice} text-black`}>Стоимость</p>
				<div className={`flex flex-col font-manrope ${priceText} text-[#999999]`}>
					<div className={`flex w-full items-center justify-between border-b border-[#999999] ${priceH}`}>
						<span>от</span>
						<span className={`flex items-center ${priceGap}`}>
							<span>0</span>
							<span>₽</span>
						</span>
					</div>
					<div className={`flex w-full items-center justify-between border-b border-[#999999] ${priceH}`}>
						<span>до</span>
						<span className={`flex items-center ${priceGap}`}>
							<span>5 990</span>
							<span>₽</span>
						</span>
					</div>
				</div>
			</div>
			<div className={`flex flex-col gap-3 rounded-[8px] ${pad}`}>
				<p className={`${titleS} text-black`}>Цвет</p>
				<div className="flex flex-col gap-3">
					{[
						[`nt-color-r${sfx}`, "black", "Черный", true],
						[`nt-color-r${sfx}`, "white", "Белый", false],
						[`nt-color-r${sfx}`, "gray", "Серый", false],
					].map(([name, value, label, checked]) => (
						<label key={String(value)} className="group flex cursor-pointer items-center gap-2">
							<input
								type="radio"
								name={String(name)}
								value={String(value)}
								defaultChecked={Boolean(checked)}
								className="peer sr-only"
							/>
							<span aria-hidden className={puckRadioRing(density)} />
							<span
								className={
									is
										? "text-[14px] text-[#999999] peer-checked:text-[#000000]"
										: "text-[16px] text-[#999999] peer-checked:text-[#000000]"
								}
							>
								{String(label)}
							</span>
						</label>
					))}
				</div>
			</div>
		</aside>
	);
};

/** 493:5448 / 493:5443 */
export const PuckFiltersRow = ({ density = "1920" }: { density?: "1920" | "1280" }) => {
	const list = density === "1280" ? "text-[12px]" : "text-[14px]";
	return (
		<div className="flex flex-wrap items-start gap-3" data-nt-density={density}>
			<div className={`flex w-[180px] flex-col gap-2 rounded-[6px] border border-[#F5F5F5] bg-white p-3 font-manrope leading-normal ${list}`}>
				<p className="text-[#000000]">Все</p>
				<p className="text-[#999999]">В наличии</p>
				<p className="text-[#999999]">Распродано</p>
			</div>
			<div className="w-[180px] rounded-[6px] border border-[#F5F5F5] bg-white p-3">
				<div className="flex flex-col font-manrope text-[14px]">
					<div className="flex h-8 w-full items-center justify-between border-b border-[#000000] text-[#000000]">
						<span>от</span>
						<span className="flex items-center gap-2">
							<span>50</span>
							<span>₽</span>
						</span>
					</div>
					<div className="flex h-8 w-full items-center justify-between border-b border-[#999999] text-[#999999]">
						<span>до</span>
						<span className="flex items-center gap-2">
							<span>5 990</span>
							<span>₽</span>
						</span>
					</div>
				</div>
			</div>
			<div className={`flex w-[180px] flex-col gap-2 rounded-[6px] border border-[#F5F5F5] bg-white p-3 font-manrope leading-normal ${list}`}>
				<p className="text-[#000000]">Белый</p>
				<p className="text-[#999999]">Чёрный</p>
				<p className="text-[#999999]">Серый</p>
			</div>
			<div className={`flex w-[180px] flex-col gap-2 rounded-[6px] border border-[#F5F5F5] bg-white p-3 font-manrope leading-normal ${list}`}>
				<p className="text-[#000000]">По новизне</p>
				<p className="text-[#999999]">Сначала дешевые</p>
				<p className="text-[#999999]">Сначала дорогие</p>
			</div>
		</div>
	);
};

/** 494:10771 / 494:10839 / 494:10849 */
export const PuckModalPopup = ({
	title = "Заголовок",
	subtitle = "Текст",
	dismissLabel = "Скрыть",
	layout = "1920",
}: {
	title?: string;
	subtitle?: string;
	dismissLabel?: string;
	layout?: "1920" | "768" | "375";
}) => {
	const maxW =
		layout === "1920" ? "max-w-[614px]" : layout === "768" ? "max-w-[432px]" : "max-w-[343px]";
	const maxH =
		layout === "1920"
			? "max-h-[min(952px,90vh)]"
			: layout === "768"
				? "max-h-[min(924px,90vh)]"
				: "max-h-[min(694px,90vh)]";
	const titleSize = layout === "1920" ? "text-[20px]" : "text-[16px]";
	const subSize = layout === "1920" ? "text-[16px]" : "text-[14px]";
	const px = layout === "1920" ? "px-6" : "px-5";
	const pt = layout === "1920" ? "pt-8" : "pt-7";
	const bodyPt = layout === "1920" ? "pt-10" : "pt-8";
	const dismissSz = layout === "1920" ? "text-[16px]" : "text-[14px]";
	const isLg = layout === "1920";
	const btnWrap = isLg ? "max-w-[320px]" : "w-full max-w-none";
	const btnH = isLg
		? "h-14 min-h-[56px] rounded-[8px] text-[16px]"
		: "h-12 min-h-[48px] rounded-[6px] text-[16px]";

	return (
		<div
			className={`relative w-full ${maxW} ${maxH} overflow-y-auto bg-white font-manrope shadow-[0_4px_24px_rgba(0,0,0,0.08)]`}
			role="dialog"
			aria-modal="true"
			data-nt-layout={layout}
		>
			<div className={`flex items-start justify-between gap-4 ${px} ${pt}`}>
				<div className="flex min-w-0 flex-col gap-2 pr-4">
					<h2
						className={`font-comfortaa font-normal uppercase leading-normal text-[#000000] ${titleSize}`}
					>
						{title}
					</h2>
					<p className={`font-normal leading-normal text-[#999999] ${subSize}`}>{subtitle}</p>
				</div>
				<button
					type="button"
					className={`shrink-0 font-normal text-[#999999] hover:opacity-80 ${dismissSz}`}
					aria-label={dismissLabel}
				>
					{dismissLabel}
				</button>
			</div>
			<div className={`flex flex-col gap-8 ${px} pb-8 ${bodyPt}`}>
				<button
					type="button"
					className={`flex w-full items-center justify-center bg-[#000000] px-5 font-normal text-[#FFFFFF] ${btnH} ${btnWrap}`}
				>
					Кнопка
				</button>
				<p className={`font-manrope leading-normal ${subSize}`}>
					<span className="text-[#999999]">Текст. </span>
					<a href="#" className="text-[#000000] underline underline-offset-2">
						Ссылка
					</a>
				</p>
			</div>
		</div>
	);
};

/** 495:11038 — мобильное меню */
export const PuckBurgerPanel = () => (
	<div className="w-full max-w-[375px] bg-white px-4 pb-8 pt-4 font-manrope">
		<div className="flex items-center gap-2">
			<div className="flex h-10 min-h-10 flex-1 items-center justify-between rounded-[4px] border border-solid border-[#999999] bg-white pl-3 pr-2">
				<span className="text-[12px] text-[#999999]">Поиск</span>
				<img src="/new-themes/icons/search-sm.svg" alt="" className="h-6 w-6 opacity-80" />
			</div>
			<a
				className="flex size-10 shrink-0 items-center justify-center rounded-[4px] bg-[#000000]"
				href="#"
				aria-label="Профиль"
			>
				<img src="/new-themes/icons/user.svg" alt="" className="h-6 w-6 brightness-0 invert" />
			</a>
		</div>
		<nav className="mt-10 flex flex-col gap-5" aria-label="Меню">
			<div className="flex flex-col gap-1">
				<span className="text-[14px] text-black">Главная</span>
				<div className="h-px w-[54px] bg-black" />
			</div>
			<span className="text-[14px] text-[#999999]">Каталог</span>
			<span className="text-[14px] text-[#999999]">Контакты</span>
		</nav>
	</div>
);

/** 494:10669 — свотчи (демо) */
/** 494:10669 / 494:10684 / 494:10699 */
export const PuckSwatchDropdown = ({
	preview = "circle",
}: {
	preview?: "circle" | "square" | "none";
}) => {
	const sw =
		preview === "square"
			? "size-5 shrink-0 rounded-[2px]"
			: preview === "circle"
				? "size-5 shrink-0 rounded-full"
				: "";
	return (
		<details
			open
			className="group w-[220px] font-manrope"
			data-nt-preview={preview}
		>
			<summary className="flex h-12 cursor-pointer list-none items-center justify-between gap-2 rounded-[6px] border border-solid border-[#000000] bg-white px-3 py-2.5 group-open:rounded-b-none group-open:border-b-0 [&::-webkit-details-marker]:hidden">
				<span className="flex min-w-0 items-center gap-2">
					{preview !== "none" && (
						<span className={`${sw} bg-[#662F10]`} aria-hidden />
					)}
					<span className="truncate text-[14px] text-[#000000]">Коричневый</span>
				</span>
				<img
					src="/new-themes/icons/dropdown-chevron.svg"
					alt=""
					className="h-6 w-6 shrink-0 transition-transform group-open:rotate-180"
				/>
			</summary>
			<div className="flex flex-col gap-2 rounded-b-[6px] border border-t-0 border-solid border-[#F5F5F5] bg-white px-3 py-2">
				<div className="flex h-8 items-center gap-2">
					{preview !== "none" && <span className={`${sw} bg-[#000000]`} aria-hidden />}
					<span className="text-[14px] text-[#000000]">Чёрный</span>
				</div>
				<div className="flex h-8 items-center gap-2 opacity-70">
					{preview !== "none" && <span className={`${sw} bg-[#F5F5F5]`} aria-hidden />}
					<span className="text-[14px] text-[#999999] line-through decoration-solid [text-decoration-skip-ink:none]">
						Белый
					</span>
				</div>
			</div>
		</details>
	);
};

/** 494:10735 — текстовые кнопки варианта («Кнопка -- Нет») */
export const PuckVariantTextRow = () => (
	<div className="w-full max-w-[265px] font-manrope" data-nt="variant-text-row">
		<div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Вариант цвета">
			<button
				type="button"
				className="inline-flex h-10 shrink-0 items-center justify-center rounded-[4px] bg-[#000000] px-3 py-2.5 text-[14px] font-normal leading-normal text-[#FFFFFF] outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
				aria-checked="true"
				role="radio"
			>
				Коричневый
			</button>
			<button
				type="button"
				className="inline-flex h-10 shrink-0 items-center justify-center rounded-[4px] border border-solid border-[#000000] bg-transparent px-3 py-2.5 text-[14px] font-normal leading-normal text-[#000000] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
				aria-checked="false"
				role="radio"
			>
				Чёрный
			</button>
			<button
				type="button"
				disabled
				className="inline-flex h-10 shrink-0 cursor-not-allowed items-center justify-center rounded-[4px] border border-solid border-[#999999] bg-[rgba(153,153,153,0.1)] px-3 py-2.5 text-[14px] font-normal leading-normal text-[#999999] outline-none"
				aria-checked="false"
				role="radio"
			>
				Белый
			</button>
		</div>
	</div>
);

/** 494:10711 / 494:10723 */
export const PuckVariantSwatchRow = ({
	shape = "circle",
}: {
	shape?: "circle" | "square";
}) => {
	const r = shape === "circle" ? "rounded-full" : "rounded-[2px]";
	return (
		<div className="flex flex-col gap-3 font-manrope" data-nt-shape={shape}>
			<div className="flex flex-wrap items-center gap-1 text-[16px] font-normal text-[#000000]">
				<span>Цвет:</span>
				<span>Коричневый</span>
			</div>
			<div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Цвет">
				<button
					type="button"
					className="relative size-6 ring-2 ring-[#000000] ring-offset-1"
					aria-label="Коричневый"
				>
					<span className={`block size-6 bg-[#662F10] ${r}`} aria-hidden />
				</button>
				<button type="button" className="relative size-6" aria-label="Чёрный">
					<span className={`block size-6 bg-[#000000] ${r}`} aria-hidden />
				</button>
				<button type="button" className="relative size-6" disabled aria-label="Белый недоступен">
					<span className={`relative block size-6 overflow-hidden border border-solid border-[#F5F5F5] bg-[#FFFFFF] ${r}`}>
						<span
							className="absolute left-1/2 top-1/2 z-[1] block h-px w-[130%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#999999]"
							aria-hidden
						/>
					</span>
				</button>
			</div>
		</div>
	);
};

/** Figma 494:10961 — форма входа */
export const PuckAuthPanel = ({
	title = "Заголовок",
	subtitle = "Текст",
}: {
	title?: string;
	subtitle?: string;
}) => (
	<div className="flex w-full max-w-[430px] flex-col items-center gap-[80px] bg-white font-manrope">
		<div className="flex w-full flex-col items-center gap-2 text-center">
			<h2 className="font-comfortaa text-[20px] font-normal uppercase leading-normal text-[#000000]">
				{title}
			</h2>
			<p className="text-[16px] font-normal leading-normal text-[#999999]">{subtitle}</p>
		</div>
		<div className="flex w-full flex-col gap-6">
			<div className="flex w-full flex-col gap-2">
				<label htmlFor="puck-auth-email" className="text-[16px] text-[#000000]">
					Input
				</label>
				<input
					id="puck-auth-email"
					type="email"
					autoComplete="email"
					defaultValue="examp"
					className="box-border h-14 w-full rounded-[4px] border border-solid border-[#000000] bg-white px-4 text-[16px] text-[#000000] outline-none"
				/>
			</div>
			<div className="flex w-full flex-col gap-2">
				<label htmlFor="puck-auth-pass" className="text-[16px] text-[#000000]">
					Input
				</label>
				<input
					id="puck-auth-pass"
					type="password"
					autoComplete="current-password"
					className="box-border h-14 w-full rounded-[4px] border border-solid border-[#999999] bg-white px-4 text-[16px] text-[#000000] outline-none"
				/>
			</div>
		</div>
		<div className="flex w-full flex-col items-center gap-10">
			<button
				type="button"
				className="flex h-14 min-h-[56px] w-full items-center justify-center rounded-[8px] bg-[#000000] px-5 text-[16px] font-normal text-[#FFFFFF]"
			>
				Кнопка
			</button>
			<div className="flex w-full flex-col items-center gap-3 text-center text-[16px]">
				<p>
					<span className="text-[#999999]">Текст.</span> <span className="text-[#000000]">Ссылка</span>
				</p>
				<p className="text-[#000000]">Ссылка</p>
			</div>
		</div>
	</div>
);

export const PuckCollectionCard = ({ name, image }: { name: string; image: string }) => (
	<article className="group cursor-pointer" role="listitem" aria-label={`Коллекция ${name}`}>
		<div className="relative mb-6 aspect-[430/500] w-full overflow-hidden rounded-2xl bg-[#F5F5F5] shadow-sm transition-shadow duration-300 hover:shadow-lg md:mb-8">
			<img
				src={image}
				alt={`Изображение коллекции ${name}`}
				loading="lazy"
				className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
			/>
			<div className="absolute inset-0 bg-[#000000]/0 transition-colors duration-300 group-hover:bg-[#000000]/5" />
		</div>
		<div className="px-1 md:px-2">
			<h3 className="font-manrope text-lg font-normal text-[#000000] transition-colors duration-200 group-hover:text-[#424242] md:text-[24px]">
				{name}
			</h3>
		</div>
	</article>
);

/** Демо-данные и сетки как в rose-theme (Collections / Popular / Gallery). */
const PUCK_DEMO_COLLECTIONS = [
	{ name: "Коллекция RIVIERA", image: "/images/4x/Коллекция_1.png" },
	{ name: "Коллекция URBAN", image: "/images/4x/Коллекция_2.png" },
	{ name: "Коллекция FUTURISM", image: "/images/4x/Коллекция_3.png" },
] as const;

const PUCK_DEMO_PRODUCTS = [
	{ name: "Сумка", price: "5 990₽", oldPrice: "7 990₽", image: "/images/4x/Товар_1.png" },
	{ name: "Сумка", price: "5 990₽", oldPrice: "7 990₽", image: "/images/4x/Товар_2.png" },
	{ name: "Сумка", price: "5 990₽", oldPrice: "7 990₽", image: "/images/4x/Товар_3.png" },
	{ name: "Сумка", price: "5 990₽", oldPrice: "7 990₽", image: "/images/4x/Товар_4.png" },
] as const;

export const PuckCollectionsSection = ({ title, subtitle }: { title: string; subtitle: string }) => (
	<section className="w-full bg-white px-4 pb-[120px] pt-[120px] md:px-20 2xl:px-[300px]">
		<div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10">
			<PuckSectionHeading title={title} subtitle={subtitle} />
			<div
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
				role="list"
			>
				{PUCK_DEMO_COLLECTIONS.map((c) => (
					<PuckCollectionCard key={c.name} name={c.name} image={c.image} />
				))}
			</div>
		</div>
	</section>
);

export const PuckPopularSection = ({ title, subtitle }: { title: string; subtitle: string }) => (
	<section className="w-full bg-white px-4 pb-[120px] pt-[120px] md:px-20 2xl:px-[300px]">
		<div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10">
			<PuckSectionHeading title={title} subtitle={subtitle} />
			<div
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
				role="list"
			>
				{PUCK_DEMO_PRODUCTS.map((p) => (
					<PuckProductCard key={p.image} name={p.name} price={p.price} oldPrice={p.oldPrice} image={p.image} />
				))}
			</div>
		</div>
	</section>
);

export const PuckGallerySection = ({ title, subtitle }: { title: string; subtitle: string }) => (
	<section className="w-full bg-white px-4 pb-[120px] pt-[120px] md:px-20 2xl:px-[300px]">
		<div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10">
			<PuckSectionHeading title={title} subtitle={subtitle} />
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_430px] lg:gap-4">
				<div className="aspect-[874/875] w-full overflow-hidden rounded-[8px] bg-[#F5F5F5]">
					<img
						src="/images/4x/Изображение_Галерея.png"
						alt="Галерея"
						loading="lazy"
						className="h-full w-full object-cover"
						width={874}
						height={875}
					/>
				</div>
				<div className="flex flex-col gap-4">
					<PuckProductCard
						name="Сумка"
						price="5 990₽"
						oldPrice="7 990₽"
						image="/images/4x/Товар_5__2_.png"
					/>
					<PuckCollectionCard name="Коллекция URBAN" image="/images/4x/Товар_5__3_.png" />
				</div>
			</div>
		</div>
	</section>
);
