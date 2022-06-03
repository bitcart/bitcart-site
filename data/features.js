export default function (i18n) {
  return [
    {
      text: i18n.t("feature-1-text"),
      moreText: i18n.t("feature-1-more"),
      icon: "$mdiCurrencyBtc",
      links: [
        {
          text: i18n.t("feature-1-links-1"),
          url: "https://admin.bitcartcc.com",
        },
      ],
    },
    {
      text: i18n.t("feature-2-text"),
      moreText: i18n.t("feature-2-more"),
      icon: "$mdiSpeedometer",
    },
    {
      text: i18n.t("feature-3-text"),
      moreText: i18n.t("feature-3-more"),
      icon: "$mdiKey",
    },
    {
      text: i18n.t("feature-4-text"),
      moreText: i18n.t("feature-4-more"),
      icon: "$mdiStore",
      links: [
        {
          text: i18n.t("feature-4-links-1"),
          url: "https://admin.bitcartcc.com",
        },
        {
          text: i18n.t("feature-4-links-2"),
          url: "https://store.bitcartcc.com",
        },
        {
          text: i18n.t("feature-4-links-3"),
          url: "https://api.bitcartcc.com",
        },
      ],
    },
    {
      text: i18n.t("feature-5-text"),
      moreText: i18n.t("feature-5-more"),
      icon: "$mdiOpenSourceInitiative",
      links: [
        {
          text: i18n.t("feature-5-links-1"),
          url: "https://github.com/bitcartcc/bitcart",
        },
      ],
    },
    {
      text: i18n.t("feature-6-text"),
      moreText: i18n.t("feature-6-more"),
      icon: "$mdiFlash",
      links: [
        {
          text: i18n.t("feature-6-links-1"),
          url: "https://lightning.network/",
        },
        {
          text: i18n.t("feature-6-links-2"),
          url: "https://docs.bitcartcc.com/guides/lightning",
        },
      ],
    },
    {
      text: i18n.t("feature-7-text"),
      moreText: i18n.t("feature-7-more"),
      icon: "$mdiServer",
      links: [
        {
          text: i18n.t("feature-7-links-1"),
          url: "https://configurator.bitcartcc.com",
        },
        {
          text: i18n.t("feature-7-links-2"),
          url: "https://docs.bitcartcc.com/deployment/deployment",
        },
      ],
    },
    {
      text: i18n.t("feature-8-text"),
      moreText: i18n.t("feature-8-more"),
      icon: "$mdiCircleMultipleOutline",
      links: [
        {
          text: i18n.t("feature-8-links-1"),
          url: "/coins",
          internal: true,
        },
      ],
    },
    {
      text: i18n.t("feature-9-text"),
      moreText: i18n.t("feature-9-more"),
      icon: "$mdiDevTo",
      links: [
        {
          text: i18n.t("feature-9-links-1"),
          url: "https://sdk.bitcartcc.com",
        },
        {
          text: i18n.t("feature-9-links-2"),
          url: "https://github.com/bitcartcc/bitcart-sdk/tree/master/examples/atomic_tipbot",
        },
        {
          text: i18n.t("feature-9-links-3"),
          url: "https://github.com/bitcartcc/bitcart-sdk/tree/master/examples",
        },
      ],
    },
    {
      text: i18n.t("feature-10-text"),
      moreText: i18n.t("feature-10-more"),
      icon: "$mdiPuzzle",
      links: [
        {
          text: i18n.t("feature-10-links-1"),
          url: "https://raw.githubusercontent.com/bitcartcc/bitcart-docs/master/.gitbook/assets/bitcartcc_structure.png",
        },
        {
          text: i18n.t("feature-10-links-2"),
          url: "https://docs.bitcartcc.com/development/architecture",
        },
      ],
    },
  ]
}
