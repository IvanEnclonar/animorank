// @ts-nocheck

/**
 * @typedef {Object} TestCase
 * @property {Array<number|string>} inputs - The input values for the test case. These can be numbers or characters.
 * @property {Array<'int'|'float'|'char'>} inputTypes - The types of the input values (e.g., 'int', 'float', 'char').
 * @property {Array<number|string>} output - The expected output of the function for the given inputs.
 * @property {string} outputType - The type of the output (e.g., 'int', 'float', 'char').
 * @property {string} operator - The operator used to validate the output (e.g., '==').
 */

/**
 * C segment that runs a single testCase and prints GOOD
 * if satisfied, then prints the output if not satisfied...
 * @param {string} fName - name of the testCase
 * @param {TestCase} testCase - testCases
 */
const runTc = (fName, testCase) =>{

    
    const inputs = testCase.inputs.map(x => {
        return Array.isArray(x) ? `(${testCase.inputTypes[testCase.inputs.indexOf(x)]}){${x.join(',')}}` : x
    }).join(',');
    
    let formatSpecifier = {
        'int' : '%d',
        'float' : '%.5f', 
        'char' : '%c',    
    }


    let template = `
            res = ${fName}(${inputs});
            if (res ${testCase.operator} ${testCase.output}){
                printf("GOOD\\n");            
            } else {
                printf("${formatSpecifier[testCase.outputType]}\\n", res);
            }`

    return template;
}

 /**
 * templates a test script (main function) that tests a function with given test cases
 * @param {string} dtype
 * @param {string} fName
 * @param {string[]} inputTypes,
 * @param {TestCase[]} testCases
 */
export const createTestScript = (dtype, fName, inputTypes, testCases) => {

    const inTypesTemplate = inputTypes.join(',')
    const tcTemplates = testCases.map(x => runTc(fName, x)).join('') 


    template = `
        #include<stdio.h>

        ${dtype} ${fName}(${inTypesTemplate});

        int main(){

            ${dtype} res;
            ${tcTemplates}
            return 0;
        }

    `

    return template
}