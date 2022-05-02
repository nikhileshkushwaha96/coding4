// write js code here corresponding to matches.html
var array = JSON.parse(localStorage.getItem("schedule"))
var favarr =[]
display(array)


function display(data){
    document.querySelector("tbody")
    data.forEach(function(elem){
        var row =document.createElement("tr");

        var td1 =document.createElement("td");
        td1.innerText=elem.matchnum

        var td2 =document.createElement("td");
        td2.textContent=elem.teamA

        var td3 =document.createElement("td");
        td3.textContent=elem.teamB
        var td4 =document.createElement("td");
        td4.textContent=elem.date
        var td5 =document.createElement("td");
        td5.textContent=elem.venue
        var td6 =document.createElement("td");
        td6.innerText="favourites"
        td6.style.color="white"
        td6.style.backgroundColor="blue"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            favour(elem)
        })

        row.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(row)
    });
   
    function favour(elem){
        favarr.push(elem)
        localStorage.setItem("favourites",JSON.stringify(favarr))


    };

    function filterfav(){
        var select = document.querySelector("#filterVenue").value
        
        
        
        var filter = array.filter(function(elem){
            return elem.venue == select;
        })
        display(filter);
    
        
    }

        
   
}


