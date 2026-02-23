<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArticleRequest;
use App\Http\Resources\ArticleResource;
use App\Models\Article;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return ArticleResource::collection(Article::all());
    }

    public function store(StoreArticleRequest $request)
    {
        $article = Article::create($request->validated());
        return (new ArticleResource($article))
            ->response()
            ->setStatusCode(201);
    }

    public function show(string $id)
    {
        $article = Article::with('comments')->findOrFail($id);
        return new ArticleResource($article);
    }

    public function update(Request $request, string $id)
    {

    }

    public function destroy(string $id)
    {

    }
}
