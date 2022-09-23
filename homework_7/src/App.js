import React from 'react';
// import Hello from './components/Hello'
import { HelloFunc } from './components/HelloFunc';
import {Goodbye} from './components/Goodbye';
import {DoMore} from './components/DoMore';

export function App(){


  return(
    <div id="app">
        {/* <Hello/> */}
        <HelloFunc/>
        <hr/>
        <Goodbye/>
        <hr/>
        <DoMore/>
    </div>
  )
}