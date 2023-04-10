import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react"

const style:CSSProperties = {
  color:"#0070f3",
  textDecoration: "underline"
}

interface Props {
  text: string,
  href: string,
}

export const ActiveLink: FC<Props> = ({href, text}) => {

  const Router = useRouter()
  return (
    <Link style={Router.asPath === href ? style : undefined} href={href}>{text}</Link>
  )
}


