<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Article;

use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index()
    {
    
    }

    public function store(StoreCommentRequest $request, string $id)
    {
        $article = Article::findOrFail($id);
        $comment = $article
            ->comments()
            ->create($request->validated());
        return (new CommentResource($comment))
            ->response()
            ->setStatusCode(201);
    }

    public function show(string $id)
    {

    }

    public function update(Request $request, string $id)
    {

    }

    public function destroy(string $id)
    {

    }
}
