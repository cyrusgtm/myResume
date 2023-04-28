
import { Container, Grid } from '@mui/material';
import React from 'react';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Container className={'top60'} style={{backgroundColor:'lightgrey'}}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs >
          <Router>
          <Header />
          <div className='mainContent'>
          <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/" element={<Resume />} />
          </Routes>
          </div>
            
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
