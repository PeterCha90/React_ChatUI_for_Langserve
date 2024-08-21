import { IoLogoOctocat } from "react-icons/io"

const assistantAvatar = <IoLogoOctocat size={30} />

const userAvatar = "https://docs.nlkit.com/nlux/images/personas/marissa.png"

export const personas = {
  assistant: {
    name: "Peter Pet🧚",
    avatar: assistantAvatar,
    tagline: "반려동물 제품에 대해 문의해주세요!",
  },
  user: {
    name: "Marissa",
    avatar: userAvatar,
  },
}
