// second = ()=>{
//     console.log('hi there');
// }

// first = ()=>{
//     console.log('hello');
//     second();
//     console.log('ende');
// }

// first()


// slova ='iio'
// function fish(broj){
//     lista = []
//     for(i of slova){
//         switch(i){
//             case 'i':
//                 broj += 1
//                 break;
//             case 'd':
//                 broj -= 1
//                 break;
//             case 's':
//                 broj*=2
//                 break;
//             case 'o':
//                 lista.push(broj)
                

//         }
//     }
//     console.log(lista);
// }

// fish(0);






// function showResult(some){
//     console.log(some);
// }

// function myCalculator(num1,num2,myCallBack){
//     sum = num1 + num2
//     myCallBack(sum)
// }


// myCalculator(5,5,showResult)

// //////////////////////////////////////////////////////

// greeting = function(name){
//     console.log('hello' + name);
// }


// function Name(arg1){
//     var name = 'jana'
//     arg1(name)
// }



// Name(greeting)



// function great(name,myFunction){
//     console.log('Hello world');
//     myFunction(name)
// }







// function sayName(name){
//     console.log('Hello'+' '+name);
// }

// setTimeout(great,2000,'John', sayName)



// function greet(name){
//     return `hello ${name}`
// }

// greet('Ana')


// persons = ['Ana','Kristina']
// messages = persons.map(name)=>gr


// const person = ['haris','hamza'];
// const messages = person.map(name) => {
//     return `Hello, ${name}!`;
// });
// console.log(messages)

// // 2 nacin
// function map(array, callback){
//     console.log('map() starts');
//     const mappedArray = [];
//     for (const item of array) { mappedArray.push(callback(item))}
//     console.log('map() completed');
//     return mappedArray;
// }
// function greet(name){
//     console.lo('greet() called');
//     return `Hello, ${name}!`;
// }
// const person = ['haris'];
// console.log(map(person, greet));







// function filters(niz){
    
//     niz = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
//     duplicateElements = niz(arry);




// }

// for(i of niz){
//     if(i == ""){
//         index = niz.indexOf(i)
//         niz.splice(index ,1)
//         console.log(niz);
//     }


//--------------------------------------------------------------------
// function format(words){
//     if (!words) return ''
//     words=words.filter(v=>v.length>0)
//     if(words.length===0) return ''
//     if(words.length===1) return words[0]
//     return words.slice(0,-1).join(', ')+' and '+words.slice(-1)

// }



// mypromise = new Promise((myResolve, myReject) => {
//     setTimeout(() => {
//         myResolve('myresolve');
//         myReject('myrejecet');
//     }, 3000);
// });
// mypromise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() =>{
//         console.log('end')
//     })


















/////////////////////////////////////////////////////////////////////////////


// function resolveAfter2s(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('resolved')
//         },2000)
//     })
// }



// async function asyncCall(){
//     console.log('calling');
//     try{
//         const result = await resolveAfter2s();
//         console.log(result);
//         console.log('drugi korak');
//         console.log('treci korak');
//     } catch(er){
//         console.log('doslo je do greske');
//     }
// }
//////////// soluicija 2
// function asyncCall(){
//     console.log('calling');
//     resolveAfter2s()
//     .then((result)=> console.log(result))
//     .then(()=> console.log('drugi korak'))
//     .then(()=> console.log('truci korak'))
    
// }


// ///////////////////////////////////////////////////////////////
prvi = document.createElement('h1')
prvi.classList.add('prva')
prvi.innerText = '1'
bdy = document.querySelector('body')
nav = document.querySelector('.nav')
container = document.createElement('div')
container.classList.add('container')
bdy.appendChild(container)

left = document.createElement('button')
left.classList.add('left')
left.innerText = '<'

strana = document.querySelector('.strana')
right = document.querySelector('.right')
0

const getData = async () => {
    response = await fetch('https://catfact.ninja/facts?page=&limit=8+')
    let res = await response.json()
    res.data.forEach((el)=>{
        tabla = document.createElement('div')
        tabla.setAttribute('id','tabla')
        tabla.classList.add('tabla')
        tabla.innerText = el.fact
        container.appendChild(tabla)

    })
}


getData()
tackice = document.createElement('h1')
tackice.classList.add('tackice')
tackice.innerText = '...'
levo = document.createElement('h1')
levo.classList.add('levo')
levo.innerText = '0'
tackiceKraj = document.querySelector('.tackiceKraj')
desno = document.querySelector('.desno')





right.addEventListener('click',async function Hamza(){
    i = -1
    response = await fetch(`https://catfact.ninja/facts?page=${i}&limit=8+`)
    let res = await response.json()
    

    if(parseInt(strana.innerHTML) < 30 && parseInt(strana.innerHTML) < 2 ){
        nav.insertBefore(levo,strana)
        nav.insertBefore(left,levo)
        levo.innerHTML = parseInt(levo.innerHTML) + 1
        desno.innerHTML = parseInt(desno.innerHTML) + 1
        strana.innerHTML = parseInt(strana.innerHTML) + 1
        res.data.forEach((el)=>{

            i+=1
            table = document.querySelectorAll('#tabla')
            table[i].innerText = el.fact
            

            })
    }else if(parseInt(strana.innerHTML) < 30 && parseInt(strana.innerHTML) === 2){
        nav.insertBefore(prvi,levo)
        levo.innerHTML = parseInt(levo.innerHTML) + 1
        desno.innerHTML = parseInt(desno.innerHTML) + 1
        strana.innerHTML = parseInt(strana.innerHTML) + 1

    }else if(parseInt(strana.innerHTML) >= 3 && parseInt(strana.innerHTML) < 30){
        nav.insertBefore(levo,strana)
        nav.insertBefore(tackice,levo)
        nav.insertBefore(prvi,tackice)
        nav.insertBefore(left,prvi)
        levo.innerHTML = parseInt(levo.innerHTML) + 1
        desno.innerHTML = parseInt(desno.innerHTML) + 1
        strana.innerHTML = parseInt(strana.innerHTML) + 1
        res.data.forEach((el)=>{

            i+=1
            table = document.querySelectorAll('#tabla')
            table[i].innerText = el.fact
            

            })

    }

})


left.addEventListener('click',async function Hamza (){
    i = -1
    response = await fetch(`https://catfact.ninja/facts?page=${i}&limit=8+`)
    let res = await response.json()

    if(parseInt( strana.innerHTML) > 1 && parseInt(strana.innerHTML) != 2 && parseInt(strana.innerHTML)!=3 && parseInt(strana.innerHTML)!=4){
    
   
        desno.innerHTML = parseInt(desno.innerHTML) - 1
        levo.innerHTML = parseInt(levo.innerHTML) - 1
        // tackice.innerHTML = parseInt(tackice.innerHTML) - 1
        strana.innerHTML = parseInt(strana.innerHTML) - 1
        
        res.data.forEach((el)=>{
            
            i+=1
            table = document.querySelectorAll('#tabla')
            table[i].innerText = el.fact
            

            })

    }else if(parseInt( strana.innerHTML) > 1 && parseInt( strana.innerHTML) === 4){
    
        nav.removeChild(tackice)
        desno.innerHTML = parseInt(desno.innerHTML) - 1
        strana.innerHTML = parseInt(strana.innerHTML) - 1
        levo.innerHTML = parseInt(levo.innerHTML) - 1
        res.data.forEach((el)=>{
            
            i+=1
            table = document.querySelectorAll('#tabla')
            table[i].innerText = el.fact
            

            })

    }else if(parseInt( strana.innerHTML) >1 && parseInt( strana.innerHTML) === 3){
        desno.innerHTML = parseInt(desno.innerHTML) - 1
        strana.innerHTML = parseInt(strana.innerHTML) - 1
        levo.innerHTML = parseInt(levo.innerHTML) - 1
        nav.removeChild(prvi)
        res.data.forEach((el)=>{
            
            i+=1
            table = document.querySelectorAll('#tabla')
            table[i].innerText = el.fact
            

            })

    }else if(parseInt( strana.innerHTML) > 1 && parseInt( strana.innerHTML) === 2){
        nav.removeChild(levo)

        nav.removeChild(left)
        desno.innerHTML = parseInt(desno.innerHTML) - 1
        strana.innerHTML = parseInt(strana.innerHTML) - 1
        levo.innerHTML = parseInt(levo.innerHTML) - 1
        res.data.forEach((el)=>{
            
            i+=1
            table = document.querySelectorAll('#tabla')
            table[i].innerText = el.fact
            

            })
        
    }else if(parseInt( strana.innerHTML) === 1){
        
        nav.removeChild(left)
        res.data.forEach((el)=>{
            
            i+=1
            table = document.querySelectorAll('#tabla')
            table[i].innerText = el.fact
            

            })
    }
})





