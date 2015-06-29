$(document).ready(function() {
    $('#task1').click(function() {
    	var sum = 0;
		var n = $("#inp1").val();
        
		for (var i = 3; i <= n; i++) {
		    if ((i % 3 == 0) || (i % 5 == 0)) {
		        sum += i;
		    }
		}

		$('#result1 strong').text(sum);
    });

    $('#task2').click(function() {
    	var sum = 0;
		var f1 = 1;
		var f2 = 1;
		var s="";
		var n = $("#inp2").val();
        
		while (f2<=n)
		//for (var i = 1; i <= n; i++) 
		{
			f1 = f2 - f1;
			f2 = f1 + f2;
		    if (f2%2 == 0) {
		    	sum += f2;
		    	s += "  " + f2;
		    }

		}

		$('#result2 strong').text(sum);
    });

    function prime_num(n) {
    	var a = [];
        var f;
        var i=2;
        var next=3;

        while (i<=n) {
        	a.push(i); 
    	    i = next;
    	    next++;
    	    var ai=0;
    	    while ((ai<a.length/2)) {
        	    while (next%a[ai] == 0) {
        	    	next++; ai=0;
        	    }
        	    ai++;
    		}
        }

    	return a;
    }

    $('#task3').click(function() {
    	var max = 1;
		var s = "";
		var n = $("#inp3").val();
        var p = prime_num(n);
        var i=p.length;

        alert("Quantity: "+p.length+"\n\nPrime numbers:\n\n"+p);

		while (n % p[i-1] > 0) {i--;}
		
		$('#result3 strong').text(p[i-1]);
    });
});

