var entry = $("#entry");


$("#btn").on('click',search);

function validEntry() {
    var input = Number(entry.val());
    console.log(entry.val());
    console.log(input);
    if (isNaN(input)) {
        return false
    }
    return true;
}

function search() {
    entry.css("border-style",'');
    entry.css("border-color",'');
    if (validEntry()) {
        console.log("OK");
    } else {
        entry.css("border-style",'solid');
        entry.css("border-color",'red');
    }
}