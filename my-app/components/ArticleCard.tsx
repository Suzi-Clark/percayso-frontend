import Link from "next/link"

type propsTypes = {
    heading: string,
    description: string,
    dateStamp: string,
    key: number
  };


export default function ArticleCard({heading, description, dateStamp, key}: propsTypes) {
    return(
        <div>
            <h2>{heading}</h2>
            <p>{description}</p>
            <p>{dateStamp}</p>
            <Link href="/article" style={{ textDecoration: "none" }}>
                <strong>READ MORE</strong>
            </Link>
        </div>
    )
}