<?php

namespace App\Http\Resources;

use App\Http\Resources\CommentResource;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'content' => $this->content,
            'created_at' => $this->created_at,
            'comments' => CommentResource::collection($this->whenLoaded('comments')),
        ];
    }
}
