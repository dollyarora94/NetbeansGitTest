@extends('layout')



@section('content')

<div class="row">

    <div class="col-lg-12 margin-tb">

        <div class="pull-left">

            <h2>CRUD IN LARAVEL</h2>

        </div>

        <div class="pull-right">

            <a class="btn btn-success" href="{{ route('products.create') }}"> Create New Product</a>

        </div>

    </div>

</div>



@if ($message = Session::get('success'))

<div class="alert alert-success">

    <p>{{ $message }}</p>

</div>

@endif



<table class="table table-bordered">

    <tr>

        <th>No</th>

        <th>Name</th>

        <th>Price</th>

        <th width="280px">Action</th>

    </tr>

    @foreach ($products as $product)

    <tr>

        <td>{{ ++$i }}</td>

        <td>{{ $product->name }}</td>

        <td>{{ $product->price }}</td>

        <td>

            <form action="{{ route('products.destroy',$product->id) }}" method="POST">
                <input name="_method" type="hidden" value="DELETE">
                {{ csrf_field() }}

                <a class="btn btn-info" href="{{ route('products.show',$product->id) }}">Show</a>



                <a class="btn btn-primary" href="{{ route('products.edit',$product->id) }}">Edit</a>

                <!--                 @method('DELETE')-->


                <!--                <a class="btn btn-danger" href="{{ route('products.destroy',$product->id) }}">Delete</a>-->

                <button type="submit" class="btn btn-danger">Delete</button>

            </form>

        </td>

    </tr>

    @endforeach

</table>



{!! $products->links() !!}



@endsection