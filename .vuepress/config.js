module.exports = {
  base: "/",
  title: "Massive Nerds",
  description:
    "Scrum-masters/distributed teams, try out RetroMatic for real-time retrospectives.",
  head: [["link", { rel: "icon", type: "image/x-icon", href: `/favicon.ico` }]],
  themeConfig: {
    navbar: false
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-41277492-4"
      }
    ]
  ]
};
