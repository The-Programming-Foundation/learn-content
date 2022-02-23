"use strict";(self.webpackChunkfour=self.webpackChunkfour||[]).push([[2542],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(h,a(a({ref:n},c),{},{components:t})):o.createElement(h,a({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4997:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return h}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=t(1193),l=t.n(a),s=["components"],p={title:"Conditional Statements"},c=void 0,u={unversionedId:"programming/python/conditional-statements",id:"programming/python/conditional-statements",title:"Conditional Statements",description:"<div",source:"@site/docs/programming/02-python/04-conditional-statements.mdx",sourceDirName:"programming/02-python",slug:"/programming/python/conditional-statements",permalink:"/programming/python/conditional-statements",editUrl:"https://github.com/The-Programming-Foundation/tutorials/docs/programming/02-python/04-conditional-statements.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Conditional Statements"},sidebar:"tutorialSidebar",previous:{title:"Calculation",permalink:"/programming/python/calculation"},next:{title:"Loops",permalink:"/programming/python/loops"}},m=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"1. If statement:",id:"1-if-statement",children:[{value:"Python syntax:",id:"python-syntax",children:[],level:4},{value:"Python implementation:",id:"python-implementation",children:[],level:3}],level:2},{value:"2. If-Else statement:",id:"2-if-else-statement",children:[{value:"Python syntax:",id:"python-syntax-1",children:[],level:4},{value:"Python implementation:",id:"python-implementation-1",children:[],level:3}],level:2},{value:"3. If-Elif-Else statement:",id:"3-if-elif-else-statement",children:[{value:"Python syntax",id:"python-syntax-2",children:[],level:4},{value:"Python implementation:",id:"python-implementation-2",children:[],level:3}],level:2},{value:"4. Python shorthand if-else:",id:"4-python-shorthand-if-else",children:[{value:"Python syntax:",id:"python-syntax-3",children:[],level:4},{value:"Python implementation",id:"python-implementation-3",children:[],level:3}],level:2}],d={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l(),{mdxType:"Draggable"},(0,i.kt)("div",{class:"card-demo",style:{position:"relative",zIndex:5}},(0,i.kt)("div",{class:"card",style:{backgroundColor:"#1d9dff",position:"relative",zIndex:5}},(0,i.kt)("iframe",{src:"https://peaceful-bohr-249ea0.netlify.app/images/emulation/python.html",width:"96%",height:"auto"})))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"For some problems, we are going to take different actions depending on the conditions. For example, take an umbrella when it's raining outside; otherwise don't need to."),(0,i.kt)("p",null,"Conditional statements are the instructions we give computers to make decisions and do something accordingly."),(0,i.kt)("p",null,"There are different kinds of conditional statements."),(0,i.kt)("h2",{id:"1-if-statement"},"1. If statement:"),(0,i.kt)("p",null,"If a condition is true, it'll take action; otherwise, it'll do nothing."),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'if a number is equal to the pre-set number:\n     output "You won!"\n')),(0,i.kt)("h4",{id:"python-syntax"},"Python syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"if condition:\n    do something\n")),(0,i.kt)("h3",{id:"python-implementation"},"Python implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'#Assigning a number to the winning_number variable\nwinning_number = 65\n\n#Asking user to type in a lucky number,\n#input() function gets the entered number as a string from user so int() converts it to an integer\nnum = int(input("Pick a lucky number between 1 and 100: "))\n\nif num == winning_number:\n    print("You won!")\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Pick a lucky number between 1 and 100: 65\nYou won!\n")),(0,i.kt)("h2",{id:"2-if-else-statement"},"2. If-Else statement:"),(0,i.kt)("p",null,"You can assign it to perform an action if a condition is true and a different action when the condition is false; therefore, different actions can be processed based on the condition."),(0,i.kt)("p",null,'For example, a math tutor evaluates if the answer to a math question is correct or not. It displays "Correct" if answer is correct. It displays "Incorrect" and the correct answer if the answer is incorrect.'),(0,i.kt)("h4",{id:"python-syntax-1"},"Python syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"if condition:\n    do something\nelse:\n    do something else\n")),(0,i.kt)("h3",{id:"python-implementation-1"},"Python implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'answer = int(input("What is the answer of 2 to the power of 8? "))\n\n# The Python power operator ** raises the left number to the power of the right number\nif answer == 2**8:\n    print("Correct")\nelse:\n    print("Incorrect. The answer is ", 2**8)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"What is the answer of 2 to the power of 8? 64\nIncorrect. The answer is  256\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"What is the answer of 2 to the power of 8? 256\nCorrect\n")),(0,i.kt)("h2",{id:"3-if-elif-else-statement"},"3. If-Elif-Else statement:"),(0,i.kt)("p",null,'It has more than one condition, and it takes different actions depending on the condition. If all conditions do not match, it does the action of the "else" part.'),(0,i.kt)("p",null,"For example, to find the letter grade ('A', 'B', 'C', 'D', or 'F') based on the following chart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'90-100 => "A"\n80-89 => "B"\n70-79 => "C"\n60-69 => "D"\nbelow 60 => "F"\n')),(0,i.kt)("h4",{id:"python-syntax-2"},"Python syntax"),(0,i.kt)("p",null,"We can use the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"if condition:\n    action1\nelif condition:\n    action2\nelse:\n    other_action\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," There can more than one elif condition."),(0,i.kt)("h3",{id:"python-implementation-2"},"Python implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'score = int(input("Your score(0-100): "))\n\nif score >= 90 and score <= 100:\n    print("A")\nelif score >= 80 and score < 90:\n    print("B")\nelif score >= 70 and score < 80:\n    print("C")\nelif score >= 60 and score < 70:\n    print("D")\nelif score >= 0 and score < 60:\n    print("F")\nelse:\n    print("invalid score")\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Your score(0-100): 83\nB\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Your score(0-100): 59\nF\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Your score(0-100): -100\ninvalid score```\n")),(0,i.kt)("h2",{id:"4-python-shorthand-if-else"},"4. Python shorthand if-else:"),(0,i.kt)("p",null,"Python provides a shorthand method like the ternary operator of C language for writing if-else statements in one line."),(0,i.kt)("h4",{id:"python-syntax-3"},"Python syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"action1 if condition else action2\n")),(0,i.kt)("h3",{id:"python-implementation-3"},"Python implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"num1, num2 = 99, 100\nprint(num1, \">\", num2) if num1 > num2 else print(num1, '<=', num2)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"99 <= 100\n")))}h.isMDXComponent=!0}}]);