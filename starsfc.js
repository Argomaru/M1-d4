//segitiga siku kanan
/*
function siku(wayae){


    stars = ''
    
    for(let i = 0; i < wayae; i++)
    {
        for(let j=0;j < i+1;j++)
        {
            stars += ' * '
            
        }
        stars += '\n'
    }
    console.log(stars);
}
siku(5)
*/



//segitiga siku kanan kebalik
/*
function sikuk(wayae){
    
    stars = ''
for (let i = 0; i < wayae; i++) {
    for (let j = wayae; j > i; j--) {
        stars += ' * '
    }
        stars += '\n'
}
console.log(stars);
}
sikuk(5)
*/

// segitiga sama kaki
/*
function sama(wayae){
   let stars = ''
for (let i = wayae; i > 0; i--) {
    for (let j = 1; j <= wayae; j++) {
        if (j >= i) {
            stars += '* ';
        } else {
            stars += ' '
        }
    }
    stars += '\n';
}
console.log(stars);
}
sama(5)
*/

//kotak
/*
function kotak(wayae){
let stars  = ''

stars = '\n'

for(let i = 0 ; i<wayae ; i++)
{
    for(let j = 0; j < wayae ;j++)
    {
       stars += (' * ')
    }
   stars += '\n'
}
console.log(stars)
}
kotak(5)
*/