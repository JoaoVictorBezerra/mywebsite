import NextLink from "next/link"

export default function Links({ children, href, ...props}) {
    return(
        <NextLink href={href}>
            <a {...props}>{children}</a>
        </NextLink>
    )
}