import styles from './ArticleCard.module.scss';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';

const ArticleCard = ({ card }) => {
  return (
    <Link to={`/articles/${card.id}`} className={styles.card}>
      <ul className={styles.meta}>
        <li>{formatDate(card.created_at)}</li>
      </ul>
      <h3 className={styles.title}>{card.title}</h3>
      <span className={styles.readMore}>Читать далее →</span>
    </Link>
  );
};

export default ArticleCard;