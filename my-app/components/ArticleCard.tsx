import Link from "next/link"

export default function ArticleCard() {
    return(
        <div>
            <h2>Heading</h2>
            <p>Description</p>
            <p>Publish Time/Date</p>
            <Link href="/article" style={{ textDecoration: "none" }}>
                <strong>READ MORE</strong>
            </Link>
        </div>
    )
}