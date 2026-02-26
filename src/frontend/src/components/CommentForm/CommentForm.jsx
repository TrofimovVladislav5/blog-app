import { useState } from 'react';
import styles from './CommentForm.module.scss';

const CommentForm = ({ articleId, onCommentAdded }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim() || !author.trim()) {
      return;
    }

    fetch(`/api/articles/${articleId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author_name: author,
        content
      })
    })
      .then(res => res.json())
      .then(data=> {
        onCommentAdded(data.data);
        setAuthor('');
        setContent('')
      });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">
          Ваше имя
        </label>
        <input 
          id="name" 
          placeholder="Аноним" 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="comment">
          Комментарий
        </label>
        <textarea 
          id="comment" 
          placeholder="Здесь можете написать свои мысли" 
          value={content}
          className={styles.textarea}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <button type="submit" className={styles.button}>
        Отправить
      </button>
    </form>
  );
}

export default CommentForm;