<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryBlog extends Model
{
    protected $table = 'category_blog';
    protected $fillable = ['name_cate_blog', 'description'];
}
