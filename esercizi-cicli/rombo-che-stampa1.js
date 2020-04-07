var tabella = '';
var spazi;
var num = 27;

    for(var i=1; i<=num*2; i+=2)
    {
       if (num >= i)
        spazi = num-i;
         else
          spazi = i-num;

        for(var j=1; j<=spazi/2; j+=1)
        {
          tabella+=' ';
        }

           for (var j=1; j<=num-spazi; j+=1)
            {
               tabella+='x';
              }

       tabella+='\n';
     }

console.log(tabella);
