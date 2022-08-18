const arrq=[{
    q:"1. Which is the smallest country in the world?" , 
    ind:"0", 
    ans: [{ops1:"A.   Singapore" , val:"f"},
        {ops2:"B.     Vatican City", val:"t"},
        {ops3:"C.     Mexico" , val:"f"},
        {ops4:"D.     Iceland" , val:"f"}
    ]
} ,
{
    q:"2. Who discovered that the Earth revolves around the Sun?",
    ind:"1",
    ans:[{ops1:"A.   Galileo Galili" , val:"f"},
         {ops2:"B.   Albert Einstein" , val:"f"},
          {ops3:"C.   Nikola Tesla" , val:"f"},
        {ops4:"D.   Nikaulus Copernicus" , val:"t"}]
} , 
{
    q:"3. How long is an olympic swimming pool in metres?",
    ind:"2",
    ans:[{ops1:"A.  70 metres"},
{ops2:"B.  100 metres"},
{ops3:"C.  120 metres"},
{ops4:"D.  50 metres"}]
} , 
{
    q:"4. How many languages are written from right to left?",
    ind:"3",
    ans:[{ops1:"A. 12"},
{ops2:"B. 5"} , {ops3:"C. 90"} , {ops4:"D. 139"}]
} ,
{
    q:"5. Which is considered the largest empire in history?",
    ind:"4",
    ans:[{ops1:"A. Mauryan Empire"} , {ops2:"B. Mongol Empire"} , {ops3:"C. Roman Empire"} , {ops4:"D. Byzantine Empire"}]

}];
var cor0 = 1;
var cor1 = 3;
var cor2=3;
var cor3=0;
var cor4=1;
var iter = 0; var m = 0;
 var addi = 0;
display(iter);
function display(i)
{
    document.getElementsByClassName("head1")[0].firstChild.innerText=arrq[i].q;
    document.getElementsByClassName("item1")[0].firstChild.innerText=arrq[i].ans[0].ops1;
    document.getElementsByClassName("item2")[0].firstChild.innerText=arrq[i].ans[1].ops2;
    document.getElementsByClassName("item3")[0].firstChild.innerText=arrq[i].ans[2].ops3;
    document.getElementsByClassName("item4")[0].firstChild.innerText=arrq[i].ans[3].ops4;
    
    document.getElementsByClassName("item1")[0].firstChild.value=arrq[i].ans[0].val;
    document.getElementsByClassName("item2")[0].firstChild.value=arrq[i].ans[1].val;
    document.getElementsByClassName("item3")[0].firstChild.value=arrq[i].ans[2].val;
    document.getElementsByClassName("item4")[0].firstChild.value=arrq[i].ans[3].val;

    oppera(i);
}

function oppera(x)
{    
    switch(x)
    {
       case 0:
        document.getElementsByClassName("item1")[0].addEventListener("click" , function()
        {
            document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="tomato";
            document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="lightgreen";
            document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
            document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="white";
            addi = 0;
        })
        document.getElementsByClassName("item3")[0].addEventListener("click" , function()
        {
            document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="tomato";
            document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="lightgreen";
            document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
            document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="white";
            addi = 0;
        })
        document.getElementsByClassName("item4")[0].addEventListener("click" , function()
        {
            document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="tomato";
            document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="lightgreen";
            document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
            document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
            addi =0;
        })
        document.getElementsByClassName("item2")[0].addEventListener("click" , function()
        {
            document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="lightgreen";
          addi = 1;
        })
        m = m+addi;
        break;
        case 1:
            document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
            document.getElementsByClassName("item1")[0].addEventListener("click" , function()
            {
                document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="tomato";
                document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="lightgreen";
                document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
                addi =0;
            })
            document.getElementsByClassName("item3")[0].addEventListener("click" , function()
            {
                document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="tomato";
                document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="lightgreen";
                document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
                document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                addi =0;
            })
            document.getElementsByClassName("item2")[0].addEventListener("click" , function()
            {
                document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="tomato";
                document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="lightgreen";
                document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
                document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
                addi =0;})
            document.getElementsByClassName("item4")[0].addEventListener("click" , function()
            {
                document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="lightgreen";
                document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
                document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
                addi =1;
            })
            m = m + addi;
            break;
            case 2:
                document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="white";
                document.getElementsByClassName("item1")[0].addEventListener("click" , function()
                {
                    document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="tomato";
                    document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="lightgreen";
                    document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
                    document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                    addi =0;
                })
                document.getElementsByClassName("item3")[0].addEventListener("click" , function()
                {
                    document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="tomato";
                    document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="lightgreen";
                    document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
                    document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                    addi =0;})
                document.getElementsByClassName("item2")[0].addEventListener("click" , function()
                {
                    document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="tomato";
                    document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="lightgreen";
                    document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
                    document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
                    addi =0;})
                document.getElementsByClassName("item4")[0].addEventListener("click" , function()
                {
                    document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="lightgreen";
                    document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
                    document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                    document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
                    addi =1;
                })
                m = m+addi;
                break;
                case 3:
                    document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                    document.getElementsByClassName("item2")[0].addEventListener("click" , function()
                    {
                        document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="tomato";
                        document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="lightgreen";
                        document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
                        document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="white";
                        addi =0;
                    })
                    document.getElementsByClassName("item3")[0].addEventListener("click" , function()
                    {
                        document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="tomato";
                        document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="lightgreen";
                        document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                        document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="white";
                        addi =0;
                    })
                    document.getElementsByClassName("item4")[0].addEventListener("click" , function()
                    {
                        document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="tomato";
                        document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="lightgreen";
                        document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                        document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
                        addi =0;
                    })
                    document.getElementsByClassName("item1")[0].addEventListener("click" , function()
                    {
                        document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="lightgreen";
                        document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                        document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
                        document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="white";
                        addi =1;
                    })
                    m = m+addi;
                    break;
                    case 4:
                        document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
                        document.getElementsByClassName("item1")[0].addEventListener("click" , function()
        {
            document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="tomato";
            document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="lightgreen";
            document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
            document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="white";
            addi =0;
        })
        document.getElementsByClassName("item3")[0].addEventListener("click" , function()
        {
            document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="tomato";
            document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="lightgreen";
            document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
            document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="white";
            addi =0;
        })
        document.getElementsByClassName("item4")[0].addEventListener("click" , function()
        {
            document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="tomato";
            document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="lightgreen";
            document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
            document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
            addi =0;
        })
        document.getElementsByClassName("item2")[0].addEventListener("click" , function()
        {
            document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="lightgreen";
            document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
            document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
            document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="white";
            addi =1;
        })
        m = m+addi;
        break;
        default:
            alert("invalid!");

    }
}   
function restore(y)
{
   document.getElementsByClassName("item1")[0].firstChild.style.backgroundColor="white";
   document.getElementsByClassName("item2")[0].firstChild.style.backgroundColor="white";
   document.getElementsByClassName("item3")[0].firstChild.style.backgroundColor="white";
   document.getElementsByClassName("item4")[0].firstChild.style.backgroundColor="white";
}
    document.getElementsByClassName("next")[0].addEventListener("click" , function()
    {
        if(iter<4)
        {
        iter++;
        display(iter);
        restore(iter);
        }
        else{
            m = m + addi;
            alert("You have completed the game with a score : "+m+"/5 !");
        }
    })
    document.getElementsByClassName("prev")[0].addEventListener("click" , function()
    {
        if(iter>0)
        {
        iter--;
        display(iter);
        restore(iter);
        }
        else
        {alert("There are no previous questions! and your score is 0");}
    })

