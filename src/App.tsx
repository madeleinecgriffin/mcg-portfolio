// App.tsx
import React from 'react';
import Container from './components/Container/Container';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
    <Container>
      <Header />
      <main>
        <ProfileCard
          imageUrl=""
          name="Madeleine Griffin"
          title="I'm a Software Engineer based in Chicago."
          githubUrl="https://github.com/madeleinecgriffin"
          linkedinUrl="https://www.linkedin.com/in/madeleinegriffin"
          />
        <Projects />
      </main>
      <Footer />
    </Container>
  );
};

export default App;
