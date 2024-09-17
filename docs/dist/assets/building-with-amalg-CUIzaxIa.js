import{a8 as n,j as e}from"./vendor-BILq7OoT.js";const t={title:"Building the process using amalg.lua",description:"undefined"};function a(s){const i={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"building-the-process-using-amalglua",children:["Building the process using amalg.lua",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#building-the-process-using-amalglua",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.p,{children:["This section will guide you through the process of building the process. The process is built using the ",e.jsx(i.code,{children:"build"})," script in the ",e.jsx(i.code,{children:"process"})," directory. The ",e.jsx(i.code,{children:"build"})," script is a simple shell script that uses the ",e.jsx(i.code,{children:"amalg.lua"})," script to build the process."]}),`
`,e.jsx(i.aside,{"data-callout":"info",children:e.jsx(i.p,{children:"Deploying a Lua application that is split among multiple modules is a challenge. A tool that can package a Lua script and its modules into a single file is a valuable help. This is such a tool."})}),`
`,e.jsxs(i.p,{children:["Learn more about ",e.jsx(i.a,{href:"https://github.com/siffiejoe/lua-amalg/",children:"amalg.lua"}),"."]}),`
`,e.jsxs(i.h2,{id:"configuring-build-script",children:["Configuring build script",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuring-build-script",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Create AO dApp provides a script to build the process using ",e.jsx(i.code,{children:"amalg.lua"}),". The configuration for ",e.jsx(i.code,{children:"amalg.lua"})," is stored in the ",e.jsx(i.code,{children:"scripts/build.sh"})," file in the process directory."]}),`
`,e.jsx(i.p,{children:"The configuration specifies the entry point for the process, the modules to include, the minify level, and the output file."}),`
`,e.jsxs(i.h2,{id:"building-the-process",children:["Building the Process",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#building-the-process",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"To build the process, run the following command in the process directory:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ao/process-name"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" && "}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"./scripts/build.sh"})]})})}),`
`,e.jsxs(i.aside,{"data-callout":"tip",children:[e.jsx(i.strong,{"data-callout-title":!0,children:"Handy Tip"}),e.jsx(i.p,{children:"Create Ao dApp provides a script to build the process from the root of the project. You can run the following command to build the process:"}),e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" myprocess:build"})]})})})]})]})}function l(s={}){const{wrapper:i}={...n(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(a,{...s})}):a(s)}export{l as default,t as frontmatter};
