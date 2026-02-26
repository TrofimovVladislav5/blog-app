import styles from './ArticleDetail.module.scss';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';

const ArticleDetail = ({ article }) => {
  return (
    <div>
      <Link to="/articles" className={styles.return__link}>← Назад к списку</Link>
      <div className={styles.details}>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.content}>{article.content}</p>
        <span className={styles.date}>Дата публикации статьи {formatDate(article.created_at)}</span>  
      </div>
    </div>
  );
}

export default ArticleDetail;