Name:Technology Stack bulder
Description:A simple React application that lets users explore different technologies and create their own technology stack. Users can add technologies, remove them, and manage their selected stack easily.
Technology Used:React.js,
TypeScript,
Tailwind CSS,
Vite,
React Toastify,
React Icons,
JSON.
Features:Explore technologies, build Stack, Mabage stack.

Here is a more natural and humanized version:

1. What is JSX, and why is it used in React?

JSX allows us to write HTML-like code inside JavaScript. It makes React components easier to understand and helps us describe how the UI should look.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

3. What does the `useState` hook do, and where did you use it?

The `useState` hook is used to manage changing data in a component. In my project, I used it to keep track of the technologies selected by the user.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to handle side effects, such as fetching data or running code after a component renders. It can be used to load JSON data when the application starts. However, in my project, I used the `use` hook to read the JSON promise.

5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. This allows React to update, add, or remove items efficiently when the list changes.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different content depending on a condition. In my project, I used it to display “Your stack is empty” when the user has not selected any technology.

TypeScript

{selectedPlayers.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>Selected technologies</div>
)}


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child through props. If the child needs to send information back, the parent can pass a function as a prop, which the child can call.

TypeScript


<Players playersPromise={playersPromise} />


