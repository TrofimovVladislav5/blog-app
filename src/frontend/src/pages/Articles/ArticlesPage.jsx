import { useState, useEffect } from 'react';
import ArticleCard from '../../components/ArticleCard';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const title = "Все статьи";
  const subtitle = "Минималистичный дизайн, максимальная концентрация на содержании.";

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const res = await fetch('/api/articles');
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message);
        }
        setArticles(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>
  }

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.list}>
        {articles.map(card => (
        <ArticleCard key={card.id} card={card} />
      ))}
      </div>
    </div>
  )
}

export default ArticlesPage;