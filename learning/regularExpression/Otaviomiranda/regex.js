const { create, all, isNumeric} = require('mathjs');

const math = create(all);
const limitedEvaluate = math.evaluate

math.import({
  'import':     function () { throw new Error('Function import is disabled') },
  'createUnit': function () { throw new Error('Function createUnit is disabled') },
  'evaluate':   function () { throw new Error('Function evaluate is disabled') },
  'parse':      function () { throw new Error('Function parse is disabled') },
  'simplify':   function () { throw new Error('Function simplify is disabled') },
  'derivative': function () { throw new Error('Function derivative is disabled') },
  'pow' : function() {throw new Error('Funci')}
}, { override: true })
math.config({
    predictable:true
})
// const ari = require("mathjs");
const {text} = require('./base');
const regexCPF = /^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}$/; 
const regex2 = /joão/gi;
const regex3 = /^[a*b+]/;

//-1+20*10+2/3
//-2.5*2-3.75/10
const calculatorExp = /^([\-]{0,1}[0]{0,1}[1-9]*([-,\+,\*,\/]{0,1}[0]{0,1}[1-9]*)*)$/;

const exp = `1.00+10.007-0.1+0.002001-20/4.67-0.9/3-2*8+00000+0-0.00`; //['10','-20/4','-9/3','2*8']
const regexExp2 = /[0-9]+[\/,\*][0-9]+/g ;
const divmultOperation = exp.match(regexExp2);
const expNumeric = `-10+2.75-0.06 -9.8`;
const regexReal = /[-]?[0-9]*\.?[0-9]+/g;

const getNmbers = exp.match(regexReal);
// const n1 = '00000.00'
// console.log("z:",Number(n1));
const validExp =`-10+3/9.007-0.88/-2.006`;
const inValidExp1 =`-10+3/9.007-0.88/`;
const regexNumbers = `[-]?[0-9]*\.?[0-9]+`;
const operationExp = ``;
const expTest = '-10/25-30+20.00*1-3/2.5.';
const regexValidExpression = /([-]?[0-9]*\.?[0-9]+[\/,*,+,-][0-9]*\.?[0-9]+)+/g;
// console.log("validexp:",validExp);
// console.log('numbers:',regexValidExpression.match(validExp));
// console.log('test match', validExp.match(regexValidExpression));
try {
    console.log("result:",typeof(limitedEvaluate('2/0')));
} catch (error) {
    console.log('ERROR');
}
function IsNumeric(input){
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}
// -10 -8 + 9.6 - 0.706 + 0.001 + 1.76

// h1: 10 /^[1-9]+[0-9]*$/
// h2: -9
// h3: 10.07
// h4: -7.09
// h5: 0.55
// h6: -0.09
// h7: 0




// if(divmultOperation){
//     // const regexOperator = /[^0-9]/;
//     const regexOperator2 = /[\/,\*]{1}/; //rever 
//     let exp2 = exp;
//     divmultOperation.forEach(i =>{
//        console.log("i:",i);
//        let result = 0;
//         const op = i.match(regexOperator2);
//         const ns = i.split(regexOperator2);
//         const n1 = Number(ns[0]);
//         const n2  = Number(ns[1]);
//         if(op[0] === "/"){
//             result = n1 / n2;

//         }else if(op[0] === "*"){
//             result = n1 * n2;
//         }

//         exp2 = exp2.replace(i,result.toString());
        

        
//         return result;
        
//     })
//     const regexArrayNumber = /[\-]{0,1}[0-9]+/g; //-10+4-8+18
//     const exp3 = exp2.match(regexArrayNumber);
//     console.log('exp3',exp3);
//     let resultFinal = 0;
//     exp3.forEach(e=>{
//         resultFinal += Number(e);
//     })
//     console.log('exp:',exp);
//     console.log('resultFinal:', resultFinal);
    /* const arrayOfNumber = JSON.parse(exp3);
    console.log("arrayOfNumber:", arrayOfNumber); */
    /* console.log('exp', exp);
    console.log('exp2', exp2); */


    // console.log('resultdivmult',arrayResultDivsandMults);
// }



// console.log(calculatorExp.test('-1+20/010*10+2/3'));


