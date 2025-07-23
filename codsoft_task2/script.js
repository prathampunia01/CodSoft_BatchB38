const features = [
    "Smart Task Scheduling",
    "Collaborative Workspaces",
    "Real-Time Notifications",
    "Progress Tracking",
    "Cloud Sync Across Devices",
    "Analytics & Reporting",
  ];
  
  const testimonials = [
    {
      name: "Aarav Mehta",
      feedback:
        "TaskFlow completely changed how I manage my day. It's fast, intuitive, and helps me stay organized.",
    },
    {
      name: "Nisha Verma",
      feedback:
        "Our remote team finally found a tool that keeps everyone aligned and productive.",
    },
    {
      name: "Ravi Sharma",
      feedback:
        "It's a joy to use! Clean UI, great features, and excellent support.",
    },
  ];
  
  const featuresList = document.getElementById("features-list");
  features.forEach((feature) => {
    const div = document.createElement("div");
    div.className = "feature-item";
    div.innerHTML = `<h3>${feature}</h3>`;
    featuresList.appendChild(div);
  });
  
  const testimonialsList = document.getElementById("testimonials-list");
  testimonials.forEach(({ name, feedback }) => {
    const div = document.createElement("div");
    div.className = "testimonial-item";
    div.innerHTML = `<p>“${feedback}”</p><p style="margin-top: 12px; font-weight: bold;">- ${name}</p>`;
    testimonialsList.appendChild(div);
  });
  