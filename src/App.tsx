// App.tsx
import React from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {

  return (
    <>
        <Header 
          githubUrl="https://github.com/madeleinecgriffin"
          linkedinUrl="https://www.linkedin.com/in/madeleinegriffin"
        />
        <Container>
        <main>
          <ProfileCard />
          <Resume />
        </main>
        </Container>
        <Footer/>
      
    </>
  );
};

export default App;
