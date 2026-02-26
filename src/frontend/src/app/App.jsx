import Header from '../components/layout/Header';
import ArticlesPage from '../pages/Articles';
import ArticlePage from '../pages/Article'
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import Footer from '../components/layout/Footer';
import ArticleForm from '../components/ArticleForm';

function App() {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Navigate to="/articles" />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/new" element={<ArticleForm />} />
            <Route path="/articles/:id" element={<ArticlePage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;
