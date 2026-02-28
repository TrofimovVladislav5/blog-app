import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticleForm.module.scss';

const initialArticle = {
  title: '',
  description: '',
  content: ''
};

const ArticleForm = () => {
  const [article, setArticle] = useState(initialArticle);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setArticle(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`/api/articles`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article)
      })
      
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      setArticle(initialArticle);
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div className={styles.page}>
      <Link to="/articles" className={styles.return__link}>← Назад к списку</Link>
      <h1 className={styles.write}>Написать статью</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="title">
            Заголовок
          </label>
          <input 
            id="title"
            name="title" 
            placeholder="О чём хотите рассказать?" 
            value={article.title}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="description">
            Краткое содержание
          </label>
          <input 
            id="description"
            name="description" 
            placeholder="О чём хотите рассказать?" 
            value={article.description}
            onChange={handleChange}
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
            name="content"
            placeholder="Ваша история" 
            value={article.content}
            className={styles.textarea}
            onChange={handleChange}
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