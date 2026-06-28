from app.models.quiz import AxisVector, Question, QuestionOption

# Each option letter (a-f) maps to a group of related aesthetics (see
# AESTHETICS in aesthetics.py). BASE gives every option in a letter group a
# starting position on the 6 axes; per-question nudges shift that position
# toward whichever specific aesthetic the option's wording evokes, so the
# scoring engine can tell apart e.g. Clean Girl vs Minimalist vs Soft Classic
# even though both picked option "a".

BASE: dict[str, dict[str, float]] = {
    "a": dict(light_dark=0.6, soft_sharp=-0.1, minimal_maximal=-0.6,
               classic_trendy=-0.1, romantic_practical=0.55, natural_urban=0.05),
    "b": dict(light_dark=-0.1, soft_sharp=0.35, minimal_maximal=-0.2,
               classic_trendy=-0.7, romantic_practical=-0.2, natural_urban=0.15),
    "c": dict(light_dark=0.6, soft_sharp=-0.6, minimal_maximal=0.15,
               classic_trendy=0.1, romantic_practical=-0.55, natural_urban=-0.15),
    "d": dict(light_dark=-0.3, soft_sharp=0.35, minimal_maximal=0.35,
               classic_trendy=0.4, romantic_practical=-0.35, natural_urban=0.6),
    "e": dict(light_dark=-0.7, soft_sharp=0.05, minimal_maximal=0.4,
               classic_trendy=-0.25, romantic_practical=-0.6, natural_urban=0.15),
    "f": dict(light_dark=-0.05, soft_sharp=0.6, minimal_maximal=-0.35,
               classic_trendy=-0.3, romantic_practical=-0.05, natural_urban=0.4),
}


def opt(letter: str, text: str, **nudge: float) -> QuestionOption:
    weights = {**BASE[letter], **nudge}
    return QuestionOption(id=letter, text=text, weights=AxisVector(**weights))


QUESTIONS: list[Question] = [
    Question(
        id="q1",
        text="Pick the color palette you're most drawn to.",
        options=[
            opt("a", "Cream, beige, white, soft brown"),
            opt("b", "Black, burgundy, espresso, forest green"),
            opt("c", "Baby pink, ivory, blush, pearl"),
            opt("d", "Grey, denim blue, black, silver"),
            opt("e", "Sage, terracotta, cream, warm green", minimal_maximal=0.1, romantic_practical=-0.4),
            opt("f", "Charcoal, wine red, black, gold", minimal_maximal=-0.5, soft_sharp=0.7),
        ],
    ),
    Question(
        id="q2",
        text="Pick the outfit you would actually wear on a normal day.",
        options=[
            opt("a", "White shirt, straight jeans, gold hoops, clean sneakers"),
            opt("b", "Turtleneck, blazer, trousers, loafers", classic_trendy=-0.8, minimal_maximal=-0.4),
            opt("c", "Soft top, skirt, dainty jewellery, ballet flats", minimal_maximal=-0.2, soft_sharp=-0.5),
            opt("d", "Leather jacket, mini skirt, boots, headphones", classic_trendy=0.2, minimal_maximal=0.5),
            opt("e", "Flowy dress, boots, rings, dark lipstick", romantic_practical=-0.6),
            opt("f", "Satin shirt, tailored trousers, pointed shoes, sleek bag", minimal_maximal=-0.7, classic_trendy=-0.7),
        ],
    ),
    Question(
        id="q3",
        text="Pick the outfit you love visually, even if you may not wear it daily.",
        options=[
            opt("a", "Minimal white outfit with slick hair and gold jewellery", minimal_maximal=-0.8),
            opt("b", "Long coat, dark academia layers, books-in-hand energy", light_dark=-0.8, classic_trendy=-0.7),
            opt("c", "Corset top, ribbons, lace skirt, pearl accessories", romantic_practical=-0.7, classic_trendy=0.4),
            opt("d", "Oversized jacket, tiny top, boots, messy cool-girl look", minimal_maximal=0.5, natural_urban=0.8),
            opt("e", "Dramatic black dress, gothic jewellery, cinematic makeup", light_dark=-0.8, romantic_practical=-0.7),
            opt("f", "Power blazer, pencil skirt, heels, expensive perfume energy", soft_sharp=0.8, natural_urban=0.6),
        ],
    ),
    Question(
        id="q4",
        text="What kind of room feels most like your dream vibe?",
        options=[
            opt("a", "Clean white sheets, sunlight, minimal decor", minimal_maximal=-0.9),
            opt("b", "Bookshelves, warm lamps, dark wood, candles", light_dark=-0.8, classic_trendy=-0.7),
            opt("c", "Florals, vanity mirror, perfume bottles, soft lighting", romantic_practical=-0.7),
            opt("d", "Posters, records, messy desk, city-night energy", minimal_maximal=0.6, natural_urban=0.8, light_dark=-0.6),
            opt("e", "Plants, linen curtains, ceramics, cozy textures", minimal_maximal=0.0, natural_urban=-0.4, romantic_practical=-0.5),
            opt("f", "Glass desk, chrome accents, perfume tray, sharp lighting", minimal_maximal=-0.9, soft_sharp=0.4),
        ],
    ),
    Question(
        id="q5",
        text="Pick your ideal fictional setting.",
        options=[
            opt("a", "A clean apartment with morning light and matcha"),
            opt("b", "An old university library during rain", light_dark=-0.8, classic_trendy=-0.7),
            opt("c", "A vintage bedroom with lace curtains and letters", classic_trendy=-0.5, romantic_practical=-0.6),
            opt("d", "A neon-lit street after midnight", light_dark=-0.6, natural_urban=0.9),
            opt("e", "A candlelit mansion with secrets and drama", romantic_practical=-0.7, minimal_maximal=0.4),
            opt("f", "A corporate office where everyone looks expensive and suspicious", minimal_maximal=-0.6, soft_sharp=0.7),
        ],
    ),
    Question(
        id="q6",
        text="Which compliment would secretly hit the hardest?",
        options=[
            opt("a", "“You look so put-together.”"),
            opt("b", "“You look mysterious.”"),
            opt("c", "“You look so pretty and soft.”"),
            opt("d", "“You look effortless.”"),
            opt("e", "“You look intimidating, but in a good way.”"),
            opt("f", "“You look expensive.”", minimal_maximal=-0.7),
        ],
    ),
    Question(
        id="q7",
        text="Pick your beauty vibe.",
        options=[
            opt("a", "Glowy skin, lip balm, brushed brows"),
            opt("b", "Brown liner, matte base, classic perfume", classic_trendy=-0.8),
            opt("c", "Blush, gloss, lashes, soft shimmer"),
            opt("d", "Smudged eyeliner, nude lip, messy hair"),
            opt("e", "Dark lip, sharp eyes, high contrast", light_dark=-0.8, soft_sharp=0.3),
            opt("f", "Sleek hair, brown/red lip, polished skin", minimal_maximal=-0.6),
        ],
    ),
    Question(
        id="q8",
        text="What do you usually want to buy the most?",
        options=[
            opt("a", "Skincare, basics, clean accessories", minimal_maximal=-0.7),
            opt("b", "Coats, books, bags, loafers", classic_trendy=-0.7),
            opt("c", "Jewelry, bows, perfume, pretty tops"),
            opt("d", "Denim, boots, graphic tees, jackets"),
            opt("e", "Dark dresses, rings, boots, candles"),
            opt("f", "Blazers, heels, fitted tops, structured bags", minimal_maximal=-0.6),
        ],
    ),
    Question(
        id="q9",
        text="Your Pinterest board is mostly…",
        options=[
            opt("a", "Clean outfits, skincare shelves, neutral rooms", minimal_maximal=-0.7),
            opt("b", "Libraries, coffee, coats, old buildings", light_dark=-0.7, classic_trendy=-0.7),
            opt("c", "Pink rooms, lace, soft makeup, romance", romantic_practical=-0.7),
            opt("d", "Street style, nightlife, music, casual chaos", natural_urban=0.8, minimal_maximal=0.4),
            opt("e", "Dark rooms, dramatic outfits, gothic romance", light_dark=-0.8, romantic_practical=-0.6),
            opt("f", "Luxury outfits, watches, hotel mirrors, power dressing", minimal_maximal=-0.7, soft_sharp=0.6),
        ],
    ),
    Question(
        id="q10",
        text="What does your current closet mostly look like?",
        options=[
            opt("a", "Basics, neutrals, jeans, simple tops"),
            opt("b", "Dark clothes, layers, sweaters, trousers", light_dark=-0.5),
            opt("c", "Feminine tops, dresses, soft colors"),
            opt("d", "Random mix, denim, oversized pieces, statement items", minimal_maximal=0.5),
            opt("e", "Black outfits, dramatic pieces, boots, jewellery", light_dark=-0.7),
            opt("f", "Workwear, formal pieces, blazers, shirts, trousers", minimal_maximal=-0.5),
        ],
    ),
    Question(
        id="q11",
        text="What is missing from your closet right now?",
        options=[
            opt("a", "Better basics and polished everyday pieces"),
            opt("b", "More structured layers like coats, trousers, loafers", classic_trendy=-0.6),
            opt("c", "More feminine details like skirts, ribbons, delicate tops"),
            opt("d", "More cool statement pieces like jackets, boots, denim"),
            opt("e", "More dramatic pieces like dark dresses, rings, bold shoes"),
            opt("f", "More powerful pieces like blazers, heels, bags, fitted tops"),
        ],
    ),
    Question(
        id="q12",
        text="Pick the personality description that feels closest.",
        options=[
            opt("a", "Calm, simple, low-drama", minimal_maximal=-0.7),
            opt("b", "Private, thoughtful, intense", light_dark=-0.6),
            opt("c", "Romantic, expressive, emotional", romantic_practical=-0.7),
            opt("d", "Restless, creative, unpredictable", minimal_maximal=0.6, natural_urban=0.6),
            opt("e", "Dramatic, loyal, obsessive, cinematic", romantic_practical=-0.7, minimal_maximal=0.6),
            opt("f", "Ambitious, controlled, selective", minimal_maximal=-0.7, soft_sharp=0.6),
        ],
    ),
    Question(
        id="q13",
        text="Pick your ideal hangout.",
        options=[
            opt("a", "Brunch, shopping, and coffee"),
            opt("b", "Museum, bookstore, and rain", light_dark=-0.5, classic_trendy=-0.6),
            opt("c", "Flower market, dessert, and cute photos", romantic_practical=-0.5),
            opt("d", "Concert, late-night food, and walking around the city", natural_urban=0.8),
            opt("e", "Candlelit dinner, old movie, dramatic conversations", romantic_practical=-0.6),
            opt("f", "Fancy dinner, hotel bar, and looking untouchable", minimal_maximal=-0.6, soft_sharp=0.6),
        ],
    ),
    Question(
        id="q14",
        text="Pick the shoe you'd reach for most often.",
        options=[
            opt("a", "White sneakers"),
            opt("b", "Loafers", classic_trendy=-0.7),
            opt("c", "Ballet flats", soft_sharp=-0.6, minimal_maximal=-0.2),
            opt("d", "Combat boots", natural_urban=0.6),
            opt("e", "Heeled boots"),
            opt("f", "Pointed heels", minimal_maximal=-0.7),
        ],
    ),
    Question(
        id="q15",
        text="Pick the accessory you like most.",
        options=[
            opt("a", "Gold hoops"),
            opt("b", "Leather satchel", classic_trendy=-0.6),
            opt("c", "Pearl necklace", classic_trendy=0.2, romantic_practical=-0.5),
            opt("d", "Headphones", natural_urban=0.7),
            opt("e", "Silver rings"),
            opt("f", "Structured handbag", minimal_maximal=-0.6),
        ],
    ),
    Question(
        id="q16",
        text="Pick the phrase that feels most like you.",
        options=[
            opt("a", "“Less, but better.”", minimal_maximal=-0.9, romantic_practical=0.6),
            opt("b", "“Knowledge is seductive.”", light_dark=-0.8, soft_sharp=0.4, classic_trendy=-0.7),
            opt("c", "“Pretty things matter.”", classic_trendy=0.4, romantic_practical=-0.7),
            opt("d", "“I make chaos look good.”", minimal_maximal=0.7, natural_urban=0.7),
            opt("e", "“Love should feel cinematic.”", romantic_practical=-0.8, minimal_maximal=0.5),
            opt("f", "“Power is a language.”", soft_sharp=0.8, natural_urban=0.5),
        ],
    ),
    Question(
        id="q17",
        text="What do you want your style to say?",
        options=[
            opt("a", "I'm clean, calm, and put-together.", minimal_maximal=-0.6),
            opt("b", "I'm intelligent, private, and interesting.", light_dark=-0.6, classic_trendy=-0.6),
            opt("c", "I'm soft, romantic, and pretty.", romantic_practical=-0.7),
            opt("d", "I'm cool, effortless, and hard to copy.", natural_urban=0.6),
            opt("e", "I'm intense, dramatic, and unforgettable.", romantic_practical=-0.6, light_dark=-0.7),
            opt("f", "I'm powerful, polished, and expensive-looking.", minimal_maximal=-0.7, soft_sharp=0.5),
        ],
    ),
    Question(
        id="q18",
        text="What is your biggest style problem?",
        options=[
            opt("a", "My outfits feel too plain."),
            opt("b", "I like the vibe but don't know how to make it wearable."),
            opt("c", "I buy cute things but they don't form outfits."),
            opt("d", "My closet is chaotic and has no clear direction.", minimal_maximal=0.5),
            opt("e", "I want drama but don't want to look costume-y."),
            opt("f", "I want to look more polished and high-value.", minimal_maximal=-0.6),
        ],
    ),
    Question(
        id="q19",
        text="If you had to choose one base outfit formula, what would it be?",
        options=[
            opt("a", "Basic top + jeans + clean sneakers + gold jewellery"),
            opt("b", "Turtleneck/shirt + trousers + loafers + coat", classic_trendy=-0.7),
            opt("c", "Pretty top + skirt + ballet flats + soft makeup"),
            opt("d", "Oversized jacket + fitted top + denim + boots", minimal_maximal=0.4),
            opt("e", "Dark dress/top + boots + rings + bold makeup"),
            opt("f", "Blazer + fitted top + trousers/skirt + structured bag", minimal_maximal=-0.6),
        ],
    ),
    Question(
        id="q20",
        text="Pick your final vibe.",
        options=[
            opt("a", "Clean, minimal, fresh", minimal_maximal=-0.7),
            opt("b", "Academic, classic, mysterious", light_dark=-0.5, classic_trendy=-0.6),
            opt("c", "Soft, romantic, feminine", romantic_practical=-0.6),
            opt("d", "Urban, cool, chaotic", natural_urban=0.7, minimal_maximal=0.4),
            opt("e", "Dark, dramatic, cinematic", light_dark=-0.7, romantic_practical=-0.6),
            opt("f", "Luxe, sharp, powerful", soft_sharp=0.6, minimal_maximal=-0.5),
        ],
    ),
]

# Per plan.txt: these subsets isolate "what you'd actually wear" vs
# "what you're fantasizing about" rather than scoring the whole quiz at once.
WEARABLE_QUESTION_IDS = {"q2", "q10", "q11", "q18", "q19"}
FANTASY_QUESTION_IDS = {"q1", "q3", "q4", "q5", "q9", "q16"}
