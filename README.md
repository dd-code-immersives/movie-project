1) Project Setup:
- Create a new github repo called ReactIntroForm with the following options:
- Clone the repo to your computer and add the link to populi
- cd into the ReactIntroForm directory
- Run 'npx create-react-app .' to initialize react in the repository
- Run 'npm start' after react has finished installing
- If the above worked properly, you should see the react start page on localhost:3000
- Open App.js and replace the App functional component with this code:
- function App() {
return (
<div className="App App-header">

</div>
);
}

2) Creating the <MovieForm/> Component:
- Create a new functional component called MovieForm
- Be sure to include props as the first function parameter and be sure to have a single enclosing <div> tag in the JSX of the return statement
- Add a title to the JSX of the MovieForm component inside the <div></div> tags
- <h1>Movie Form</h1>
- Add <MovieForm/> as a new component inside of the JSX of the <App /> component between the two <div> tags
- <div className="App App-header">
<MovieForm />
</div>
- If you did this right, then on localhost:3000, you should see the heading "Movie Form" on the page

3) Building out <MovieForm/>:
- At the top of the App.js file, import useState from react
- import { useState } from "react";
- Add a new state variable to <MovieForm/> called "title" along with its setter function "setTitle" initalized to an empty string:
- const [title, setTitle] = useState("")
- In the JSX of <MovieForm/> (inside the enclosing divs), add a new text input field and a label that says "Title:"
- return (
<div>
<label>Title:</label>
<input type="text" />
</div>
)
- In the input field you just created, add an onChange handler that will call setTitle with the value from the onChange event
- <input type="text" onChange={(event)=>{
setTitle(event.target.value)
}}/>
- If this event handler works, it should update the title state variable with the new value entered into the text field.
- [Optional]: The easiest way to check that it is working is to add a console.log of title between the title state variable definition and the JSX return statement of <MovieForm/>
- const [title, setTitle] = useState("")
console.log(title)
return (
/* ...JSX of MovieForm */
)
- Display the current value of title in the JSX of <MovieForm/> in <p> tags so that you/the user can see the value of title update in real time
- return (
<div>
<label>Title:</label>
<input type="text" onChange={(e)=>{
setTitle(e.target.value)
}}/>
<p>Current Title: {title}</p>
</div>
)
- If you did the above correctly, you should be able to type into the title text input field and see the current title update as you type

4) Implement Additional <MovieForm/> fields:
- In <MovieForm/> repeat the process in step 3 to add the following type="text" input fields to the form:
- director, actors, plot
- Note: Since these are type="text" input fields, the state variables for director, actors, plot should be initalized to an empty string: ""
- In <MovieForm/> repeat the process in step 3 to add the following type="number" input fields to the form:
- year, imdbRating
- Note:
- For these two input fields, the state variables should be initialized to 0.
- For the imdbRating input field, add the attribute step="0.1" to it so that you can increment the value by a tenth at a time.
- <input type="number" step="0.1" />
