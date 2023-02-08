import Link from "next/link"

type propsTypes = {
    heading: string,
    description: string,
    dateStamp: string,
    key: number
  };


export default function ArticleCard({heading, description, dateStamp, key}: propsTypes) {
    return(
        <div className="card">
            <h2>{heading}</h2>
            <p>{description}</p>
            <p className="date">{dateStamp}</p>
            <Link href="/article" style={{ textDecoration: "none" }}>
                <strong className="read-more">READ MORE</strong>
            </Link>
        </div>
    )
}