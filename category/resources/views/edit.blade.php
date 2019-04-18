@extends('layout')

   

@section('content')

    <div class="row">

        <div class="col-lg-12 margin-tb">

            <div class="pull-left">

                <h2>Edit Category</h2>

            </div>

            <div class="pull-right">

                <a class="btn btn-primary" href="{{ route('category.index') }}"> Back</a>

            </div>

        </div>

    </div>

   

    @if ($errors->any())

        <div class="alert alert-danger">

            <strong>Whoops!</strong> There were some problems with your input.<br><br>

            <ul>

                @foreach ($errors->all() as $error)

                    <li>{{ $error }}</li>

                @endforeach

            </ul>

        </div>

    @endif

  
<form action="{{ route('category.update',$category->id) }}" method="POST">
    
<input name="_method" type="hidden" value="PATCH">
        {{ csrf_field() }}

        

   

         <div class="row">

            <div class="col-xs-12 col-sm-12 col-md-12">

                <div class="form-group">

                    <strong>Name:</strong>

                    <input type="text" name="name" value="{{ $category->name }}" class="form-control" placeholder="Name">

                </div>

            </div>

<!--            <div class="col-xs-12 col-sm-12 col-md-12">

                <div class="form-group">

                    <strong>Price:</strong>

                    

                </div>

            </div>-->

            <div class="col-xs-12 col-sm-12 col-md-12 text-center">

              <button type="submit" class="btn btn-primary">Submit</button>

            </div>

        </div>

   

    </form>

@endsection