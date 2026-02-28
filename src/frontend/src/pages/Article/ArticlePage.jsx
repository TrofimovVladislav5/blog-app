import ArticleDetail from '../../components/ArticleDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';
import styles from './ArticlePage.module.scss';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const res = await fetch(`/api/articles/${id}`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message);
        }
        setArticle(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadArticle();
  }, [id]);

  const handleCommentAdded = (newComment) => {
    setArticle(prev => ({
      ...prev,
      comments: [...prev.comments, newComment]
    }));
  }

  //TODO: error state
  if (loading) return <div>Загрузка...</div>
  if (!article) return <div>Статья не найдена</div>

  return (
    <div className={styles.page}>
      <ArticleDetail article={article}/>
      <CommentList comments={article.comments} />
      <CommentForm articleId={id} onCommentAdded={handleCommentAdded}/>
    </div>
  );
}

export default ArticlePage;