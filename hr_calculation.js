function hrcalc() {
    var gainsb =document.getElementById("zone2progress").value
    var minhrbox = document.getElementById("minhr").value
    var maxhrbox = document.getElementById("maxhr").value
    var hrworkoutbox = document.getElementById("hrworkout").value

    var minhr = minhrbox.value
    var maxhr = maxhrbox.value
    var hrworkout = hrworkoutbox.value
    if (hrworkout.value <= maxhr.value) and (hrworkout.vale >=minhr.value); {
        gains.value = gains.value + 10
    }

}