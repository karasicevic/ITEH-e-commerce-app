<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class userController extends Controller
{
    public function register(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'email'=>'required| unique:users',
            'password'=>'required',
            'name'=>'required',

        ]);
        if($validator->fails())
        {
            return response()->json(['error'=>$validator->errors()->all()], 409);
        }
        $p = new User();
        $p->name=$request->name;
        $p->email=$request->email;
        $p->password=encrypt($request->password);
        $p->save();

        return response()->json(['m essage'=>"Successfully Registered"]);
    }

    public function login(Request $request)
    {

        $validator=Validator::make($request->all(),[
            'email'=>'required| unique:users',
            'password'=>'required',
            
        ]);
        if($validator->fails())
        {
            return response()->json(['error'=>$validator->errors()->all()], 409);
        }


        $user = User::where('email',$request->email)->get()->first();
        $password = decrypt($user->password);
        if($user && $password == $request->password)
        {
            return response()->json(['user'=>$user]);
        }
        else 
        {
            return response()->json(['error'=>["oops! Something Went Wrong"]], 409);
        }
        
    }

}
