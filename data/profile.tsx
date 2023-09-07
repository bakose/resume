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
    "I am a forward-thinking and passionate backend engineer with over 10 years of experience in creating and implementing innovative software solutions. I have a comprehensive understanding of the entire software development lifecycle and extensive experience in end-to-end project management, from concept inception to development and final delivery.",
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
      item: "Java Spring",
      level: 4,
    },
    {
      item: "Typescript",
      level: 4,
    },
    {
      item: "React",
      level: 3,
    },
    {
      item: "Shell Script",
      level: 2,
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
          title:
            "National Project Integration and Corporate Tax Software Development",
          skills: "Java, eGov Framework(Spring based), JS, Oracle DB",
          detail: `I contributed to a national project aimed at integrating eight separate systems utilized by taxpayers.
            My responsibilities included the development of APIs, SQL queries, and front-end components related to corporate tax.`,
        },
      ],
    },
    {
      from: "2016.03",
      to: "2019.10",
      title: "[Samsung SDS] IoT Platform",
      subjects: [
        {
          title:
            "Complex Event Processing Engine Development and IoT Device Connectivity",
          skills:
            "Java, Spring Boot, Bash, MSA, Docker, Kubernetes, DB(PostreSQL, Oracle DB, MySQL)",
          detail: `My tasks encompassed the development of a highly critical Complex Event Processing Engine in Lua, which played a pivotal role in aggregating time-series data from multiple sensors, applying dynamic rules, and delivering valuable insights. In addition to this, I was responsible for IoT device connectivity using protocols like MQTT, WebSocket, CoAP, and HTTP. Furthermore, I worked on on-premise installation solutions utilizing Docker and Bash.`,
        },
      ],
    },
    {
      from: "2019.11",
      to: "2021.05",
      title: "[Samsung SDS] Edge Computing Platform",
      subjects: [
        {
          title:
            "Edge-Based Core Engine Design and Machine Learning Implementation",
          skills:
            "Golang, Nuclio, Python, Tensorflow, Pandas, Docker, Bash, gRPC",
          detail: `During this period, I was responsible for designing and implementing core engines for edge-based applications.
          My work included the development of serverless functions for ML model serving and edge computing, as well as TPU/GPU quantization for machine learning engineering.`,
        },
      ],
    },
    {
      from: "2021.05",
      to: "2022.09",
      title: "[Hyundai Motors Group] PBV(Purpose Built Vehicle) Platform",
      subjects: [
        {
          title:
            "Site Reliability Engineering and Cloud Infrastructure Management",
          skills:
            "Java, React.js, Next.js, Golang, Istio, Prometheus, Grafana, Kiali, Jaeger, Docker, Kubernetes, Helm, Terraform, AWS",
          detail: `Currently, I am engaged in Site Reliability Engineering, where I am responsible for designing the AWS cloud infrastructure and building and maintaining Kubernetes clusters. I have also been instrumental in designing and implementing a robust CI/CD system, as well as deploying a Service Mesh and Observability solutions. My role also involves managing system alerting for the PBV platform.`,
        },
      ],
    },
    {
      from: "2022.09",
      to: "NOW",
      title: "[42DOT] Cloud & Infra structure team",
      subjects: [
        {
          title: "Automated System and Enhanced Cluster Operations",
          skills:
            "Java, React.js, Golang, Docker, Kubernetes, Helm, ArgoCD, Terraform, AWS",
          detail: `I automated blue/green cluster transitions, making system updates smoother. I also simplified the detection and response to service failures within clusters, automated the CI/CD pipeline to enhance development workflows, implemented cluster operation automation for more efficient system management, and developed Admin & Developer portals to improve user experiences.`,
        },
      ],
    },
  ],
};
