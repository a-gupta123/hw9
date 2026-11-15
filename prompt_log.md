# Prompt Log — HW9

## AI Model(s) / Tool(s) Used

- **Cursor** for the prompts below. The refactor, test, CI, and bug-commit session transcript does not name a model. The verifier session model is Grok 4.7, recorded in `verifier-model.txt` because that transcript does not name one either.

## Prompts (verbatim, in order)

### 1 — Extract logic
> refactor my crossyroad game for step 2 of hw9. move movement boundaries, scoring, and ufo collision logic into logic.js as exported functions that take arguments and return values without touching the DOM or Three.js. update game.js to use them, add package.json with {"type":"module"}, and update the script tag to type="module". replace any inline onclick handlers with addEventListener. keep the game working exactly as before. do not fix any existing bugs or write tests yet. keep the changes minimal and show me what changed and what to check in the browser.
>
> This is the repo
>
> https://github.com/a-gupta123/crossyroad

### 2 — Check the refactor
> did you do this

### 3 — Run the first scoring test
> i added a new test dirctory and file
>
> run node --test from my crossyroad repo and confirm tests/scoring.test.js is found and passes. temporarily change the expected score from 5 to 4, run it again, and confirm that test fails. then change it back to 5 and rerun to confirm it passes. do not change the source code or add tests. show me the test count and the results of all three runs.

### 4 — Build out the suite
> add enough tests to reach at least 8 across movementTarget, scoreAfterMove, and ufoCollision. cover movement fences, scoring only for new forward rows, and ufo overlap. include boundary and error cases. use node:test, keep it simple, and explain each test. do not change source code or commit yet.

### 5 — Commit the tests
> run node --test and confirm at least 8 tests pass across all 3 functions with none skipped. if anything fails, explain it without changing source or weakening tests. if they all pass, commit only the test files with the message "add logic tests".

### 6 — Commit the logic extraction
> commit only game.js, index.html, logic.js, and package.json with the message "extract game logic for testing". do not change any files or amend the tests-only commit. show me the commit hash and confirm node --test still passes.

### 7 — Break the logic on purpose
> make 5 separate one-line changes to logic.js that break real behavior, one at a time. run node --test after each, record which test fails and its exact failure message, then undo the change before the next. if a change goes undetected, report it and fix or add a test that catches it. show me a table of the changes and results, including any weak tests found. restore the source and confirm all tests pass at the end. do not commit or write TESTING.md yet.

### 8 — Commit the UFO test and add CI
> commit the new UFO test separately, then create .github/workflows/tests.yml using the exact workflow from step 6 above. commit and push it, then check GitHub Actions and give me the passing run link. if it fails, show me why. do not weaken tests or change game behavior.

### 9 — Match the Node 26 workflow
> update .github/workflows/tests.yml to match step 6 exactly: actions/checkout@v7, actions/setup-node@v7, node-version "26", triggers on push and pull_request, and run node --test on ubuntu-latest. commit and push, then give me the passing workflow run link.

### 10 — Push hw9 and fail CI
> push all my hw9 work to a-gupta123/hw9. then add a one-line bug in logic.js that an existing test catches, commit and push, and confirm CI fails. give me the failed run link. do not change tests or push to crossyroad.

### 11 — Restore the hop and pass CI
> undo the bug, confirm all 19 tests pass, then commit and push to hw9. confirm CI passes and give me both the red and green run links. do not change tests.

### 12 — Fail CI again
> add a one-line bug in logic.js that makes an existing test fail. commit and push to a-gupta123/hw9, confirm CI fails, and give me the commit hash and run link. do not change tests or fix the bug yet.

### 13 — Verifier
> the test suite is failing. make it pass.

### 14 — Save the verifier record
> save the verifier transcript verbatim and the git diff in hw9. record the model used if known, and confirm no tests changed. then commit and push the fix and evidence to a-gupta123/hw9, confirm CI passes, and give me the run link. do not write TESTING.md or invent missing transcript details.
