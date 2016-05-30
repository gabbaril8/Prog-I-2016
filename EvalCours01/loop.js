var i = 0;

console.info('BEGIN FOR');
for(i = 0; i < 3; i++){
    console.info(i);
}
console.info('END FOR');

console.info('BEGIN WHILE');
while (i++ < 5) {
    console.info(i);
}
console.info('END WHILE');

console.info('BEGIN DO-WHILE');
do {
    console.info(i);
} while (++i < 7);
console.info('END DO-WHILE');