var numeros = [];
  function generateRadom(min, max){
    for (var x= 0; x<100; x++){
       numeros.push(Math.floor(Math.random()*5)+1);
   }
   console.log(numeros);
   count = 0;
   console.log("Histograma");
   for (var i=1; i<=5; i++) {
     for (var j=0; j<=numeros.length; j++) {
       if(numeros[j]==i)
       {
       count++;
      }
    }
    console.log(i+"." + "*".repeat(count));
    count = 0;
  }
}   
/*
<script type="text/javascript">
  var numeros = [];
  function generateRadom(min, max){
    for (var x= 0; x<100; x++){
        numeros.push(Math.floor(Math.random()*5)+1);
    }
    console.log(numeros);
    count = 0;
    console.log("Histograma");
    for (var i=1; i<=5; i++) {
      for (var j=0; j<=numeros.length; j++) {
        if(numeros[j]==i)
        {
          count++;
        }
      }
      console.log(i+"." + "*".repeat(count));
      count = 0;
    }
  }      
  </script>*/