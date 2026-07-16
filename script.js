document.addEventListener("DOMContentLoaded", function () {

  // ========== CHART DEFAULTS ==========
  Chart.defaults.font.family = "'Segoe UI', Arial, Helvetica, sans-serif";
  Chart.defaults.font.size = 11;
  Chart.defaults.color = "#9ca3af";

  // ========== SHARED BAR OPTIONS ==========
  var barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          font: { size: 11 },
          color: "#9ca3af"
        }
      },
      y: {
        grid: { color: "#f0f0f0", drawBorder: false },
        border: { display: false },
        ticks: {
          font: { size: 11 },
          color: "#9ca3af"
        }
      }
    }
  };

  // ========== CARD 1: Employee Addition Trend ==========
  var additionCtx = document.getElementById("additionChart");
  if (additionCtx) {
    new Chart(additionCtx, {
      type: "bar",
      data: {
        labels: ["N", "D", "J", "F", "M", "A", "M"],
        datasets: [{
          data: [500, 200, 500, 800, 200, 600, 500],
          backgroundColor: "#8fc2f8",
          borderRadius: 4,
          barThickness: 28
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: { font: { size: 11 }, color: "#9ca3af" }
          },
          y: {
            min: 0,
            max: 800,
            ticks: {
              stepSize: 200,
              font: { size: 11 },
              color: "#9ca3af"
            },
            grid: { color: "#f0f0f0", drawBorder: false },
            border: { display: false }
          }
        }
      }
    });
  }

  // ========== CARD 2: Employee Attrition Trend ==========
  var attritionCtx = document.getElementById("attritionChart");
  if (attritionCtx) {
    new Chart(attritionCtx, {
      type: "bar",
      data: {
        labels: ["N", "D", "J", "F", "M", "A", "M"],
        datasets: [{
          data: [500, 200, 500, 800, 200, 600, 500],
          backgroundColor: "#8fc2f8",
          borderRadius: 4,
          barThickness: 28
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: { font: { size: 11 }, color: "#9ca3af" }
          },
          y: {
            min: 0,
            max: 800,
            ticks: {
              stepSize: 200,
              font: { size: 11 },
              color: "#9ca3af"
            },
            grid: { color: "#f0f0f0", drawBorder: false },
            border: { display: false }
          }
        }
      }
    });
  }

  // ========== CARD 3: Employee Attrition Trend 2 ==========
  var attritionCtx2 = document.getElementById("attritionChart2");
  if (attritionCtx2) {
    new Chart(attritionCtx2, {
      type: "bar",
      data: {
        labels: ["N", "D", "J", "F", "M", "A", "M"],
        datasets: [{
          data: [500, 200, 500, 800, 200, 600, 500],
          backgroundColor: "#8fc2f8",
          borderRadius: 4,
          barThickness: 28
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: { font: { size: 11 }, color: "#9ca3af" }
          },
          y: {
            min: 0,
            max: 800,
            ticks: {
              stepSize: 200,
              font: { size: 11 },
              color: "#9ca3af"
            },
            grid: { color: "#f0f0f0", drawBorder: false },
            border: { display: false }
          }
        }
      }
    });
  }

  // ========== CARD 4: Employee Traffic ==========
  var empTrafficCtx = document.getElementById("employeeTraffic");
  if (empTrafficCtx) {
    new Chart(empTrafficCtx, {
      type: "bar",
      data: {
        labels: ["1 M", "8 M", "15 M", "22 M", "29 M"],
        datasets: [
          {
            label: "Check-in",
            data: [25, 30, 20, 35, 28],
            backgroundColor: "#8e44ad",
            borderRadius: 4,
            barThickness: 12,
            categoryPercentage: 0.7,
            barPercentage: 0.8
          },
          {
            label: "Check-out",
            data: [20, 25, 18, 30, 22],
            backgroundColor: "#a86dd7",
            borderRadius: 4,
            barThickness: 12,
            categoryPercentage: 0.7,
            barPercentage: 0.8
          },
          {
            label: "Absent",
            data: [10, 8, 12, 6, 14],
            backgroundColor: "#c9a0dc",
            borderRadius: 4,
            barThickness: 12,
            categoryPercentage: 0.7,
            barPercentage: 0.8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            stacked: false,
            grid: { display: false },
            border: { display: false },
            ticks: { font: { size: 11 }, color: "#9ca3af" }
          },
          y: {
            min: 0,
            max: 40,
            ticks: {
              stepSize: 10,
              font: { size: 11 },
              color: "#9ca3af"
            },
            grid: { color: "#f0f0f0", drawBorder: false },
            border: { display: false }
          }
        }
      }
    });
  }

  // ========== CARD 5: Contractors Traffic ==========
  var conTrafficCtx = document.getElementById("contractorTraffic");
  if (conTrafficCtx) {
    new Chart(conTrafficCtx, {
      type: "bar",
      data: {
        labels: ["1 M", "8 M", "15 M", "22 M", "29 M"],
        datasets: [
          {
            label: "Check-in",
            data: [18, 22, 15, 28, 20],
            backgroundColor: "#3498db",
            borderRadius: 4,
            barThickness: 12,
            categoryPercentage: 0.7,
            barPercentage: 0.8
          },
          {
            label: "Check-out",
            data: [15, 18, 12, 24, 16],
            backgroundColor: "#5dade2",
            borderRadius: 4,
            barThickness: 12,
            categoryPercentage: 0.7,
            barPercentage: 0.8
          },
          {
            label: "Absent",
            data: [8, 6, 10, 4, 12],
            backgroundColor: "#85c1e9",
            borderRadius: 4,
            barThickness: 12,
            categoryPercentage: 0.7,
            barPercentage: 0.8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            stacked: false,
            grid: { display: false },
            border: { display: false },
            ticks: { font: { size: 11 }, color: "#9ca3af" }
          },
          y: {
            min: 0,
            max: 40,
            ticks: {
              stepSize: 10,
              font: { size: 11 },
              color: "#9ca3af"
            },
            grid: { color: "#f0f0f0", drawBorder: false },
            border: { display: false }
          }
        }
      }
    });
  }

});
