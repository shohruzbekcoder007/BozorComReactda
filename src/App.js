import React from 'react';
import { observer } from "mobx-react";
import Main from './components/Main'

const  App = () => {
  return (
    <Main/>
  );
}

export default observer(App);
