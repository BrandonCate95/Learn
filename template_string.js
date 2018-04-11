//template strings are a arguably better way of injections variables into strings
//EX:

function buildURL(strArray, ...valArray) {  
    console.log(strArray.raw);  
}  

var lang = "en-us";  
var a = "library";  
var b = "dn771551.aspx";  

// Call the tagged template function.  
var url = buildURL`http://msdn.microsoft.com/${lang}/${a}/${b}`;  

// Ouput:  
// http://msdn.microsoft.com/en-us/library/dn771551.aspx 