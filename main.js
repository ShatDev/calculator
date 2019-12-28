function add(number) {
    document.form.screen.value = document.form.screen.value + number;
}

function equals() {
    var output = document.form.screen.value;
    if(output) {
        document.form.screen.value = eval(output);
    }
}

function clean() {
    document.form.screen.value = "";
}

function back() {
    var output = document.form.screen.value;
    document.form.screen.value = output.substring(0, output.length-1);
}