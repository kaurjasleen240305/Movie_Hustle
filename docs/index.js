 let consonant=document.getElementById('consonant');
let number=document.getElementById('number');
 for(let i=65;i<=90;i++){
             var node=document.createElement('button');
             node.type='submit';
             node.classList.add('subbtn');
             textnode=String.fromCharCode(i);
             node.append(textnode);
             node.onclick=function() {hint(this);};
             consonant.appendChild(node);
        }
for(let i=48;i<=57;i++){
             var node=document.createElement('button');
             node.type='submit';
             node.classList.add('subbtn');
             textnode=String.fromCharCode(i);
             node.append(textnode);
             node.onclick=function() {hint(this);};
             number.appendChild(node);
        }
                const url = 'https://abir82-bollywood-recommendations.p.rapidapi.com/?year=2018&genre=Comedy';
        const options = {
	        method: 'GET',
	       headers: {
	         	'X-RapidAPI-Key': '3684e6db84msh42d5d977177dfcdp15ac51jsn2b864f074624',
	         	'X-RapidAPI-Host': 'abir82-bollywood-recommendations.p.rapidapi.com'
	}
};
let l={};
fetch(url,options).then((response)=>{
             if (!response.ok) {
           throw new Error(`HTTP error: ${response.status}`);
            }
        return  response.json();
             }).then((json)=>{
               l=json;
             });
             let b=[];
             let hino=0;
             let h=0;
             let hiden=[];
             let s="";
             let q=0;
             let x=0;
             fet(0);
             function fet(q){
                b=[];
                hino=0;
                h=0;
                hiden=[];
                s="";
                k="";
               document.getElementById('gameloss').style.display='none';
               document.getElementById('nextbtn').style.display='none';
             fetch(url,options).then((response)=>{
                         if (!response.ok) {
                       throw new Error(`HTTP error: ${response.status}`);
                        }
                    return  response.json();
                         }).then((json)=>{
                       console.log(json);
                       // json is  an array of objects
                        let c=(json.data[q]).Title;
                          console.log(c);
                    
                        let d=c.toUpperCase();
                        let a=['A','E','I','O','U'];
                         console.log(d.length);
                         for(let i=0;i<d.length;i++){
                            let done;
                           if (a.includes(d[i])){
                                done=document.createElement('div');
                                done.classList.add("letter");
                                const f=document.createTextNode(d[i]);
                                done.appendChild(f);
                                done.id=i;
                            }
                            else if(d[i]==" "){
                                done=document.createElement('div');
                                done.classList.add("space");
                                const f=document.createTextNode(d[i]);
                                done.appendChild(f);
                                done.id=i;
                            }
                            else{
                                hiden.push(d[i]);
                                b.push(i);
                                done=document.createElement('div');
                                done.classList.add("letter");
                                done.id=i;
                            }
                            document.getElementById('one').appendChild(done);
                         }
                        document.getElementById('chances').innerHTML='CHANCES LEFT: '+b.length ;
                        
                    })
            }
            document.addEventListener('keypress',adding);
            function adding(e){
                let key=(e.key).toUpperCase();
                let array=document.getElementsByClassName('subbtn');
                let display=document.getElementById('consonant').style.display;
                console.log(display);
                if(display!='none'){
                for(let i=0;i<array.length;i++){
                    if(array[i].innerHTML==key){
                        hint(array[i]);
                        break;
                    }
                }
               }
            }

            function validateForm(){
                let movie=(document.forms['complete']['movie'].value).toUpperCase;
                if(movie==((l.data[q].Title).toUpperCase)){
                    document.getElementById('nextbtn').style.display='block';
                    score=Number(document.getElementById('point').innerHTML);
                    score+=1;
                    document.getElementById('point').innerHTML=String(score);
                }
            }
            function hint(value){
                let a=['A','E','I','O','U'];
               let conso=value.innerHTML;
               console.log(conso);
            console.log(conso.search(/^([a-z]{1}|[A-Z]{1}|[0-9]{1})$/g));
            if(conso.search(/^([a-z]{1}|[A-Z]{1}|[0-9]{1})$/g)>=0){
               // document.getElementById('invalid').style.display='none';
               conso=conso.toUpperCase();
               const str = l.data[q].Title;
               if(hiden.includes(conso)){
                h+=1;
                chances-=1;
                value.style.backgroundColor='#63FF20';
                 const indexes = [];
                 //let x=document.createElement('span');
                 document.getElementById('chances').innerHTML='You only have '+(b.length-h)+' chances';
                 //const f=document.createTextNode(conso);
                 //x.appendChild(f);
                 //document.getElementById('correct').appendChild(x);
                for (let index = 0; index < str.length; index++) {
                    if (((str[index].toUpperCase() )== conso) ) {
                       indexes.push(index);
                    }
               }
               for(let j=0;j<indexes.length;j++){
                  let r=document.getElementById(indexes[j]);
                  if(document.getElementById(indexes[j]).innerHTML==0){
                    r.innerHTML=conso;
                    hino+=1;
                  }
               }
            }
            else if((!(a.includes(conso))) && (!(hiden.includes(conso)))){
                h+=1;
                let x=document.createElement('span');
                value.style.backgroundColor='#E3242B';
                document.getElementById('chances').innerHTML='You only have '+(b.length-h)+' chances';
                // const f=document.createTextNode(conso);
                // x.appendChild(f);
                // console.log(x);
                // document.getElementById('wrong').appendChild(x);
            }
            console.log(hino)
            if (hino==b.length){
              //w  document.getElementById('result').innerHTML='CONGRATS!! YOU GUESSED THE CORRECT MOVIE TITLE';
               // for(let ll=0;ll<(document.getElementsByClassName('letter').length);ll++){
               //     document.getElementsByClassName('letter')[i];
               // }
                document.getElementById('nextbtn').style.display='block';
                let point=document.getElementById('point').innerHTML;
                point=String(Number(point)+1);
                document.getElementById('point').innerHTML=point;
            }
            else if((hino!=b.length) && (h==b.length)){
                document.getElementById('consonant').style.display='none';
                document.getElementById('number').style.display='none';
                let da="WRONG GUESS!! RIGHT NAME IS "+(str);
                document.getElementById('nextbtn').style.display='block';
                document.getElementById('gameloss').innerHTML=da;
                document.getElementById('gameloss').style.display='block';
                document.getElementById('complete').remove();
                
            }
        }
        else{
            document.getElementById('invalid').style.display='block';
        }    
             }
        function next(){
            let menu = document.getElementById('one');
            let arr=document.getElementsByClassName('subbtn');
            for(let i=0;i<arr.length;i++){
                arr[i].style.backgroundColor='grey';
            }
            while (menu.firstChild) {
               menu.removeChild(menu.firstChild);
            }
            document.getElementById('consonant').style.display='block';
            document.getElementById('number').style.display='block';
            //let correct=document.getElementById('correct');
            //while(correct.firstChild){
            //    correct.removeChild(correct.firstChild);
           // }
            //let wrong=document.getElementById('wrong');
            //while(wrong.firstChild){
            //    wrong.removeChild(wrong.firstChild);
            //}
          //  document.getElementsByClassName
            q+=1;
            fet(q);
            
        }
        function how(){
            console.log('hi')
            document.getElementById('how').classList.toggle('none');
            console.log(document.getElementById('how'));

        }
        
