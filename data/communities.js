import MatrixIcon from "@/components/MatrixIcon"
import TelegramIcon from "@/components/TelegramIcon"

export default function (i18n) {
  return [
    {
      name: i18n.t("communities-1"),
      url: "https://t.me/bitcartcc",
      component: TelegramIcon,
    },
    {
      name: i18n.t("communities-2"),
      url: "https://github.com/bitcartcc/bitcart",
      icon: "$mdiGithub",
    },
    {
      name: i18n.t("communities-3"),
      url: "https://discord.gg/8H2Sfdh",
      icon: "$mdiDiscord",
    },
    {
      name: i18n.t("communities-5"),
      url: "https://matrix.to/#/#bitcartcc:matrix.org",
      component: MatrixIcon,
    },
    {
      name: i18n.t("communities-4"),
      url: "https://www.reddit.com/r/BitcartCC",
      icon: "$mdiReddit",
    },
  ]
}
