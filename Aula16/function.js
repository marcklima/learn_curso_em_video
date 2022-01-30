let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100 ){
        return true
    } else {
        return false
    }
}

function inLIsta(n, l){
    if (l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLIsta(num.value, valores)){
        window.alert ("tudo ok !")
    } else{
        window.alert("valor encontrado ou ja esta na lista")
    }

}







/*  function parImp(n){
    if (n % 2 ==0 ){
        return 'Par' ;
    } else {
        return  ' Impar ';
    }
}

let res = parImp(4);
console.log(res);

*/