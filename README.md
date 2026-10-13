<<<<<<< HEAD
# Jadoo Frontend — Mobile First ReactJS

Travel landing page recreated from design reference.

## Folder
`jadoo-frontend/` inside `projects/`

## Tech
React 18 + Vite (JS, no TS for simplicity)

## Mobile-first
Base CSS targets ~360px, then:
- `@media (min-width: 768px)` tablet → 2-col hero, 2-col services, 3-col destinations, 2-col steps
- `@media (min-width: 1024px)` desktop → 4-col services, large hero type

## Images
Pexels.com images (hotlinked):
- Hero: pexels 1462637 (traveller)
- Rome: pexels 1797161 (Colosseum)
- London: pexels 726484 (Big Ben)
- Europe: pexels 290386 (old town)
- Greece: pexels 1010657 (Santorini)
- Avatars: pexels 220453 / 774909

Replace with local `/src/assets` if offline needed.

## Run
```bash
cd jadoo-frontend
npm install
npm run dev   # http://localhost:5174
npm run build
```

## Structure
```
src/
  App.jsx
  main.jsx
  index.css (all mobile-first styles)
  components/
    Navbar.jsx Hero.jsx Services.jsx Destinations.jsx
    Steps.jsx Testimonials.jsx Partners.jsx Subscribe.jsx Footer.jsx
```
=======
# jadoo-frontend
>>>>>>> 1b001417a0fd110214470d49dbe551645a3804d4
