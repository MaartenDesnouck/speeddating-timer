$(function() {
    //-------------
    //- PIE CHART -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#pieChart").get(0).getContext("2d");
    var data = [{
        value: 1,
        color: "#008700",
        highlight: "#008700",
        label: "Full"
    }, {
        value: 0,
        color: "#303030",
        highlight: "#303030",
        label: "Empty"
    }];
    var options = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,
        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",
        //Number - The width of each segment stroke
        segmentStrokeWidth: 1,
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 70, // This is 0 for Pie charts
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - Animation easing effect
        animationEasing: "easeOutCirc",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: false,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
        //Boolean - whether to make the chart responsive to window resizing
        responsive: true,
        //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
    };
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    window.myPieChart = new Chart(ctx).Doughnut(data, options);

    var maxSeconds = 100;
    var switchTime = 20;
    var totalSeconds = 0;
    setInterval(function() {
        totalSeconds++;
        totalSeconds = totalSeconds % maxSeconds;
        var display = maxSeconds - totalSeconds - switchTime;

        if (totalSeconds < (maxSeconds - 60 - switchTime)) {
            var data = [{
                value: maxSeconds - totalSeconds - switchTime,
                color: "#008700",
                highlight: "#008700",
                label: "Full"
            }, {
                value: totalSeconds,
                color: "#303030",
                highlight: "#303030",
                label: "Empty"
            }];
        } else if (totalSeconds < (maxSeconds - 30 - switchTime)) {
            var data = [{
                value: maxSeconds - totalSeconds - switchTime,
                color: "#ff7e00",
                highlight: "#ff7e00",
                label: "Full"
            }, {
                value: totalSeconds,
                color: "#303030",
                highlight: "#303030",
                label: "Empty"
            }];
        } else if (totalSeconds < (maxSeconds - switchTime)){
            var data = [{
                value: maxSeconds - totalSeconds - switchTime,
                color: "#b01919",
                highlight: "#b01919",
                label: "Full"
            }, {
                value: totalSeconds,
                color: "#303030",
                highlight: "#303030",
                label: "Empty"
            }];
        } else {
            var display = "NEXT!";
            var data = [{
                value: 0,
                color: "#b01919",
                highlight: "#b01919",
                label: "Full"
            }, {
                value: 0,
                color: "#303030",
                highlight: "#303030",
                label: "Empty"
            }];
        }

        document.getElementById("donutText").innerHTML = '<h5 style="color:white;">'+display+'</h5>';
        window.myPieChart = new Chart(ctx).Doughnut(data, options);
    }, 1000);

});
