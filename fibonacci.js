var a,b,result;
a = 0;
b = 1;
result = b;

for(i= 1; i < 100; i++) {
    console.log(result)
    result = a + b
    a = b 
    b = result
}