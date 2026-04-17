let chart;
let filter = "ALL";

const indexSelector = document.getElementById("indexSelector");
const descriptionDiv = document.getElementById("indexDescription");

const indexNames = {
  "Index 1": "Evalueserve US Consumer Focus Index",
  "Index 2": "Evalueserve Global AI Economy Index",
  "Index 3": "Evalueserve Electric Mobility Select Index",
  "Index 4": "Evalueserve Green Technology Index",
  "Index 5": "Evalueserve Cyber Security Index"
};

const indexDescriptions = {
  "Index 1": "The Index captures the performance of US companies focused on serving the fastest growing demographic and behavioral segments. The theme can encompass a wide range of areas including demographic segments like Generation Z, aged population etc. and behavioral segments like health conscious and eco-friendly consumers.",
  "Index 2": "The Index captures the performance of companies across the world focused on AI related theme. The theme covers companies enabling growth in AI industry, providing services like design, development, manufacturing and consulting in sectors such as software, hardware and consulting.",
  "Index 3": "The Index captures the performance of companies across the world expected to benefit in the shift from fossil fuel powered vehicles to electric vehicles. The theme covers companies such as EV manufacturers, parts suppliers, battery manufacturers and mining/material companies.",
  "Index 4": "The Index captures the performance of companies across the world focused contributing to sustainable environment and green economy. The theme covers companies in areas like renewable energy, not polluting vehicles, waste management/water recycling, pollution control, sustainable farming etc.",
  "Index 5": "The Index captures the performance of companies across the world involved in the cybersecurity ecosystem. Companies that provide protection from the key risks of cyber-attacks, data leakage, and fraud. These cover areas such as Virtual private networks (VPNs), Multi-factor authentication (MFA) software, Cybersecurity tools and remediation services post attack."
};


fetch("chartData.json")
  .then(res => res.json())
  .then(json => {
    window.originalData = json;
    updateDescription();
    drawChart();
  });


function setFilter(f) {
  filter = f;

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active-btn");
    if (btn.innerText === f) btn.classList.add("active-btn");
  });

  if(chart) chart.destroy();
  drawChart();
}


indexSelector.addEventListener("change", () => {
  updateDescription();
  if(chart) chart.destroy();
  drawChart();
});


function updateDescription() {
  const selectedIndex = indexSelector.value;
  descriptionDiv.innerText = indexDescriptions[selectedIndex];
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

  const selectedIndex = indexSelector.value;
  const dates = sortedData.map(d => d.Column4);
  const values = sortedData.map(d => d[selectedIndex]);

  
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
      ctx.strokeStyle = "rgba(255,255,255,0.9)"; // vertical line white
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
    datasets: [{
      label: indexNames[selectedIndex],
      data: values,
      borderColor: "rgba(255, 255, 255, 1)",       // line color white
      backgroundColor: "rgba(255, 255, 255, 0.2)", // fill color semi-white
      tension: 0.2,
      pointRadius: 0,
      pointHoverRadius: 4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      zoom: {
        zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: "x" },
        pan: { enabled: true, mode: "x" }
      },
      tooltip: {
        mode: "index",
        titleColor: "#fff",   // tooltip title text white
        bodyColor: "#fff",    // tooltip body text white
        callbacks: {
          label: (context) => {
            const val = context.raw;
            const change = ((val - values[0]) / values[0]) * 100;
            return `${indexNames[selectedIndex]}: ${val.toFixed(2)} (${change.toFixed(2)}%)`;
          }
        }
      },
      legend: {
        display: true,
        labels: {
          color: "#fff"       // legend text white
        }
      }
    },
    scales: {
      x: {
        ticks: {
          callback: (val, idx) => new Date(dates[idx]).getFullYear(),
          maxTicksLimit: 7,
          color: "#fff"       // x-axis tick text white
        },
        grid: {
          color: "rgba(255,255,255,0.2)" // x-axis grid lines light white
        }
      },
      y: {
        ticks: {
          callback: v => v.toFixed(0),
          color: "#fff"       // y-axis tick text white
        },
        grid: {
          color: "rgba(255,255,255,0.2)" // y-axis grid lines light white
        }
      }
    }
  },
  plugins: [verticalLine]
});

}
