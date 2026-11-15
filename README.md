# hellopeopleco-website

Website for Hello People Co. (hellopeopleco.com.au). A plain HTML/CSS static site: no framework, no build step.

## Pages
- `index.html` Home
- `hello-leadership.html` HELLO Leadership (waitlist form at the bottom)
- `teams.html` Team workshops + in-house programs
- `coaching.html` 1:1 coaching
- `about.html` About Julz
- `contact.html` Contact

Shared files: `css/style.css` (all styling), `js/site.js` (mobile menu + forms), `images/` (photos exactly as supplied, never edited), `images/logos/` (logos, cropped with CSS only), `_redirects` (old Wix addresses), `sitemap.xml`, `robots.txt`, `favicon.svg`.

## Still to do before launch
- Create the Formspree forms and replace `REPLACE_WITH_WAITLIST_FORM_ID` (hello-leadership.html) and `REPLACE_WITH_CONTACT_FORM_ID` (every page's contact band) with the real form IDs.
- Add the Tan Tangkiwood font file and web licence (headings use Fraunces as a stand-in; see `--font-head` in `css/style.css`).
- Fill in the two `TODO` comments: the HELLO Leadership program outline and a 1:1 coaching testimonial.
- Confirm the old Wix page addresses in `_redirects`.

## Hosting
Cloudflare Pages: framework preset None, no build command, output directory `/`.
