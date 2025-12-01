import Box from '@mui/material/Box';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <Portfolio />
      <Skills />
      <About />
      <Footer />
    </Box>
  );
};

export default HomePage;
