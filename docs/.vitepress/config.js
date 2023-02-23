export default {
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide" },
      {
        text: "Dropdown Menu",
        items: [
          {
            // Title for the section.
            text: "Section A Title",
            items: [
              { text: "Section A Item A", link: "..." },
              { text: "Section B Item B", link: "..." },
            ],
          },
        ],
      },
      {
        text: "Dropdown Menu",
        items: [
          {
            // You may also omit the title.
            items: [
              { text: "Section A Item A", link: "..." },
              { text: "Section B Item B", link: "..." },
            ],
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "日报",
        items: [{ text: "2023/2/23", link: "/dayReport" }],
      },
      {
        text: "周报",
        items: [{ text: "2022/2", link: "/weekReport" }],
      },
    ],
  },
};
