# Changelog

Here's a list of changes I've made to the project, and why.


## Typescript config
I turned Typescript up to 11/10. It's inevitable strict settings will be beneficial to a project, and now is the cheapest time to implement them.

This is an interesting read on the cost of enabling strict null checking later on: https://www.figma.com/blog/inside-figma-a-case-study-on-strict-null-checks/

I find explicitly using `any` in Typescript to generally be a bit counter-productive. Fortunately ESLint can disable it. Sometimes it's useful, and in those circumstances I find it better to bypass ESLint at that point.

Once I'd changed these settings, I tried running Typescript and ESLint. ESLint reported the `any` in the user's service, and Typescript didn't exist in the NPM scripts. I fixed both of these issues, found no further problems, and committed.
