<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'correo' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('correo', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);

    }

    public function register(Request $request){
        $user = new User();

        $user->nombre=$request->nombre;
        $user->apellido=$request->apellido;
        $user->rol=$request->rol;
        $user->correo= $request->correo;
        $user->password=Hash::make($request->get('password'));
        $user->dni=$request->dni;
        $user->telefono=$request->telefono;
        $user->fechaNacimiento=$request->fechaNacimiento;
        $user->tipoDocumento=$request->tipoDocumento;
        $user->id_direccion=$request->id_direccion;
       
        try {
            $user->save();
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage,
                'message' => 'Error al crear el usuario'
            ]);
        }
        $token = Auth::login($user);

        return response()->json([
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

}