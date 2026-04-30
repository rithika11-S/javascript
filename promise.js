// // all
// const p1=Promise.resolve("A");
// const p2=Promise.resolve("B");
// const p3=Promise.resolve("C");
// Promise.all([p1,p2,p3])
//     .then((res)=>{
//         return console.log(res);
//     })
//     .catch(err=>console.log(err))

// const p11=Promise.resolve("A");
// const p22=Promise.reject("B");
// const p33=Promise.resolve("C");
// const p44=Promise.reject("D")
// Promise.all([p11,p22,p33,p44])
//     .then((res)=>{
//         return console.log(res);
//     })
//     .catch(err=>console.log(err))

// const pr1=Promise.resolve("A");
// const pr2=Promise.reject("B");
// const pr3=Promise.resolve("C");
// const pr4=Promise.reject("D")
// Promise.allSettled([pr1,pr2,pr3,pr4])
//     .then((res)=>{
//         return console.log(res);
//     })
//     .catch(err=>console.log(err))


// const r1=Promise.reject("A");
// const r2=Promise.reject("B");
// const r3=Promise.resolve("C");
// const r4=Promise.reject("D")
// Promise.race([r1,r2,r3,r4])
//     .then((res)=>{
//         return console.log(res);
//     })
//     .catch(err=>console.log(err))

// const r11=Promise.reject("A");
// const r22=Promise.reject("B");
// const r33=Promise.resolve("C");
// const r44=Promise.reject("D")
// Promise.any([r11,r22,r33,r44])
//     .then((res)=>{
//         return console.log(res);
//     })
//     .catch(err=>console.log(err))

// const promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(!success){
//         resolve("True")
//     }
//     else{
//         reject("False")
//     }
// })
// console.log("A")
// async function test(){
//     console.log("B");
//     try{
//         const a=await promise;
//         console.log(a);
//         // console.log("D");
        
//     }
//     catch (err){
//         console.error(err);
        
//     }
//     finally{
//         console.log("D")
//     }
// }

// test();
// console.log("C");

// async function test() {
//   console.log("A");
//   const b =await Promise.resolve("B");
//   console.log(b);
// }

// test();

// Promise.resolve().then(() => console.log("C"));

// async function test() {
//   console.log("X");
//   await Promise.resolve();
//   console.log("Y");
// }

// console.log("A");

// test();

// Promise.resolve().then(() => console.log("B"));

// console.log("C");

// async function test(){
//     try{
//         const p=await Promise.reject("False");
//         console.log(p);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// test();

// console.log("1");

// async function test() {
//   console.log("2");
//   await Promise.resolve();
//   console.log("3");
// }

// Promise.resolve().then(() => console.log("4"));

// test();

// console.log("5");
const a=Promise.resolve("A");
const b=Promise.reject("B");
const c=Promise.resolve("C");
async function test(){
    try{
        const p=await Promise.all([a,b,c])
        console.log(p)
    }
    catch(err){
        console.log(err)
    }
    
    
}
test();