// Context images show application settings, not deployments of the paper's method.
export const applications = [
  {
    id: "machines", number: "01", label: "Other machines", title: "Beyond the excavator.",
    image: "dozer.webp", alt: "A Caterpillar D11 bulldozer with its blade lowered on a gravel site",
    caption: "Bulldozer · an extension to a different machine and task",
    text: "Grading, loading, and earthmoving all depend on skilled operation. Learning from demonstrations offers a way to capture that expertise across construction machines.",
    next: "Collect task-specific demonstrations and adapt the controller to each machine’s geometry, hydraulics, and soil interaction.",
    source: "https://doi.org/10.1016/j.autcon.2021.103783", sourceLabel: "Related field robotics research",
  },
  {
    id: "solar", number: "02", label: "Solar construction", title: "Build the energy transition.",
    image: "solar.webp", alt: "Rows of photovoltaic solar panels in sunlight",
    caption: "Solar infrastructure · an application setting",
    text: "Solar installation involves repeated lifting and precise placement. A construction machine with a suitable manipulator could learn these motions from an operator, extending from moving soil to handling modules.",
    next: "Add a panel-handling tool, force-aware control, and alignment feedback. Validate placement accuracy and panel protection.",
    source: "https://www.aes.com/about-us/innovation/maximo", sourceLabel: "Robotic installation in practice",
  },
  {
    id: "space", number: "03", label: "Space construction", title: "The next worksite may be the Moon.",
    image: "ipex.webp", alt: "NASA's IPEx robot with opposing bucket drums in a terrestrial lunar-regolith testbed",
    caption: "NASA IPEx · terrestrial lunar-excavation testbed",
    text: "Excavating regolith and preparing terrain are building blocks of lunar infrastructure. Task-level autonomy could reduce reliance on continuous remote control when communication is constrained.",
    next: "Relearn soil interaction for reduced gravity and test perception under dust, deep shadows, and harsh lighting.",
    source: "https://www.nasa.gov/infrastructure-pilot-excavator/", sourceLabel: "NASA excavation research",
  },
  {
    id: "utilities", number: "04", label: "Utility-aware digging", title: "Know what is below. Then plan the dig.",
    image: "utilities.webp", alt: "An exposed natural gas pipe and excavator bucket during a roadway repair in Laramie, Wyoming",
    caption: "Gas-line repair · the hidden infrastructure excavation must account for",
    text: "A learned motion also needs to know where it must not go. The team’s GPR and vision-based mapping research locates buried utilities—spatial information that could inform excavation constraints.",
    next: "Connect utility locations and uncertainty to no-dig regions, supervisory control, and field verification.",
    source: "https://doi.org/10.1016/j.autcon.2023.105004", sourceLabel: "Read the team’s utility-mapping paper",
  },
];

export const relatedPublications = [
  {
    topic: "Understand the site", year: "2023", venue: "Automation in Construction",
    title: "Underground infrastructure detection and localization using deep learning enabled radargram inversion and vision-based mapping",
    authors: "Mengjun Wang · Da Hu · Junjie Chen · Shuai Li",
    note: "Reconstructing and locating buried utilities before excavation.",
    href: "https://doi.org/10.1016/j.autcon.2023.105004",
  },
  {
    topic: "Work around people", year: "2023", venue: "Journal of Computing in Civil Engineering",
    title: "Prediction-Based Path Planning for Safe and Efficient Human–Robot Collaboration in Construction via Deep Reinforcement Learning",
    authors: "Jiannan Cai · Ao Du · Xiaoyun Liang · Shuai Li",
    note: "Using predicted worker motion to plan robot paths in simulation.",
    href: "https://doi.org/10.1061/(ASCE)CP.1943-5487.0001056",
  },
  {
    topic: "Localize beyond Earth", year: "2026", venue: "Journal of Computing in Civil Engineering · In production",
    title: "Robotic localization via active projected fiducials for space construction",
    authors: "Mengjun Wang · Shuai Li · Yunlan Zhang",
    note: "Active visual references for localization in feature-sparse lunar construction environments. Publication status reported on the author’s research page.",
    href: "https://wangmmstar.github.io/",
  },
];

export const imageCredits = [
  { name: "Vision photograph", creator: "Built Robotics / Unsplash", source: "https://unsplash.com/photos/92nDruwPF2s", license: "Unsplash License", licenseUrl: "https://unsplash.com/license", note: "Industry context; this photograph does not depict our research platform. Resized and display-cropped." },
  { name: "Bulldozer", creator: "David Drew / Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Cat_D11_View_2.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", note: "Resized, WebP conversion, display crop. This adaptation retains CC BY-SA 3.0." },
  { name: "Solar panels", creator: "Vera Kratochvil / Public Domain Pictures", source: "https://www.publicdomainpictures.net/en/view-image.php?image=9099&picture=solar-panels", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", note: "WebP conversion and display crop." },
  { name: "IPEx testbed", creator: "NASA / Kennedy Space Center", source: "https://www.nasa.gov/infrastructure-pilot-excavator/", license: "NASA media usage guidelines", licenseUrl: "https://www.nasa.gov/nasa-brand-center/images-and-media/", note: "Real terrestrial testbed photograph. Resized, WebP conversion, display crop. No NASA endorsement implied." },
  { name: "Gas-line repair", creator: "Tony Webster / Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Gas_Line_Rupture_-_Natural_Gas_Break_(54124032675).jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", note: "Resized, WebP conversion, display crop. This adaptation retains CC BY-SA 2.0." },
];
