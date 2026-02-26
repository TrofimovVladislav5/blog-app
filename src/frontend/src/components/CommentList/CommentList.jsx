import styles from './CommentList.module.scss';
import { formatDate } from '../../utils/formatDate';

const CommentList = ( {comments} ) => {
    return (
      <div>
        <h2 className={styles.comments__title}>Комментарии ({comments.length})</h2>
          {comments.length > 0
            ? comments.map(comment => (
              <div className={styles.comment__container} key={comment.id}>
                <div className={styles.comment__header}>
                  <span className={styles.comment__author_name}>{comment.author_name}</span>
                  <span className={styles.comment__created_at}>{formatDate(comment.created_at)}</span>
                </div>
                <p className={styles.comment__content}>{comment.content}</p>
                </div>
            ))
            : <p>Комментариев не найдено</p>
          }
    </div>
  );
}

export default CommentList;