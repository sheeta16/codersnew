$(document).ready(function(){
    $('.form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        excluded: [':disabled'],
        feedbackIcons: {
            required: 'fa fa-asterisk',
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Password.'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '<br/>Please enter value between 6 to 12 characters long.'
                    }
                }
            },
            old_password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter old password.'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '<br/>Please enter value between 6 to 12 characters long.'
                    }
                }
            },
            new_password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter New Password.'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '<br/>Please enter value between 6 to 12 characters long.'
                    },
                }
            },
            confirm_password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Confirm password.'
                    },
                    // stringLength: {
                    //     min: 6,
                    //     max: 12,
                    //     message: '<br/>Please enter value between 6 to 12 characters long.'
                    // },
                    identical: {
                        field: 'password',
                        message: '<br/>Password and confirm password doesn\'t\ match.'
                    }
                }
            },

            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Email.'
                    },
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Contact Number.'
                    },
                    stringLength: {
                        min: 7,
                        max: 7,
                        message: 'Please Enter only 7 digits.'
                    },
                }
            },
            first_name: {
                validators: {
                    notEmpty: {
                        message: 'Please enter First Name.'
                    },
                    stringLength: {
                        max: 30,
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9ŞİÇÜÖĞşıçüöğ _',.?!]*[!@#$%^&*(),.?":{}|<>]*$/i,
                        message: 'The First Name can consist of alphabetical characters and spaces only'
                    }
                }
            },
            sur_name: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Sur Name.'
                    },
                    stringLength: {
                        max: 30,
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9ŞİÇÜÖĞşıçüöğ _',.?!]*[!@#$%^&*(),.?":{}|<>]*$/i,
                        message: 'The Sur Name can consist of alphabetical characters and spaces only'
                    }
                }
            },
            'profile_image': {
                validators: {
                    file: {
                        extension: 'jpeg,png,jpg,gif,svg',
                        type: 'image/jpeg,image/png,image/jpg,image/gif,image/svg',
                        maxSize: 50 * 2048 * 1024,
                        message: 'The selected file is not valid, it should be(jpeg,png,jpg,gif,svg).It should be less than 50 MB'
                    }
                }
            },
            'birth_year': {
                validators: {
                    notEmpty: {
                        message: 'Please Select Birth Year.'
                    },
                }
            },
            'phone_prefix': {
                validators: {
                    notEmpty: {
                        message: 'Please Select Phone Prefix.'
                    },
                }
            },
            name: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Name.'
                    },
                    stringLength: {
                        max: 30,
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9ŞİÇÜÖĞşıçüöğ _',.?!]*[!@#$%^&*(),.?":{}|<>]*$/i,
                        message: 'The Name can consist of alphabetical characters and spaces only'
                    }
                }
            },
            family_name: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Family Name.'
                    },
                    stringLength: {
                        max: 30,
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9ŞİÇÜÖĞşıçüöğ _',.?!]*[!@#$%^&*(),.?":{}|<>]*$/i,
                        message: 'The Family Name can consist of alphabetical characters and spaces only'
                    }
                }
            },
            message: {
                validators: {
                    stringLength: {
                        max: 4000,
                    },
                }
            },
            title: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Title.'
                    },
                    stringLength: {
                        max: 255,
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9ŞİÇÜÖĞşıçüöğ _',.?!]*[!@#$%^&*(),.?":{}|<>]*$/i,
                        message: 'The title can consist of alphabetical characters and spaces only'
                    }
                }
            },
            sub_title: {
                validators: {
                    stringLength: {
                        max: 255,
                    },
                }
            },
            meta_key: {
                validators: {
                    stringLength: {
                        max: 255,
                    },
                }
            },
            meta_title: {
                validators: {
                    stringLength: {
                        max: 255,
                    },
                }
            },
            meta_description: {
                validators: {
                    stringLength: {
                        max: 255,
                    },
                }
            },
            search: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter Search Keyword.'
                    },
                }
            },
            type_id: {
                validators: {
                    notEmpty: {
                        message: 'Please Select Type.'
                    },
                }
            },
            'photos': {
                validators: {
                    file: {
                        extension: 'jpeg,png,jpg,gif,svg',
                        type: 'image/jpeg,image/png,image/jpg,image/gif,image/svg',
                        maxSize: 50 * 2048 * 1024,
                        message: 'The selected file is not valid, it should be(jpeg,png,jpg,gif,svg). It should be less than 50 MB'
                    }
                }
            },
            'videos[]': {
                validators: {
                    file: {
                        extension: '3gpp,3gp,mp4,mpeg,mpg,mov,avi,wmv,m4v,flv,webm',
                        type: 'video/3gpp,video/mp4,video/mpeg,video/quicktime,video/webm,video/x-flv,video/x-m4v,video/x-ms-wmv,video/x-msvideo',
                        maxSize: 50 * 2048 * 1024,
                        message: 'The selected file is not valid, it should be(3gpp,3gp,mp4,mpeg,mpg,mov,avi,wmv,m4v,flv,webm). It should be less than 50 MB'
                    }
                }
            },
            'cause_image_name': {
                validators: {
                    file: {
                        extension: 'jpeg,png,jpg,gif,svg',
                        type: 'image/jpeg,image/png,image/jpg,image/gif,image/svg',
                        maxSize: 50 * 2048 * 1024,
                        message: 'The selected file is not valid, it should be(jpeg,png,jpg,gif,svg). It should be less than 50 MB'
                    }
                }
            },
            'image': {
                validators: {
                    file: {
                        extension: 'jpeg,png,jpg,gif,svg',
                        type: 'image/jpeg,image/png,image/jpg,image/gif,image/svg',
                        maxSize: 50 * 2048 * 1024,
                        message: 'The selected file is not valid, it should be(jpeg,png,jpg,gif,svg). It should be less than 50 MB'
                    }
                }
            },
            
            // 'privileges[]': {
            //     validators: {
            //         choice: {
            //             min: 1,
            //             message: 'You must check at least 1 box'
            //         }
            //     }
            // },
        }
    });

    $('.email-form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        excluded: [':disabled'],
        feedbackIcons: {
            required: 'fa fa-asterisk',
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {        
            name: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Title.'
                    },
                    stringLength: {
                        max: 255,
                    },
                }
            },
            subject: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Subject.'
                    },
                    stringLength: {
                        max: 255,
                    },
                }
            },
        }
    });

    $('.changePassword_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        excluded: [':disabled'],
        feedbackIcons: {
            required: 'fa fa-asterisk',
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {        
            old_password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter old password.'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '<br/>Please enter value between 6 to 12 characters long.'
                    }
                }
            },
            new_password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter New Password.'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '<br/>Please enter value between 6 to 12 characters long.'
                    },
                }
            },
            confirm_password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Confirm password.'
                    },
                    // stringLength: {
                    //     min: 6,
                    //     max: 12,
                    //     message: '<br/>Please enter value between 6 to 12 characters long.'
                    // },
                    identical: {
                        field: 'new_password',
                        message: '<br/>Password and confirm password doesn\'t\ match.'
                    }
                }
            },
        }
    });

    $('.product_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        excluded: [':disabled'],
        feedbackIcons: {
            required: 'fa fa-asterisk',
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {        
            category_id: {
                validators: {
                    notEmpty: {
                        message: 'Please Select Category.'
                    },
                }
            },
            // cause_id: {
            //     validators: {
            //         notEmpty: {
            //             message: 'Please Select Cause.'
            //         },
            //     }
            // },
            color_id: {
                validators: {
                    notEmpty: {
                        message: 'Please Select Color.'
                    },
                }
            },
            base_price: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter Base Price.'
                    },
                }
            },
            max_allowed_price: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter Max Allowed Price.'
                    },
                }
            },
            default_vat_percent: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter VAT Percentage.'
                    },
                }
            }, 
            in_stock_quantity: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter Stock Quantity.'
                    },
                    stringLength: {
                        max: 8,
                        //message: '<br/>Please enter value between 6 to 12 characters long.'
                    },
                }
            }, 
            'image': {
                validators: {
                    // notEmpty: {
                    //     message: 'Please Upload Product Image.'
                    // },
                    file: {
                        extension: 'jpeg,png,jpg,gif,svg',
                        type: 'image/jpeg,image/png,image/jpg,image/gif,image/svg',
                        maxSize: 50 * 2048 * 1024,
                        message: 'The selected file is not valid, it should be(jpeg,png,jpg,gif,svg). It should be less than 50 MB.'
                    }
                }
            },
            'back_image': {
                validators: {
                    file: {
                        extension: 'jpeg,png,jpg,gif,svg',
                        type: 'image/jpeg,image/png,image/jpg,image/gif,image/svg',
                        maxSize: 50 * 2048 * 1024,
                        message: 'The selected file is not valid, it should be(jpeg,png,jpg,gif,svg). It should be less than 50 MB'
                    }
                }
            },          
        }
    });

     $('.merchandise-form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        excluded: [':disabled'],
        feedbackIcons: {
            required: 'fa fa-asterisk',
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {        
            title: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Product Name.'
                    },
                    stringLength: {
                        max: 60,
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9ŞİÇÜÖĞşıçüöğ _]*[!@#$%^&*(),.?":{}|<>]*$/i,
                        message: '<br/>The Name can consist of alphanumeric characters and spaces only.'
                    }
                }
            },
            description: {
                validators: {
                    stringLength: {
                        max: 500,
                    },
                }
            },
        }
    });

    $('.cause-form').bootstrapValidator({
        excluded: [':disabled'],
        feedbackIcons: {
            required: 'fa fa-asterisk',
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {        
            title: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Title.'
                    },
                    stringLength: {
                        max: 255,
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9ŞİÇÜÖĞşıçüöğ _]*[!@#$%^&*(),.?":{}|<>]*$/i,
                        message: '<br/>The title can consist of alphanumeric characters and spaces only.'
                    }
                }
            },
            slug: {
                validators: {
                    notEmpty: {
                        message: 'Please enter Address.'
                    },
                    stringLength: {
                        max: 255,
                    },
                }
            },
            cause_type_id: {
                validators: {
                    notEmpty: {
                        message: 'Please Select Cause.'
                    },
                }
            },
            // closedate: {
            //     validators: {
            //         notEmpty: {
            //             message: 'Please Choose a Date.'
            //         },
            //     }
            // }, 
            target: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter Target.'
                    },
                    greaterThan: {
                        value: 500,
                        inclusive: true,
                        message: 'The target has to be greater than or equals to 500.'
                    }
                }
            },   
        }
    });
});