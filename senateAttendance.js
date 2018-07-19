var statistics = {
    "stats": [{
            //NUMBER OF MEMBERS
            "numberOfDem": 0
                    },
        {
            "numberOfRep": 0
                    },
        {
            "numberOfInd": 0
                    },
        {
            "numberTotal": 0
                    },
              //AVERAGE VOTE% WITH PARTY IN PARTY
        {
            "averageVoteWithDems": 0
                    },
        {
            "averageVoteWithReps": 0
                    },
        {
            "averageVoteWithInd": 0
                    },
        {
            "averageVoteTotal": 0
                    },
              //LOYALTY
        {
            "leastLoyalMembers": 0
                    },
        {
            "mostLoyalMembers": 0
        },
              //ATTENDANCE
        {
            "leastAttendanceMembers": 0
        },
        {
            "mostAttendanceMembers": 0
        },
        {
            "numberTotalHouse": 0
              },
        {
            "averageVoteTotalHouse": 0
              }
                ]
}



var data;
var members;
if (window.location.pathname == '/senate_loyalty.html' || window.location.pathname == '/senate-attendance-statistics.html') {
    url = "https://api.myjson.com/bins/h4qrr"
} else {
    url = "https://nytimes-ubiqum.herokuapp.com/congress/113/house"
}

$.ajax({
    dataType: "json",

    url: url,
    cache: true,
    data: JSON,
    success: function (data2) {
        
        data = data2;
        members = data.results[0].members;
        app.senators = data.results[0].members;

        createStatistics();


        var leastLoyal = statistics.stats[8].leastLoyalMembers;
        var mostLoyal = statistics.stats[9].mostLoyalMembers;
        var leastAttendance = statistics.stats[10].leastAttendanceMembers;
        var mostAttendance = statistics.stats[11].mostAttendanceMembers;

console.log(JSON.stringify);


    }
});

//$(document).ready(function () {
//    console.log("ready");
//});



//VUE
var app = new Vue({
    el: '#app',
    data: {
        senators: [

        ],
        values: {
            numberOfDem: "",
            numberOfRep: "",
            numberOfInd: "",
            numberTotal: "",
            averageVoteWithDems: "",
            averageVoteWithReps: "",
            averageVoteWithInd: "",
            averageVoteTotal: "",
            leastLoyalMembers: [],
            mostLoyalMembers: [],
            leastAttendanceMembers: [],
            mostAttendanceMembers: [],
            numberTotalHouse: "",
            averageVoteTotalHouse: "",


        },





    },
    updated: function () {
        console.log("updated");
        $(".iframe").colorbox({
            iframe: true,
            width: "100%",
            height: "100%"
        });

    }
});
//WIDTH AND HEIGHT 100% ----> USED IMPORTANT
//DOES IT CHANGE WHEN I CHANGE %??
//MAKE OVERLAY WORK FOR HOUSE ATTENDANCE
$("anchor").click(function () {
    $('.overlay').show();
});


//createStatistics();
//createGlanceTable();
//
//createStatistics();
//createGlanceTable();


//MAKES DATATABLE BE EXECUTED 3SEC AFTER PAGE LOAD
function timeout() {
    $('#myTable, #myTable2').dataTable({
        "bPaginate": false,
        "sScrollY": "600",
        "bScrollCollapse": true

    });
    $("a.iframe.cboxElement").click(function () {
        $('.overlay').show();
        console.log("applied overlay for anchor");
    });


}

setTimeout("timeout()", 3000);

//CREATES STATISTICS
function createStatistics() {
    var rep = [];
    var dem = [];
    var ind = [];

    //    var nreps = 0;

    var votesWithReps = [];
    var votesWithDems = [];
    var votesWithInd = [];
    for (var i = 0; i < members.length; ++i) {
        if (members[i].party == "R") {
            rep.push(members[i])
            votesWithReps.push(parseFloat(members[i].votes_with_party_pct))
            //            nreps++;
        }
        if (members[i].party == "D") {
            dem.push(members[i])
            votesWithDems.push(parseFloat(members[i].votes_with_party_pct))
        }
        if (members[i].party == "I") {
            ind.push(members[i])
            votesWithInd.push(parseFloat(members[i].votes_with_party_pct))
        }

    }
    // FILLS NUMBERS OF PARTY MEMBERS, PASSES STATS INTO VUE INSTANCE
    statistics.stats[1].numberOfRep = rep.length;
    app.values.numberOfRep = statistics.stats[1].numberOfRep;


    statistics.stats[0].numberOfDem = dem.length;
    app.values.numberOfDem = statistics.stats[0].numberOfDem;


    statistics.stats[2].numberOfInd = ind.length;
    app.values.numberOfInd = statistics.stats[2].numberOfInd;


    statistics.stats[3].numberTotal = ind.length + rep.length + dem.length;
    app.values.numberTotal = statistics.stats[3].numberTotal;


    statistics.stats[12].numberTotalHouse = rep.length + dem.length;
    app.values.numberTotalHouse = statistics.stats[12].numberTotalHouse;





    // AVERAGE VOTES PER PARTY 
    //values pushed to json alraedy
    var sumVotesWithReps = 0;
    var sumVotesWithDems = 0;
    var sumVotesWithInd = 0;
    var sumVotesTotal = 0;
    var averageVoteWithReps = 0;
    var averageVoteWithDems = 0;
    var averageVoteWithInd = 0;
    var averageVoteTotal = 0;
    for (var i = 0; i < votesWithReps.length; i++) {
        sumVotesWithReps += votesWithReps[i]
    }
    for (var i = 0; i < votesWithDems.length; i++) {
        sumVotesWithDems += votesWithDems[i]
    }
    for (var i = 0; i < votesWithInd.length; i++) {
        sumVotesWithInd += votesWithInd[i]
    }
    averageVoteWithReps = (sumVotesWithReps / votesWithReps.length);
    averageVoteWithDems = (sumVotesWithDems / votesWithDems.length);
    averageVoteWithInd = (sumVotesWithInd / votesWithInd.length);
    var averageVoteTotal = (averageVoteWithReps + averageVoteWithDems + averageVoteWithInd) / 3;
    var averageVoteTotalHouse = (averageVoteWithReps + averageVoteWithDems) / 2;

    //PUSHING AVERAGE VOTES

    statistics.stats[4].averageVoteWithDems = averageVoteWithDems;
    app.values.averageVoteWithDems = statistics.stats[4].averageVoteWithDems;

    statistics.stats[5].averageVoteWithReps = averageVoteWithReps;
    app.values.averageVoteWithReps = statistics.stats[5].averageVoteWithReps;

    statistics.stats[6].averageVoteWithInd = averageVoteWithInd;
    app.values.averageVoteWithInd = statistics.stats[6].averageVoteWithInd;

    statistics.stats[7].averageVoteTotal = averageVoteTotal;
    app.values.averageVoteTotal = statistics.stats[7].averageVoteTotal;

    statistics.stats[13].averageVoteTotalHouse = averageVoteTotalHouse;





    //FIND 5 LOWEST LOYALTY 
    function compare(a, b) {
        if (a.votes_with_party_pct < b.votes_with_party_pct)
            return -1;
        if (a.votes_with_party_pct > b.votes_with_party_pct)
            return 1;
        return 0;
    }

    members.sort(compare);


    var leastLoyal = [];
    for (var i = 0; i <= data.results[0].members.length * 0.1; i++) {
        leastLoyal.push(members[i]);
    }
    //    CONDITION FOR BOTTOM 10% LEAST LOYAL
    // if(data.results[0].members[i].lenght <= ((data.results[0].members.lenght)*0.1))

    //    leastLoyal.push(members[0], members[1], members[2], members[3], members[4]);
    statistics.stats[8].leastLoyalMembers = leastLoyal;
    app.values.leastLoyalMembers = statistics.stats[8].leastLoyalMembers;

    // && member[i].votes_with_party_pct =< members[103].votes_with_party_pct*0,1


    //FIND 5 HIGHEST LOYALTY
    function compare2(a, b) {
        if (a.votes_with_party_pct > b.votes_with_party_pct)
            return -1;
        if (a.votes_with_party_pct < b.votes_with_party_pct)
            return 1;
        return 0;
    }
    members.sort(compare2)


    var mostLoyal = [];
    for (var i = 0; i <= data.results[0].members.length * 0.1; i++) {
        mostLoyal.push(members[i]);
    }
    //    mostLoyal.push(members[0], members[1], members[2], members[3], members[4]);
    statistics.stats[9].mostLoyalMembers = mostLoyal;
    app.values.mostLoyalMembers = statistics.stats[9].mostLoyalMembers;


    //MOST ATTENDANCE
    function compare3(a, b) {
        if (a.missed_votes_pct < b.missed_votes_pct)
            return -1;
        if (a.missed_votes_pct > b.missed_votes_pct)
            return 1;
        return 0;
    }
    members.sort(compare3)
    var mostAttendance = [];
    for (var i = 0; i <= data.results[0].members.length * 0.1; i++) {
        mostAttendance.push(members[i]);
    }


    //    mostAttendance.push(members[0], members[1], members[2], members[3], members[4]);
    statistics.stats[11].mostAttendanceMembers = mostAttendance;
    app.values.mostAttendanceMembers = statistics.stats[11].mostAttendanceMembers;


    //LEAST ATTENDANCE
    function compare4(a, b) {
        if (a.missed_votes_pct > b.missed_votes_pct)
            return -1;
        if (a.missed_votes_pct < b.missed_votes_pct)
            return 1;
        return 0;
    }
    members.sort(compare4)
    var leastAttendance = [];
    for (var i = 0; i <= data.results[0].members.length * 0.1; i++) {
        leastAttendance.push(members[i]);

    }

    //    leastAttendance.push(members[0], members[1], members[2], members[3], members[4]);
    statistics.stats[10].leastAttendanceMembers = leastAttendance;
    app.values.leastAttendanceMembers = statistics.stats[10].leastAttendanceMembers;



}
//(if members[i].missedvotes <= ((members[103].missedvotes)/0,1)


//CREATE TABLES
//TABLE AT GLANCE
//function createGlanceTable() {
//
//    var members = data.results[0].members;
//    var glanceTable = document.getElementById("glanceTable");
//    //ROW1
//    var row1 = document.createElement("tr");
////    glanceTable.append(row1);
//    var cell1 = document.createElement("td");
//    cell1.innerHTML = "Democrats" + " ";
//    row1.append(cell1);
//    var cell2 = document.createElement("td");
//    cell2.innerHTML = statistics.stats[0].numberOfDem + " ";
//    row1.append(cell2);
//    var cell3 = document.createElement("td");
//    cell3.innerHTML = statistics.stats[4].averageVoteWithDems
//    row1.append(cell3);
//
//    //ROW2
//    var row2 = document.createElement("tr");
//    glanceTable.append(row2);
//    var cell4 = document.createElement("td");
//    cell4.innerHTML = "Republicans" + " ";
//    row2.append(cell4);
//    var cell5 = document.createElement("td");
//    cell5.innerHTML = statistics.stats[1].numberOfRep + " ";
//    row2.append(cell5);
//    var cell6 = document.createElement("td");
//    cell6.innerHTML = statistics.stats[5].averageVoteWithReps
//    row2.append(cell6);
//
//    //ROW 3
//    if (statistics.stats[2].numberOfInd != 0) {
//        var row3 = document.createElement("tr");
//        glanceTable.append(row3);
//        var cell7 = document.createElement("td");
//        cell7.innerHTML = "Independent" + " ";
//        row3.append(cell7);
//        var cell8 = document.createElement("td");
//        cell8.innerHTML = statistics.stats[2].numberOfInd + " ";
//        row3.append(cell8);
//        var cell9 = document.createElement("td");
//        cell9.innerHTML = statistics.stats[6].averageVoteWithInd
//        row3.append(cell9);
//    }
//
//    //ROW 4
//    var averageNoInd = (statistics.stats[5].averageVoteWithReps) + (statistics.stats[4].averageVoteWithDems);
//    var row4 = document.createElement("tr");
//    glanceTable.append(row4);
//    var cell10 = document.createElement("td");
//    cell10.innerHTML = "Total" + " ";
//    row4.append(cell10);
//    var cell11 = document.createElement("td");
//    cell11.innerHTML = statistics.stats[3].numberTotal + " ";
//    row4.append(cell11);
//    var cell12 = document.createElement("td");
//    if (statistics.stats[2].numberOfInd == 0) {
//        cell12.innerHTML = averageNoInd;
//    } else {
//        cell12.innerHTML = statistics.stats[7].averageVoteTotal;
//    }
//
//    row4.append(cell12);
//
//    console.log(averageNoInd);
//
//
//}


//MERGED FUNCTION FOR LOYALTY AND ATTENDANCE TABLES
//function createAllTables(array, id) {
//    var members = data.results[0].members;
//    var table = document.getElementById(id);
//
//
//    for (var i = 0; i < array.length; i++) {
//        var row = document.createElement("tr");
//        var link = array[i].url;
//        var fullname = document.createElement("a");
//        if (array[i].middle_name != null) {
//            fullname.innerHTML = array[i].last_name + " " + array[i].first_name + " " + array[i].middle_name + " ";
//        } else {
//            fullname.innerHTML = array[i].last_name + " " + array[i].first_name + " ";
//        }
//        fullname.setAttribute("href", array[i].url);
//        row.insertCell().append(fullname);
//        row.insertCell().innerHTML = array[i].total_votes;
//        row.insertCell().innerHTML = array[i].votes_with_party_pct;
//
//        if (table === null) {
//            return;
//        } else {
//            document.getElementById(id).append(row);
//        }
//    }
//
//}






//
//    members.sort(function (a, b) {
//        console.log(parseFloat(a.votes_with_party_pct) - parseFloat(b.votes_with_party_pct));
//    });
