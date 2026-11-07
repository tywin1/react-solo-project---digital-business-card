# Scrimba React Solo Project - Digital Business Card

First project using React.  One-pager (React not necessary for that) but useful learning experience.

Specific things that were learned -

- main, section, footer used.
- BEM naming scheme from the beginning (though I did mix-and-match a little bit with non-BEM).
- Mobile-first, fully responsive, and a properly different 1000px @media query layout (which was a little tricky).
- Really tried to style everything consistently, and used UI best-practice for padding/margins/colour contrasts etc.  Added a bit of pizzaz with the h1/h2 styling.  I'll experiment later with removing the default list styling, and use pills instead.  Buttons are hrefs styled like buttons.  Visually they look weird, think I'll change the colours later.
- Implemented nice button hover effects with slower timing.  Particularly proud of the GitHub hover effect :).
- Used FontAwesome via CDN for the button icons initially, but that didnt make sense for a tiny project, so reverted to locally saved SVGs.
- Ran into some CSS styles that were conflicting, like overlapping or border radiuses being "overridden".  More useful knowledge for future.
- Tried to hide the harsh left and right end of my not-ideal image using mask-image.
- Accessibility - aria labels used where necessary, and :focus.