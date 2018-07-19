//var members = data.results[0].members;
//
//var table = document.getElementById("senateData");
//var i = data.results[0].members[i];

//
//var republicans = data.results[0].members[i];
//var uberArray = [];
//document.getElementById("republican").onclick = function maketable(x) {
//    table.innerHTML = "";
//    for (i = 0; i < data.results[0].members.length; i++) {
//        var party = data.results[0].members[i].party
//        if (party == "R") {
//            uberArray.push(data.results[0].members[i])
//        }
//    }
//    console.log(uberArray)
//
//
//    for (i = 0; i < data.results[0].members.length; i++) {
//        var party = data.results[0].members[i].party
//        if (party == "R") {
//            //for (i in obj) {
//            //  result.push(i);
//            //  }
//
//            var tr = document.createElement("tr");
//            table.append(tr);
//
//
//            var link = members[i].url;
//            var fullname = document.createElement("a");
//            if (members[i].middle_name != null) {
//                fullname.innerHTML = members[i].last_name + " " + members[i].first_name + " " + members[i].middle_name + " ";
//            } else {
//                fullname.innerHTML = members[i].last_name + " " + members[i].first_name + " ";
//            }
//            fullname.setAttribute("href", members[i].url);
//            tr.insertCell().append(fullname);
//
//            var party = document.createElement("td");
//            party = members[i].party + " ";
//            tr.insertCell().append(party);
//
//
//            var state = document.createElement("td");
//            state = members[i].state + " ";
//            tr.insertCell().append(state);
//
//
//            var seniority = document.createElement("td");
//            seniority = members[i].seniority + " ";
//            tr.insertCell().append(seniority);
//
//
//            var votesWithParty = document.createElement("td");
//            votesWithParty = members[i].votes_with_party_pct + "%";
//            tr.insertCell().append(votesWithParty);
//
//
//        }
//    }
//
//}
//document.getElementById("democrat").onclick = function maketable(x) {
//    table.innerHTML = "";
//    for (i = 0; i < data.results[0].members.length; i++) {
//        var party = data.results[0].members[i].party
//        if (party == "D") {
//            uberArray.push(data.results[0].members[i])
//        }
//    }
//    console.log(uberArray)
//
//
//
//
//    //    document.getElementById("senateData2").innerHTML = "";
//    for (i = 0; i < data.results[0].members.length; i++) {
//        var party = data.results[0].members[i].party
//        //    party = members[i].party["R"]
//        if (party == "D") {
//            var tr = document.createElement("tr");
//            table.append(tr);
//
//
//            var link = members[i].url;
//            var fullname = document.createElement("a");
//            if (members[i].middle_name != null) {
//                fullname.innerHTML = members[i].last_name + " " + members[i].first_name + " " + members[i].middle_name + " ";
//            } else {
//                fullname.innerHTML = members[i].last_name + " " + members[i].first_name + " ";
//            }
//            fullname.setAttribute("href", members[i].url);
//            tr.insertCell().append(fullname);
//
//            var party = document.createElement("td");
//            party = members[i].party + " ";
//            tr.insertCell().append(party);
//
//
//            var state = document.createElement("td");
//            state = members[i].state + " ";
//            tr.insertCell().append(state);
//
//
//            var seniority = document.createElement("td");
//            seniority = members[i].seniority + " ";
//            tr.insertCell().append(seniority);
//
//
//            var votesWithParty = document.createElement("td");
//            votesWithParty = members[i].votes_with_party_pct + "%";
//            tr.insertCell().append(votesWithParty);
//
//
//        }
//    }
//    //    document.getElementById("democrat").disabled = true;
//    //    document.getElementById("republican").disabled = false;
//}
//
//
//document.getElementById("independent").onclick = function maketable(x) {
//    table.innerHTML = "";
//
//    for (i = 0; i < data.results[0].members.length; i++) {
//        var party = data.results[0].members[i].party
//        if (party == "I") {
//            uberArray.push(data.results[0].members[i])
//        }
//    }
//    console.log(uberArray)
//    //    document.getElementById("senateData2").innerHTML = "";
//    for (i = 0; i < data.results[0].members.length; i++) {
//        var party = data.results[0].members[i].party
//        //    party = members[i].party["R"]
//        if (party == "I") {
//            var tr = document.createElement("tr");
//            table.append(tr);
//
//
//            var link = members[i].url;
//            var fullname = document.createElement("a");
//            if (members[i].middle_name != null) {
//                fullname.innerHTML = members[i].last_name + " " + members[i].first_name + " " + members[i].middle_name + " ";
//            } else {
//                fullname.innerHTML = members[i].last_name + " " + members[i].first_name + " ";
//            }
//            fullname.setAttribute("href", members[i].url);
//            tr.insertCell().append(fullname);
//
//            var party = document.createElement("td");
//            party = members[i].party + " ";
//            tr.insertCell().append(party);
//
//
//            var state = document.createElement("td");
//            state = members[i].state + " ";
//            tr.insertCell().append(state);
//
//
//            var seniority = document.createElement("td");
//            seniority = members[i].seniority + " ";
//            tr.insertCell().append(seniority);
//
//
//            var votesWithParty = document.createElement("td");
//            votesWithParty = members[i].votes_with_party_pct + "%";
//            tr.insertCell().append(votesWithParty);
//
//
//        }
//    }
//}
//$('#republican').prop('checked', false);
//$('#democrat').prop('checked', false);
//$('#independent').prop('checked', false);
//
//
////DROPDOWN MENU 
//var dropdown = document.getElementById("myDropdown")
//
//function myFunction() {
//    document.getElementById("myDropdown").classList.toggle("show");
//
//    console.log("dropdown works")
//    //ADDING STATES TO DROPDOWN MENU
//
//    for (i = 0; i < data.results[0].members.length; i++) {
//        var state = document.createElement("a");
//        var anchorId = data.results[0].members[i].state;
//        var linkText = document.createTextNode(data.results[0].members[i].state);
//        state.setAttribute("id", anchorId);
//
//
//        state.appendChild(linkText);
//
//        document.getElementById("myDropdown").append(state);
//    }
////    var anchorId = data.results[0].members[i].state;
//    //    document.getElementById(data.results[0].members[i].state).onclick = function (addState) {
//    //        console.log(works);
//    //    }
//
//}
//
////var anchorId2 = "";
////anchorId2 = members[i].state;
////document.getElementById(anchorId2).onclick = function clickState(x) {
////    console.log("works");
////}
//
//
//// Close the dropdown if the user clicks outside of it
//window.onclick = function (event) {
//    if (!event.target.matches('.dropbtn')) {
//
//        var dropdowns = document.getElementsByClassName("dropdown-content");
//        var i;
//        for (i = 0; i < dropdowns.length; i++) {
//            var openDropdown = dropdowns[i];
//            if (openDropdown.classList.contains('show')) {
//                openDropdown.classList.remove('show');
//            }
//        }
//    }
//}
//
//
//
//
//
//
//


//.link("link")
//
//  var row = document.createElement("tr");
//    
//    var cell1 = document.createElement("td");
//    cell1 = members[index].first_name;
//    row.append(cell1);

//    var cell2 = document.createElement("td");
//    cell2 = "Party";
//    row.append(cell2);
//    
//    var cell3 = document.createElement("td");
//    cell3 = "State";
//    row.append(cell3);




//for (i = 0; i < data.results[0].members.length; i++) {
//    var tr = "<tr>";
//    var fullname = "<td>" + data.results[0].members[i].title + data.results[0].members[i].last_name + data.results[0].members[i].first_name + "</td>";
//    var party = "<td>" + data.results[0].members[i].party + "</td>";
//    var seniority = "<td>" + data.results[0].members[i].seniority + "</td>";
//    var votesWithParty = "<td>" + data.results[0].members[i].votes_with_party_pct + "%" + "</td></tr>";
//    
//    
//    table.append(tr);
//    table.append(fullname);
//    table.append(party);
//    table.append(seniority);
//    table.append(votesWithParty);
//    
//}



//var tbl=$("<table/>").attr("id","mytable");
//$("#div1").append(tbl);
//for(var i=0;i<obj.length;i++)
//{
//    var tr="<tr>";
//    var td1="<td>"+obj[i]["id"]+"</td>";
//    var td2="<td>"+obj[i]["name"]+"</td>";
//    var td3="<td>"+obj[i]["color"]+"</td></tr>";
//    
//   $("#mytable").append(tr+td1+td2+td3); 
//  
//}
