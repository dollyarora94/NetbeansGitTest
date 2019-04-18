<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {


        $categories = Category::latest()->paginate(5);
//        print_r($categories);
//exit();
        return view('index', compact('categories'))
                        ->with('i', (request()->input('page', 1) - 1) * 5);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        return view('create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
//        print_r("hi"); exit();
        $request->validate([
            'name' => 'required',
//            'price' => 'required',
        ]);
        category::create($request->all());



        return redirect()->route('category.index')
                        ->with('success', 'Category created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category) {

        return view('show', compact('category'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category) {

        return view('edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {

        $data = $request->all();
//        print_r($request->all()); exit();
        request()->validate([
            'name' => 'required',
//            'price' => 'required',
        ]);
//    public function update(Request $request,$id) {
//        print_r("hi"); exit();
//        
//               $request->validate([
//                  
//
//            'name' => 'required',
//
//            'price' => 'required',
//
//        ]);
        Category::find($id)->update($data);
//        $product->update($request->all());

        return redirect()->route('category.index')
                        ->with('success', 'Category updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
//    public function destroy(Product $product) {
//        $product->delete();
//
//
//
//        return redirect()->route('products.index')
//                        ->with('success', 'Product deleted successfully');
//    }

    public function destroy($id) {

//        print_r($id); exit();

//        $id->delete();
        Category::find($id)->delete();

        return redirect()->route('category.index')
                        ->with('success', 'Category deleted successfully');
    }

}