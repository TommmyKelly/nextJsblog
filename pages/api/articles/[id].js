import { articles } from "../../../data";

export default function handler({ query: { id } }, res) {
  const article = articles.filter((art) => art.id === id);

  if (article.length > 0) {
    res.status(200).json(article[0]);
  } else
    res.status(404).json({
      message: `Article with the id of ${id} not found`,
    });
}
