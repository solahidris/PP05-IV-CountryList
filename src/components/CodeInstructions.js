// CodeInstructions.js

import React from 'react';

const CodeInstructions = () => {
  return (
    <div className="text-xs p-5">
      <h1 className='text-xl'>Frontend Coding Test</h1>
      <h2 className='text-lg font-bold'>Country List App</h2>
      <h3 className='text-base'>Instructions</h3>
      <br/>
      <p>Your task is to develop a country list app using React.</p>
      <p>The requirements are as follows:</p>
      <ol className='list-disc list-inside'>
        <li>Create two screens: a list view and a card view.</li>
        <li>Integrate with a GET API (https://restcountries.com/v3.1/all) to retrieve country data.</li>
        <li>Populate the list view and card view with the country data.</li>
        <li>Implement the ability to toggle between the list view and card view.</li>
        <li>Implement a search functionality for users to search for a country using an input field.</li>
        <li>Implement a filter functionality for users to filter countries by region.</li>
        <li>Provide a separate page to display more detailed information when a country is clicked.</li>
        <li>Ensure the website is responsive and works well on both laptops and mobile devices.</li>
        <li>Implement a color scheme toggle between light and dark mode.</li>
      </ol>
      <br/>
      <p>
        You are allowed to use any React-compatible framework or library to assist in your development process,
        such as Next.js, Vite, Tailwind, Material UI, Axios, etc.
      </p>
      <br/>
      <p>
        You are also required to create a README file (README.md) and include it in the code repository. The README
        should provide a brief explanation of your code structure, as well as any libraries or packages used in the
        development process.
      </p>
      <br/>
      <p>
        The attached images are provided for reference purposes only. You have complete freedom to develop your own
        design and be as creative as you desire.
      </p>
      <br/>
      <p>You are given 1 week to complete this test.</p>
      <br/>
      <h3 className='text-base'>Deployment & Submission</h3>
      <p>1. Upload your code to a Github repository and make it public.</p>
      <p>
        2. Deploy your app to a free static hosting website such as Github pages, Vercel, Netlify, etc.
      </p>
      <p>
        3. Send us the Github repository URL and the live site URL via email.
      </p>
    </div>
  );
};

export default CodeInstructions;
