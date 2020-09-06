import React from "react";

function TextInput({ name, error, label, ...otherProps }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...otherProps} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default TextInput;

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useParams } from "react-router";
// function User() {
//   let { id } = useParams();
//   return <h2>User {id}</h2>;
// }
// function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/1">User 1</Link>
//           </li>
//           <li>
//             <Link to="/2">User 2</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/:id" children={<User />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useParams } from "react-router";
// function User() {
//   let { id } = useParams();
//   return <h2>User {id}</h2>;
// }
// function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/1">User 1</Link>
//           </li>
//           <li>
//             <Link to="/2">User 2</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/:id" children={<User />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
