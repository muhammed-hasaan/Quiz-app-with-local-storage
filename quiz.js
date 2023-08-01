const data = [

    {
        question : "What is Html",
            a : "hyper text markup lnaguage",
            b : "cascading style sheed" ,
            c : "java script" , 
            d : "Machine language",
            answer : "hyper text markup lnaguage"
    },
    {
        question : "What is css",

            a : "hyper text markup lnaguage" ,
            b : "cascading style sheed" ,
            c : "java script" ,
            d : "Machine language", 
            answer : "cascading style sheed"
       
    },
    {
        question : "What is js",
        
            a : "hyper text markup lnaguage" , 
            b : "cascading style sheed" , 
            c : "java script" , 
            d : "Machine language", 
            answer :"java script"

    },
    {
        question : "What is MC",
        
        a : "hyper text markup lnaguage" , 
        b : "cascading style sheed" , 
            c :"java script"  , 
            d : "Machine language", 
            answer : "Machine language"

        }
        
    ]
    
    
    var questions = document.getElementById("questions");
    var text11 = document.getElementById("text");
    var text22 = document.getElementById("text2");
    var text33 = document.getElementById("text3");
    var text44 = document.getElementById("text4");
    var next = document.getElementById("next");
    
    
    var questionsh =  0
    var userscror = 0;
    
    function showquestion(number) {
    
    questions.innerHTML= data[number].question
    text11.innerHTML=data[number].a
    text22.innerHTML=data[number].b
    text33.innerHTML=data[number].c
    text44.innerHTML=data[number].d
    next.disabled = true
    
}
showquestion(questionsh);





function Next(){
    if(questionsh < data.length){
        questionsh++
     showquestion(questionsh);
    }else{
        window.location.href='./result.html'
        localStorage.setItem('userscror' , userscror)
    }
    
    
}

function checkoption(name){
    
    if(name.textContent == data[questionsh].answer){
        next.disabled = false;
        userscror += 5
    }else{
    next.disabled = false;
    
}
}
