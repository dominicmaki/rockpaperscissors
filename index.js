/**
 * @file Description of what the file is for.
 */

/**
 * This is a description of a function that is awesome for awesomeness sake.
 * @param {number} inNum - Parameter description.
 * @returns {number} Returns a static 3 I just typed at rando.
 */
function anAwesomeFunction(inNum) {
    /** {number} This is a number. */
    const randoNum = 3;
    console.log('An awesome func parm', inNum);

    document.getElementById('app').innerHTML = `<h1>${inNum} passed into anAwesomeFunction</h1>`;
    return randoNum;
}

anAwesomeFunction('99899');
