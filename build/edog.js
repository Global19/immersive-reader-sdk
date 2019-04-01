// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// This script is used internally at Microsoft for testing-related purposes.

const fs = require('fs');
const replace = require('replace-in-file');

fs.copyFileSync('dist/immersive-reader.js', 'dist/immersive-reader.edog.js');

replace.sync({ 
    files: 'dist/immersive-reader.edog.js',
    from: /learningtools\.onenote\.com/g,
    to: 'learningtools.edog.onenote.com'
});