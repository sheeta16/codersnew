<!-- pdf.blade.php -->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
   <table class="table table-bordered table-striped table-hover dataTable js-exportable">
           <thead>
               <tr>
                  
                   <th>Option</th>
                   <th>Type</th>
                   <th>Name</th>
                   <th>Cost/Price</th>
                   <th>Option Hours</th>
                   <th>Weight</th>
                   
               </tr>
           </thead>
           
           <tbody>
               <?php 
               foreach($option as $key=>$value):?>
                   <tr>
                     
                       <td>{{$value->option}}</td>
                       <td>{{$value->type}}</td>
                       <td>{{$value->name}}</td>
                       <td>{{$value->price}}</td>
                       <td>{{$value->hours}}</td>
                       <td>{{$value->weight}}</td>
                       
                      
                      
                   </tr>                      
               <?php  endforeach; ?>
               
           </tbody>
       </table>
  </body>
</html>