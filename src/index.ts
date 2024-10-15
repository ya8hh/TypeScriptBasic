// let a:string ="yash";
// let name1:string ="yashpal";
// let b:number =33;
//  let a=<number>23;
//  let surname:string|number; union datatype 
//  surname= "yash2"

// function 
// const func=(n:number,m:number):number=>{
//     console.log(n,m);
//     return n*m;
// };

//type keyword is used to define custom datatype
    // type UserName =string|number|boolean;
//     type func =(n:number,m:number)=>number;
//     const funct:func =(m,n)=>{
//     console.log(n,m);
//     return n*m;
// };

//array in typescript

// const arr =[12,24,36,48];
// const arr :number[] =[]; // array decleration in type script
// const arr2 :string[]=[];
// another method to declare array 
// const arr1:Array<number>=[10,20];
// const arr2 :Array<string> = new Array(20);
// const arr3 :Array<number|string> =["yash",23];
// arr3[0] ="yash";
// const arr4:[number,number,number]=[23,23,23]; //tuple ,means fixed size of array and declared the datatype of the number 
//OBJECT IN TYPESCRIPT
//  type OBJ = {
//     name1:string,
//     age:number,
//     gender?:boolean // to make a property uptional use question mark
//  }
// const obj :OBJ={
//     name1:"yash",
//     age:23,
//     gender:true
// }
// const obj2 :OBJ={
//     name1:"yash",
//     age:23,
// }
//  interface OBJ  {  //interface are used to make class like object to implement oops
//     name1:string,
//     age:number,
//     gender?:boolean // to make a property uptional use question mark
//  }
//  type functype =(n:number,m:number)=>void;

// interface obj2 extends OBJ{
//     scholar:boolean,
//     func:functype;
// }
// const yash:obj2 ={
//     name1:"naman",
//     age:14,
//     scholar:true,
//     func:(n,m)=>{
//         console.log(n*m);
//     },
// };
// yash.func(20,20);

// <------------------------------------------------FUNCTION--------------------------------------------------->
// type funcType=(n:number,m:number,l?:number)=>number;



// optional parameter
// const func:funcType =(n,m,l)=>{
//     if(typeof l ==="undefined") return n*m;

//     return n*m*l;
// }
// const pro:number =func(20,40,50);
// const pro2:number =func(20,40);
// console.log(pro,pro2);

//default

//  const func:funcType =(n,m,l=20)=>{
//         if(typeof l ==="undefined") return n*m;
    
//         return n*m*l;
//     }
//     console.log(func(20,40,0));


// const func =(...m:number[])=>{
   // rest

//     return m;
// }
// console.log(func(20,40,0));
// type funType=(n:number)=>number;
// function lol (n:number){
//     return n;
// }
// const  lol2:funType =function (n){
//     return 3;
// }
// <-----------------------------------------------------------function with object-------------------------------------------------------->
// const getData =(product:{
//     name:string,
//     stock:string,
//     price:number,
//     photo:string,
// }):void=>{
//     console.log(product);
// }

// interface product {
//     name:string,
//     stock:string,
//     price:number,
//     photo:string,
// }
// const productOne:product ={
//     name:"Mackbook",
//     stock:"46",
//     price:999,
     
// };
// getData(productOne) 
// never type
// const errorHandler=():never=>{
//     throw new Error();
// }
//<------------------------------------------------------CLASS----------------------------------------------------?>

// class Player{
    
    
//     constructor(private height:number,public weight:number,protected power:number){
        
//     }
//     getMyHeight=()=> this.height;
// }


// class plater extends Player{
//     special:boolean;
//     constructor(height:number,weight:number,power:number,special:boolean){
//         super(height,weight,power)
//         this.special=special;

//     }
// }
// const yash =new plater(100,50,23,true);
// console.log("weight",yash.weight)

// //type asserction
// const a = document.getElementById("btn") as HTMLElement;

// const a = <HTMLElement> document.getElementById("btn");
// const a = document.getElementById("btn")!;


// a.onclick=function (){
//     const input =document.getElementById("in")! as HTMLInputElement;
//     const val = input.value;
//     const out =Number(20)+Number(val);
//     const pp =document.createElement('p');
// pp.textContent =String(out);
// document.getElementById("container")?.appendChild(pp);
// }
// const func =<CustomType>(n:CustomType):CustomType=>{
//     let text :CustomType;
//     return n;
// }