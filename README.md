## Быстрый старт

### 1. Запуск контейнеров

```bash
docker compose up -d
```

### 2. Первичная инициализация базы данных

Заходим в контейнер бэкенда:

```bash
docker exec -it blog-app-backend-1 sh
```

Запускаем миграции и сиды одной командой:

```bash
php artisan migrate --seed
```

Или раздельно:

```bash
php artisan migrate
php artisan db:seed
```

---

## Доступные сервисы

| Сервис | URL | Описание |
|--------|-----|----------|
| Frontend | [localhost:8000](http://localhost:8000) | Основное веб-приложение |
| API | [localhost:8000/api](http://localhost:8000/api) | REST API эндпоинты |
| phpMyAdmin | [localhost:1500](http://localhost:1500) | Панель управления БД |

---

## API Endpoints

### Основные маршруты — `localhost:8000/`

| Метод | Путь | Описание |
|-------|------|----------|
| `GET` | `/` | Главная страница |
| `GET` | `/articles` | Страница со статьями |
| `GET` | `/articles/{id}` | Страница с детальной информацией о статье |
| `GET` | `/articles/new` | Страница с формой добавления статьи |

---

## phpMyAdmin

Панель управления базой данных доступна по адресу:
**[localhost:1500](http://localhost:1500)**

Параметры подключения берутся из файла **`phpmyadmin.env`** в корне проекта.

```env
# phpmyadmin.env (пример)
PMA_HOST=db
PMA_PORT=3306
MYSQL_ROOT_PASSWORD=secret
```

---

## Docker-контейнеры

| Контейнер | Описание |
|-----------|----------|
| `blog-app-backend-1` | Laravel PHP-бэкенд |
| `blog-app-frontend-1` | Фронтенд приложения |
| `blog-app-db-1` | MySQL база данных |
| `blog-app-phpmyadmin-1` | phpMyAdmin интерфейс |

---

## Технологии

- **Backend:** Laravel (PHP)
- **Database:** MySQL
- **Admin Panel:** phpMyAdmin
- **Containerization:** Docker / Docker Compose

---

## Требования

- [Docker](https://www.docker.com/) и [Docker Compose](https://docs.docker.com/compose/) установлены на вашей машине

---
