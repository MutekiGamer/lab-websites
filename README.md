# Research and product pages — Excavator & Walkscribe

English pages for **Robotic Excavator** research and the **Walkscribe** product. The layout follows the simple white-background style of [Roman Hauksson-Neill’s Astro template](https://github.com/RomanHauksson/academic-project-astro-template). A shared **More Research** menu, inspired by [Nerfies](https://nerfies.github.io/), connects the projects.

One Astro site serves three routes: `/` is the overview, `/excavator/` is Robotic Excavator, and `/walkscribe/` is Walkscribe. The shared More Research menu links the detail pages and the home icon returns to the overview. Legacy `/research/` and `/construction-agent/` routes redirect to their new locations.

## Run locally

Use Node.js 24+ and npm. From the repository root:

```bash
npm ci
npm run dev
```

Open **http://127.0.0.1:4322/**. Stop with `Ctrl+C`.

```bash
npm run build     # type check and static build to dist/
npm run preview   # serve the completed build locally
```

The original local workspace also supports `./website.sh dev` from its parent directory. No API keys or external font services are required. Fonts, figures, and demonstration videos are included; paper and product links point to their original websites.

## GitHub Pages

- Overview: https://mutekigamer.github.io/lab-websites/
- Excavator: https://mutekigamer.github.io/lab-websites/excavator/
- Walkscribe: https://mutekigamer.github.io/lab-websites/walkscribe/

`.github/workflows/deploy.yml` checks, builds, and deploys each push to `main`. In repository **Settings → Pages**, the source is **GitHub Actions**. The workflow sets `SITE_URL=https://mutekigamer.github.io` and `BASE_PATH=/lab-websites`; local commands default to `/`.

To reproduce the published path locally:

```bash
BASE_PATH=/lab-websites npm run build
BASE_PATH=/lab-websites npm run preview
```

Then open `http://127.0.0.1:4322/lab-websites/`. All internal links and media use the shared `localPath()` helper. Original presentations, archived PDFs, temporary files, dependencies, and build outputs are excluded from Git.

## Edit the page

| File | Purpose |
| --- | --- |
| `src/paper.mdx` | Entry point for the Excavator story component |
| `src/components/ExcavatorStory.astro` | Visual narrative, evidence, deployment concept, and connected research |
| `src/data/project.ts` | Authors, publication metadata, links, and BibTeX |
| `src/pages/index.astro` | Research and product overview |
| `src/pages/excavator/index.astro` | Excavator header, resources, citation, figure viewer, and metadata |
| `src/styles/global.css` | Responsive academic-page styling |
| `src/styles/excavator-story.css` | Excavator-only narrative layout |
| `src/data/research.ts` | Shared project menu and index |
| `src/pages/walkscribe/index.astro` | Walkscribe content and video scene controls |
| `src/data/construction-agent.ts` | Walkscribe team, website, and verified video timestamps |
| `src/components/ResearchNav.astro` | Shared project navigation, including keyboard and touch controls |
| `src/components/ImageViewer.astro` | Shared accessible figure enlargement |
| `src/components/MotionFigure.astro` | Looping presentation clips with playback controls and reduced-motion support |
| `public/images/` | Figures extracted from the paper |
| `public/animations/` | Nine web video versions of the original presentation GIFs, with poster images |
| `public/construction-agent/` | Walkscribe video and stills extracted from it |

The Excavator page uses a short narrative heading in `src/pages/excavator/index.astro`. The full paper title remains in `project.ts`, the citation block, and academic metadata.

### Excavator narrative

The page opens with one concrete question: should a robot reproduce every movement in a digging demonstration? Visitors switch between actual redundant, irrelevant, and failed-motion examples. The hero explains redundancy and noise in successful teleoperated demonstrations. The failed-motion caption explicitly states the method’s reliance on task-completing trajectories. The story then moves through keyframe selection, goal-directed execution, a proposed supervised field pilot, and a visible four-project research chain. The hero offers Paper and BibTeX resource buttons; BibTeX opens the citation disclosure. Publication metadata and the expandable citation are at the end.

The deployment concept is AI-generated using the built-in imagegen tool; it is explicitly labeled as a future concept. Numbered image controls and keyboard-accessible tabs explain the machine, operator, and task. Its original PNG and prompt are preserved in `../.tools/excavator-research/deployment-concept.png` and `deployment-concept-prompt.txt`; the page uses an optimized local WebP. This image does not depict an actual research deployment. Actual experimental media retain their original content.

The following commercial references informed internal research only; their promotional/reference section and links have been removed from the public page:

- Flywheel: remote-operator workflow — https://useflywheel.ai/
- Ursa: production tasks and material movement — https://ursamining.com/
- Bedrock: existing fleets and partner pilots — https://bedrockrobotics.com/partners
- Gravis: staged in-cab, field, and remote operation — https://www.gravisrobotics.com/slate and https://www.gravisrobotics.com/rack

The visible research chain follows a possible work cycle, rather than chronological publication order. It links complementary projects involving the team and explicitly identifies integration as future work:

- Sense: 2023 subsurface mapping — https://wangmmstar.github.io/projects/subsurface/
- Specify: 2025 BIM laser guidance — https://wangmmstar.github.io/projects/bim-laser/
- Act: 2024 Robotic Excavator — this page
- Review: Construction Agent / Walkscribe — local project page

Related-project images were retrieved from the linked team website (2026-10-27): `https://wangmmstar.github.io/images/gpr_detection.jpg` and `https://wangmmstar.github.io/projects/bim-laser/_astro/projection_ac.D18B0tiv_1Uc58D.png`. The Walkscribe card uses the existing local demo still. Images link to the relevant projects and retain their respective rights.

Technical architecture, curves, and the testbed are in native disclosure panels. The >80% and 40%-to->60% findings retain their specific experimental scopes. The research-pilot contact is Shuai Li's public UF address, listed at https://www.eng.ufl.edu/research/ai-experts/name/shuai-li/.

## Content sources

### Construction Agent / Walkscribe

Content comes from the [Walkscribe product website](https://settivishal.github.io/innovate-landing/) and the supplied `../construction agent/walkscribe-v3-full-cut-r8.mp4` (273.5 seconds). The original full video is preserved, and the website serves its existing fast-start remux with narration. The narrative follows one blocked-exit finding recorded in Take Notes during an inspection walkthrough from capture to coordination, guidance, and human review, with no cross-project story section.

Public labels use Product Website, Explore the Product, and Product team. A Teams button in the hero links to the team section. At the user's direction the faculty lead is omitted from this product's team. Roles are Songzi Wu — Tech Lead, Vishal Setti — Developer, and Gavin Sawall and Mengjun Wang — Business Development. Construction-specific references to project records or drawings remain valid domain terminology.

Five silent H.264 excerpts (1280px wide, CRF 22) support two accessible tab groups. The clips start at 1:14, 1:40, 3:28, 2:22, and 2:59; exact lengths, the source video, and the hero still crop are recorded in `../.tools/construction-agent-research/story-media-manifest.json`. The hero is a crop of the evidence photo visible at 1:30. The connected-helmet still comes from 4:06. The mobile screenshot is sourced from `https://settivishal.github.io/innovate-landing/img/app-live.jpg`. No generated images were added in this revision.

Loops pause when hidden or offscreen and respect reduced motion; native controls remain available. The full video has chapter buttons at 0:18, 0:54, 1:42, 2:18, 3:30, and 4:06. Selecting a chapter seeks while paused. The final case state remains work/review pending, matching the supplied demonstration. No benchmark results or full-scale deployment claims are added.

### Robotic Excavator

Primary source: [published article, DOI 10.1061/JCCEE5.CPENG-5884](https://doi.org/10.1061/JCCEE5.CPENG-5884). Full text was verified against the [public author manuscript in the NSF repository](https://par.nsf.gov/servlets/purl/10533657).

| Page asset / claim | Manuscript location |
| --- | --- |
| Framework | Figure 1, p. 12 |
| Keyframe extraction teaser | Figure 3, p. 20 |
| Latent goal generation | Figure 4, p. 22 |
| Laboratory testbed | Figure 6, p. 24 |
| Comparative success curves | Figure 8, p. 28 |
| Over 10,000 simulation trials per method | pp. 27–28 |
| Over 80% of redundant frames removed | p. 32 |
| Success from 40% to over 60% with action binding | p. 33 |
| Limitations and data availability | pp. 33–35 |

Figures retain their original content and include source links. PDF transparency is composited over white for correct display. The article itself is linked, not bundled for redistribution. The original supplied presentation PDF and PPTX are preserved locally and excluded from this repository. No Slides button is shown on the page.

The supplied `Robotic Excavator 1.pptx` contains 11 animated GIFs. Nine are available as local H.264 videos, preserving the original frame sequence and timing. The revised page presents five through problem and result selectors. Source-slide labels are omitted from the UI; the asset mapping is retained below. The original PPTX is unchanged. Conversion uses CRF 20, YUV420p, and MP4 fast-start metadata; odd image heights are padded by one pixel for codec compatibility. Posters use the first frame. Native controls allow pausing and fullscreen viewing; autoplay is disabled when reduced motion is requested.

| Animation | Original PPTX asset | Slide |
| --- | --- | --- |
| Teleoperation testbed | `ppt/media/image2.gif` | 2 |
| Operator control | `ppt/media/image3.gif` | 2 |
| Excavation demonstration | `ppt/media/image5.gif` | 2 |
| Autonomous excavation | `ppt/media/image4.gif` | 2 |
| Site contour-map goal | `ppt/media/image24.gif` | 6 |
| Generated visual goal | `ppt/media/image25.gif` | 6 |
| Redundant motion | `ppt/media/image9.gif` | 3 |
| Irrelevant motion | `ppt/media/image7.gif` | 3 |
| Failed motion | `ppt/media/image8.gif` | 3 |

The text is a concise project-page summary, not a verbatim abstract. Results are described with their experimental scope; the paper evaluates simulation and laboratory robot arms. No commercial field validation, lunar validation, or public source-code repository is implied. The company sites supplied as references are not used for visual design or assets.

## Attribution

Template design adapted from Roman Hauksson-Neill’s template, which credits [Eliahu Horwitz’s Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) and [Nerfies](https://nerfies.github.io/). Template design adaptations are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Figures and research materials retain their respective rights and are not relicensed by the template attribution.

The repository contains the static website and web-ready media. Original source documents and local research notes are maintained outside the published repository.
