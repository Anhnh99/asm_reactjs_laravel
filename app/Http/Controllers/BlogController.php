<?php

namespace App\Http\Controllers;

use App\Blog;
use App\CategoryBlog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Blog::All());
    }
    public function getBlogLimit()
    {
        $blog = Blog::orderBy('id', 'desc')->take(3)->get();
        return response()->json($blog);
    }
    // inner join 
    public function getBlogCate()
    {
        $blogs = DB::table('blogs')
            ->join('category_blog', 'category_blog.id', '=', 'blogs.id_cate_blog')
            ->select('blogs.*', 'category_blog.name_cate_blog')
            ->get();
        return response()->json($blogs);
    }
    // get Blog by cate
    public function getBlogByCate($category_blog)
    {
        $blogs = Blog::where('id_cate_blog', $category_blog)->get();
        return response()->json($blogs);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $blog = new Blog();
        $blog->fill($request->all());
        $blog->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Blog::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $blog = Blog::find($id);
        $blog->fill($request->all());
        $blog->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Blog::destroy($id);
    }
}
