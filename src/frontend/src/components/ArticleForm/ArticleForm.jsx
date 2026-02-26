import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticleForm.module.scss';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      return;
    }

    fetch(`/api/articles`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content
      })
    })
      .then(res => res.json())
      .then(data => {
        setContent('');
        setTitle('')
      });
    };

  return (
    <div class={styles.page}>
      <Link to="/articles" className={styles.return__link}>← Назад к списку</Link>
      <h1 className={styles.write}>Написать статью</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="title">
            Заголовок
          </label>
          <input 
            id="title" 
            placeholder="О чём хотите рассказать?" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="content">
            Содержание
          </label>
          <textarea 
            id="content" 
            placeholder="Ваша история" 
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
    </div>
  );
}

export default ArticleForm;