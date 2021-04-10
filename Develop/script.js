var dateEl = $("#currentDay");

dateEl.text(moment().format('dddd, MMMM Do'));
var hour = moment().hour();

$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id"); 

    localStorage.setItem(time, text);
})

for (var i = 9; i < 17; i++) {
    $(`#${i} .description`).val(localStorage.getItem(`${i}`));
}

function hourTracker() {
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        console.log( blockHour, hour)

        if (blockHour < hour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker();
