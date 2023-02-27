<?php

namespace App\Http\Middleware;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Rol
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        try {
            $user = User::where('id_usuario', auth()->user()->id_usuario)->first();
        } catch (\Throwable $th) {
            return response()->json([
                "error" => $th->getMessage()
            ]);
        }

        if ($user->rol !== 'admin'){
            return response()->json([
                "message" => "No posee permisos para acceder a esta ruta"
            ],401);
        }

        return $next($request);
    }
}
