

//begin
    $("#searchButton").on("click", function(){
        var searchInput = $("#searchInput").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&format=json&callback=?";
        
        $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function(data, status, jqXHR) {
                console.log(data);
                $("#returnSearch").html();
                for(var i=0; i<data[1].length; i++){
                    $("#returnSearch").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div>")
                }
            }
        });
    });