// App.tsx
import React from 'react';
import Container from './components/Container/Container';
import Cover from './components/Cover/Cover';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {

  return (
    <>
        <Cover />
        <main>
        {/* <Container>
        </Container> */}
        </main>
        <Footer/>
      
    </>
  );
};

export default App;
