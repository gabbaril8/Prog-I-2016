var condition1 = true;
var condition2 = false;
var condition3 = true;

if (condition1 && condition2) {
    alert('Bloc 1!');
}
if (condition1 || condition2) {
    alert('Bloc 2!')
}
if ((condition1 && condition2) || condition3) {
    alert('Bloc 3!');
}
if (!condition1 || condition2) {
    alert('Bloc 4!');
}
if (!condition1 || condition2 || condition3) {
    alert('Bloc 5!');
}
// Fin