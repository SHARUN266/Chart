export  var option = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          labelColor: function (context) {
            return {
              borderColor: "rgb(0, 0, 255)",
              backgroundColor: "rgb(255, 0, 0)",
              borderWidth: 2,
              borderDash: [2, 2],
              borderRadius: 2,
            };
          },
          labelTextColor: function (context) {
            return "white";
          },
        },
      },
    },
  };