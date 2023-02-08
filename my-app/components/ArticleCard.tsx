type propsTypes = {
    heading: string,
    description: string,
    image: string,
    url: string,
    dateStamp: string,
    key: number
  };


export default function ArticleCard({heading, description, image, url, dateStamp, key}: propsTypes) {
    return(
        <div className="card">
            <img src={image} alt="News Item image" ></img>
            <h2>{heading}</h2>
            <p>{description}</p>
            <p className="date">{dateStamp}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <strong className="read-more">READ MORE</strong>
            </a>
        </div>
    )
}