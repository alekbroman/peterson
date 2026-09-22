# Project implementation rules

## Frontend styling

- Use Tailwind CSS v4 utility classes for all page and component styling.
- Do not add Astro scoped `<style>` blocks, CSS modules, CSS-in-JS, or bespoke component selectors.
- Keep `src/styles/global.css` limited to the Tailwind import, shared `@theme` tokens, and named keyframes that Tailwind utilities consume.
- Preserve the established tokens and visual rules in `DESIGN.md`; implement them through Tailwind utilities.
- Use Lucide through `@lucide/astro` for every interface icon.

## Responsive consistency

- Whenever a page or component is adjusted, review and update both its mobile and desktop presentations so content, behavior, and visual intent remain consistent across breakpoints.
- Verify every frontend change at representative mobile and desktop viewport sizes before considering it complete.

## Browser use

- Use the Codex in-app browser for browser inspection and interaction. Do not launch or control Google Chrome directly.
