$('#showNPI').click(function () {    
    $("#allNPIDiv").show();
    $("#orgDocDiv").hide();
});
$('#showOrg').click(function () {
   $("#allNPIDiv").hide(); 
    $("#orgDocDiv").show();
      
    
});
function ResetButtons() {
    $("button").css("background-color", "#31b0d5");

}