import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
  <section className='List'>
      <header className='List-header'>
        <h2>{Test header}</h2>
      </header>
      <div className='List-cards'>
        
          <Card
            key={1}
            title={Title One - Test}
            content={First Content - Test}
          />
});