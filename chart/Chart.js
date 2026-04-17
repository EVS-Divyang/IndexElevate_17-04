let chart;
let filter = "ALL";
const indexName = "Evalueserve US Consumer Focus Index";
const indexKey = "Index 1";


fetch("./ChartData.json")
  .then(res => res.json())
  .then(json => {
    window.originalData = json;
    drawChart();
  });

// Filter Selection
function setFilter(f) {
  filter = f;

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active-btn");
    if (btn.innerText === f) btn.classList.add("active-btn");
  });

  chart.destroy();
  drawChart();
}

function drawChart() {
  const dataJson = window.originalData;
  const parseDate = d => new Date(d);

  let sortedData = [...dataJson].sort(
    (a, b) => parseDate(a.Column4) - parseDate(b.Column4)
  );

  const lastDate = parseDate(sortedData[sortedData.length - 1].Column4);

  if (filter !== "ALL") {
    let dateLimit = new Date(lastDate);
    if (filter === "6M") dateLimit.setMonth(dateLimit.getMonth() - 6);
    if (filter === "1Y") dateLimit.setFullYear(dateLimit.getFullYear() - 1);
    if (filter === "5Y") dateLimit.setFullYear(dateLimit.getFullYear() - 5);

    sortedData = sortedData.filter(d => parseDate(d.Column4) >= dateLimit);
  }

  const dates = sortedData.map(d => d.Column4);
  const values = sortedData.map(d => d[indexKey]);

  // Vertical hover line plugin
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
    data: {
      labels: dates,
      datasets: [
        {
          label: indexName,
          data: values,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.2,
          pointRadius: 0,
          pointHoverRadius: 4,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        zoom: {
          zoom: { wheel: { enabled: true }, mode: "x" },
          pan: { enabled: true, mode: "x" }
        },
        tooltip: {
          mode: "index",
          callbacks: {
            label: (context) => {
              const val = context.raw;
              const change = ((val - dataJson[0][indexKey]) / dataJson[0][indexKey]) * 100;
              return `${indexName}: ${val.toFixed(2)} (${change.toFixed(2)}%)`;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            callback: (val, idx) => {
              const date = new Date(dates[idx]);
              return date.getFullYear();
            },
            maxTicksLimit: 7
          }
        },
        y: {
          ticks: {
            callback: v => v.toFixed(0)
          }
        }
      }
    },
    plugins: [verticalLine]
  });
}
