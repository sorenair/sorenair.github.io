# Soren Gabor Portfolio Redesign Brief

## Purpose

Redesign the portfolio from the ground up for employers, peers, friends, and anyone curious about Soren’s work. On arrival, visitors should understand that Soren combines technical ability with a strong creative point of view. From there, they should be able to start exploring projects immediately.

Use the current projects, media, and About copy as the starting content. Soren will update details later. Existing public material can be reused. Describe current Lockheed Martin work in general terms and keep specific examples within the scope of material already published on the site. The page structure, frontend framework, and code architecture are open to redesign.

## Visual identity and references

- Aim for a refined, futuristic, tactile, engaging, and fluid experience. Use black, white, and grayscale as the interface palette, with one accent color visible at a time to guide attention. Keep the Ø as Soren’s identifying mark.
- **Sweater Weather screenshot.** Use generous whitespace, strong light and dark surfaces, and the sense of depth around a single subject as inspiration for presenting project media.
- **Planestate screenshot.** Use the balance of a large, tactile visual and neatly aligned supporting details as inspiration for project pages that need room for both imagery and technical information.
- **Lab screenshot.** Use the restrained palette and single vivid accent as inspiration for a focal point. The accent can do most of the work when the rest of the interface is quiet.
- **Outpace Studios.** Take inspiration from how the studio introduces design and technology together and gives projects concise descriptions and clear links. Treat all references as inputs for an original visual design. [Outpace Studios](https://outpacestudios.com/)
- **BLOND.** A reference for smooth, refined motion, a clean project index, and minimal layouts that let strong photography carry the work. Some parts feel too subdued. Keep the restraint and bring energy through Soren’s footage, the Ø, and the choice of project imagery. [BLOND project index](https://www.blond.cc/)
- **Ordinary Folk.** The strongest overall reference for motion, typography, clean visuals, and the relationship between the homepage and the project archive. Some compositions feel more playful than the target. Favor aligned grids and orderly rows of media with a consistent rhythm. [Ordinary Folk homepage](https://www.ordinaryfolk.co/) · [Work archive](https://www.ordinaryfolk.co/work)
- **Andy Cavatorta.** A reference for case-study depth and for interleaving process images with explanations. Use that editorial approach within the portfolio’s own visual system. [Gravity Harps](https://andycavatorta.com/gravityharps.html)

### Visual language to explore

Explore a retro-futurist alien terminal. The portfolio should feel like accessing an unfamiliar digital artifact that responds to the visitor. Give Home, Work, project pages, and About a recognizable visual language through the Ø, precise typography, aligned layouts, and consistent control behavior. Keep the interface grayscale with one content-driven accent. Let the project media carry its own color.

Explore grain and electronic noise, brief glitch effects, animated type and digital elements, and ASCII art that shifts or responds to input. Give these experiments a purpose, such as establishing the mood of the opening or showing a change in state. The opening can be expressive. Browsing, reading, and getting in touch should feel immediate and steady. Soren’s name, the work, and the way into it should be easy to find on arrival.

Use the [shared style guide](redesign/SHELL.md) to apply this direction to reusable components and interaction states. The [design references](PORTFOLIO_DESIGN_REFERENCES.md) record the component studies, what to borrow from each, and how to test them in Astro. Review the language across the existing demos before committing to individual effects.

## Site structure

Start with three primary destinations. The Ø links to **Home**, **Work** opens the project library, and **About** holds the bio, experience, and a clearly marked contact section. Give **Contact** a direct link to `/about/#contact` in the shared footer and place direct email and relevant social links in the contact section. The current Contact page is primarily an email address and social links, which fits this structure. Plan a path from the existing `/contact.html` URL to the new contact section.

| Structure | When it fits |
| --- | --- |
| **Home, Work, About with Contact** | Recommended starting point. The hero sets the tone, the library can grow independently, and contact stays easy to reach. [Ordinary Folk’s homepage and archive](https://www.ordinaryfolk.co/work) show how a studio can give the work a dedicated destination. |
| **Work-led home with About and Contact sections** | Worth comparing if a compact introduction can flow straight into the library without crowding the opening on mobile. Projects can still have individual URLs. [Brittany Chiang](https://brittanychiang.com/) puts bio and selected projects on the homepage and links to a full archive. |
| **Home, Work, About, and separate Contact** | Makes sense if contact later needs an inquiry form or substantial information for different audiences. [Adham Dannaway](https://www.adhamdannaway.com/contact) uses a dedicated page with a form. His [homepage](https://www.adhamdannaway.com/) also gives design and development equal prominence. |

Add a Media gallery for Soren’s photos, videos, and art. Prototype it at `/media/` with a regular gallery and room for a more exploratory view. Work continues to serve visitors looking for a specific project or case study. [Work and Media design references](PORTFOLIO_DESIGN_REFERENCES.md#work-and-media)

## Homepage and motion

Use a screen-wide Home opening that presents the existing reel in two states. On arrival, show a still derived from its opening frame, treated with charcoal grain, stepped tones, and selective ASCII or other digital artifacts. Resolve that image into the moving reel in the same frame so the first impression carries the terminal aesthetic and the footage quickly shows Soren’s creative work. Compare the reveal with the existing full-width reel, combined ASCII, and ShaderGradient studies.

Keep Soren’s name, a short introduction, **View work**, and a direct **Play reel** control legible and accessible during the reveal. Keep a tangible engineering project preview close to the opening. Compose the initial still for desktop and phone so it also works for reduced motion, slow media, and playback failure.

### Motion principles

Use Rauno Freiberg’s observations on direct manipulation, spatial continuity, and repetition as the main interaction reference. Apply them to the portfolio as follows. [Invisible Details of Interaction Design](https://rauno.me/craft/interaction-design)

- **Respond immediately and let people change their minds.** Show feedback as soon as someone presses a control. If a gallery supports dragging, let the media track the gesture and reverse naturally. A transition should allow the visitor to go back or move on without waiting for it to finish.
- **Keep a clear sense of place.** Let a project cover carry through from the card into its detail page when appropriate. On return, restore the active category, scroll position, and focus on the card when possible. Use a simple arrival on a direct link, where there is no originating card.
- **Match motion to frequency.** Let the hero and occasional project transitions be expressive. Keep category changes, keyboard navigation, and repeated controls immediate or lightly animated. Keep reading surfaces steady.
- **Adapt to the input.** For direct manipulation, use movement that follows the direction and speed of the gesture. Keep controls large enough to tap and feedback visible beyond the fingertip. Use native page scrolling, and give every hover or gesture interaction a visible touch and keyboard equivalent.
- **Keep the flow intact under real conditions.** Honor reduced-motion preferences, provide a still for the video treatment, and keep navigation usable while media loads. Check the same browsing sequence on a phone and desktop with touch, pointer, and keyboard where applicable.

## Project library

Technical and Creative are the working categories. Prototype one library with both categories available from the same view. Use aligned rows or a consistent grid of cards with visible names and concise descriptions. On phones, keep the browsing order and use a vertical layout people can scan without hover or horizontal dragging. See how projects spanning both disciplines fit before deciding whether the categories need separate landing pages.

Use PØRTAL, WiFi Transceiver, and ØVERCLOCK as provisional design samples. They exercise different types of content and media. Try ordering the grid by editorial importance and by recency using the same projects. A strong first row can introduce the range of work while keeping the full library one step away. A separate featured section is still an open decision.

Give each project a shareable URL and a reusable template. A new entry should be possible by adding one content file plus its media. Start with a title, category, summary, cover, optional date, and optional sections for role, process, results, and links. Let brief projects stay brief and give projects with substantial documentation room to expand.

## Hosting and implementation

Deploy the static site to GitHub Pages. GitHub Pages can publish prebuilt HTML, CSS, JavaScript, and media, including output generated by a build in GitHub Actions. The deployed site runs without a server-side application. Astro Content Collections is one candidate for generating the library and project pages from the same content files. Cross-document view transitions are a candidate for the card-to-project animation, with ordinary links as the baseline. Choose the framework after testing the publishing workflow, project editing, and motion prototype. [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#static-site-generators) · [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) · [Cross-document View Transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document)

## Development plan

Use the [development plan](PORTFOLIO_DEVELOPMENT_PLAN.md) to assign work and decide first-release scope after reviewing one complete browsing flow on phone and desktop.
