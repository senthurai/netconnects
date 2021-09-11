function update(input,form1){
   form1.output.value+=input
}

function clearUpdate(input,output){
   output.value=input
}

function replace(output){
  output=output.replace('÷' , '/').replace('%','*(1/100)').replace('X','*')
  console.log(output)
     return output
  

}
// 5%x10=5x(1/100)x10