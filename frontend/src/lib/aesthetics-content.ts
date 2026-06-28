export type AestheticContent = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  traits: string[];
};

export const AESTHETICS_CONTENT: Record<string, AestheticContent> = {
  "clean-girl": {
    slug: "clean-girl",
    name: "Clean Girl",
    tagline: "Effortless, glowy, put-together — without trying too hard.",
    description:
      "Clean Girl is about looking polished with minimal visible effort: skin that looks like skin, neutral tones, and a wardrobe of well-fitting basics instead of statement pieces. It's less about following trends and more about looking consistently put-together.",
    traits: ["Slicked-back hair or a clean low bun", "Gold hoops and dainty jewelry", "Cream, beige, and white wardrobe staples", "Skincare-first, minimal makeup"],
  },
  minimalist: {
    slug: "minimalist",
    name: "Minimalist",
    tagline: "Less, but better.",
    description:
      "Minimalist style strips things down to what's actually useful and well-made. It favors a small, high-quality wardrobe over a large trendy one, clean lines over decoration, and function over flash.",
    traits: ["Capsule wardrobe of neutral basics", "Quality over quantity", "Clean, uncluttered spaces", "Avoids logos and loud branding"],
  },
  "soft-classic": {
    slug: "soft-classic",
    name: "Soft Classic",
    tagline: "Timeless pieces with a gentle, feminine edge.",
    description:
      "Soft Classic blends traditional, polished silhouettes — blazers, tailored trousers, structured bags — with softer fabrics and rounder shapes, so the overall effect reads put-together but never stiff.",
    traits: ["Tailored but not severe", "Soft fabrics like cashmere and silk", "Muted, classic color palette", "Investment pieces over fast fashion"],
  },
  "dark-academia": {
    slug: "dark-academia",
    name: "Dark Academia",
    tagline: "Old libraries, tragic novels, and tweed.",
    description:
      "Dark Academia romanticizes classic education, literature, and a moody, intellectual atmosphere. Think candlelit libraries, vintage blazers, and a wardrobe that looks borrowed from a 19th-century university.",
    traits: ["Tweed blazers and turtlenecks", "Browns, burgundies, and forest green", "Loafers and trench coats", "An obsession with old books"],
  },
  "light-academia": {
    slug: "light-academia",
    name: "Light Academia",
    tagline: "Dark academia's brighter, gentler cousin.",
    description:
      "Light Academia keeps the bookish, intellectual mood of dark academia but trades the moody palette for cream, beige, and soft neutrals — a sunlit library instead of a candlelit one.",
    traits: ["Cream and beige knitwear", "Vintage-inspired silhouettes", "A love of poetry and classic literature", "Soft, natural lighting aesthetic"],
  },
  classic: {
    slug: "classic",
    name: "Classic",
    tagline: "Timeless, structured, never out of style.",
    description:
      "Classic style is built on pieces that don't date — tailored coats, crisp shirts, structured handbags. It avoids trend cycles entirely in favor of a wardrobe that looks the same in ten years as it does today.",
    traits: ["Tailored silhouettes", "Neutral, muted color palette", "Quality fabrics that last", "Minimal, deliberate accessorizing"],
  },
  coquette: {
    slug: "coquette",
    name: "Coquette",
    tagline: "Bows, lace, and deliberate femininity.",
    description:
      "Coquette leans hard into traditionally feminine details — bows, ribbons, lace, pearls — worn with intention rather than irony. It's soft and romantic, but knowingly so.",
    traits: ["Bows and ribbon details", "Pearl jewelry", "Baby pink and ivory palette", "Corset tops and ballet flats"],
  },
  "soft-girl": {
    slug: "soft-girl",
    name: "Soft Girl",
    tagline: "Pastel, sweet, and a little nostalgic.",
    description:
      "Soft Girl style is gentle and approachable — pastel colors, soft textures, and a slightly nostalgic, Y2K-adjacent sweetness. It reads as cute and comforting rather than dramatic.",
    traits: ["Pastel color palette", "Soft, rounded silhouettes", "Glossy, dewy makeup", "Cardigans and platform shoes"],
  },
  balletcore: {
    slug: "balletcore",
    name: "Balletcore",
    tagline: "Practice-wear elegance, off the stage.",
    description:
      "Balletcore takes the wardrobe of a dancer — wrap tops, leg warmers, soft flats, tulle — and brings it into everyday life. It's delicate and disciplined at the same time.",
    traits: ["Wrap tops and leotards", "Ballet flats", "Soft pinks and creams", "Tulle and delicate layering"],
  },
  romantic: {
    slug: "romantic",
    name: "Romantic",
    tagline: "Florals, softness, and emotional wardrobing.",
    description:
      "Romantic style favors flowing fabrics, florals, and softness in both color and silhouette. It dresses for feeling rather than function, often drawing from vintage and cottage influences.",
    traits: ["Florals and flowing fabrics", "Lace and delicate trims", "Soft, muted color palette", "Vintage-inspired dresses"],
  },
  "downtown-girl": {
    slug: "downtown-girl",
    name: "Downtown Girl",
    tagline: "City-coded, low-effort cool.",
    description:
      "Downtown Girl style is urban and trend-forward without looking overly styled — low-rise jeans, an oversized jacket, sunglasses indoors. It's the look of someone who lives somewhere with good coffee and bad subway service.",
    traits: ["Oversized jackets", "Low-rise denim", "Mixed metals and statement sunglasses", "Effortless, slightly undone styling"],
  },
  grunge: {
    slug: "grunge",
    name: "Grunge",
    tagline: "Worn-in, dark, and unbothered.",
    description:
      "Grunge is built around distressed denim, dark layers, and a deliberately undone look. It rejects polish in favor of texture and attitude — flannel, band tees, combat boots.",
    traits: ["Distressed denim", "Flannel and band tees", "Combat boots", "Dark, muted color palette"],
  },
  y2k: {
    slug: "y2k",
    name: "Y2K",
    tagline: "Maximalist, metallic, early-2000s nostalgia.",
    description:
      "Y2K style revives the bold, slightly futuristic look of the early 2000s — low-rise jeans, metallics, tiny sunglasses, butterfly motifs. It's loud, nostalgic, and unapologetically trend-driven.",
    traits: ["Metallics and shine", "Low-rise silhouettes", "Bold, saturated colors", "Butterfly and Y2K-era motifs"],
  },
  "indie-sleaze": {
    slug: "indie-sleaze",
    name: "Indie Sleaze",
    tagline: "Messy, nocturnal, party-photo energy.",
    description:
      "Indie Sleaze channels mid-2000s/early-2010s party culture — smudged eyeliner, disposable-camera flash, skinny jeans, and a wardrobe that looks like it survived a long night out.",
    traits: ["Skinny jeans and band tees", "Smudged, undone makeup", "Flash-photography aesthetic", "Thrifted, mismatched layering"],
  },
  "romantic-goth": {
    slug: "romantic-goth",
    name: "Romantic Goth",
    tagline: "Dramatic, dark, and cinematic.",
    description:
      "Romantic Goth pairs traditional gothic darkness with romantic softness — lace, velvet, and dramatic silhouettes in black. It's moody and theatrical, built for atmosphere.",
    traits: ["Black lace and velvet", "Dramatic, flowing silhouettes", "Dark, high-contrast makeup", "Vintage gothic jewelry"],
  },
  "dark-feminine": {
    slug: "dark-feminine",
    name: "Dark Feminine",
    tagline: "Confident, sensual, unapologetically dark.",
    description:
      "Dark Feminine style is sleek and powerful with a seductive edge — fitted black silhouettes, bold makeup, and a confident, magnetic presence.",
    traits: ["Fitted black silhouettes", "Bold, dramatic makeup", "Statement jewelry", "Confident, deliberate styling"],
  },
  witchy: {
    slug: "witchy",
    name: "Witchy",
    tagline: "Mystical, earthy, a little eerie.",
    description:
      "Witchy style draws on folklore and the occult — flowing dark layers, natural materials, and symbolic jewelry. It feels intentional and a little otherworldly.",
    traits: ["Flowing, layered silhouettes", "Natural, earthy textures", "Moon and occult-inspired jewelry", "Deep, muted color palette"],
  },
  "office-siren": {
    slug: "office-siren",
    name: "Office Siren",
    tagline: "Power dressing with an edge.",
    description:
      "Office Siren reworks corporate dressing into something sharper and more deliberate — pencil skirts, fitted blazers, and sleek hair, with just enough edge to feel like a statement rather than a uniform.",
    traits: ["Pencil skirts and fitted blazers", "Sleek, polished hair", "Pointed heels", "Sharp, structured silhouettes"],
  },
  "old-money": {
    slug: "old-money",
    name: "Old Money",
    tagline: "Understated wealth, quietly tailored.",
    description:
      "Old Money style signals wealth through restraint — quality fabrics, classic cuts, and an absence of logos. Nothing is loud; everything is well-made.",
    traits: ["Tailored, classic silhouettes", "Neutral, muted palette", "No visible logos", "Quality over trend"],
  },
  "mob-wife": {
    slug: "mob-wife",
    name: "Mob Wife",
    tagline: "Maximalist glamour, fur, and gold.",
    description:
      "Mob Wife style is loud, glamorous, and unapologetic — fur coats, gold jewelry, dramatic makeup. It's old-Hollywood excess with an attitude.",
    traits: ["Fur and faux-fur coats", "Bold gold jewelry", "Dramatic, glamorous makeup", "Animal print and rich textures"],
  },
  "quiet-luxury": {
    slug: "quiet-luxury",
    name: "Quiet Luxury",
    tagline: "If you know, you know.",
    description:
      "Quiet Luxury is the most understated end of wealth-coded dressing — immaculate basics, exceptional fabric quality, and zero visible branding. The luxury is in the construction, not the label.",
    traits: ["Logo-free, minimal design", "Exceptional fabric quality", "Neutral, restrained palette", "Fit over flash"],
  },
};
