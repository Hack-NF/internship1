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
                 barThickness:15
            },
            {
                label: "Visitor",
                data: [970,950,1300,1000,1000,950,1000,1000,950,1000,950,1000],
                backgroundColor: "#f39c12",
                 barThickness:15
            },
            {
                label: "Contractor",
                data: [1500,1595,2190,1900,1450,1400,1500,1500,1400,1500,1400,1500],
                backgroundColor: "#3498db",
                barThickness:15
              }
        ]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                position: "bottom"
            }
        },

        scales: {
            x: {
              grid:{
                  display:false
                },

                stacked: true
            },

            y: {
                
                min: 0,
                max: 2200,
                ticks:{
                  stepSize: 550
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
                barThickness: 14,
                borderRadius: 0
            },
            {
                label: "Non HQ Associates",
                data: [20,20,20,20,20,20,20],
                backgroundColor: "#9b59b6",
                stack: "total",
                barThickness: 14
            },
            {
                label: "Contractor/Consultant With EID",
                data: [15,15,15,15,15,15,15],
                backgroundColor: "#1f6f8b",
                stack: "total",
                barThickness: 14
            },
            {
                label: "HQ Remote",
                data: [18,18,18,18,18,18,18],
                backgroundColor: "#7d3c98",
                stack: "total",
                barThickness: 14
            },
            {
                label: "Contractors/Consultant w/out EID",
                data: [18,18,18,18,18,18,18],
                backgroundColor: "#87ceeb",
                stack: "total",
                barThickness: 14
            },
            {
                label: "Special Exception",
                data: [20,20,20,20,20,20,20],
                backgroundColor: "#d291ff",
                stack: "total",
                barThickness: 14
            },
            {
                label: "Visitor",
                data: [15,15,15,15,15,15,15],
                backgroundColor: "#f39c12",
                stack: "total",
                barThickness: 14
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
                position: "bottom",
                align: "start",

                labels: {
                    usePointStyle: true,
                    pointStyle: "rect",
                    boxWidth: 10,
                    boxHeight: 10,
                    padding: 18,
                    font: {
                        size: 11
                    }
                }
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
                        size: 10
                    },
                    color: "#777"
                }
            },

            y: {
                stacked: true,

                min: 0,
                max: 120,

                ticks: {
                    stepSize: 30,
                    color: "#777",
                    font: {
                        size: 10
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