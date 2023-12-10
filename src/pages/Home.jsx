import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Popular } from '../components/Popular/Popular';
import { Offers } from '../components/Offers/Offers';
import { MostlyOrdered } from '../components/MostlyOrdered/MostlyOrdered';
import { NewsLetter } from '../components/NewsLetter/NewsLetter';

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <MostlyOrdered/>
      <NewsLetter/>
    </div>
  );
}
