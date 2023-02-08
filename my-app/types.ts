export type articleType = {
    title: string,
    description: string,
    content: string,
    url: string,
    image: string,
    publishedAt: string,
    source: {
      name: string,
      url: string
}}
  
export type dataType = {
    totalArticles: number,
    articles: articleType[]
}