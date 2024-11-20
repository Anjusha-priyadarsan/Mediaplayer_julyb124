REACT- Advanced Front end Technologies

-----------------------------------------------


Basic Concepts
--------------
1.React App is a collection of different libraries
2.Component:part of user interface
3.react application is a collection of components
    -components are arranged in tree like structure
    -there will be a root component in react app which is commonly known as 'App'
4.used to create single page web application
5.declerative aproach
6.virtual DOM:light weight memory representaion of real DOM
    -reconciliation:
7.JSX(Javascript XML):language used to write code in react
            ex:- const heading=<h1>Heading 1</h1>
            -rules for creating jsx elements
                -every jsx elements must be inside a single parent tag
                -every tag must has a closing tag(<h1>..</h1>  <br/> )
                -parent tagcan be any container tag/ react fragment(<>... </>)
                -Attribute class is 'className' in jsx
                -jsx is using camel case
                -instead 'for' using 'htmlfor' attribute in jsx
                -to provide  js in jsx use -{js expresiion}

create react application
------------------------
-CRA(using create-react-app command)
-vite  :building tool used to create web project
         install globaly -  npm i -g create-vite
create react app using vite:-   

React App file and floder structure
-----------------------------------

vite.config.js    --  vite configuration file
README.md         -- documentation about your project
package.json      -- npm configuration file
package-lock.json -- conatain versions history of all packages installed in the project
.gitignore        -- contains files/folder name which is ignored while adding to git
index.html        -- entry page to react app
nodmodules folder -- used to hold copies of dependent libraries of react project
                        (we can install using the command npm install)
public folder     -- react project can access data stored in public folder as globally
src folder        -- define react app here
assets folder     -- usedd to hold media file used in react app
main.jsx          -- creat a react dom with parent node as div with id as 'root' , and render
                     the parent component (App) inside the node
Babel Library     -- transpile jsx code into simple react function understood by browser




to run --npm run dev

 components:part of UI,independent and reusable code

-------------------

rules for creating components--- create a js/jsx file, file name should start with capital Letter


-2 types of components
        -Functional based components: use function to create component,return jsx elemnts
            -stateless component:can't create state
        -class based components: use classes  to create component,can inherit ract component
            -statefull component: bcz it can create state

    -difference between functional and class component

    Functional based component                                              class based component
    ---------------------------------                               ---------------------------------
    -js pure function to accept props and                           -is a class extended from react component.
                                                                     its render function return jsx
     return jsx elements
    -it execute from top to bottom,it return                        -component alive dependency based on
                                                                     different life cycle
     jsx,then it cannot be alive

     -stateless component                                           -statefull component

    -Hooks are used                                                 -Hooks are not used
    -life cycle methods not available                               -can use life cycle methods
    -no need of render  function                                    -use render method to return jsx elements
    -no need of constructor                                         -constructor used to initialize state





-Data binding:one-way data binding(data transfer from parent to child)
    -prpos object:- property of  a component, using props a component can get the shared data from it's parent.props will be get as an 'argument' of functional component


-styling in react component using class

    -using inline css : using style attribute

            -style={{property:value,property:value..}}

    -using external css:  using external css file,import css file into component

    -using css module file:file with exstension as .module.css is known as module file, import the module file in the components 

    -react event binding

            -binding a function without argument
                syntax:-event={function-name}
            -binding a function with argument
                syntax: event={()=>function_name()}
            -binding a function with arguemnt as an event
                syntax: event={(e)=>function_name(e)}
    -conditional rendering:based on a condition we can control the jsx elements in browser

        -if statement: use truthy operator(&&)
        -if-else statement :use ternary  operator(?:)

    -state:state is an object used to store data/ information regarding a component, whenever a state changes, the component re-render

    -lifecycle methods of react components

        -mounting phase:putting jsx elements to DOM
            -constructor()
            -getDerivedStateFromProps()
            -render()
            -componentDidMount()
        -updating phase
            -getDerivedStateFromProps()
            -shouldComponentUpdate()
            -render()
            -getSnapshotBeforeUpdate()
            -getComponentDidUpdate()
        -unmounting phase:removing component from DOM
            -componentDidUpdate()


-react hooks: predefined functions used to provide react component features to functional based components
    -hooks:function with function_name start with 'use' keyword
    - to use hooks in function_namebased component,we must call the hooks

    rules for calling hooks in functional components
    ------------------------------------------------
    -import hooks from react, in component
    -hooks can called at the top-level of the component
    -hooks cannot be conditional

    types hooks
    -----------
    1.predefined hooks

        -useState(initial value):used to create state in functional component
        syntax: const[state_name,state updating function_name]=useState(initial value)

        -useEffect(function,dependency):used to provide sideeefects in components
            function: used to define side effect applied to the component
            dependency:  based on dependency ,useEffect will get called
                no dependency:
                []:useEffect hook will call only at the time of component creation
                [data]:useEffect hook will call at the time of component creation and the data changes

    2.customized hooks


-React Forms
	-controlled components: data changes in the form is handled by the component by storing its state using change event
	-uncontrolled components: form handled by real DOM
	-to submit form, to prevent from reloading use preventDeault() method


-styling react components
    -material UI
    -react-bootstrap  : install: npm i react-bootstrap bootstrap

-setting up pathh for component in react

    install react router dom:npm i react-router-dom

    -react app must be render inside <BrowserRouter>
    -components needs to setup path must inside '<Routes> componet of react router dom in App.jsx
    -use Route to define each component path


    how to deploy json file using node.js
    ---------------------------------------

    1.create index.js file in server folder
    2.update script in package.json file as "start":"node index.js"
    3.create .gitignore file and add 'node_modules' folder
    4.define json server to run run json file in index.js