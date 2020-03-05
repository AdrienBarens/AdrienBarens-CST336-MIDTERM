var entry = $("#entry");

$("#btn").on('click', search);

//$("#isbn").on('submit',search);

function validEntry() {
    var input = Number(entry.val());
    if (isNaN(input)) {
        return false
    }
    return true;
}

//0451526538

function search() {
    entry.css("border-style",'');
    entry.css("border-color",'');
    if (validEntry()) {
        var link = "ISBN:" + entry.val();
        console.log(link);
        $.ajax({
            method: 'GET',
            url: 'https://openlibrary.org/api/books',
            dataType: 'json',
            data: {
                bibkeys: link,
                format: 'json',
                jscmd: "data"
            },
            success: function (data) {
                $("#display").html('');
                var result = data[link];
                console.log(result);
                $("#display").append('<div id="cover" class="col-md-3"><img alt="cover" src="' + result.cover.large + '"></div>');
                $("#display").append('<div id="info" class="col-md-4">Title : ' + result.title + '<br>' +
                    'Author: ' + result.authors[0].name + '<br>' +
                    'Publish: ' + result.publish_date + '<br>' +
                    'Publisher: ' + "undefined" + '<br>' + link + '<br>' +
                    'Pages: ' + result.number_of_pages +'</div>');
            }
        })
    } else {
        entry.css("border-style",'solid');
        entry.css("border-color",'red');
    }
}