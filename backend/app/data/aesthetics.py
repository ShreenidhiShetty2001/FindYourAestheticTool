from app.models.quiz import AestheticProfile, AxisVector

# Each aesthetic belongs to one letter group (a-f). Within a group, vectors are
# spread out on the 6 axes so the scoring engine can tell sub-aesthetics apart
# even though they share an option letter in the quiz.

AESTHETICS: list[AestheticProfile] = [
    # Group A — clean, neutral
    AestheticProfile(
        slug="clean-girl",
        name="Clean Girl",
        group="a",
        vector=AxisVector(
            light_dark=0.8, soft_sharp=-0.3, minimal_maximal=-0.5,
            classic_trendy=0.5, romantic_practical=0.6, natural_urban=0.2,
        ),
    ),
    AestheticProfile(
        slug="minimalist",
        name="Minimalist",
        group="a",
        vector=AxisVector(
            light_dark=0.5, soft_sharp=0.1, minimal_maximal=-0.9,
            classic_trendy=-0.1, romantic_practical=0.7, natural_urban=0.1,
        ),
    ),
    AestheticProfile(
        slug="soft-classic",
        name="Soft Classic",
        group="a",
        vector=AxisVector(
            light_dark=0.6, soft_sharp=-0.2, minimal_maximal=-0.4,
            classic_trendy=-0.6, romantic_practical=0.4, natural_urban=-0.1,
        ),
    ),
    # Group B — academic, classic
    AestheticProfile(
        slug="dark-academia",
        name="Dark Academia",
        group="b",
        vector=AxisVector(
            light_dark=-0.8, soft_sharp=0.5, minimal_maximal=0.0,
            classic_trendy=-0.7, romantic_practical=-0.5, natural_urban=0.3,
        ),
    ),
    AestheticProfile(
        slug="light-academia",
        name="Light Academia",
        group="b",
        vector=AxisVector(
            light_dark=0.4, soft_sharp=0.2, minimal_maximal=-0.1,
            classic_trendy=-0.6, romantic_practical=-0.2, natural_urban=0.2,
        ),
    ),
    AestheticProfile(
        slug="classic",
        name="Classic",
        group="b",
        vector=AxisVector(
            light_dark=0.1, soft_sharp=0.3, minimal_maximal=-0.5,
            classic_trendy=-0.8, romantic_practical=0.1, natural_urban=0.0,
        ),
    ),
    # Group C — feminine, romantic
    AestheticProfile(
        slug="coquette",
        name="Coquette",
        group="c",
        vector=AxisVector(
            light_dark=0.6, soft_sharp=-0.6, minimal_maximal=0.4,
            classic_trendy=0.5, romantic_practical=-0.7, natural_urban=0.0,
        ),
    ),
    AestheticProfile(
        slug="soft-girl",
        name="Soft Girl",
        group="c",
        vector=AxisVector(
            light_dark=0.7, soft_sharp=-0.7, minimal_maximal=0.1,
            classic_trendy=0.2, romantic_practical=-0.4, natural_urban=-0.2,
        ),
    ),
    AestheticProfile(
        slug="balletcore",
        name="Balletcore",
        group="c",
        vector=AxisVector(
            light_dark=0.6, soft_sharp=-0.5, minimal_maximal=-0.2,
            classic_trendy=0.1, romantic_practical=-0.3, natural_urban=-0.1,
        ),
    ),
    AestheticProfile(
        slug="romantic",
        name="Romantic",
        group="c",
        vector=AxisVector(
            light_dark=0.5, soft_sharp=-0.6, minimal_maximal=0.3,
            classic_trendy=-0.3, romantic_practical=-0.8, natural_urban=-0.3,
        ),
    ),
    # Group D — urban, edgy
    AestheticProfile(
        slug="downtown-girl",
        name="Downtown Girl",
        group="d",
        vector=AxisVector(
            light_dark=-0.2, soft_sharp=0.5, minimal_maximal=0.1,
            classic_trendy=0.6, romantic_practical=-0.4, natural_urban=0.7,
        ),
    ),
    AestheticProfile(
        slug="grunge",
        name="Grunge",
        group="d",
        vector=AxisVector(
            light_dark=-0.5, soft_sharp=0.3, minimal_maximal=0.2,
            classic_trendy=-0.2, romantic_practical=-0.2, natural_urban=0.5,
        ),
    ),
    AestheticProfile(
        slug="y2k",
        name="Y2K",
        group="d",
        vector=AxisVector(
            light_dark=0.0, soft_sharp=0.2, minimal_maximal=0.6,
            classic_trendy=0.9, romantic_practical=-0.3, natural_urban=0.4,
        ),
    ),
    AestheticProfile(
        slug="indie-sleaze",
        name="Indie Sleaze",
        group="d",
        vector=AxisVector(
            light_dark=-0.6, soft_sharp=0.4, minimal_maximal=0.5,
            classic_trendy=0.3, romantic_practical=-0.5, natural_urban=0.8,
        ),
    ),
    # Group E — dark, dramatic
    AestheticProfile(
        slug="romantic-goth",
        name="Romantic Goth",
        group="e",
        vector=AxisVector(
            light_dark=-0.8, soft_sharp=0.0, minimal_maximal=0.5,
            classic_trendy=-0.4, romantic_practical=-0.7, natural_urban=0.2,
        ),
    ),
    AestheticProfile(
        slug="dark-feminine",
        name="Dark Feminine",
        group="e",
        vector=AxisVector(
            light_dark=-0.7, soft_sharp=0.2, minimal_maximal=0.2,
            classic_trendy=0.2, romantic_practical=-0.5, natural_urban=0.4,
        ),
    ),
    AestheticProfile(
        slug="witchy",
        name="Witchy",
        group="e",
        vector=AxisVector(
            light_dark=-0.6, soft_sharp=-0.1, minimal_maximal=0.4,
            classic_trendy=-0.5, romantic_practical=-0.6, natural_urban=-0.2,
        ),
    ),
    # Group F — power, luxury
    AestheticProfile(
        slug="office-siren",
        name="Office Siren",
        group="f",
        vector=AxisVector(
            light_dark=-0.3, soft_sharp=0.8, minimal_maximal=-0.4,
            classic_trendy=0.4, romantic_practical=-0.6, natural_urban=0.6,
        ),
    ),
    AestheticProfile(
        slug="old-money",
        name="Old Money",
        group="f",
        vector=AxisVector(
            light_dark=0.3, soft_sharp=0.5, minimal_maximal=-0.7,
            classic_trendy=-0.8, romantic_practical=0.5, natural_urban=0.3,
        ),
    ),
    AestheticProfile(
        slug="mob-wife",
        name="Mob Wife",
        group="f",
        vector=AxisVector(
            light_dark=-0.4, soft_sharp=0.6, minimal_maximal=0.7,
            classic_trendy=0.0, romantic_practical=-0.4, natural_urban=0.5,
        ),
    ),
    AestheticProfile(
        slug="quiet-luxury",
        name="Quiet Luxury",
        group="f",
        vector=AxisVector(
            light_dark=0.2, soft_sharp=0.4, minimal_maximal=-0.9,
            classic_trendy=-0.7, romantic_practical=0.3, natural_urban=0.2,
        ),
    ),
]
