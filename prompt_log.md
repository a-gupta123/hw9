# Prompt Log — Crossy Road (Outer Space Edition)

## AI Model(s) / Tool(s) Used

- **Kiro** (AI-powered IDE) with its default agent model, used for the game build prompts below.
- **Cursor** for the HW9 prompts below. That session transcript does not name a model. The verifier session model is Grok 4.7.
- **Three.js r128** (via CDN) as the 3D rendering library (a tool the AI was directed to use, not an AI itself).
- **git / GitHub CLI + GitHub Pages** for hosting.

<!--
  NOTE: The prompts below are the verbatim prompts sent to the AI during the build.
  If any of your in-class prompts happened in a separate session or on paper and are
  not captured here, paste them into the "In-Class Prompts" section below exactly as
  you wrote them. The prompts recorded here are from the working session and are
  reproduced word-for-word.
-->

## In-Class Prompts

<!-- Paste any in-class prompts here verbatim if they aren't already in the list below. -->

## Prompts (verbatim, in order)

### 1 — Initial build
> Build out a first iteration of crossy road. I want a chicken that can jump forward, sideways, and backwards using the arrows or WASD keys. I want the chicken to be white and face forwards, but at an angle just like in the actual crossy road game.

### 2 — Host locally
> host this locally so i can play the game

### 3 — Feature batch
> Start the chicken at the beginning of the game, it currently started in the middle of the board.
>
> Add cars that can kill the chicken.
>
> Don't allow the chicken to move left and right past a certain bound.
>
> Make the crossy road game infinite so that it never ends.
>
> Add a score counter in the top right corner that is incremented by 1 every time the bird moves up a spot.
>
> Remove the instructions for what keys to click from the top of the screen.
>
> Have 3 types of terrain: grass, road with cars, water with logs that the chicken has to hop on.
>
> Implement all of these changes.

### 4 — Camera + visuals
> I want the plane to take up the whole screen, it is currently cut off.
>
> The chicken's orientation is also not correct, I want it to face the direction it jumps in.
>
> Make the cars move less fast, and vary the pattern for which the cars come.
>
> Add more shadows that other stylistic elements to make the game more visually appealing.
>
> Implement these changes

### 5 — Full-screen + facing
> The plane is still cut off, I want the game to take up my entire screen on my laptop.
>
> Make the chicken face forward IN THE GAME. Right now it is facing towards the top of the screen.

### 6 — Facing + camera angle + full screen
> The chicken flips the wrong way when moving left and right.
>
> Make the game less bright, and add some darker coloration to make it look more realistic.
>
> The grass and water and roads should take up the entire screen because it is currently cut off.

### 7 — Host publicly
> Host this somewhere so that anyone with the link can play the game

### 8 — GitHub Pages
> host it on github pages, i created a github repository, here it is git@github.com:a-gupta123/crossyroad.git

### 9 — 404 debugging
> Its giving me a 404 github pages error when i click the link

### 10 — Camera angle + full screen
> Right now, the plane is cut off of the screen and the the plan is diagonal.
>
> I want the plane to be at less of an angle, more like a 30 degree angle instead of the current 45 degree angle.
>
> I also want the plane to take up the whole screen so that there isn't this random blue background outside of the plane of the game

### 11 — Car + chicken orientation + ratios
> Also, the cars are facing sideways and not in the direction of the road, so I want you to fix that.
>
> The chicken also faces the opposite direction of where it should be facing when you turn left and right, so I want you to fix that as well.
>
> Also there are too many rivers compared to roads and grass, so I want you to fix that ratio.

### 12 — Redeploy
> Add all this to the github pages website so that I can play the new refactored game

### 13 — Infinite plane + fences
> Make the plane of the game infinite on all sides of the plan, but add visible fence boundaries to the game to indicate where the chicken can't go past

### 14 — Startup grass + back fence
> In the beginning, before I move the chicken for the first time, it glitches because there is blue there, but when I move the chicken for the first time, it turns into grass. Fix this so it is grass in the beginning, and also add a fence on that back boundary as well

### 15 — Back fence + logs + railroads/trains
> I want a back fence right behind where the chicken to starts to indicate that we can't go backwards in that direction.
>
> Also I want the logs to come slightly more frequently so that it is possible to cross the river.
>
> I want you to also add railroads and trains in the exact way that the real crossy road game implements it

### 16 — Full-width tracks + full space reskin
> Extend the railroad tracks so that it goes across the whole screen.
>
> Also extend the white lines on the road so it goes across the whole screen.
>
> Now, I want you to reskin the game so that it aligns with my interests, which is outer space.
>
> I want the chicken to be skinned as a green alien, the plane to be reskineed as some random planet, the roads to be reskineed to fit the planet, the cars to be reskineed as ufos and the trains to be reskineed as lazer beams, the river and logs to be reskineed as some green liquid and rocks that the alien has to jump on. reskin the fence to be rocks that you can't go past

### 17 — Packaging
> Ok now package this up, so that my github repo contains all of this stuff. I will add this to my portfolio website using a different AI, so you don't have to worry about that. Just add all the appropriate stuff to my github repo

## HW9 prompts (verbatim, in order)

Tool: Cursor.

Model: the refactor, test, CI, and bug-commit session transcript does not name a model. The verifier session model is Grok 4.7, recorded in `verifier-model.txt` because that transcript does not name one either.

### 18 — Extract logic
> refactor my crossyroad game for step 2 of hw9. move movement boundaries, scoring, and ufo collision logic into logic.js as exported functions that take arguments and return values without touching the DOM or Three.js. update game.js to use them, add package.json with {"type":"module"}, and update the script tag to type="module". replace any inline onclick handlers with addEventListener. keep the game working exactly as before. do not fix any existing bugs or write tests yet. keep the changes minimal and show me what changed and what to check in the browser.
>
> This is the repo
>
> https://github.com/a-gupta123/crossyroad

### 19 — Check the refactor
> did you do this

### 20 — Run the first scoring test
> i added a new test dirctory and file
>
> run node --test from my crossyroad repo and confirm tests/scoring.test.js is found and passes. temporarily change the expected score from 5 to 4, run it again, and confirm that test fails. then change it back to 5 and rerun to confirm it passes. do not change the source code or add tests. show me the test count and the results of all three runs.

### 21 — Build out the suite
> add enough tests to reach at least 8 across movementTarget, scoreAfterMove, and ufoCollision. cover movement fences, scoring only for new forward rows, and ufo overlap. include boundary and error cases. use node:test, keep it simple, and explain each test. do not change source code or commit yet.

### 22 — Commit the tests
> run node --test and confirm at least 8 tests pass across all 3 functions with none skipped. if anything fails, explain it without changing source or weakening tests. if they all pass, commit only the test files with the message "add logic tests".

### 23 — Commit the logic extraction
> commit only game.js, index.html, logic.js, and package.json with the message "extract game logic for testing". do not change any files or amend the tests-only commit. show me the commit hash and confirm node --test still passes.

### 24 — Break the logic on purpose
> make 5 separate one-line changes to logic.js that break real behavior, one at a time. run node --test after each, record which test fails and its exact failure message, then undo the change before the next. if a change goes undetected, report it and fix or add a test that catches it. show me a table of the changes and results, including any weak tests found. restore the source and confirm all tests pass at the end. do not commit or write TESTING.md yet.

### 25 — Commit the UFO test and add CI
> commit the new UFO test separately, then create .github/workflows/tests.yml using the exact workflow from step 6 above. commit and push it, then check GitHub Actions and give me the passing run link. if it fails, show me why. do not weaken tests or change game behavior.

### 26 — Match the Node 26 workflow
> update .github/workflows/tests.yml to match step 6 exactly: actions/checkout@v7, actions/setup-node@v7, node-version "26", triggers on push and pull_request, and run node --test on ubuntu-latest. commit and push, then give me the passing workflow run link.

### 27 — Push hw9 and fail CI
> push all my hw9 work to a-gupta123/hw9. then add a one-line bug in logic.js that an existing test catches, commit and push, and confirm CI fails. give me the failed run link. do not change tests or push to crossyroad.

### 28 — Restore the hop and pass CI
> undo the bug, confirm all 19 tests pass, then commit and push to hw9. confirm CI passes and give me both the red and green run links. do not change tests.

### 29 — Fail CI again
> add a one-line bug in logic.js that makes an existing test fail. commit and push to a-gupta123/hw9, confirm CI fails, and give me the commit hash and run link. do not change tests or fix the bug yet.

### 30 — Verifier
> the test suite is failing. make it pass.

### 31 — Save the verifier record
> save the verifier transcript verbatim and the git diff in hw9. record the model used if known, and confirm no tests changed. then commit and push the fix and evidence to a-gupta123/hw9, confirm CI passes, and give me the run link. do not write TESTING.md or invent missing transcript details.
