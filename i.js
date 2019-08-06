//alert("i");
var v = bl$("id_div_" + "plxName-i.js"); 
v.innerHTML = "i.js test v0.0. 51 ";
var b1	=  blo0.blBtn( v , v.id + "b1" , "b1", "gold" );
 
b1.n = 0;
b1.v1 = blo0.blDiv(v, v.id + "v1" , "v1", "lightgreen");
b1. onclick = function(){
	b1.n++;
	b1.v1.innerHTML = b1.n;	
}

var btnTitle	=  blo0.blBtn( v , v.id + "btnTitle	" , "title", "brown" );
btnTitle. onclick  = function(){
	this.v= blo0.blDiv(v, this.id + "v" , "v", "lightblue");
	this.v.innerHTML = ftnI;
	var a = this.v.innerHTML;
	var b = a.split("/*");
	var c = b[1].split(";;");
	this.v.innerHTML = c[0];	
	this.v.onclick = function(){		b1.v1.innerHTML = btnTitle.v.id;		}
}

var btnBody	=  blo0.blBtn( v , v.id + " btnBody	" , " Body	", "lightRed" );
btnBody	. onclick  = function(){
	this.v= blo0.blDiv(v, this.id + "v" , "v", "lightYellow");
	this.v.innerHTML = ftnI;
	var a = this.v.innerHTML;
	var b = a.split("/*");
	var c = b[1].split(";;");
	var d = c[1].split("*/");
	this.v.innerHTML = d[0];	

	this.v.onclick = function(){		b1.v1.innerHTML = btnBody.v.id;		}
}

function s2d (oDivBoss,obj)
    {        
        var oBoss = oDivBoss;
        if(!oBoss) {
           oBoss = document.createElement("div");
           oBoss.id = "divBlShowObj";
           oBoss.style.border = "green 1px solid";
           document.body.appendChild(oBoss);
        } 
        if(!oBoss){
            alert("boss error!");return;
        }
        oBoss.innerHTML = "";
        for(i in obj)
		{
			  var b = document.createElement("button");
			  b.id = b.innerHTML = i;
			  b.style.backgroundColor = "gray";
			  if(i.charAt(0)=="b"&&i.charAt(1)=="l") b.style.backgroundColor = "yellow";
			  oBoss.appendChild(b);
			  var d = document.createElement("div");

			  d.style.border = "blue 1px solid";
			  d.style.backgroundColor = "green";
			  d.style.colsor = "yellow";
			  oBoss.appendChild(d); 
			  b.vEnd = document.createElement("div");
			  b.vEnd.innerHTML = "";
			  oBoss.appendChild(b.vEnd); 

			  b.onclick = function(_this,_d,_o){
				_d.innerHTML = _o;
				blo0.blShowObj2Div(_d,_o);
				return function(){_on_off_div(_this,_d);}
			  }(b,d, obj[i]);b.onclick(); 


			 
		}
    }   
var btnParseBody	=  blo0.blBtn( v , v.id + " btnParseBody	" , " ParseBody	", "purple" );
btnParseBody	. onclick  = function(){
	eval(btnBody	.v.innerHTML);
	s2d (b1.v1,ws);
	var m = document.getElementsByTagName("textarea"); var p = m[0]; p.value = this.id;
}

//=======================================================================================================
var ftnI = function(){//ftnI;
/*
//title
BuildingVocabularySkills;;

//body<br>
var ws= {
  "blw1":{"w":"acknowledge",
	"ex":[
		"Stubborn people often find it difficult to acknowledge their errors. They hate to admit they were wrong.",
		"Even after most of the votes have been counted, Senator Rice refused to acknowledge that he had lost."
	]
  },
  "blw2":{"w":"alternative",
	"ex":[
		"The teacher stated the alternatives to Tim--either retake the test or get a D for the course.",
		"When her dog began to suffer from cancer, Wanda felt she had no alternative. He would have to be put to sleep."
	]
  }
};



*/
}