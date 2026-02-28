import { useState } from 'react';
import styles from './CommentForm.module.scss';

const CommentForm = ({ articleId, onCommentAdded }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/articles/${articleId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author_name: author,
          content
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      onCommentAdded(data);
      setAuthor('');
      setContent('')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">
          Ваше имя
        </label>
        <input 
          id="name" 
          name="name"
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
          name="comment" 
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