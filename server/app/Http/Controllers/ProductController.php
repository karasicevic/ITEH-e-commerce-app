<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\product;

class ProductController extends Controller
{
    public function add(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'name'=>'required',
            'category'=>'required',
            'producer'=>'required',
            'desc'=>'required',
            'image'=>'required'| 'image',
            'price'=>'required'
        ]);
        if($validator->fails())
        {
            return response()->json(['error'=>$validator->errors()->all()], 409);
        }
        $p = new product();
        $p->name=$request->name;
        $p->category=$request->category;
        $p->producer=$request->producer;
        $p->desc=$request->desc;
        $p->price=$request->price;
        $p->save();

        $url="http/localhost:8000/storage/";
        $file=$request->file('image');
        $extension=$file->getClientOriginalExtension();
        $path=$request->file('image')->storeAs('proimages/', $p->id.'.'.$extension);
        $p->image=$path;
        $p->imgpath=$url.$path;
        $p->save();
    }
}
