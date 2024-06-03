<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerRequest;
use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        return Inertia::render("Customers/Index", [
            "records" => Customer::all(),
        ]);
    }

    public function store(CustomerRequest $request)
    {
        Customer::create($request->validated());
        return redirect()->back()->with("Customer added successfully!");
    }
}
