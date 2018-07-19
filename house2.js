var members = data.results[0].members;

var table = document.getElementById("houseData");
var i = data.results[0].members[i]
for (i = 0; i < data.results[0].members.length; i++) {

    var tr = document.createElement("tr");
    table.append(tr);


    var link = members[i].url;
    var fullname = document.createElement("a");
    if (members[i].middle_name != null) {
        fullname.innerHTML = members[i].last_name + " " + members[i].first_name + " " + members[i].middle_name + " ";
    } else {
        fullname.innerHTML = members[i].last_name + " " + members[i].first_name + " ";
    }
    fullname.setAttribute("href", members[i].url);
    tr.insertCell().append(fullname);

    var party = document.createElement("td");
    party = members[i].party + " ";
    tr.insertCell().append(party);


    var state = document.createElement("td");
    state = members[i].state + " ";
    tr.insertCell().append(state);


    var seniority = document.createElement("td");
    seniority = members[i].seniority + " ";
    tr.insertCell().append(seniority);


    var votesWithParty = document.createElement("td");
    votesWithParty = members[i].votes_with_party_pct + "%";
    tr.insertCell().append(votesWithParty);

}
