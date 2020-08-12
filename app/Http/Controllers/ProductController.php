<?php

namespace App\Http\Controllers;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Product;
use App\Category;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Product::all());
    }
    // get inner join pro and cate
    public function getProCate()
    {
        $products = DB::table('products')
            ->join('category', 'category.id', '=', 'products.category_id')
            ->select('products.*', 'category.name_cate')
            ->get();
        return response()->json($products);
    }
    public function getProductNews()
    {
        $products = Product::orderBy('id', 'desc')->take(8)->get();
        return response()->json($products);
    }
    // get pro by cate
    public function getProductByCate(Product $product)
    {
        $products = Product::where('category_id', $product->category_id)->where('id', '!=', $product->id)->take(4)->get();
        return response()->json($products, 200);
    }
    // get All
    public function getAllProducts()
    {
        $dataAllPro = Product::paginate(9);
        return response()->json($dataAllPro);
    }
    // get Product by cate
    public function getProByCate(Category $category)
    {
        $products = Product::where('category_id', $category->id)->get();
        return response()->json($products, 200);
    }

    // Search
    public function searchProduct($valueSearch)
    {
        $products = Product::where('name', 'LIKE', '%' . $valueSearch . '%')->get();
        return response()->json($products, 200);
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
        $product = new Product();
        $product->fill($request->all());
        $product->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Product::find($id));
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
        $product = Product::find($id);
        $product->category_id = $request->category_id;
        $product->name = $request->name;
        $product->image = $request->image;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->quantity = $request->quantity;
        $product->description = $request->description;
        $product->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::destroy($id);
    }
}
