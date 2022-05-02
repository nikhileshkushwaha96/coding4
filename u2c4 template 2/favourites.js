// write js code here corresponding to favourites.html
var favarr=JSON.parse(localStorage.getItem("favourites"))||[]
display(favarr)

function display(data){
    document.querySelector("tbody")
    data.forEach(function(elem,index){
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
        td6.innerText="REmove as favour"
        td6.style.color="white"
        td6.style.backgroundColor="blue"
        td6.addEventListener("click",function(){
            deletefav(elem,index)
        })

        row.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(row)
    });
    function deletefav(elem,index){
        favarr.splice(index,1)
        localStorage.setItem("favour",JSON.stringify(favarr))
        window.location.reload();

    }
}