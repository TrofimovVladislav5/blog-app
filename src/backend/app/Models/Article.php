<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Article extends Model
{
    use HasFactory;

    // Отключил согласно заданию
    const UPDATED_AT = null;

    protected $fillable = [
        'title',
        'description',
        'content'
    ];
    
    public function comments() {
        return $this->hasMany(Comment::class);
    }
}
