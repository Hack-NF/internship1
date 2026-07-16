document.addEventListener("DOMContentLoaded", function () {

  // ========== SIDEBAR MENU ACTIVE STATE ==========
  const menuItems = document.querySelectorAll(".sidebar-menu li");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      menuItems.forEach(function (li) {
        li.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  // ========== NAVIGATION TABS SWITCHING ==========
  const navTabs = document.querySelectorAll(".nav-tab");

  navTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      navTabs.forEach(function (t) {
        t.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  // ========== BUILDING IMAGE FALLBACK ==========
  const buildingImage = document.getElementById("buildingImage");
  const buildingPlaceholder = document.getElementById("buildingPlaceholder");

  if (buildingImage) {
    buildingImage.addEventListener("error", function () {
      buildingImage.classList.add("hidden");
      buildingPlaceholder.classList.remove("hidden");
    });
  }

  // ========== FILTER DROPDOWN DEPENDENCY ==========
  const regionSelect = document.querySelector(".filter-select");
  const siteSelect = document.querySelectorAll(".filter-select")[1];

  if (regionSelect && siteSelect) {
    regionSelect.addEventListener("change", function () {
      siteSelect.value = "";
    });
  }

  // ========== SUMMARY CARD HOVER ANIMATION ==========
  const summaryCards = document.querySelectorAll(".summary-card");

  summaryCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      var icon = this.querySelector(".card-icon");
      if (icon) {
        icon.style.transform = "scale(1.08)";
        icon.style.transition = "transform 0.2s ease";
      }
    });

    card.addEventListener("mouseleave", function () {
      var icon = this.querySelector(".card-icon");
      if (icon) {
        icon.style.transform = "scale(1)";
      }
    });
  });

});

const ctx = document.getElementById("identityChart");

new Chart(ctx, {
    type: "bar",

    data: {
        labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],

        datasets: [
            {
                label: "Employee",
                data: [510,530,570,550,580,530,550,510,590,530,530,510],
                backgroundColor: "#8e44ad",
                barThickness: 20
            },
            {
                label: "Visitor",
                data: [970,950,1300,1000,1000,950,1000,1000,950,1000,950,1000],
                backgroundColor: "#f39c12",
                barThickness: 20
            },
            {
                label: "Contractor",
                data: [1500,1595,2190,1900,1450,1400,1500,1500,1400,1500,1400,1500],
                backgroundColor: "#3498db",
                barThickness: 20
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: { size: 13 },
                    padding: 20,
                    usePointStyle: true,
                    pointStyle: "rect",
                    boxWidth: 12,
                    boxHeight: 12
                }
            }
        },

        scales: {
            x: {
                grid: { display: false },
                stacked: true,
                ticks: {
                    font: { size: 12 },
                    color: "#555"
                }
            },

            y: {
                min: 0,
                max: 2200,
                ticks: {
                    stepSize: 550,
                    font: { size: 12 },
                    color: "#555"
                },
                grid: {
                    color: "#e5e7eb"
                }
            }
        }
    }
});

const profileCtx = document.getElementById("profileChart");

new Chart(profileCtx, {
    type: "bar",

    data: {
        labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],

        datasets: [
            {
                label: "HQ Hybrid",
                data: [20,20,20,20,20,20,20],
                backgroundColor: "#8e63b7",
                stack: "total",
                barThickness: 18,
                borderRadius: 0
            },
            {
                label: "Non HQ Associates",
                data: [20,20,20,20,20,20,20],
                backgroundColor: "#9b59b6",
                stack: "total",
                barThickness: 18
            },
            {
                label: "Contractor/Consultant With EID",
                data: [15,15,15,15,15,15,15],
                backgroundColor: "#1f6f8b",
                stack: "total",
                barThickness: 18
            },
            {
                label: "HQ Remote",
                data: [18,18,18,18,18,18,18],
                backgroundColor: "#7d3c98",
                stack: "total",
                barThickness: 18
            },
            {
                label: "Contractors/Consultant w/out EID",
                data: [18,18,18,18,18,18,18],
                backgroundColor: "#87ceeb",
                stack: "total",
                barThickness: 18
            },
            {
                label: "Special Exception",
                data: [20,20,20,20,20,20,20],
                backgroundColor: "#d291ff",
                stack: "total",
                barThickness: 18
            },
            {
                label: "Visitor",
                data: [15,15,15,15,15,15,15],
                backgroundColor: "#f39c12",
                stack: "total",
                barThickness: 18
            }
        ]
    },

    options: {

        responsive: true,
        maintainAspectRatio: false,

        layout: {
            padding: {
                top: 10,
                right: 15,
                left: 15,
                bottom: 5
            }
        },

        plugins: {

            legend: {
                display: false
            },

            tooltip: {
                enabled: true
            }

        },

        scales: {

            x: {
                stacked: true,

                categoryPercentage: 0.45,
                barPercentage: 0.8,

                grid: {
                    display: false,
                    drawBorder: false
                },

                border: {
                    display: false
                },

                ticks: {
                    font: {
                        size: 12
                    },
                    color: "#555"
                }
            },

            y: {
                stacked: true,

                min: 0,
                max: 120,

                ticks: {
                    stepSize: 30,
                    color: "#555",
                    font: {
                        size: 12
                    }
                },

                grid: {
                    color: "#e5e7eb",
                    drawBorder: false
                },

                border: {
                    display: false
                }
            }

        }

    }

});

const pieCtx = document.getElementById("pieChart");

if (pieCtx) {
    new Chart(pieCtx, {
        type: "pie",
        data: {
            labels: [
                "HQ Hybrid",
                "HQ Remote",
                "Non HQ Associates",
                "Contractors w/out EID",
                "Contractor With EID",
                "Special Exception",
                "Visitor"
            ],
            datasets: [{
                data: [140, 140, 200, 150, 80, 70, 50],
                backgroundColor: [
                    "#a86dd7",
                    "#6d2d91",
                    "#8e44ad",
                    "#6ec5e9",
                    "#1b6b8f",
                    "#d79af7",
                    "#f39c12"
                ],
                borderWidth: 2,
                borderColor: "#fff"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            rotation: 0,
            circumference: 360,
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// ========== EMPLOYEE ADDITION TREND ==========
var additionCanvas = document.getElementById("additionChart");
if (additionCanvas) {
    new Chart(additionCanvas, {
        type: "bar",
        data: {
            labels: ["N", "D", "J", "F", "M", "A", "M"],
            datasets: [{
                data: [500, 200, 500, 800, 200, 600, 500],
                backgroundColor: "#8fc2f8",
                borderRadius: 4,
                barThickness: 40
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

// ========== EMPLOYEE ATTRITION TREND ==========
var attritionCanvas = document.getElementById("attritionChart");
if (attritionCanvas) {
    new Chart(attritionCanvas, {
        type: "bar",
        data: {
            labels: ["N", "D", "J", "F", "M", "A", "M"],
            datasets: [{
                data: [500, 200, 500, 800, 200, 600, 500],
                backgroundColor: "#8fc2f8",
                borderRadius: 4,
                barThickness: 40
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

// ========== EMPLOYEE ATTRITION TREND 2 ==========
var attritionCanvas2 = document.getElementById("attritionChart2");
if (attritionCanvas2) {
    new Chart(attritionCanvas2, {
        type: "bar",
        data: {
            labels: ["N", "D", "J", "F", "M", "A", "M"],
            datasets: [{
                data: [500, 200, 500, 800, 200, 600, 500],
                backgroundColor: "#8fc2f8",
                borderRadius: 4,
                barThickness: 40
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

// ========== EMPLOYEE TRAFFIC ==========
var empTrafficCtx = document.getElementById("employeeTraffic");
if (empTrafficCtx) {
    new Chart(empTrafficCtx, {
        type: "bar",
        data: {
            labels: ["1 M", "8 M", "15 M", "22 M", "29 M"],
            datasets: [
                {
                    label: "Mon",
                    data: [8, 18, 20, 21, 12],
                    backgroundColor: "#8e44ad",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Tue",
                    data: [12, 21, 22, 34, 32],
                    backgroundColor: "#8e44ad",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Wed",
                    data: [13, 19, 8, 28, 36],
                    backgroundColor: "#8e44ad",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Thu",
                    data: [13, 22, 13, 14, 49],
                    backgroundColor: "#8e44ad",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Fri",
                    data: [21, 22, 12, 27, 25],
                    backgroundColor: "#8e44ad",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Sat",
                    data: [2, 3, 2, 3, 2],
                    backgroundColor: "#8e44ad",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Sun",
                    data: [3, 2, 3, 3, 2],
                    backgroundColor: "#8e44ad",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
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
                    max: 50,
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

// ========== CONTRACTOR TRAFFIC ==========
var conTrafficCtx = document.getElementById("contractorTraffic");
if (conTrafficCtx) {
    new Chart(conTrafficCtx, {
        type: "bar",
        data: {
            labels: ["1 M", "8 M", "15 M", "22 M", "29 M"],
            datasets: [
                {
                    label: "Mon",
                    data: [8, 18, 20, 21, 12],
                    backgroundColor: "#3498db",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Tue",
                    data: [12, 21, 22, 34, 32],
                    backgroundColor: "#3498db",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Wed",
                    data: [13, 19, 8, 28, 36],
                    backgroundColor: "#3498db",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Thu",
                    data: [13, 22, 13, 14, 49],
                    backgroundColor: "#3498db",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Fri",
                    data: [21, 22, 12, 27, 25],
                    backgroundColor: "#3498db",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Sat",
                    data: [2, 3, 2, 3, 2],
                    backgroundColor: "#3498db",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
                },
                {
                    label: "Sun",
                    data: [3, 2, 3, 3, 2],
                    backgroundColor: "#3498db",
                    borderRadius: 0,
                    categoryPercentage: 0.9,
                    barPercentage: 0.6
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
                    max: 50,
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

// ========== TRAFFIC ANALYSIS STACKED BAR ==========
var trafficStackedCtx = document.getElementById("trafficStackedChart");
if (trafficStackedCtx) {
    var timeLabels = ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"];

    var bottomData = [];
    var middleData = [];
    var topData = [];
    var peakIndices = [4, 10, 18, 24];

    for (var j = 0; j < 24; j++) {
        if (peakIndices.indexOf(j) !== -1) {
            bottomData.push(Math.floor(Math.random() * 30) + 180);
            middleData.push(Math.floor(Math.random() * 20) + 120);
            topData.push(Math.floor(Math.random() * 15) + 80);
        } else {
            bottomData.push(Math.floor(Math.random() * 20) + 60);
            middleData.push(Math.floor(Math.random() * 15) + 50);
            topData.push(Math.floor(Math.random() * 10) + 40);
        }
    }

    new Chart(trafficStackedCtx, {
        type: "bar",
        data: {
            labels: timeLabels,
            datasets: [
                {
                    label: "Bottom",
                    data: bottomData,
                    backgroundColor: "#19b5d8",
                    stack: "traffic",
                    borderRadius: 2,
                    barThickness: 16
                },
                {
                    label: "Middle",
                    data: middleData,
                    backgroundColor: "#7aa8ff",
                    stack: "traffic",
                    borderRadius: 2,
                    barThickness: 16
                },
                {
                    label: "Top",
                    data: topData,
                    backgroundColor: "#10a55a",
                    stack: "traffic",
                    borderRadius: 2,
                    barThickness: 16
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
                    stacked: true,
                    grid: { display: false },
                    border: { display: false },
                    ticks: { font: { size: 10 }, color: "#9ca3af", maxRotation: 0 }
                },
                y: {
                    stacked: true,
                    min: 0,
                    max: 600,
                    ticks: {
                        stepSize: 150,
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

// ========== TRAFFIC ANALYSIS DOUGHNUT ==========
var trafficDoughnutCtx = document.getElementById("trafficDoughnut");
if (trafficDoughnutCtx) {
    var centerTextPlugin = {
        id: "centerText",
        afterDraw: function (chart) {
            if (chart.canvas.id !== "trafficDoughnut") return;
            var ctx = chart.ctx;
            var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
            var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
            ctx.save();
            ctx.font = "bold 22px Segoe UI";
            ctx.fillStyle = "#374151";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("630", centerX, centerY);
            ctx.restore();
        }
    };

    new Chart(trafficDoughnutCtx, {
        type: "doughnut",
        plugins: [centerTextPlugin],
        data: {
            labels: ["Green", "Cyan", "Blue"],
            datasets: [{
                data: [300, 200, 130],
                backgroundColor: ["#16a34a", "#06b6d4", "#60a5fa"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            cutout: "65%",
            rotation: 0,
            circumference: 360,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
            }
        }
    });
}

// ========== SCAN LINE CHART ==========
var scanLineCtx = document.getElementById("scanLineChart");
if (scanLineCtx) {
    var xLabels = [];
    for (var k = 1; k <= 30; k++) {
        xLabels.push(k);
    }

    var proxData = [];
    var mobileData = [];
    var qrData = [];

    for (var m = 1; m <= 30; m++) {
        if (m === 2) {
            proxData.push(220);
            mobileData.push(200);
            qrData.push(180);
        } else if (m === 12) {
            proxData.push(200);
            mobileData.push(180);
            qrData.push(160);
        } else {
            proxData.push(Math.floor(Math.random() * 15) + 5);
            mobileData.push(Math.floor(Math.random() * 12) + 4);
            qrData.push(Math.floor(Math.random() * 10) + 3);
        }
    }

    var scanTooltip = document.getElementById("scanTooltip");
    var tooltipTitle = document.getElementById("tooltipTitle");
    var tooltipProx = document.getElementById("tooltipProx");
    var tooltipMobile = document.getElementById("tooltipMobile");
    var tooltipQR = document.getElementById("tooltipQR");

    var externalTooltip = function (context) {
        var chart = context.chart;
        var tooltip = context.tooltip;

        if (tooltip.opacity === 0) {
            scanTooltip.classList.remove("show");
            return;
        }

        var dataIndex = tooltip.dataPoints[0].dataIndex;
        tooltipTitle.textContent = xLabels[dataIndex];
        tooltipProx.textContent = proxData[dataIndex];
        tooltipMobile.textContent = mobileData[dataIndex];
        tooltipQR.textContent = qrData[dataIndex];

        var canvasRect = chart.canvas.getBoundingClientRect();
        var tooltipX = tooltip.caretX + canvasRect.left + 12;
        var tooltipY = tooltip.caretY + canvasRect.top - 40;

        var tooltipWidth = scanTooltip.offsetWidth;
        var tooltipHeight = scanTooltip.offsetHeight;
        var pageWidth = window.innerWidth;
        var pageHeight = window.innerHeight;

        if (tooltipX + tooltipWidth > pageWidth - 10) {
            tooltipX = tooltip.caretX + canvasRect.left - tooltipWidth - 12;
        }
        if (tooltipY < 10) {
            tooltipY = 10;
        }
        if (tooltipY + tooltipHeight > pageHeight - 10) {
            tooltipY = pageHeight - tooltipHeight - 10;
        }

        scanTooltip.style.left = tooltipX + "px";
        scanTooltip.style.top = tooltipY + "px";
        scanTooltip.classList.add("show");
    };

    new Chart(scanLineCtx, {
        type: "line",
        data: {
            labels: xLabels,
            datasets: [
                {
                    label: "PROX",
                    data: proxData,
                    borderColor: "#4f8df7",
                    backgroundColor: "transparent",
                    borderWidth: 2,
                    pointRadius: 2,
                    pointBackgroundColor: "#4f8df7",
                    tension: 0.4,
                    fill: false
                },
                {
                    label: "Mobile",
                    data: mobileData,
                    borderColor: "#57d69b",
                    backgroundColor: "transparent",
                    borderWidth: 2,
                    pointRadius: 2,
                    pointBackgroundColor: "#57d69b",
                    tension: 0.4,
                    fill: false
                },
                {
                    label: "QR",
                    data: qrData,
                    borderColor: "#f6a23a",
                    backgroundColor: "transparent",
                    borderWidth: 2,
                    pointRadius: 2,
                    pointBackgroundColor: "#f6a23a",
                    tension: 0.4,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: false,
                    external: externalTooltip,
                    mode: "index",
                    intersect: false
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    border: { display: false },
                    ticks: { font: { size: 10 }, color: "#9ca3af" }
                },
                y: {
                    min: 0,
                    max: 240,
                    ticks: {
                        stepSize: 60,
                        font: { size: 10 },
                        color: "#9ca3af"
                    },
                    grid: { color: "#f0f0f0", drawBorder: false },
                    border: { display: false }
                }
            }
        }
    });
}

// ========== PROFILE TYPE STACKED BAR ==========
var ptBarCtx = document.getElementById("profileTypeBarChart");
if (ptBarCtx) {
    var ptLabels = [
        "12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12AM"
    ];

    var empData = [];
    var visData = [];
    var conData = [];

    for (var n = 0; n < 25; n++) {
        if (n === 2 || n === 14) {
            empData.push(Math.floor(Math.random() * 200) + 900);
            visData.push(Math.floor(Math.random() * 150) + 500);
            conData.push(Math.floor(Math.random() * 100) + 300);
        } else {
            empData.push(Math.floor(Math.random() * 200) + 400);
            visData.push(Math.floor(Math.random() * 150) + 200);
            conData.push(Math.floor(Math.random() * 100) + 150);
        }
    }

    new Chart(ptBarCtx, {
        type: "bar",
        data: {
            labels: ptLabels,
            datasets: [
                {
                    label: "Employee",
                    data: empData,
                    backgroundColor: "#b185db",
                    stack: "profile",
                    borderRadius: 2,
                    barThickness: 16
                },
                {
                    label: "Visitor",
                    data: visData,
                    backgroundColor: "#f6a623",
                    stack: "profile",
                    borderRadius: 2,
                    barThickness: 16
                },
                {
                    label: "Contractor",
                    data: conData,
                    backgroundColor: "#2196f3",
                    stack: "profile",
                    borderRadius: 2,
                    barThickness: 16
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
                    stacked: true,
                    grid: { display: false },
                    border: { display: false },
                    ticks: {
                        font: { size: 9 },
                        color: "#9ca3af",
                        maxRotation: 0,
                        autoSkip: false
                    }
                },
                y: {
                    stacked: true,
                    min: 0,
                    max: 2000,
                    ticks: {
                        stepSize: 500,
                        font: { size: 10 },
                        color: "#9ca3af"
                    },
                    grid: { color: "#f0f0f0", drawBorder: false },
                    border: { display: false }
                }
            }
        }
    });
}

// ========== PROFILE TYPE DOUGHNUT ==========
var ptDoughnutCtx = document.getElementById("profileTypeDoughnut");
if (ptDoughnutCtx) {
    var ptCenterPlugin = {
        id: "ptCenterText",
        afterDraw: function (chart) {
            if (chart.canvas.id !== "profileTypeDoughnut") return;
            var ctx = chart.ctx;
            var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
            var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
            ctx.save();
            ctx.font = "bold 20px Segoe UI";
            ctx.fillStyle = "#374151";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("630", centerX, centerY);
            ctx.restore();
        }
    };

    new Chart(ptDoughnutCtx, {
        type: "doughnut",
        plugins: [ptCenterPlugin],
        data: {
            labels: ["Purple", "Blue", "Orange"],
            datasets: [{
                data: [250, 200, 180],
                backgroundColor: ["#b185db", "#2196f3", "#f6a623"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            cutout: "72%",
            rotation: 0,
            circumference: 360,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
            }
        }
    });
}