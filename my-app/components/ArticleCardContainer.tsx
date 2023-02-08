import ArticleCard from "./ArticleCard";
import data from "../../Data/generalData.json";

export default function ArticleCardContainer() {
    let articles = data.articles;
    return(
        <div>
           {articles.map((article, index) => <ArticleCard heading={article.title} description={article.description} dateStamp={article.publishedAt} key={index}/>)}
        </div>
    )
}