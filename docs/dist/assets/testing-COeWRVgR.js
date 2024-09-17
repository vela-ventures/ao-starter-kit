import{a8 as r,j as s}from"./vendor-BILq7OoT.js";const a={title:"AO Process Testing",description:"This section provides an overview of how to test AO processes."};function l(i){const e={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.header,{children:[s.jsxs(e.h1,{id:"ao-process-testing",children:["AO Process Testing",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ao-process-testing",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.div,{role:"doc-subtitle",children:"This section provides an overview of how to test AO processes."})]}),`
`,s.jsx(e.p,{children:"In order to test AO processes, you need to have a basic understanding of the following:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"busted"})," - Busted is a unit testing framework for Lua. You can learn more about Busted from the ",s.jsx(e.a,{href:"https://lunarmodules.github.io/busted/",children:"official documentation"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Ao Process Testing Suite"})," - AO processes are tested using the AO Testing Suite. You can learn more about the AO Testing Suite from the ",s.jsx(e.a,{href:"https://github.com/Autonomous-Finance/ao-process-testing",children:"official documentation"})]}),`
`]}),`
`,s.jsxs(e.h2,{id:"process-testing-directory-structure",children:["Process Testing Directory Structure",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#process-testing-directory-structure",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"If you generate a new process using the Create Ao dApp, the directory structure of the process will look somewhat like this:"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-focused has-highlighted",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"process-name/             # Your process's root directory."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"├── scripts/              # Utility scripts for the process."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"│   ├── build.sh          # Build script for the process."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"│   ├── deploy.sh         # Deploy script for the process."})}),`
`,s.jsx(e.span,{className:"line focused highlighted",children:s.jsx(e.span,{children:"│   └── test.sh           # Test script for the process."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"└── src/                  # Source code for the process."})}),`
`,s.jsx(e.span,{className:"line focused highlighted",children:s.jsx(e.span,{children:"    ├── test/             # Test directory for the process."})}),`
`,s.jsx(e.span,{className:"line focused highlighted",children:s.jsx(e.span,{children:"    │   ├── mocked-env    # Mocked env files to test the process."})}),`
`,s.jsx(e.span,{className:"line focused highlighted",children:s.jsx(e.span,{children:"    │   ├── setup.lua     # AO Testing Suite setup file."})}),`
`,s.jsx(e.span,{className:"line focused highlighted",children:s.jsx(e.span,{children:"    │   └── process_test.lua # Test script for the process."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    ├── process_lib.lua   # Library for the process."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    ├── process.lua       # Entry point for the process."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    └── reset_modules.lua # Reset preloaded modules."})})]})}),`
`,s.jsxs(e.p,{children:["We will now discuss the contents of the ",s.jsx(e.code,{children:"test"})," directory in detail."]}),`
`,s.jsxs(e.h2,{id:"test-directory",children:["Test Directory",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-directory",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["The ",s.jsx(e.code,{children:"test"})," directory contains the following files:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"mocked-env"})," - This directory contains the mocked environment files that are used to test the process. The mocked environment files are used to mock the environment variables that are used in the process. The mocked environment files are used to test the process in different environments."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"setup.lua"})," - This file is used to set up the AO Testing Suite. The setup file is used to set up the AO Testing Suite before running the tests. The setup file is used to set up the environment variables that are used in the process."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"process_test.lua"})," - This file contains the actual test script and cases for the process."]}),`
`]}),`
`,s.jsxs(e.h2,{id:"writing-tests",children:["Writing tests",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#writing-tests",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Now that you have a basic understanding of the directory structure of the process, let's write some tests for the process."}),`
`,s.jsxs(e.h3,{id:"writing-a-test-case",children:["Writing a test case",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#writing-a-test-case",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["To write a test case for the process, you need to create a new test case in the ",s.jsx(e.code,{children:"process_test.lua"})," file. The test case should be written using the Busted syntax."]}),`
`,s.jsx(e.aside,{"data-callout":"tip",children:s.jsx(e.p,{children:"Create Ao dApp generates a sample test case for the process. You can modify the sample test case to write your own test cases."})}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-focused has-highlighted",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"process-name/src/test/process_test.lua","data-lang":"lua",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"---"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"@diagnostic"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" disable:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" duplicate-set-field"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"require"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"test.setup"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")()"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"_G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"IsInUnitTest"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    ="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" true"}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" -- set this per test file to keep ao.send() from doing anything"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"_G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"VerboseTests"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    ="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 2"}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    -- how much logging to see (0 - none at all, 1 - important ones, 2 - everything)"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"-- optional logging function that allows for different verbosity levels"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"_G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"printVerb"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"       ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" function"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(level)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    level "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" level "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"or"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 2"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    return"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" function"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(...) "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"-- define here as global so we can use it in application code too"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        if"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" _G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"VerboseTests"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" >="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" level "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"then"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" print"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"table.unpack"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({ "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"..."}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" })) "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"end"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    end"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"end"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"-- Require the process library and the process file"})}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"local"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" process      "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" require"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "process_lib" '})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"-- Define initial state"})}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"_G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"Version"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "1.0.0" '})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"_G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"Balances"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" _G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"Balances"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" or"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { ["}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x123"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" } "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"_G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"TotalSupply"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" _G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"TotalSupply"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" or"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1000"})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"_G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"Name"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "test token" '})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"-- This function resets the global variables to their initial state"})}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"local"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" resetGlobals"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" function"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  _G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"Version"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "1.0.0" '})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  _G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"Balances"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" _G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"Balances"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" or"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { ["}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x123"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" } "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  _G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"TotalSupply"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" _G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"TotalSupply"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" or"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1000"})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  _G"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"Name"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "test token" '})]}),`
`,s.jsx(e.span,{className:"line focused highlighted",children:s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"end"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"describe"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"token process"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    setup"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "})]}),`
`,s.jsx(e.span,{className:"line focused highlighted",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        -- Mock the sendReply function"})}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        process."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendReply"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" function"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(message) "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            return"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" message "})]}),`
`,s.jsx(e.span,{className:"line focused highlighted",children:s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        end"})}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    end"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    describe"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"getBalance"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        it"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"should return correct Balance"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            local"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" message "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                From "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0x123"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                Action "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "Balance"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                Tags "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {} "})]}),`
`,s.jsx(e.span,{className:"line focused highlighted",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            } "})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            local"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" response "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" process."}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"getBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(message) "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"            assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"are"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"same"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", response."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"Balance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"            -- reset globals"})}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"            resetGlobals"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        end"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    end"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "})]}),`
`,s.jsxs(e.span,{className:"line focused highlighted",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"end"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "})]})]})}),`
`,s.jsxs(e.h3,{id:"running-the-tests",children:["Running the tests",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#running-the-tests",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.aside,{"data-callout":"warning",children:[s.jsx(e.strong,{"data-callout-title":!0,children:"Busted is required"}),s.jsxs(e.p,{children:["In order to write tests for AO processes, you need to have a basic understanding of Busted. You can learn more about Busted from the ",s.jsx(e.a,{href:"https://lunarmodules.github.io/busted/",children:"official documentation"}),"."]}),s.jsx(e.p,{children:"Installing busted can be done using luarocks by running the following command:"}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"luarocks"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" busted"})]})})})]}),`
`,s.jsxs(e.p,{children:["Create Ao dApp provides a test script that can be used to run the tests for the process. The test script is located in the ",s.jsx(e.code,{children:"./ao/process-name/scripts"})," directory of the process."]}),`
`,s.jsx(e.p,{children:"To run the tests for the process, you need to run the test script using the following command from the project root:"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ao/process-name"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" && "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"./scripts/test.sh"})]})})}),`
`,s.jsxs(e.aside,{"data-callout":"tip",children:[s.jsx(e.strong,{"data-callout-title":!0,children:"Handy Tip"}),s.jsx(e.p,{children:"Create Ao dApp provides a shortcut to run the tests for the process. You can run the tests for the process using the following command from the project root:"}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" myprocess:test"})]})})})]})]})}function c(i={}){const{wrapper:e}={...r(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(l,{...i})}):l(i)}export{c as default,a as frontmatter};
