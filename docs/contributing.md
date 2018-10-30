
### Pre-commit Hook
We are using **eslint** with **airbnb style guide**. If you encountered errors during commit, it is because of the pre-commit hook.

- Fix errors
`yarn fixlint` 
*If not, please manually fix them

- How to bypass pre-commit hook
`git commit -m "commit message" --no-verify` 
*Make sure to fix them before pushing to your branch