<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Comment;

use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $articlesCount = 5;
        $commentsCount = 3;

        Article::factory($articlesCount)
            ->has(Comment::factory()->count($commentsCount))
            ->create();
    }
}
