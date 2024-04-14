function hrcalc() {
    var gains =document.getElementById("zone2progress").value
    var minhr = document.getElementById("minhr").value
    var maxhr = document.getElementById("maxhr").value
    var hrworkout = document.getElementById("hrworkout").value
    if (hrworkout <= maxhr) and (hrworkout >=minhr); {
        gains.value = gains + 10
    }

}