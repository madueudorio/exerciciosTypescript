let numero: number = 200;
let segundoNumero: number = 100;

console.log(numero + segundoNumero);

let idade: number = 16;
let texto: string = "minha idade é: " + idade;

console.log(texto);

let idadeNova: number = 16;
let textoNovo: string = "minha idade é: " + idade;

console.log(textoNovo + idadeNova);

let verdadeiro: boolean =false
console.log(verdadeiro);

let arr: number[] = [1,2,3,4,10,50,60];
console.log(arr);
console.log("tamanho do array: " + arr.length);
console.log("acessando a posição do array:" + arr[0]);
console.log(arr.indexOf(60));

let arrayTexto: Array<string>;
arrayTexto = ['ab', 'bc', 'cd', 'ed'];

console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));

function exibirTexto(){
    console.log('Exibindo meu Texto');
}

exibirTexto();

function exibirOutroTexto(){
    return "exibibndo outro texto";
}

console.log (exibirOutroTexto());

function retornaNumero(): number {
    return 15;

}

console.log(retornaNumero());

function retornaTexto(): string{
    return "retornando string";
}

console.log(retornaTexto());

function soma(a: number, b: number){
return a+b;
}

console.log("o valor da somma é: " + soma(50, 100));


function multiplicação(a: number, b: number){
    return a*b;
    }
    
    console.log("o valor da multiplicação é:" + multiplicação(10,5));

    function formula(a:number, b:number, c:number):number {
        return (a + b) * c
    }
    
    console.log(formula(5, 2, 3))
    
    function multiplicar(a:number,b:number): string {
        return "o resultado da multiplicação é: " + (a*b);
    }
    
    console.log(multiplicar(5, 2));