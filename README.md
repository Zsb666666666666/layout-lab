# Layout Lab

Layout Lab is an interactive bilingual teaching website about web layout. It follows the course-portal structure of the reference site: a homepage, chapter cards, and a lesson view with explanation, key code, and live demo tabs.

## Run locally

This is a dependency-free static site. From the `layout-lab` directory, run:

```text
python -m http.server 8080
```

Then open `http://localhost:8080/`.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this `layout-lab` directory to the repository root.
3. Open `Settings` > `Pages`.
4. Select `Deploy from a branch`, choose `main` and `/ (root)`, then save.
5. Open the generated `https://USERNAME.github.io/REPOSITORY/` address.

## Project structure

```text
index.html       course portal homepage
lesson.html      reusable chapter page
css/style.css    visual system and responsive styles
js/i18n.js       Chinese/English dictionary and language switch
js/lesson.js     chapter data, tabs and live demos
js/app.js        homepage initialization
```

## Interaction highlights

- Chinese / English language switch shared by both pages
- Four chapter routes using URL hashes
- Explanation / key code / live demo tabs
- Flex controls for direction, alignment, gap, card count and wrapping
- Grid controls for columns, gap and card count
- Responsive preview for desktop, tablet and mobile
- Copy-code and reset-demo actions
