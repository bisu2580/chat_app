import React from 'react'
import { createBoard } from '@wixc3/react-board';
import App from '.../App.js';

export default createBoard({
    name: 'App',
    Board: () => 
    <div>
    <App />
    </div>
});
