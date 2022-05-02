// write js code here corresponding to index.html
// You should add submit event on the form
var arr = JSON.parse(localStorage.getItem("matchlist"))|| []
document.querySelector("#masaiForm").addEventListener("submit",addmatch)
function addmatch(){
    event.preventDefault();
    var matchdata ={
        matchnum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value

    };
    arr.push(matchdata)
    localStorage.setItem("schedule",JSON.stringify(arr))
    JSON.parse(localStorage.getItem("schedule"))
    window.location.href="matches.html"

}


