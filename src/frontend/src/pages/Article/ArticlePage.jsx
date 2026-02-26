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
    fetch(`/api/articles/${id}`)
      .then(res => res.json())
      .then(data => setArticle(data.data))
      .finally(() => setLoading(false));
  }, [id]);

  const handleCommentAdded = (newComment) => {
    setArticle(prev => ({
      ...prev,
      comments: [...prev.comments, newComment]
    }));
  }

  if (loading)
    return <div>Загрузка...</div>
  
  return (
    <div className={styles.page}>
      <ArticleDetail article={article}/>
      <CommentList comments={article.comments} />
      <CommentForm articleId={id} onCommentAdded={handleCommentAdded}/>
    </div>
  );
}

export default ArticlePage;