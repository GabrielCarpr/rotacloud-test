# Changelog

Here's a list of changes I've made to the project, and why.


## Typescript config
I turned Typescript up to 11/10. It's inevitable strict settings will be beneficial to a project, and now is the cheapest time to implement them.

This is an interesting read on the cost of enabling strict null checking later on: https://www.figma.com/blog/inside-figma-a-case-study-on-strict-null-checks/

I find explicitly allowing `any` in Typescript to generally be a bit counter-productive. Fortunately ESLint can disable it. However it is useful on occasion, and in those circumstances I find it better to bypass ESLint.

Once I'd changed these settings, I tried running Typescript and ESLint. ESLint reported the `any` in the user's service, and Typescript didn't exist in the NPM scripts. I fixed both of these issues, found no further problems, and committed.


## Tests baseline
I ran the tests, and was surprised that both the E2E test and and app controller tests specify a return of 'Hello world'. Deleting the project requirements probably isn't the greatest of ideas (I need to follow them after all), so I marked these tests as incomplete to return to them later, when I'll need to decide whether the tests or existing application code are correct. I need the full test suite passing before starting work as I usually practice TDD.

## Application logic
I use test-driven development 90% of the time. I wrote a test first to assert the existing current behaviour, that the user service returns a list > 0. I then wrote another test to assert that they were sorted. The test failed. I implemented the sorting logic within the user service, and the test passed. While the logic in the test and the service method are very similar, this is coincidental I think.

I then refactored the user data access to a repository, starting with a test first. I like to keep persistence, and other infrastructure, behind an interface to make it easy to swap them out in the future, and also to use memory implementations in tests. I find this more maintainable than using magic mocking frameworks.

In reality I wouldn't generally be using entities for reads, I'd prefer a direct persistence query as it's more efficient than retrieving an entity.

## HTTP
I wrote another test first, in the app E2E tests, which asserted that the route in question returned 200, and a list of users. I wanted to be sure that the user's name was returned here, so I did have to explicitly refer to some test data, which may make this test vulnerable to false negatives in the future. I then implemented the users controller and integrated it.

I opted not to write a test for the user controller. The E2E test was adequate in testing the HTTP concerns with the added benefit of testing the whole stack. I don't believe in testing (well, asserting specifically) code twice - hence not testing for sorting in the E2E test, although sometimes it can be useful to test endpoints/features to a specification too. There are benefits to both approaches.

Finally I tested the endpoint in my browser. I was a bit confused when it still returned 404, but I sooned noticed the logs on startup:
```
[Nest] 121575  - 10/02/2022, 22:08:31     LOG [RouterExplorer] Mapped {/, GET} route +3ms
```
and deduced that routing and possibly the DI container are all resolved on startup. I restarted, and my endpoint worked. Except I'd sorted the user's in reverse order. This highlights the importance of manual testing.
