<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Route Category
Route::resource('category', 'CategoryController');
Route::get('categoryLimit3', 'CategoryController@categoryLimit3');
// Route Product
Route::resource('product', 'ProductController');
Route::get('getProductNews', 'ProductController@getProductNews');
Route::get('getProductByCate/{product}', 'ProductController@getProductByCate');
Route::get('/getAllProducts', 'ProductController@getAllProducts');
// get product by category
Route::get('getProByCate/{category}', 'ProductController@getProByCate');
// get inner join pro and cate
Route::get('/getProCate', 'ProductController@getProCate');

// Route Category Blog
Route::resource('categoryblog', 'CategoryBlogController');

// Route Blog
Route::resource('blog', 'BlogController');
Route::get('blogLimit', 'BlogController@getBlogLimit');
// get inner join blog and cate
Route::get('/getBlogCate', 'BlogController@getBlogCate');
// get blog by category
Route::get('getBlogByCate/{category_blog}', 'BlogController@getBlogByCate');

// Route Contact
Route::resource('contact', 'ContactController');

// Route Search
Route::get('/search/{valueSearch}', 'ProductController@searchProduct');
