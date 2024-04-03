// import React from 'react';
// import Headers from './Headers';
// import Footer from './Footer';
import Routes from './routes';
// import Article from './Article';
// import auth from './auth';

function App() {
  return (
    <div>
      {/* {!auth.isAuthenticated() ? <Headers /> : ''} */}
      <Routes />
      {/* {!auth.isAuthenticated() ? <Footer /> : ''} */}
    </div>
  );
}

export default App;