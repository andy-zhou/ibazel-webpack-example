# iBazel Webpack Example

This is a minimal example showing how iBazel doesn't keep node_modules around after a reload.

## Usage

- To install: `yarn`
- To run broken example: `yarn start-broken`
- To run an example with standard reloading: `yarn start-control`

## Recreation

1. Install with `yarn`
2. Start with `yarn start-broken`
3. Run `ls ./dist/ibazel_webpack_example`, noting that the `node_modules` symlink exists in the directory
4. Modify `./example_app/index.tsx`, noting the errors after the reload
5. Run `ls ./dist/ibazel_webpack_example`, noting that the `node_modules` symlink no longer exists in the directory

## The Error

Multiple errors when webpack-dev-server rebuilds when running the broken example, around the lines of 
```
ERROR in [...]/execroot/ibazel_webpack_example/node_modules/[...]
Module build failed: Error: ENOENT: no such file or directory, open '[...]/execroot/ibazel_webpack_example/node_modules/[...]'
```