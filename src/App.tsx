import { Redirect, Router } from '@reach/router';
import Dynamic from 'containers/Dynamic';
import React, { Component } from 'react';
import { addPrefetchExcludes, Root, Routes } from 'react-static';
import './app.less';


let netlifyIdentity: any;
if (typeof document !== 'undefined') {
  netlifyIdentity = require('netlify-identity-widget')
}

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const netlifyAuth: any = {
  isAuthenticated: false,
  user: null,
  authenticate(callback: any) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', (user: any) => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback: any) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};


// const AuthButton = (
//   () =>
//     netlifyAuth.isAuthenticated ? (
//       <p>
//         Welcome!{' '}
//         <button
//           onClick={() => {
//             netlifyAuth.signout(() => navigate("/"));
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     ) : (
//         <p>You are not logged in. <a href="login">Login</a></p>
//       )
// );

// function PrivateRoute() {
//   return (
//     <div>Private</div>
//   )
// }



const Dashboard: any = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

class Login extends Component<any, any> {
  state = { redirectToReferrer: false };

  login = () => {
    netlifyAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}


function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>            
            <Dashboard path="/dashboard" />
            <Login path="/login" />
            <Dynamic path="dynamic" />
            <Routes path="*" />
            {/* <PrivateRoute path="/protected" component={Protected} /> */}
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
