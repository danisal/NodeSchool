'use strict';

let inputs = process.argv.slice(2);
let result = inputs.map(string => string[0])
                    .reduce((a, b) => a + b );
                    
console.log(`[${inputs}] becomes "${result}"`);
