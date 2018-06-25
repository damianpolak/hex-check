/*
 * hex-check
 * https://github.com/damianpolak/hex-check
 *
 * Copyright 2018, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */

// Returns true if valid or false if not
module.exports = hexCheck = (str) => {
   'use strict';
   return (/^[0-9a-fA-F]+$/).test(str);
 };
