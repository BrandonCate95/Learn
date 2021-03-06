//The ternary operator (?) is a 3 part operator of the form:
// condition ? {if true} : {if false}
//EX:

let eval = condition ? 'X' : 'O';

//if condition = truthy then eval = 'X'
//if condition = falsy then eval = 'O'

//basically ? is a short hand way of writing an if else statement namely, the above is equivalent too:

if(condition){
    let eval = 'X';
}else{
    let eval = 'O';
}