'use strict';

if (Number(process.versions.node.match(/(\d).*/)[1]) < 4) {
    console.log('Please, install the latest version of Node (> 4.0)');
    process.exit(1);
} else {
    var MagicNumber = require('./magicNumber');

    var magicNumber = new MagicNumber();
    console.log('The smallest magic number is: %d', magicNumber.getSmallest());
    process.exit(0);
}
