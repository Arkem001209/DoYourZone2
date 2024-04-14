function hrcalc() {
    var gains =document.getElementById("zone2progress").value
    var minhr = document.getElementById("minhr").value
    var maxhr = document.getElementById("maxhr").value
    var hrworkout = document.getElementById("hrworkout").value
    if (hrworkout.value <= maxhr.value) and (hrworkout.vale >=minhr.value); {
        gains.value = gains.value + 10
    }

}