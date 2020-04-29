$(document).ready(function(){    
    $("td").on('click','.changeUserStatus a',function(){
            
        var id=$(this).parent().attr('id');
        var url=$(this).attr('href');
        $.ajax({
            url:url,
            success:function(response){
               $("#"+id).html(response);
            }
        });
        return false
    });

    $(function() {

        $('.daterange').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });

        $('.daterange').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });

        $('.daterange').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });
    });



    $('.summernote').summernote({
         height: 200
    });

    //CKEditor
    // CKEDITOR.replace('ckeditor');
    // CKEDITOR.config.height = 300;

     //TinyMCE
    tinymce.init({
        selector: "textarea#tinymce",
        theme: "modern",
        height: 300,
        plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons template paste textcolor colorpicker textpattern imagetools'
        ],
        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor emoticons',
        image_advtab: true
    });
    tinymce.suffix = ".min";
    tinyMCE.baseURL = SITE_URL+'/backend/plugins/tinymce';

    //Autocomplete Tags
    var tagApi = $(".tm-input").tagsManager();   
    var cms_id= $('#cms_id').val();
    if(cms_id == '')
        var path = "tagsSearch";
    else
        var path = "tagsSearch";
    
    var redirectPath = SITE_URL+"/admin/contentManagement/saveTag";
    jQuery(".typeahead").typeahead({
        name: 'tags',
        displayKey: 'name',
        source: function (query, process) {
            return $.get(path, { query: query }, function (data) {  
                // $.ajax({
                //     url:redirectPath,
                //     type:"POST",
                //     headers: {
                //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                //     },
                //     data:{name:data.name},
                //     dataType:"json",
                //     success:function(data)
                //     {
                        
                //     }
                // });
                return process(data);
            });
        },
        afterSelect :function (item){
            tagApi.tagsManager("pushTag", item.name);
        }   
    });

    $(".show_on_home").change(function (e) {
       
        var value = this.value;
        var id = this.id;
        var redirectPath = SITE_URL+"/admin/user/showOnHome";
        var redirecLocation = SITE_URL+"/admin/users";
        $.ajax({
            type:"POST",
            data: {status:value,id:id},
            
            url : redirectPath,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success:function(response){
          
                if(response.status == "success")
                {                       
                    location.href = redirecLocation;
                }
                else
                {
                    location.href = redirecLocation;
                }
            }
        });   
    });

    $(".newsletter-submit").click(function (e) {
        var id = [];
        var email = [];
        $.each($("input[name='status']:checked"), function(){     
            var $this = $(this);       
            //value.push($(this).val());
            id.push($this.attr("id"));
            email.push($this.attr("data-email"));

        });
        var ids = id.join(",");
        var emails = email.join(",");
        var value = 1;
      
        var redirectPath = SITE_URL+"/admin/newsletter_subscription/newsletter_reply";
        var redirecLocation = SITE_URL+"/admin/newsletter_subscription";
        if(ids != ''){
            $.ajax({
                type:"POST",
                data: {status:value,id:ids,email:emails},
                url : redirectPath,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success:function(response){
              
                    if(response.status == "success")
                    {                       
                       location.href = redirecLocation;
                    }
                    else
                    {
                        location.href = redirecLocation;
                    }
                }
            });   
        }
    });


    $(".approve-reject").click(function (e) {
        var status = $(this).attr('data-value');
        var id = [];
        var email = [];
        $.each($("input[name='status']:checked"), function(){     
            var $this = $(this);       
            //value.push($(this).val());
            id.push($this.attr("id"));
            email.push($this.attr("data-email"));
        });
        var ids = id.join(",");
        var emails = email.join(",");
        if(status == 'approve'){
            var value = 4;
        }
        else{
            var value = 7;
        }
        
      
        var redirectPath = SITE_URL+"/admin/campaign/approve_reject";
        var redirecLocation = SITE_URL+"/admin/campaigns";
        if(ids != ''){
            $.ajax({
                type:"POST",
                data: {status:value,id:ids,email:emails},
                url : redirectPath,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                beforeSend: function(){
                    // Show image container
                    $("#loader").show();
                },
                success:function(response){
              
                    if(response.status == "success")
                    {   
                        //$('#newsFlashMessage').text(response.message).show();
                        //$('#newsFlashMessage').addClass('green');                    
                        location.href = redirecLocation;
                    }
                    else
                    {
                        //$('#newsFlashMessage').text(response.message).show(); 
                        //$('#newsFlashMessage').addClass('green');
                        location.href = redirecLocation;
                    }
                },
                complete:function(data){
                    // Hide image container
                    $("#loader").hide();
                }
            });   
        }
    });

    $('#menu_place').on('change', function() {
        if(this.value == 2) {
            $('.footer-menu-place').show();
        } else {
            $('.footer-menu-place').hide();
        }
    });

    $('#menu_type').on('change', function() {
        if(this.value == 1) {
            $('.page').show();
            $('.links').hide();
        } else {
            $('.links').show();
            $('.page').hide();
        }
    });

    //Autocomplete Tags
    var tagApi = $(".product-input").tagsManager();  
    
    //var cms_id= $('#cms_id').val();
   // if(cms_id == '')
       // var path = "tagsSearch";
    //else
    var path = "tagsSearch";
    
    jQuery(".typeaheadProduct").typeahead({
        name: 'tags',
        displayKey: 'name',
        source: function (query, process) {
            return $.get(path, { query: query }, function (data) {  
                return process(data);
            });
        },
        afterSelect :function (item){
            tagApi.tagsManager("pushTag", item.name);
        }   
    });
});

/** Category list as tree view **/
$.fn.extend({
    treed: function (o) {
      
      var openedClass = 'glyphicon-minus-sign';
      var closedClass = 'glyphicon-plus-sign';
      
      if (typeof o != 'undefined'){
        if (typeof o.openedClass != 'undefined'){
        openedClass = o.openedClass;
        }
        if (typeof o.closedClass != 'undefined'){
        closedClass = o.closedClass;
        }
      };
      
        //initialize each of the top levels
        var tree = $(this);
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
      tree.find('.branch .indicator').each(function(){
        $(this).on('click', function () {
            $(this).closest('li').click();
        });
      });
        //fire event to open branch if the li contains an anchor instead of text
        tree.find('.branch>a').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

//Initialization of treeviews

$('#tree1').treed();
/* Initialization of treeviews */



    $('#sale_price').on('change', function() {
        $('#sale_price_vat').val('');
        var invoice_type = $('#invoice_type').val();
        var license_type = $('#license_type').val();
        var taxfreevat = parseInt($('#taxfreevat').val());
        var withoutlicensevat = parseInt($('#withoutlicensevat').val());
        var vat = parseInt($('#vat').val());

        var salepriceWithoutVat = $('#sale_price').val();
        var basePriceWithVat = $('#base_price').val();
        var maxAllowedPriceWithVat = $('#max_allowed_price').val();

        if(parseInt(salepriceWithoutVat) >= parseInt(basePriceWithVat)){
            if(salepriceWithoutVat != ''){
                //If company
                var salepriceWithVat = (parseInt(salepriceWithoutVat)*(1+vat/100)).toFixed(2);
                if(salepriceWithVat <= parseInt(maxAllowedPriceWithVat)){
                    var basePriceWithoutVat = (parseInt(basePriceWithVat)/(1+vat/100)).toFixed(2);
                    var grossMargin = (parseInt(salepriceWithoutVat)-basePriceWithoutVat).toFixed(2);
                    if(invoice_type == 1){
                        var netMargin = (parseInt(salepriceWithoutVat)-basePriceWithoutVat).toFixed(2);
                    }
                    else{
                        if(license_type == 0)
                            var netMargin = parseInt(salepriceWithoutVat)-basePriceWithoutVat;
                        else if(license_type == 1)
                            var netMargin = (grossMargin*(1-taxfreevat/100)).toFixed(2);
                        else if(license_type == 2)
                            var netMargin = (grossMargin*(1-withoutlicensevat/100)).toFixed(2);
                    }

                    $('#gross_margin').val(grossMargin);
                    $('#net_margin').val(netMargin);
                    $('#sale_price_vat').val(salepriceWithVat);
                    $('#btnsubmit').val('Please wait ...')
                        .attr('disabled',false);
                }
                else{
                    alert('Sale Price with vat cannot be greater than max allowed price');
                    $('#gross_margin').val('');
                    $('#net_margin').val('');
                    $('#sale_price_vat').val('');
                    $('#btnsubmit').val('Please wait ...')
                        .attr('disabled','disabled');
                }
            }
        }
        else{
            alert('Sale Price cannot be lower than base price');
            $('#gross_margin').val('');
            $('#net_margin').val('');
            $('#sale_price_vat').val('');
            $('#btnsubmit').val('Please wait ...')
              .attr('disabled','disabled');         
        }
    });

    $('#sale_price_vat').on('change', function() {
        $('#sale_price').val('');
        var invoice_type = $('#invoice_type').val();
        var license_type = $('#license_type').val();
        var taxfreevat = parseInt($('#taxfreevat').val());
        var withoutlicensevat = parseInt($('#withoutlicensevat').val());
        var vat = parseInt($('#vat').val());
        

        var salepriceVat = $('#sale_price_vat').val();
        var basePriceWithVat = $('#base_price').val();
        var maxAllowedPriceWithVat = $('#max_allowed_price').val();
        
        if(parseInt(salepriceVat) <= parseInt(maxAllowedPriceWithVat)){
            if(salepriceWithoutVat != ''){
                //If company
                var salepriceWithoutVat = ((salepriceVat*100)/(100+vat)).toFixed(2);
                if(parseInt(salepriceWithoutVat) >= parseInt(basePriceWithVat)){
                    var basePriceWithoutVat = (parseInt(basePriceWithVat)/(1+vat/100)).toFixed(2);
                    var grossMargin = (parseInt(salepriceWithoutVat)-basePriceWithoutVat).toFixed(2);
                    if(invoice_type == 1){
                        var netMargin = (parseInt(salepriceWithoutVat)-basePriceWithoutVat).toFixed(2);
                    }
                    else{
                        if(license_type == 0)
                            var netMargin = parseInt(salepriceWithoutVat)-basePriceWithoutVat;
                        else if(license_type == 1)
                            var netMargin = (grossMargin*(1-taxfreevat/100)).toFixed(2);
                        else if(license_type == 2)
                            var netMargin = (grossMargin*(1-withoutlicensevat/100)).toFixed(2);
                    }

                    $('#gross_margin').val(grossMargin);
                    $('#net_margin').val(netMargin);
                    $('#sale_price').val(salepriceWithoutVat);
                    $('#btnsubmit').val('Please wait ...')
                        .attr('disabled',false);
                }
                else{
                    alert('Sale Price cannot be lower than base price');
                    $('#gross_margin').val('');
                    $('#net_margin').val('');
                    $('#sale_price').val('');
                    $('#btnsubmit').val('Please wait ...')
                        .attr('disabled','disabled');
                }
            }
        }
        else{
            alert('Sale Price with vat cannot be greater than max allowed price');
            $('#gross_margin').val('');
            $('#net_margin').val('');
            $('#sale_price').val('');
            $('#btnsubmit').val('Please wait ...')
              .attr('disabled','disabled');
        }
    });

    $('.address-availability').click(function(){
        var slug = $("#slug").val();
        var path = SITE_URL+"/admin/search_address_availability";
        if(slug != ''){
            $.ajax({
                type:"POST",
                data: {slug:slug},
                url: path,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success:function(response){
              
                    if(response.status == "success")
                    {                       
                        $('#address-availability-result').text(response.message).show();
                        $('#address-availability-result').addClass('green');
                    }
                    else
                    {
                        $('#address-availability-result').text(response.message).show();
                        $('#address-availability-result').addClass('red');
                    }
                }
            });  
        }
    });

    $('#slug').on('input', function() {
        $('#address-availability-result').hide();
    });

    $('#title').on('input', function() {
        var title = $("#title").val();
        var slug = '';
        title = title.replace(/^\s+|\s+$/g, ''); // trim
        title = title.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "ŞİÇÜÖĞşıçüöğ";
        var to   = "SICUOGsicuog";
        for (var i=0, l=from.length ; i<l ; i++) {
             title = title.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        slug = title.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes        
        $('#slug').val(slug);
    });

    var oldValue = $('#order_status').children("option:selected").val();
    $('#order_status').change(function(){
        var order_id = $('#order_id').val();
        var $this = $(this);
        var newValue = $this.val();
        var redirectPath = SITE_URL+"/admin/order/changeStatus";
        var redirecLocation = SITE_URL+"/admin/orders";
        if($this.find("option:selected")){
            if(confirm('Are you sure want to change option?')) {
                oldValue = newValue;
                $.ajax({ 
                    type: "POST", 
                    data: {status:newValue,id:order_id},
                    url : redirectPath,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    beforeSend: function(){
                        // Show image container
                        $("#loader").show();
                    },
                    success:function(response){
              
                        if(response.status == "success")
                        {                       
                            location.href = redirecLocation;
                        }
                        else
                        {
                            location.href = redirecLocation;
                        }
                    },
                    complete:function(data){
                        // Hide image container
                        $("#loader").hide();
                    }
                });
            }else{
                $this.value = oldValue;
                return false;
            }            
        }        
    });

    $('#download_excel').on('click', function(){
        var content = $(this).attr('data-content');

        $.ajax({ 
            type : 'get',            
            responseType: 'blob',
            data:{'content':content},
            url : SITE_URL+"/admin/downloadExcel",
            // success:function(data){
            //     var blob = new Blob([data], { type: "application/vnd.ms-excel" });
            //     var URL = window.URL || window.webkitURL;
            //     var downloadUrl = URL.createObjectURL(blob);
            //     document.location = downloadUrl;
            // }
            success: function (response, textStatus, request) {
                var a = document.createElement("a");
                a.href = response.file; 
                a.download = response.name;
                document.body.appendChild(a);
                a.click();
                a.remove();
              },
              error: function (ajaxContext) {
                toastr.error('Export error: '+ajaxContext.responseText);
              }
        });
    });

    $('#download_pdf').on('click', function(){
        var content = $(this).attr('data-content');

        $.ajax({ 
            type : 'get',            
            responseType: 'blob',
            data:{'content':content},
            url : SITE_URL+"/admin/downloadPdf",
             success: function (response, status, xhr) {

                var filename = "";                   
                var disposition = xhr.getResponseHeader('Content-Disposition');

                 if (disposition) {
                    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = filenameRegex.exec(disposition);
                    if (matches !== null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                } 
                var linkelem = document.createElement('a');
                try {
                       var blob = new Blob([response], { type: 'application/octet-stream' });                        

                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                        //   IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        var URL = window.URL || window.webkitURL;
                        var downloadUrl = URL.createObjectURL(blob);

                        if (filename) { 
                            // use HTML5 a[download] attribute to specify filename
                            var a = document.createElement("a");

                            // safari doesn't support this yet
                            if (typeof a.download === 'undefined') {
                                window.location = downloadUrl;
                            } else {
                                a.href = downloadUrl;
                                a.download = filename;
                                document.body.appendChild(a);
                                a.target = "_blank";
                                a.click();
                            }
                        } else {
                            window.location = downloadUrl;
                        }
                    }   

                } catch (ex) {
                    console.log(ex);
                } 
            }
        });
     });


    $('#download_csv').on('click', function(){
        var content = $(this).attr('data-content');

        $.ajax({ 
            type : 'get',            
            responseType: 'blob',
            data:{'content':content},
            url : SITE_URL+"/admin/downloadCsv",
           
            success: function (response, status, xhr) {

                var filename = "";                   
                var disposition = xhr.getResponseHeader('Content-Disposition');

                 if (disposition) {
                    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = filenameRegex.exec(disposition);
                    if (matches !== null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                } 
                var linkelem = document.createElement('a');
                try {
                       var blob = new Blob([response], { type: 'application/octet-stream' });                        

                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                        //   IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        var URL = window.URL || window.webkitURL;
                        var downloadUrl = URL.createObjectURL(blob);

                        if (filename) { 
                            // use HTML5 a[download] attribute to specify filename
                            var a = document.createElement("a");

                            // safari doesn't support this yet
                            if (typeof a.download === 'undefined') {
                                window.location = downloadUrl;
                            } else {
                                a.href = downloadUrl;
                                a.download = filename;
                                document.body.appendChild(a);
                                a.target = "_blank";
                                a.click();
                            }
                        } else {
                            window.location = downloadUrl;
                        }
                    }   

                } catch (ex) {
                    console.log(ex);
                } 
            }
              
        });
    });


    $('#base_price').on('change', function() {
        var base_price = parseInt($('#base_price').val());
        var max_allowed_price = parseInt($('#max_allowed_price').val());


        if(base_price >= max_allowed_price){
            alert('Base Price cannot be greater than max allowed price');
            $('#btnsubmit').attr('disabled','disabled');
        }
        else{
           $('#btnsubmit').attr('disabled',false);          
        }
    });

    $('#max_allowed_price').on('change', function() {
        var base_price = parseInt($('#base_price').val());
        var max_allowed_price = parseInt($('#max_allowed_price').val());
        if(base_price >= max_allowed_price){
            alert('Base Price cannot be greater than max allowed price');
            $('#btnsubmit').attr('disabled','disabled');
        }
        else{
           $('#btnsubmit').attr('disabled',false);          
        }
       
    });


    //////////////// Datepicker
    $(function() {
         $('#datepicker').datepicker({
            autoclose: true,
            minDate: +7,
            maxDate: +45,
        });
    });
 

