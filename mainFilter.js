activateClicks(); // checks all cklickable elements on page
createTable(); //activates function creatTable


function createTable() {                   

    var myTable = document.getElementById("table");
 
    var members = data.results[0].members; //all members without [i]

    myTable.innerHTML = ""; //empties variable myTable

    for (var i = 0; i < members.length; i++) {  //loop

        if (canISeeTheMember(members[i])) { //if 
            var row = document.createElement("tr");
            row.insertCell().innerHTML = members[i].first_name;
            row.insertCell().innerHTML = members[i].party;
            row.insertCell().innerHTML = members[i].state;
            myTable.append(row);
        }
    };
}

function activateClicks() {
    document.getElementById("rep").onclick = createTable;
    document.getElementById("dem").onclick = createTable;
    document.getElementById("selector").onchange = createTable;
}

function canISeeTheMember(member) {
    var myFirstFilter = false;
    var mySecondFilter = false;
    var myThirdFilter = false;

    var arrayChbx = [];

    if (document.getElementById("rep").checked) {
        arrayChbx.push("R");
    }
    if (document.getElementById("dem").checked) {
        arrayChbx.push("D");
    }

    if (!document.getElementById("rep").checked && !document.getElementById("dem").checked) {
        arrayChbx.push("R");
        arrayChbx.push("D");
    }

    if (arrayChbx.includes(member.party)) {
        myFirstFilter = true;
    }

    var stateSelected = document.getElementById("selector").value;

    if (stateSelected == member.state || stateSelected == "all") {
        mySecondFilter = true;
    }

    if (member.first_name.length <= 5) {
        myThirdFilter = true;
    }

    var allFilters = myFirstFilter && mySecondFilter && myThirdFilter;



    return allFilters;
}