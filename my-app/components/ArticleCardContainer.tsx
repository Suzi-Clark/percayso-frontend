import ArticleCard from "./ArticleCard";
import {dataType} from "../types";

type propsType = {
 results: dataType
}

export default function ArticleCardContainer({results}: propsType) {
    let articles = results.articles;
    return(
        <div className="cards-div">
           {articles.map((article, index) => <ArticleCard heading={article.title} description={article.description} image={article.image} url={article.url} dateStamp={article.publishedAt} key={index}/>)}
        </div>
    )
}