const CORR = parseInt(new Date().getTimezoneOffset() * 60 + 7200, 10) * 1000;
require('./main')('§', true, CORR, '94');

console.log('Font colors (3X)');
console.log('=> §30Font Black');
console.log('=> §31Font Red');
console.log('=> §32Font Green');
console.log('=> §33Font Yellow');
console.log('=> §34Font Blue');
console.log('=> §35Font Magenta');
console.log('=> §36Font Cyan');
console.log('=> §37Font White', '\n');

console.log('Font light colors (9X)');
console.log('=> §90Font light Black');
console.log('=> §91Font light Red');
console.log('=> §92Font light Green');
console.log('=> §93Font light Yellow');
console.log('=> §94Font light Blue');
console.log('=> §95Font light Magenta');
console.log('=> §96Font light Cyan');
console.log('=> §97Font light White', '\n');

console.log('Background colors (4X)');
console.log('=> §40§30 Background Black §0');
console.log('=> §41§30 Background Red §0');
console.log('=> §42§30 Background Green §0');
console.log('=> §43§30 Background Yellow §0');
console.log('=> §44§30 Background Blue §0');
console.log('=> §45§30 Background Magenta §0');
console.log('=> §46§30 Background Cyan §0');
console.log('=> §47§30 Background White §0', '\n');

console.log('Background light colors (10X)');
console.log('=> §100§30 Background light Black §0');
console.log('=> §101§30 Background light Red §0');
console.log('=> §102§30 Background light Green §0');
console.log('=> §103§30 Background light Yellow §0');
console.log('=> §104§30 Background light Blue §0');
console.log('=> §105§30 Background light Magenta §0');
console.log('=> §106§30 Background light Cyan §0');
console.log('=> §107§30 Background light White §0', '\n');

console.log('§3Italic (3) +§30 Black font (30) +§44 Blue background (44) §0');
console.log('§3Italic (3) +§30 Black font (30) +§104 Light blue background (104) §0');
