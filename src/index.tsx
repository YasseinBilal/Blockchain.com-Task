import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.min.css';

import App from './App';

// Render application in DOM
createRoot(document.getElementById('app')).render(<App />);
