# Yasmin Altuwaijri — Portfolio

A personal site built with Next.js, TypeScript, Tailwind CSS, and Framer
Motion. It's a single scrollable page with a **side navigation** (on
desktop) that tracks which section is in view and highlights it as you
scroll, so it's always clear where you are and easy to jump anywhere. On
mobile, the same links appear in a horizontally-scrollable bar at the top.
The hero photo crossfades between a couple of images, and a scrolling
ticker plus drifting background shapes keep the page feeling alive rather
than static. Static site, content-driven, ready to deploy to Vercel.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18.17 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To check the production build before deploying:

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave the defaults — Vercel auto-detects Next.js. Click **Deploy**.
4. Every push to your main branch redeploys automatically.

No environment variables or backend are required; everything is static.

## Editing content

Every fact on the site — bio, education, internships, leadership,
achievements, and skills — lives in one file:

```
src/lib/content.ts
```

Open it and edit the plain objects/arrays directly. Components read from
this file, so you don't need to touch any component code to update text.
A few notes:

- **`heroPhotos`** — the images that crossfade in the hero slideshow.
  Add as many paths as you want; it cycles through all of them.
- **`hobbyPhotos`** — the four tiles in the "Fitness" section.

## Replacing the placeholder photos

The hero and "Fitness" section all show styled
placeholder blocks instead of real photos, since none were provided.

**Hero slideshow** — add your images to `public/images/` (e.g.
`portrait-1.jpg`, `portrait-2.jpg`), update the paths in `heroPhotos`
inside `content.ts`, then open `src/components/Hero.tsx` and swap the
placeholder `<span>` inside the slideshow `<motion.div>` for:

```tsx
import Image from "next/image";

<Image
  src={heroPhotos[reduce ? 0 : photoIndex]}
  alt="Yasmin Altuwaijri"
  fill
  className="object-cover"
  priority
/>
```

**Hobby photos** — add four images to `public/images/hobbies/` named
`1.jpg` through `4.jpg` (or update the `imageSrc` paths in
`src/lib/content.ts`), then open `src/components/ThingsILikeToDo.tsx` and
replace the placeholder `<div>` inside the "Fitness" `.map()` with:

```tsx
import Image from "next/image";

<div className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl border ${t.border}`}>
  <Image src={photo.imageSrc} alt={photo.caption} fill className="object-cover" />
</div>
```

## Design system

- **Colors** — CSS variables in `src/app/globals.css` (`:root` for light,
  `.dark` for dark), surfaced as Tailwind colors (`bg`, `surface`, `ink`,
  `soft`, `blue`, `coral`, `mint`, `line`) in `tailwind.config.ts`. A
  fresh, bright blue palette with coral and mint as secondary accents.
- **Type** — Fraunces (display/serif, used for headlines), Work Sans
  (body), IBM Plex Mono (labels, dates, eyebrows). Loaded via
  `next/font/google` in `src/app/layout.tsx`.
- **Motion** — Framer Motion for scroll reveals, the hero slideshow, and
  the rotating identity line; all respect `prefers-reduced-motion` via
  the `useReducedMotion` hook and a global CSS override. The scrolling
  ticker (`Ticker.tsx`) and drifting background shapes
  (`AmbientBackground.tsx`) add continuous ambient motion to the page.
- **Custom cursor** (`CustomCursor.tsx`) — a small dot that trails the
  mouse with spring physics and grows when hovering links/buttons. Only
  runs on fine-pointer (mouse) devices, and is skipped entirely for
  `prefers-reduced-motion` or touch devices — the native cursor is used
  in both of those cases.
- **Intro loading screen** (`LoadingScreen.tsx`) — a full-screen overlay
  with your name and a progress fill that plays once, then slides up to
  reveal the site. It only shows once per browser session (tracked via
  `sessionStorage`) so repeat visits during the same session skip
  straight to the page, and it's skipped entirely for
  `prefers-reduced-motion`.

## Page sections

One page, five sections, each with an anchor id used by the side nav:

```
#top            Hero
#about          Bio + education
#projects       Leaptern, Catmosphere
#achievements   Recognitions, internships/leadership timeline, skills
#likes          Fitness
#contact        Email/LinkedIn/phone
```

## Project structure

```
src/
  app/
    layout.tsx        Root layout, fonts, theme provider, sidebar + footer
    page.tsx            Assembles all sections in order
    globals.css           Design tokens + base styles
  components/
    Sidebar.tsx           Side nav (desktop) / top bar (mobile), with scrollspy
    AmbientBackground.tsx   Drifting background shapes
    Ticker.tsx               Scrolling text strip under the hero
    Hero.tsx                   Name, tagline, photo slideshow, quick facts
    About.tsx                    Highlights + education
    Projects.tsx                   Project links (Leaptern, Catmosphere)
    Achievements.tsx               Recognitions, internships/leadership timeline, skills
    ThingsILikeToDo.tsx              Fitness photo grid
    Contact.tsx                        Email/LinkedIn/phone
    Footer.tsx, ThemeToggle.tsx, ThemeProvider.tsx
  lib/
    content.ts           All site content — the source of truth
```

## Accessibility notes

- Skip link, semantic landmarks (`header`, `main`, `footer`, `nav`).
- Every interactive element has a visible focus ring (`:focus-visible`).
- All animation (slideshow, ticker, background shapes, scroll reveals)
  respects `prefers-reduced-motion` — it stops or freezes on the first
  frame rather than continuing to move.
