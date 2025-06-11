const dashboards = {
  area: [
    "Area, Production & Yield",
    "Global & Domestic APY Trends",
    "APY Major States",
    "APY Combined"
  ],
  analytics: [
    "Crop Performance Metrics",
    "Seasonal Forecasts",
    "Yield Anomalies",
    "Comparative Growth"
  ],
  market: [
    "Current Market Prices",
    "Demand & Supply Trends",
    "Export Potential",
    "MSP History"
  ],
  crop: [
    "Crop Profile: Rice",
    "Crop Profile: Wheat",
    "Crop Profile: Maize",
    "Crop Profile: Pulses"
  ],
  gva: [
    "Sector-Wise GVA",
    "Agriculture Share in GDP",
    "Growth Trends",
    "State-Wise GVA"
  ]
};

function loadDashboard(type) {
  const contentBox = document.getElementById("dashboardContent");
  const items = dashboards[type];

  // Remove fade-in and apply fade-out
  contentBox.classList.remove("fade-in");
  contentBox.classList.add("fade-out");

  setTimeout(() => {
    contentBox.innerHTML = `<ol>${items.map(item => `<li>${item}</li>`).join("")}</ol>`;
    contentBox.classList.remove("fade-out");
    contentBox.classList.add("fade-in");
  }, 300);

  // Update selected sidebar
  document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("selected"));
  const selectedItem = Array.from(document.querySelectorAll(".sidebar li")).find(li => li.textContent.includes(type.charAt(0).toUpperCase() + type.slice(1).split('_')[0]));
  if (selectedItem) selectedItem.classList.add("selected");
}
