module.exports = {
  base: "/",
  title: "Massive Nerds",
  description:
    "Scrum-masters/distributed teams, use RetroMatic for real-time retrospectives, it's open-source and free.",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: `/favicon.ico` }],
    ["link", { rel: "canonical", href: `https://massivenerds.com` }]
  ],
  themeConfig: {
    navbar: false,
    author: {
      name: "Andrew Byrd <hello@andrewbyrd.me>",
      twitter: "@wordythebyrd"
    }
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-41277492-4"
      }
    ],
    [
      "seo",
      {
        siteTitle: () => "Agile Retrospectives via Retromatic by Massive Nerds",
        title: () => "RetroMatic by Massive Nerds",
        tags: () => [
          "agile",
          "retrospective",
          "scrum",
          "scrum-agile",
          "firebase",
          "angular",
          "agile-manifesto",
          "material-design",
          "angular-material",
          "iteration",
          "distributed teams",
          "remote teams"
        ]
      }
    ]
  ]
};
