//GLOBAL VARIABLE AND URL
// Needed 2 urls for both senate and the house
var data;
if (window.location.pathname == '/senate-starter-page.html') {
    url = "https://api.myjson.com/bins/h4qrr"
} else {
    url = "https://nytimes-ubiqum.herokuapp.com/congress/113/house"
}




//AJAX CALL FOR DATA
var app = new Vue({
    //VUE instance linked to element in html
    el: "#app",
    //data and variables filled later, used to make functionalities
    data: {
        url: url,
        members: [],
        states: [],
        allMembers: [],
        canShowAdvice: false,
        showLoader: true

    },

    //this property is called when object is created. getGata method is called to find JSON
    created: function () {
        this.getData();
    },

    //Methods
    methods: {
        //Each of the methods is a property of that object (methods)

        //This function searches JSON and sets variables when returning
        //Local Storage can be used (like in attendance and loyalty?)
        getData: function () {
            //gets data from url, on return we get a response the data is downloaded
            fetch(this.url)
                .then(function (response) {
                    return response.json();
                })
                //fills variables with values
                //executes noRepeatedStates function
                //BIND??? An object containing one or more DOM event types and functions to execute for them.
                .then(function (data) {
                    this.members = data.results[0].members;
                    this.allMembers = this.members;
                    this.noRepeatedStates();
                    this.canShowAdvice = true;
                   
                }.bind(this));
        },
        //function maps members (calls function for each object in array)
        //assigning returned (after-function() states to variable)
        // sorting states
        //.unique to remove duplicates from sortedStates
        noRepeatedStates: function () {
            var allStates = $(this.members).map(function () {
                return this.state;
            });
            var sortedStates = allStates.sort();
            this.states = Array.from(jQuery.unique(sortedStates));
        },
        filter: function () {
            //original members data must be used because of vue (reactivness?)
            //view is updated every time we modify members
            //Opposite to regular js. Instead of wiping entire table and make it from scratch fills data and filters them
            //must be better ways to do it x) ok kek
            this.members = this.allMembers;

            //when checkbox with party name checked 
            // .get() transforms array-like into array
            var checkboxes = $("input[name=party]:checked").map(function () {
                return this.value;
            }).get();

            //State and party are being checked and if both return true they remain in the new table
            var resultMembers = this.members.filter(function (member) {
                var filter1 = checkboxes.includes(member.party) || checkboxes.length == 0;
                var filter2 = member.state == $("#states").val() || $("#states").val() == "all";
                return filter1 && filter2;
            });
            //New value is being assigned to members (this is being displayed in the table)
            this.members = resultMembers;




        }
    },
    mounted: function () {
        console.log("mounted");

    },
    //    WHY NOT MOUNTED
    updated: function () {
        console.log("updated");


        $(".iframe").colorbox({
            iframe: true,
            width: "500px",
            height: "500px"
        });

    }


})

//MAKES DATATABLE BE EXECUTED 3SEC AFTER PAGE LOAD
function timeout(){
       $('#myTable').dataTable({
            "bPaginate": false,
            "sScrollY": "600",
            "bScrollCollapse": true

        });

}

setTimeout("timeout()", 3000);



//
//activateClicks();
//createTable();

//
//function createTable() {
//
//    var myTable = document.getElementById("senateData");
//
//    var members = data.results[0].members; //all members 
//
//    myTable.innerHTML = ""; //empties variable myTable
//
//    for (var i = 0; i < members.length; i++) { //loop
//        //        console.log("for loop working");
//        if (canISeeTheMember(members[i])) { //if 
//            var row = document.createElement("tr");
//
//            var link = members[i].url;
//            var fullname = document.createElement("a");
//            if (members[i].middle_name != null) {
//                fullname.innerHTML = members[i].last_name + " " + members[i].first_name + " " + members[i].middle_name + " ";
//            } else {
//                fullname.innerHTML = members[i].last_name + " " + members[i].first_name + " ";
//            }
//            fullname.setAttribute("href", members[i].url);
//            app.names.push(fullname)
//            app.allStates.push(members[i].state);
//
//            row.insertCell().append(fullname);
//            row.insertCell().innerHTML = members[i].party;
//            row.insertCell().innerHTML = members[i].state;
//            row.insertCell().innerHTML = members[i].seniority;
//            row.insertCell().innerHTML = members[i].votes_with_party_pct + "%";
//
//            myTable.append(row);
//            //            console.log("row printed");
//        }
//    };
//    console.log(app.names);
//
//    console.log(app.allStates);
//}
//
//
//
//function activateClicks() {
//    document.getElementById("republican").onclick = createTable;
//    document.getElementById("democrat").onclick = createTable;
//    document.getElementById("independent").onclick = createTable;
//    document.getElementById("myDropdown").onchange = createTable;
//}
//
//function canISeeTheMember(member) {
//
//    var myFirstFilter = false;
//    var mySecondFilter = false;
//    var myThirdFilter = false;
//
//    var arrayChbx = [];
//
//    if (document.getElementById("republican").checked) {
//        arrayChbx.push("R");
//    }
//    if (document.getElementById("democrat").checked) {
//        arrayChbx.push("D");
//    }
//    if (document.getElementById("independent").checked) {
//        arrayChbx.push("I");
//    }
//
//    if (!document.getElementById("republican").checked && !document.getElementById("democrat").checked && !document.getElementById("independent").checked) {
//        arrayChbx.push("R");
//        arrayChbx.push("D");
//        arrayChbx.push("I");
//    }
//
//    if (arrayChbx.includes(member.party)) {
//        myFirstFilter = true;
//    }
//
//
//
//    var stateSelected = document.getElementById("myDropdown").value;
//    //    console.log(stateSelected);
//    if (stateSelected == member.state || stateSelected == "all") {
//        mySecondFilter = true;
//    }
//
//
//    var allFilters = myFirstFilter && mySecondFilter;
//
//    //    console.log(arrayChbx);
//
//    return allFilters;
//}
//
////creates dropdown menu
//var dropdown = document.getElementById("myDropdown")
//
//function myFunction() {
//    document.getElementById("myDropdown").classList.toggle("show");
//
//    console.log("dropdown works")
//    //ADDING STATES TO DROPDOWN MENU
//
//    for (i = 0; i < data.results[0].members.length; i++) {
//        var state = document.createElement("option");
//        var value = data.results[0].members[i].state;
//        var linkText = document.createTextNode(data.results[0].members[i].state);
//        state.setAttribute("value", value);
//
//
//        state.appendChild(linkText);
//
//        document.getElementById("myDropdown").append(state);
//    }
//}
// Close the dropdown if the user clicks outside of it
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
