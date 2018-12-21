var URL = location.protocol + '//' + location.host;

$(document).ready(function() {
    var diseasesAPI = URL + "/app/getdiseases";
    $.getJSON(diseasesAPI).done(function(allDiseases) {
         var diseasesScoresCheckboxes = [];

         for(var disease in allDiseases) {
             var diseaseScoreCheckbox = [];
             diseaseScoreCheckbox[0] = disease;
             diseaseScoreCheckbox[1] = allDiseases[disease]+1; // This is the score.

             var input = "<input type=\"checkbox\" name=\"PD[]\" value=\"" + disease + "\">";
             diseaseScoreCheckbox[2] = input;

             diseasesScoresCheckboxes.push(diseaseScoreCheckbox)
         }

         $('#add-new-patient').dataTable({
               data: diseasesScoresCheckboxes,
               columns:
               [
                   {
                       title: "Disese"
                   },
                   {
                       title: "score"
                   },
                   {
                       title: "Diagnosis"
                   },
               ],
               scrollY: '40vh',
               scrollCollapse: true,
               paging: true,
               info: false,
               language: {
                 sSearch: "Search disese"
               }
          });
     });
});
