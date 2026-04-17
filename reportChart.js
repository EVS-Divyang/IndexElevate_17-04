
// PART 1 — LINE CHART 

let chart;

function loadData(filter = "ALL") {
  fetch(`http://127.0.0.1:8000/charts/?period=${filter}`)
    .then(res => res.json())
    .then(json => {
      window.originalData = json;
      if (chart) chart.destroy();
      drawChart();
    });
}

loadData("ALL");


function setFilter(f) {
  filter = f;

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active-btn");
    if (btn.innerText === f) btn.classList.add("active-btn");
  });

  loadData(f);
}

function drawChart() {
  const dataJson = window.originalData;
  const parseDate = d => new Date(d);
  let sortedData = [...dataJson].sort((a, b) => parseDate(a.Dates) - parseDate(b.Dates));


  const dates = sortedData.map(d => d.Dates);

  const datasets = [
    { label: "Index 1", data: sortedData.map(d => d["Scenario 3"]), borderWidth: 2, fill:false, tension:0.2, pointRadius:0 }
  ];

  const verticalLine = {
    id: "verticalLine",
    afterDraw(chart) {
      if (chart.tooltip?._active?.length) {
        const ctx = chart.ctx;
        const activePoint = chart.tooltip._active[0];
        const x = activePoint.element.x;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(0,0,0,0.4)";
        ctx.stroke();
        ctx.restore();
      }
    }
  };

  const ctx = document.getElementById("myChart").getContext("2d");

  chart = new Chart(ctx, {
    type: "line",
    data: { labels: dates, datasets },
    options: {
      responsive: true,
      maintainAspectRatio:false,
      plugins: {
        zoom: {
          zoom: {
            wheel: { enabled: true },
            pinch: { enabled: true },
            mode: "x"
          },
          pan: { enabled: true, mode: "x" }
        },
        tooltip: { mode: "nearest" },
        legend: { display: true }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            callback: (val, idx) => new Date(dates[idx]).getFullYear(),
            maxTicksLimit: 7
          }
        },
        y: {
          ticks: { callback: v => v.toFixed(0) }
        }
      }
    },
    plugins: [verticalLine]
  });
}


// PART 2 — BAR CHART 1 (Annualized Return)

const labels = ["1Y", "3Y", "5Y", "7Y", "10Y", "All"];

const benchmark = [3.80, 3.40, 2.90, 3.50, 3.25, 2.85];
const scenario1 = [5.30, 5.00, 5.20, 4.80, 4.50, 4.72];
const scenario2 = [5.42, 5.12, 5.32, 4.92, 4.62, 4.85];
const scenario3 = [6.92, 6.62, 6.82, 6.42, 6.12, 7.79];

new Chart(document.getElementById("chartReturn"), {
  type: "bar",
  data: {
    labels,
    datasets: [
      { label: "Benchmark", data: benchmark },
      { label: "Scenario 1", data: scenario1 },
      { label: "Scenario 2", data: scenario2 },
      { label: "Scenario 3", data: scenario3 }
    ]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        min: 0,
        ticks: { stepSize: 2, callback: v => v + "%" },
        grid: { display: false }
      }
    },
    plugins: {
      title: { display: true, text: "", font: { size: 18, weight: "bold" } },
      legend: { position: "bottom" }
    }
  }
});

// PART 3 — BAR CHART 2 (Annualized Risk)


const labelsRisk = ["1Y", "3Y", "5Y", "7Y", "10Y", "All"];

const benchmarkRisk = [8.31, 7.44, 6.34, 7.66, 7.11, 6.23];
const scenario1Risk = [11.59, 10.94, 11.38, 10.50, 9.84, 10.33];
const scenario2Risk = [11.86, 11.20, 11.64, 10.76, 10.11, 10.61];
const scenario3Risk = [12.11, 11.59, 11.94, 11.24, 10.71, 13.63];

new Chart(document.getElementById("chartRisk"), {
  type: "bar",
  data: {
    labels: labelsRisk,
    datasets: [
      { label: "Benchmark", data: benchmarkRisk },
      { label: "Scenario 1", data: scenario1Risk },
      { label: "Scenario 2", data: scenario2Risk },
      { label: "Scenario 3", data: scenario3Risk }
    ]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        min: 0,
        ticks: { stepSize: 5, callback: value => value + "%" },
        grid: { display: false }
      }
    },
    plugins: {
      title: { display: true, text: "", font: { size: 18, weight: "bold" } },
      legend: { position: "bottom" }
    }
  }
});
