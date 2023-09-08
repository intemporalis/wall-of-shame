Type: React Component

What it tries to do: Dynamically import and instantiate other react components

Error: "ReferenceError: require is not defined"

Error cause: Referencing a .jsx from runtime; dynamic import reference not caught by transpiler

How to reproduce:
1) Setup a React framework (I used Vite React + TS + SWC): https://vitejs.dev/guide/
2) Install dependencies: https://mui.com/material-ui/material-icons/
3) Install+configure dynamic import plugin for Vite: https://github.com/vite-plugin/vite-plugin-dynamic-import
4) Import then use a ```<Icon name="AccessAlarm" />``` component inside your App.js/App.tsx
5) Let the show begin.

Description: Icon.jsx/Icon.tsx import blows up because it is trying to reference a .jsx in runtime
(in this case, a material UI Icon component) outside of bundler scope, so the referenced library .jsx
and related methods (i.e. require()) aren't able to be transpiled into valid browser runtime JS

Solution: Don't over-abstract components into generics to the point of evading transpile process

If there's a way to dynamically import+instantiate through a generic that can caught and handled by the transpiler,
please let me know.
