<?php

use App\Http\Controllers\Admin\BachelorCrudController;
use App\Http\Controllers\Admin\TransactionCrudController;
use App\Http\Controllers\Admin\YearCrudController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/bachelors', [BachelorCrudController::class, 'getAllBachelor']);
Route::get('/years', [YearCrudController::class, 'getAllYears']);


Route::get('/transactions', [TransactionCrudController::class, 'getAllTransactions']);
Route::get('/transactions/{id}', [TransactionCrudController::class, 'getTransaction']);
Route::post('/transactions', [TransactionCrudController::class, 'store']);
Route::put('/transactions/{id}', [TransactionCrudController::class, 'updateTransaction']);
Route::delete('/transactions/{id}', [TransactionCrudController::class, 'deleteTransaction']);

Route::get('generateCsv', [TransactionCrudController::class, 'generateCsv']);
Route::get('generateExcel', [TransactionCrudController::class, 'generateExcel']);
