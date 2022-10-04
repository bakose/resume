export const Profile = {
  name: "Jinhyuk Park",
  description: "Backend Engineer",
  contact: {
    mobile: "+82 10-5122-4915",
    email: "gaejin830@gmail.com",
    linkedin: "www.linkedin.com/in/jinhyuk-park",
    github: "https://github.com/bakose",
  },
  summary:
    "Forward-looking and passionate backend engineer with 9+ years' background in creating and executing innovative software solutions.\nExperienced in all aspects of the software development lifecycle and end-to-end project management, from concept through to development and delivery.",
  // Skill Level: 1~5
  skills: [
    {
      item: "Java",
      level: 5,
    },
    {
      item: "Golang",
      level: 5,
    },
    {
      item: "Python",
      level: 4,
    },
    {
      item: "JS",
      level: 4,
    },
    {
      item: "Java Spring",
      level: 4,
    },
    {
      item: "React & NextJS",
      level: 3,
    },
    {
      item: "Shell Script",
      level: 3,
    },
  ],
  knowledge: [
    {
      item: "Cloud Native",
      child: ["Docker", "Kubernetes", "Service Mesh - Istio", "CI/CD"],
    },
    {
      item: "Site Reliability Engineering",
      child: ["Observability System", "System Alerting", "IaC"],
    },
    {
      item: "ETC",
      child: ["Kafka", "Nuclio(Serverless Platform)", "gRPC", "ML Engineering"],
    },
    {
      item: "Public Cloud",
      child: ["AWS", "GCP"],
    },
  ],
  history: [
    {
      from: "2014.01",
      to: "2016.01",
      title: "[Samsung SDS] Neo Tax Integrated System",
      subjects: [
        {
          item: "Java, eGov Framework(Spring based), JS, Oracle DB",
          details: [
            "National project to integrate eight separate systems used by taxpayers",
            "Responsible for developing API, SQL and front-end related Corporate tax",
          ],
        },
      ],
    },
    {
      from: "2016.03",
      to: "2019.10",
      title: "[Samsung SDS] IoT Platform",
      subjects: [
        {
          item: "Java, Spring Boot, Bash, MSA, Docker, Kubernetes, DB(PostreSQL, Oracle DB, MySQL)",
          details: [
            "Developed cloud-based core engines",
            "IoT Device Connectivity(MQTT, WebSocket, CoAP, HTTP)",
            "Complex Event Processing Engine(lua)",
            "On-premise Installer(Docker, Bash)",
          ],
        },
      ],
    },
    {
      from: "2019.11",
      to: "2021.05",
      title: "[Samsung SDS] Edge Computing Platform",
      subjects: [
        {
          item: "Golang, Nuclio, Python, Tensorflow, Pandas, Docker, Bash, gRPC",
          details: [
            "Responsible for designing and implementing edge-based core engines",
            "Serverless function(ML model Serving / Edge Computing) builder",
            "ML Engineering(TPU/GPU Quantization)",
          ],
        },
      ],
    },
    {
      from: "2021.05",
      to: "NOW",
      title: "[Hyundai Motors Group] PBV(Purpose Built Vehicle) Platform",
      subjects: [
        {
          item: "Java, Vue.js, React.js, Next.js Node.js, Golang, Istio, Prometheus, Grafana, Kiali, Jaeger, Docker, Kubernetes, Helm, Terraform, AWS",
          details: [
            "Responsible for Site Reliability Engineering",
            "Designing AWS cloud infrastructure",
            "Building and Maintaining k8s clusters",
            "Designing and implementing CI/CD System",
            "Implementing Service Mesh and Observability",
            "Managing system alerting",
          ],
        },
      ],
    },
  ],
};
