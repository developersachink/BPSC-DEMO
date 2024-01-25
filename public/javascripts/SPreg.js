
function RefreshImage() {
    var path = location.pathname.split('/');
    var appName = path[path.length - 3]; // if you just want 'three'
    const d = new Date();
    var RootUrl = window.location.protocol + "//" + window.location.host + "//" + appName + "/"
    $("#img-captcha").attr("src", RootUrl + "/get-captcha-image?" + d.getTime());
}
function RefreshImage1() {
    var path = location.pathname.split('/');
    var appName = path[path.length - 3]; // if you just want 'three'
    const d = new Date();
    var RootUrl = window.location.protocol + "//" + window.location.host + "/" + "//" + appName + "/"
    $("#img-captcha").attr("src", RootUrl + "/get-captcha-image1?" + d.getTime());
}


function RefreshImage2() {
    // Check an environment variable or configuration setting to determine the environment
    var isDebug = isDebugEnvironment(); // Implement this function according to your setup
    // Define the IIS application name for production
    var path = location.pathname.split('/');
    var iisAppName = path[path.length - 3]; // if you just want 'three'
    // Define the port for your local development environment
    var localPort = window.location.port; // Change this to your specific port
    // Create the RootUrl based on the environment
    var RootUrl;
    if (isDebug) {
        // For local development
        RootUrl = "http://localhost:" + localPort + "/";
    } else {
        // For production on IIS
        RootUrl = window.location.protocol + "//" + window.location.host + "/" + iisAppName + "/";
    }
    const d = new Date();
    var timestamp = d.getTime();
    // Get the image element by its ID
    var img = document.getElementById("img-captcha");
    if (img) {
        // Create a new image element
        var newImg = new Image();
        newImg.onload = function () {
            // Replace the old image with the new one
            img.src = newImg.src;
        };
        newImg.src = RootUrl + "get-captcha-image2?" + timestamp;
    }
}

function RefreshImageotp() {
    // Check an environment variable or configuration setting to determine the environment
    var isDebug = isDebugEnvironment(); // Implement this function according to your setup
    // Define the IIS application name for production
    var path = location.pathname.split('/');
    var iisAppName = path[path.length - 3]; // if you just want 'three'
    // Define the port for your local development environment
    var localPort = window.location.port; // Change this to your specific port
    // Create the RootUrl based on the environment
    var RootUrl;
    if (isDebug) {
        // For local development
        RootUrl = "http://localhost:" + localPort + "/";
    } else {
        // For production on IIS
        RootUrl = window.location.protocol + "//" + window.location.host + "/" + iisAppName + "/";
    }
    const d = new Date();
    var timestamp = d.getTime();
    // Get the image element by its ID
    var img = document.getElementById("img-captcha");
    if (img) {
        // Create a new image element
        var newImg = new Image();
        newImg.onload = function () {
            // Replace the old image with the new one
            img.src = newImg.src;
        };
        newImg.src = RootUrl + "get-captcha-imageotp?" + timestamp;
    }
}

// Implement this function to check the environment
function isDebugEnvironment() {
    var port = window.location.port;
    // Check if the hostname contains "localhost" or a specific subdomain for local development.
    if (window.location.hostname.includes(":") || port !== "" || window.location.hostname.includes("localhost:")) {
        return true; // It's a local (debug) environment
    }
    else {
        return false;
    }
}

function AcceptTermAndcondition() {
    if (!$("#Add_Preg").valid()) {
        return;
    }

    //var show = $('#myModal').hasClass('in');
    //if ($("#IsAccepted").is(':checked')) {
    //    //$("#CaptchaCode").val("");
    //    return true;
    //}
    ////else if ((show == true) & ($("#IsAccepted").is(':unchecked'))) {
    //else if ($("#IsAccepted").is(':unchecked')) {
    //    alert("Please accept terms and conditions");
    //    return false;
    //}
}

//EDIT RECORD BUTTON 
function ClearTermsCond() {
    $('#myModal').modal('hide');
    $("#CaptchaCode").val("");
    RefreshImage2();// 
}


//-----------------------------

function catload() {
    var subcategoryDropdown = $('#bain_Categoryid');
    var domup = $('#bain_isDomicileJha').val();
    subcategoryDropdown.empty();
    if (domup == "YES") {
        subcategoryDropdown.append($('<option>', { value: "", text: "Select" }));
        subcategoryDropdown.append($('<option>', { value: "1", text: "UR" }));
        subcategoryDropdown.append($('<option>', { value: "2", text: "SC" }));
        subcategoryDropdown.append($('<option>', { value: "3", text: "ST" }));
        subcategoryDropdown.append($('<option>', { value: "4", text: "EBC-1" }));
        subcategoryDropdown.append($('<option>', { value: "5", text: "BC-2" }));
        subcategoryDropdown.append($('<option>', { value: "6", text: "EWS" }));
    }
    else {
        subcategoryDropdown.append($('<option>', { value: "", text: "Select" }));
        subcategoryDropdown.append($('<option>', { value: "1", text: "UR" }));
    }
}

function ChkReload() {

    //var domliveval = $("#bain_isDomicileUPlive option:selected").val();
    var domval = $("#bain_isDomicileJha option:selected").val();
    var genval = $("#bain_Genderid option:selected").text();

    // Modification on 28/12/2023
    if (domval.toUpperCase() == "YES") {
        $('#div_bain_hdistrictid').show();
        $('#tr_bain_isExServiceman').show();
        $('#Div_Ishomegaurd').show();
        $('#Div_bain_Issportquota').show();
    } else {
        $('#div_bain_hdistrictid').hide();
        $('#tr_bain_isExServiceman').hide();
        $('#Div_Ishomegaurd').hide();
        $('#Div_bain_Issportquota').hide();
    }
    //
    //Marital Status
    var bain_maritial = $("#bain_maritial option:selected").text();
    if (bain_maritial.toUpperCase() == 'MARRIED' || bain_maritial.toUpperCase() == 'OTHERS') {
        $('#div_bain_maritial').show();
    } else {
        $('#div_bain_maritial').hide();
    }



    //Primitive
    if (domval.toUpperCase() == "YES") {
        var bain_Primitive_ST = $("#bain_Categoryid option:selected").text();
        if (bain_Primitive_ST.toUpperCase() == "ST") {
            $('#divPrimeST').show();
            var bain_Primitive = $("#bain_Primitive option:selected").text();
            if (bain_Primitive.toUpperCase() == 'YES') {
                $('#div_bain_Primitive').show();
            } else {
                $('#div_bain_Primitive').hide();
            }
        }
        else {
            $('#divPrimeST').hide();
        }
    }
    else {
        $('#divPrimeST').hide();
        $('#div_bain_Primitive').hide();
    }


    //ExserviceMan
    if (domval.toUpperCase() == "YES") {
        var bain_isExServiceman = $("#bain_isExServiceman option:selected").text();
        if (bain_isExServiceman.toUpperCase() == "YES") {
            $('#Div_bain_isExServiceman').show();
        }
        else {
            $('#Div_bain_isExServiceman').hide();
        }
    }
    else {
        $('#tr_bain_isExServiceman').hide();
        $('#Div_bain_isExServiceman').hide();
    }

    //HomeGuard
    if (domval.toUpperCase() == "YES") {
        var bain_homegaurd = $("#bain_homegaurd option:selected").text();
        if (bain_homegaurd.toUpperCase() == "YES") {
            $('#Divhomegaurd').show();
        }
        else {
            $('#Divhomegaurd').hide();
        }
    }
    else {
        $('#Div_Ishomegaurd').hide();
        $('#Divhomegaurd').hide();
    }





    //Sports    
    if (domval.toUpperCase() == "YES") {
        $('#Div_bain_Issportquota').show();
        $('#Div_bain_sportquotatype').hide();
        var bain_Issportquota = $("#bain_Issportquota option:selected").text();
        if (bain_Issportquota.toUpperCase() == 'YES') {
            $('#Div_bain_sportquotatype').show();
        } else {
            $('#Div_bain_sportquotatype').hide();
        }
    } else {
        $('#Div_bain_Issportquota').hide();
        $('#Div_bain_sportquotatype').hide();
    }








    if (genval.toUpperCase() == "" && (domval.toUpperCase() == "" || domval.toUpperCase() == "")) {
        $('#divUPInfo').hide();
        $('#div_DomicileUPNO').hide();
        //$('#div_DomicileUPlive').hide();
        $('#div_DomicileUP').hide();
    }
    else if (genval.toUpperCase() != "FEMALE" && (domval.toUpperCase() == "" || domval.toUpperCase() == "NO")) {
        $('#divUPInfo').hide();
        $('#div_DomicileUPNO').hide();
        //$('#div_DomicileUPlive').show();
        $('#div_DomicileUP').hide();
    }
    else if (genval.toUpperCase() == "FEMALE") {
        $('#divUPInfo').show();
        $('#div_DomicileUPNO').hide();
        //$('#div_DomicileUPlive').show();
        $('#div_DomicileUP').hide();
    }
    else if (domval.toUpperCase() == "YES") {
        $('#divUPInfo').show();
        $('#div_DomicileUPNO').hide();
        //$('#div_DomicileUPlive').show();
        $('#div_DomicileUP').show();
    } else if (genval.toUpperCase() == "FEMALE" && (domval.toUpperCase() == "NO")) {
        $('#divUPInfo').show();
        $('#div_DomicileUPNO').show();
        //$('#div_DomicileUPlive').hide();
        $('#div_DomicileUP').hide();
    } else if (genval.toUpperCase() == "FEMALE" && (domval.toUpperCase() == "")) {
        $('#divUPInfo').show();
        $('#div_DomicileUPNO').show();
        //$('#div_DomicileUPlive').hide();
        $('#div_DomicileUP').hide();
    }
    else if (domlive.toUpperCase() == "NO") {
        $('#divUPInfo').hide();
        $('#div_DomicileUPNO').show();
        //$('#div_DomicileUPlive').hide();
        $('#div_DomicileUP').hide();
    } else {
        //$('#div_DomicileUPlive').hide();
        $('#div_DomicileUP').hide();
    }
}

function chkupandfmale() {
    $('#div_DomicileUP').hide();
    $('#bain_DomicileIssueAuth').val("");
    $('#bain_DomicileissueDate').val("");
    $('#bain_DomicileSlno').val("");
    $('#bain_hdistrictid').val("");
    $('#bain_hdstateid').val("");

    $('#bain_Categoryid').val("");
    $('#bain_CategoryIssueAuth').val("");
    $('#bain_CategoryissueDate').val("");
    $('#bain_CategorySlno').val("");
    $('#bain_Categoryappno').val("");

    //$('#bain_isFreedomFighter').val("");
    //$('#bain_FreedomFighterIssueAuth').val("");
    //$('#bain_FreedomFighterissueDate').val("");
    //$('#bain_FreedomFighterSlno').val("");

    //$('#bain_isGovtEmp').val("");
    //$('#bain_GovtEmpIssueAuth').val("");
    //$('#bain_GovtEmpissueDate').val("");

    $('#bain_homegaurd').val("");
    $('#bain_homegaurdissueDate').val("");
    $('#bain_homegaurdSlno').val("");

    $('#bain_isExServiceman').val("");
    $('#bain_ExServicemanCertNo').val("");
    $('#bain_ExServicemanIssueDate').val("");
    $('#bain_ExServicemanStartDate').val("");
    $('#bain_ExServicemanEndDate').val("");

    //var domliveval = $("#bain_isDomicileUPlive option:selected").val();
    var domval = $("#bain_isDomicileJha option:selected").val();
    var genval = $("#bain_Genderid option:selected").text();

    if (genval.toUpperCase() == "" && (domval.toUpperCase() == "" || domval.toUpperCase() == "")) {
        $('#divUPInfo').hide();
        $('#div_DomicileUPNO').hide();
        //$('#div_DomicileUPlive').hide();                
        $('#bain_isDomicileUP').val("");
        $('#div_DomicileUP').hide();
    }
    else if (genval.toUpperCase() != "FEMALE" && (domval.toUpperCase() == "" || domval.toUpperCase() == "NO")) {
        $('#divUPInfo').hide();
        $('#div_DomicileUPNO').hide();
        //$('#div_DomicileUPlive').show();  
        $('#div_DomicileUP').hide();
    }
    else if (genval.toUpperCase() == "FEMALE" && domval.toUpperCase() != "YES") {
        $('#divUPInfo').show();
        $('#div_DomicileUPNO').hide();
        //$('#div_DomicileUPlive').show();
        $('#div_DomicileUP').hide();
    }
    else if (genval.toUpperCase() == "FEMALE" && domval.toUpperCase() == "YES") {
        $('#div_DomicileUP').show();
    }

    else if (domval.toUpperCase() == "YES") {
        $('#divUPInfo').show();
        $('#div_DomicileUPNO').hide();
        //$('#div_DomicileUPlive').show();
        $('#div_DomicileUP').show();
    } else if (genval.toUpperCase() == "FEMALE" && (domval.toUpperCase() == "NO")) {
        $('#divUPInfo').show();
        $('#div_DomicileUPNO').show();
        //$('#div_DomicileUPlive').hide();
        $('#bain_isDomicileUP').val("");
        $('#div_DomicileUP').hide();
    } else if (genval.toUpperCase() == "FEMALE" && (domval.toUpperCase() == "")) {
        $('#divUPInfo').show();
        $('#div_DomicileUPNO').show();
        //$('#div_DomicileUPlive').hide();
        $('#bain_isDomicileUP').val("");
        $('#div_DomicileUP').hide();
    }
    else if (domlive.toUpperCase() == "NO") {
        $('#divUPInfo').hide();
        $('#div_DomicileUPNO').show();
        //$('#div_DomicileUPlive').hide();
        $('#bain_isDomicileUP').val("");
        $('#div_DomicileUP').hide();
    } else {
        //$('#div_DomicileUPlive').hide();
        $('#bain_isDomicileUP').val("");
        //document.getElementById('divCategoryid').style.display = 'none';
        $('#div_DomicileUP').hide();
    }
}

$(document).ready(function () {


    //----------------
    var subcategoryDropdown = $('#bain_Categoryid');
    var domup = $('#bain_isDomicileJha').val();
    var selectedValue = $('#bain_Categoryid').val();
    subcategoryDropdown.empty();
    if (domup == "YES") {
        subcategoryDropdown.append($('<option>', { value: "", text: "Select" }));
        subcategoryDropdown.append($('<option>', { value: "1", text: "UR" }));
        subcategoryDropdown.append($('<option>', { value: "2", text: "SC" }));
        subcategoryDropdown.append($('<option>', { value: "3", text: "ST" }));
        subcategoryDropdown.append($('<option>', { value: "4", text: "EBC-1" }));
        subcategoryDropdown.append($('<option>', { value: "5", text: "BC-2" }));
        subcategoryDropdown.append($('<option>', { value: "6", text: "EWS" }));
        $('#divUPInfo').show();

        // Set the selected value
        subcategoryDropdown.val(selectedValue);
        //$("#bain_isFreedomFighter").val("");
        //$('#DivFreedomFighter').hide();
        //$("#bain_isGovtEmp").val("");
        //$('#DivGovtEmp').hide();
        //$("#bain_homegaurd").val("");
        //$('#Divhomegaurd').hide();
        //$("#bain_isExServiceman").val("");
        //$('#DivExServiceman').hide();
    }
    else {

        subcategoryDropdown.append($('<option>', { value: "", text: "Select" }));
        subcategoryDropdown.append($('<option>', { value: "1", text: "UR" }));
        $('#divCategoryid').hide();
        $('#divUPInfo').hide();
        // Set the selected value
        subcategoryDropdown.val(selectedValue);
    }
    //----------------


    //----

    //var domupLive = $('#bain_isDomicileUPlive').val();
    //var domisup = $('#bain_isDomicileUP').val();
    // if (domisup== "NO") {
    //    //$('#div_DomicileUPNO').hide();
    //    $('#div_Domiciledistric').show();
    //}
    //else {
    //    //$('#div_DomicileUPlive').hide();
    //     $('#div_Domiciledistric').hide();
    //}

    //----
    ChkReload();
    //---

    if ($("#bain_SameAddr").is(':checked')) {
        $("#bain_PAddress1").prop('readonly', true)
        $("#bain_PAddress2").prop('readonly', true)
        $("#bain_PCity").prop('readonly', true)
        $("#bain_Pstateid").prop('disabled', true)
        $("#bain_PDistrictid").prop('disabled', true)
        $("#bain_POtherStateDistrict").prop('readonly', true)
        $("#bain_PPincode").prop('readonly', true)
    }

    var d = new Date();
    var year = 1998;
    d.setFullYear(year);
    $('#bain_DOB').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd-mm-yy',
        yearRange: '1965:2005',
        minDate: '01-08-1965',
        maxDate: '01-08-2005',
        showAnim: 'slideDown',
        defaultDate: d,
        showButtonPanel: true,
        beforeShow: function (input) {
            setTimeout(function () {

                var buttonPane = $(input)

                    .datepicker("widget")
                    .find(".ui-datepicker-buttonpane");

                var btn = $('<button class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" type="button">Clear</button>');
                btn
                    .unbind("click")
                    .bind("click", function () {
                        $.datepicker._clearDate(input);
                        //$('.changedobcolo').hide();

                    });
                btn.appendTo(buttonPane);
                /*$('#bain_SSLCYOP').val("");*/
            }, 1);
        }
    });





    var d1 = new Date();
    $('#bain_homegaurdissueDate').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd-mm-yy',
        yearRange: '1965:2024',
        minDate: '01-01-1965',
        maxDate: new Date(),
        showAnim: 'slideDown',
        defaultDate: d1,
        showButtonPanel: true,
        beforeShow: function (input) {
            setTimeout(function () {

                var buttonPane = $(input)

                    .datepicker("widget")
                    .find(".ui-datepicker-buttonpane");

                var btn = $('<button class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" type="button">Clear</button>');
                btn
                    .unbind("click")
                    .bind("click", function () {
                        $.datepicker._clearDate(input);
                        //$('.changedobcolo').hide();

                    });
                btn.appendTo(buttonPane);
                //$('#bain_SSLCYOP').val("");
            }, 1);
        }
    });
    $('#bain_ExServicemanIssueDate,#bain_ExServicemanStartDate,#bain_ExServicemanEndDate,#bain_sportquotaissuedate').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd-mm-yy',
        yearRange: '1965:2024',
        minDate: '01-01-1965',
        maxDate: new Date(),
        showAnim: 'slideDown',
        defaultDate: d1,
        showButtonPanel: true,
        beforeShow: function (input) {
            setTimeout(function () {

                var buttonPane = $(input)

                    .datepicker("widget")
                    .find(".ui-datepicker-buttonpane");

                var btn = $('<button class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" type="button">Clear</button>');
                btn
                    .unbind("click")
                    .bind("click", function () {
                        $.datepicker._clearDate(input);
                        //$('.changedobcolo').hide();

                    });
                btn.appendTo(buttonPane);
                //$('#bain_SSLCYOP').val("");
            }, 1);
        }
    });

    // --------------------
    $(".monthPicker").datepicker({
        dateFormat: 'mm-yy',
        yearRange: '1965:2023',
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,

        onClose: function (dateText, inst) {
            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).val($.datepicker.formatDate('mm-yy', new Date(year, month, 1)));
        }
    });

    $(".monthPicker").focus(function () {
        $(".ui-datepicker-calendar").hide();
        $("#ui-datepicker-div").position({
            my: "center top",
            at: "center bottom",
            of: $(this)
        });
    });
    // --------------------
    //$('#bain_Genderid').change(function () {
    //    //$('#bain_isDomicileUPlive').val("");
    //    $('#bain_isDomicileJha').val("");
    //    chkupandfmale();
    //});
    //$('#bain_isDomicileUPlive').change(function () {
    //    //Modification on 28/12/2023
    //    if (($("#bain_isDomicileUPlive option:selected").text().toUpperCase()) == 'YES') {
    //        $('#div_bain_hdistrictid').show();
    //    } else {
    //        $('#div_bain_hdistrictid').hide();
    //    }
    //    //Modification on 28/12/2023
    //    chkupandfmale();
    //    catload();
    //});


    $('#bain_maritial').change(function () {
        $('#div_bain_maritial').hide();
        $('#bain_spouseothers').val("");
        if (($("#bain_maritial option:selected").text().toUpperCase()) == 'MARRIED' || ($("#bain_maritial option:selected").text().toUpperCase()) == 'OTHERS') {
            $('#div_bain_maritial').show();
        } else {
            $('#div_bain_maritial').hide();
        }
    });

    $('#bain_Primitive').change(function () {
        $('#divPrimeST').show();
        $('#bain_Primitivecaste').val("");
        if (($("#bain_Primitive option:selected").text().toUpperCase()) == 'YES') {
            $('#div_bain_Primitive').show();
        } else {
            $('#div_bain_Primitive').hide();
        }
    });



    //Sports    
    $('#bain_Issportquota').change(function () {
        $('#bain_sportquotatype').val("");
        $('#bain_sportquotacertno').val("");
        $('#bain_sportquotaissuedate').val("");
        if (($("#bain_Issportquota option:selected").text().toUpperCase()) == 'YES') {
            $('#Div_bain_sportquotatype').show();
        } else {
            $('#Div_bain_sportquotatype').hide();
        }
    });



    $('#bain_isDomicileJha').change(function () {



        $('#bain_Primitive').val("");
        $('#bain_Primitivecaste').val("");
        $('#divPrimeST').hide();
        $('#div_bain_Primitive').hide();


        $('#bain_isExServiceman').val("");
        $('#bain_ExServicemanCertNo').val("");
        $('#bain_ExServicemanIssueDate').val("");
        $('#bain_ExServicemanStartDate').val("");
        $('#bain_ExServicemanEndDate').val("");
        $('#Div_bain_isExServiceman').hide();


        $('#bain_homegaurd').val("");
        $('#bain_homegaurdissueDate').val("");
        $('#bain_homegaurdSlno').val("");
        $('#Div_Ishomegaurd').hide();




        $('#bain_Issportquota').val("");
        $('#bain_sportquotatype').val("");
        $('#bain_sportquotacertno').val("");
        $('#bain_sportquotaissuedate').val("");
        $('#Div_bain_Issportquota').hide();
        $('#Div_bain_sportquotatype').hide();

        if (($("#bain_isDomicileJha option:selected").text().toUpperCase()) == 'YES') {
            $('#div_bain_hdistrictid').show();
            $('#tr_bain_isExServiceman').show();
            $('#Div_Ishomegaurd').show();
            $('#Div_bain_Issportquota').show();

        } else {
            $('#div_bain_hdistrictid').hide();
            $('#tr_bain_isExServiceman').hide();
            $('#Div_Ishomegaurd').hide();
            $('#Div_bain_Issportquota').hide();
        }
        chkupandfmale()
        catload()
    });
    $('#bain_Categoryid').change(function () {
        $('#divCategoryid').hide();
        $('#divPrimeST').hide();
        $('#div_bain_Primitive').hide();
        var value = $("#bain_Categoryid option:selected").val();
        $('#bain_CategoryIssueAuth').val("");
        $('#bain_CategoryissueDate').val("");
        $('#bain_CategorySlno').val("");
        $('#bain_Categoryappno').val("");

        $('#bain_Primitive').val("");
        $('#bain_Primitivecaste').val("");


        if (value.toUpperCase() == "1" || value.toUpperCase() == "") {
            $('#divCategoryid').hide();
        }
        else if (value.toUpperCase() == "3") {
            $('#divPrimeST').show();
            if (($("#bain_Primitive option:selected").text().toUpperCase()) == 'YES') {
                $('#div_bain_Primitive').show();
            } else {
                $('#div_bain_Primitive').hide();
            }
        }
        else {
            $('#divCategoryid').show();
        }
    });
    //$('#bain_isFreedomFighter').change(function () {
    //    $('#DivFreedomFighter').hide();
    //    var value = $("#bain_isFreedomFighter option:selected").val();
    //    $('#bain_FreedomFighterissueDate').val("");
    //    $('#bain_FreedomFighterSlno').val("");
    //    $('#bain_FreedomFighterIssueAuth').val("");

    //    if (value.toUpperCase() == "YES") {
    //        //document.getElementById('divCategoryid').style.display = '';
    //        $('#DivFreedomFighter').show();
    //    } else {
    //        //document.getElementById('divCategoryid').style.display = 'none';
    //        $('#DivFreedomFighter').hide();
    //    }
    //});


    //$('#bain_isGovtEmp').change(function () {
    //    $('#DivGovtEmp').hide();
    //    var value = $("#bain_isGovtEmp option:selected").val();
    //    $('#bain_GovtEmpissueDate').val("");
    //    $('#bain_GovtEmpIssueAuth').val("");

    //    if (value.toUpperCase() == "YES") {
    //        //document.getElementById('divCategoryid').style.display = '';
    //        $('#DivGovtEmp').show();
    //        //$("input[id*=bain_GovtEmpissueDate]").rules("add", { required: true, messages: { required: "Required" } });
    //        //$("#bain_GovtEmpIssueAuth").rules("add", {required: true,messages: {required: "Required"}});
    //    } else {
    //        //document.getElementById('divCategoryid').style.display = 'none';
    //        $('#DivGovtEmp').hide();
    //    }
    //});
    $('#bain_isExServiceman').change(function () {
        $('#Div_bain_isExServiceman').hide();
        var value = $("#bain_isExServiceman option:selected").val();
        $('#bain_ExServicemanCertNo').val("");
        $('#bain_ExServicemanIssueDate').val("");
        $('#bain_ExServicemanStartDate').val("");
        $('#bain_ExServicemanEndDate').val("");
        if (value.toUpperCase() == "YES") {
            //document.getElementById('divCategoryid').style.display = '';
            $('#Div_bain_isExServiceman').show();
        } else {
            //document.getElementById('divCategoryid').style.display = 'none';
            $('#Div_bain_isExServiceman').hide();
        }
    });


    //$('#bain_isTerrArmy').change(function () {
    //    $('#DivTerrArmy').hide();
    //    var value = $("#bain_isTerrArmy option:selected").val();
    //    $('#bain_TerrArmyDate').val("");
    //    $('#bain_TerrArmySlno').val("");
    //    $('#bain_TerrArmyIssueAuth').val("");

    //    if (value.toUpperCase() == "YES") {
    //        //document.getElementById('divCategoryid').style.display = '';
    //        $('#DivTerrArmy').show();

    //    } else {
    //        //document.getElementById('divCategoryid').style.display = 'none';
    //        $('#DivTerrArmy').hide();
    //    }
    //});


    //$('#bain_isNCCorps').change(function () {
    //    $('#DivNCCorps').hide();
    //    var value = $("#bain_isNCCorps option:selected").val();
    //    $('#bain_NCCorpsDate').val("");
    //    $('#bain_NCCorpsSlno').val("");
    //    $('#bain_NCCorpsIssueAuth').val("");

    //    if (value.toUpperCase() == "YES") {
    //        //document.getElementById('divCategoryid').style.display = '';
    //        $('#DivNCCorps').show();
    //    } else {
    //        //document.getElementById('divCategoryid').style.display = 'none';
    //        $('#DivNCCorps').hide();
    //    }
    //});

    $('#bain_homegaurd').change(function () {
        $('#Divhomegaurd').hide();
        var value = $("#bain_homegaurd option:selected").val();
        $('#bain_homegaurdissueDate').val("");
        $('#bain_homegaurdSlno').val("");
        //$('#bain_homegaurdIssueAuth').val("");

        if (value.toUpperCase() == "YES") {
            //document.getElementById('divCategoryid').style.display = '';
            $('#Divhomegaurd').show();

        } else {
            //document.getElementById('divCategoryid').style.display = 'none';
            $('#Divhomegaurd').hide();
        }
    });
    //$('#bain_isOLevel').change(function () {
    //    $('#DivOLevel').hide();
    //    var value = $("#bain_isOLevel option:selected").val();
    //    $('#bain_OLevelDate').val("");
    //    $('#bain_OLevelSlno').val("");
    //    $('#bain_OLevelIssueAuth').val("");

    //    if (value.toUpperCase() == "YES") {
    //        //document.getElementById('divCategoryid').style.display = '';
    //        $('#DivOLevel').show();
    //    } else {
    //        //document.getElementById('divCategoryid').style.display = 'none';
    //        $('#DivOLevel').hide();
    //    }
    //});


    $('#bain_Categoryid').change(function () {
        // Cache the subcategory dropdown//        
        var subcategoryDropdown = $('#bain_CategoryIssueAuth');
        var domup = $('#bain_Categoryid').val();
        subcategoryDropdown.empty();
        subcategoryDropdown.append($('<option>', { value: "", text: "Select" }));
        subcategoryDropdown.append($('<option>', { value: "1", text: "DISTRICT MAGISTRATE" }));
        subcategoryDropdown.append($('<option>', { value: "2", text: "ADDITIONAL DISTRICT MAGISTRATE" }));
        subcategoryDropdown.append($('<option>', { value: "3", text: "CITY MAGISTRATE" }));
        subcategoryDropdown.append($('<option>', { value: "4", text: "SUB DIVISIONAL MAGISTRATE" }));
        subcategoryDropdown.append($('<option>', { value: "5", text: "TEHSILDAR" }));

        if (domup.toUpperCase() == "2" || domup.toUpperCase() == "3") {
            subcategoryDropdown.append($('<option>', { value: "6", text: "DISTRICT SOCIAL WELFARE OFFICER" }));
        }
    });



    $("#chekval").click(function () {



        if ($("#bain_Pstateid option:selected").val() != 15) {
            $("input[id*=bain_POtherStateDistrict]").rules("add", { required: true, messages: { required: "Required" } });
        }
        else {
            $("#bain_PDistrictid").rules("add", { required: true, messages: { required: "Required" } });
        }

        if ($("#bain_Cstateid option:selected").val() != 15) {
            $("input[id*=bain_COtherStateDistrict]").rules("add", { required: true, messages: { required: "Required" } });
        }
        else {
            $("#bain_CDistrictid").rules("add", { required: true, messages: { required: "Required" } });
        }

        if (!$("#Add_Preg").valid()) {
            return;
        }


        //if ($("#bain_GovtEmp option:selected").text().toUpperCase() == 'YES') {
        //    $("input[id*=bain_GovtEmpissueDate]").rules("add", { required: true, messages: { required: "Required" } });
        //    $("input[id*=bain_GovtEmpIssueAuth]").rules("add", { required: true, messages: { required: "Required" } });
        //}  
        var options = {
            "backdrop": "static",
            keyboard: true
        };

        $('#bain_1Declaration').prop('checked', false);
        //$('#bain_2Declaration').prop('checked', false);
        //$('#bain_3Declaration').prop('checked', false);
        //$('#bain_4Declaration').prop('checked', false);
        //$('#bain_5Declaration').prop('checked', false);
        //$('#bain_6Declaration').prop('checked', false);
        //$('#bain_7Declaration').prop('checked', false);


        $('#myModal').modal(options);
        $('#myModal').modal('show');

        $("#CaptchaCode").val("");
        RefreshImage2();//



        $("#Cnf_bain_FirstName").html($("#bain_FirstName").val());
        $("#Cnf_bain_LastName").html($("#bain_LastName").val());
        $("#Cnf_bain_FullName").html($("#bain_FullName").val());
        $("#Cnf_bain_DOB").html($("#bain_DOB").val());
        $("#Cnf_bain_FathersName").html($("#bain_FathersName").val());
        $("#Cnf_bain_MothersName").html($("#bain_MothersName").val());
        $("#Cnf_bain_Genderid").html($("#bain_Genderid option:selected").text());
        $("#Cnf_bain_MobileNo").html($("#bain_MobileNo").val());
        $("#Cnf_bain_ConfMobileNo").html($("#bain_ConfMobileNo").val());
        $("#Cnf_bain_Aadhar").html($("#bain_Aadhar").val());
        $("#Cnf_bain_Email").html($("#bain_Email").val());
        $("#Cnf_bain_ConfEmail").html($("#bain_ConfEmail").val());

        $("#Cnf_bain_Nationality").html($("#bain_Nationality option:selected").text());

        $("#Cnf_bain_Identification1").html($("#bain_Identification1").val());
        $("#Cnf_bain_Identification2").html($("#bain_Identification2").val());
        $("#Cnf_bain_QPLanguage").html($("#bain_QPLanguage option:selected").text());

        $("#Cnf_bain_maritial").html($("#bain_maritial option:selected").text());
        if (($("#bain_maritial option:selected").text().toUpperCase()) == 'MARRIED' || ($("#bain_maritial option:selected").text().toUpperCase()) == 'OTHERS') {
            $("#Cnf_bain_spouseothers").html($("#bain_spouseothers").val());
            $('#td_bain_spouseothers').show();
        } else {
            $('#td_bain_spouseothers').hide();
        }


        ////DOMICILE OF UP
        //$("#Cnf_bain_isDomicileUPlive").html($("#bain_isDomicileUPlive option:selected").text());
        //if (($("#bain_isDomicileUPlive option:selected").text().toUpperCase()) == 'YES') {
        //    $("#Cnf_bain_DomicileUP").html($("#bain_isDomicileUP option:selected").text());
        //    $('#trCnf_bain_DomicileUPhead').show();
        //} else {
        //    $('#Cnfdiv_DomicileUPNO').show();
        //    $("#Cnf_bain_hdstateid").html($("#bain_hdstateid option:selected").text());
        //    $('#trCnf_bain_DomicileUPhead').hide();
        //}
        $("#Cnf_bain_vacancytype").html($("#bain_vacancytype option:selected").text());

        $("#Cnf_bain_DomicileJha").html($("#bain_isDomicileJha option:selected").text());
        if (($("#bain_isDomicileJha option:selected").text().toUpperCase()) == 'YES') {

            $('#Cnfdiv_DomicileJhaYES').show();
            $("#Cnf_bain_hdistrictid").html($("#bain_hdistrictid option:selected").text());



        } else {

            $('#Cnfdiv_DomicileJhaYES').hide();

        }

        //if (($("#bain_hdstateid option:selected").text().toUpperCase()) != 'SELECT') {
        //    $('#Cnfdiv_DomicileUPNO').show();
        //} else {
        //    $('#Cnfdiv_DomicileUPNO').hide();
        //}

        //Modification on 28/12/2023
        if (($("#bain_hdistrictid option:selected").text().toUpperCase()) != 'SELECT') {
            $('#Cnfdiv_DomicileJhaYES').show();
            $("#Cnf_bain_hdistrictid").html($("#bain_hdistrictid option:selected").text());
        } else {
            $('#Cnfdiv_DomicileJhaYES').hide();
        }
        //

        //CATEGORY
        $("#Cnf_bain_Categoryid").html($("#bain_Categoryid option:selected").text().toUpperCase());
        if (($("#bain_Categoryid option:selected").text().toUpperCase()) != 'UR') {
            //$('#trCnf_bain_Categoryid').show();

            if (($("#bain_Categoryid option:selected").text().toUpperCase()) == 'ST') {
                $('#tr_Cnfbain_Primitive').show();
                $("#Cnf_bain_Primitive").html($("#bain_Primitive option:selected").text());
                if (($("#bain_Primitive option:selected").text().toUpperCase()) == 'YES') {
                    $('#tr_Cnfbain_Primitivecaste').show();
                    $("#Cnf_bain_Primitivecaste").html($("#bain_Primitivecaste option:selected").text());
                }
                else {
                    $('#tr_Cnfbain_Primitivecaste').hide();
                }
            }
            else {

                $('#tr_Cnfbain_Primitive').hide();
            }
        } else {
            //$('#trCnf_bain_Categoryid').hide();
            $('#tr_Cnfbain_Primitive').hide();
            $('#tr_Cnfbain_Primitivecaste').hide();
        }

        ////FREEDOM FIGHTER
        //$("#Cnf_bain_FreedomFighter").html($("#bain_isFreedomFighter option:selected").text());
        //if (($("#bain_isFreedomFighter option:selected").text().toUpperCase()) == 'YES') {
        //    $('#trCnf_bain_FreedomFighter').show();
        //    $('#trCnf_bain_isFreedomFighter').show();
        //    $("#Cnf_bain_FreedomFighterissueDate").html($("#bain_FreedomFighterissueDate").val());
        //    $("#Cnf_bain_FreedomFighterSlno").html($("#bain_FreedomFighterSlno").val());
        //    $("#Cnf_bain_FreedomFighterIssueAuth").html($("#bain_FreedomFighterIssueAuth option:selected").text());
        //} else if (($("#bain_isFreedomFighter option:selected").text().toUpperCase()) == 'NO') {
        //    $('#trCnf_bain_isFreedomFighter').show();
        //    $('#trCnf_bain_FreedomFighter').hide();
        //}
        //else {
        //    $('#trCnf_bain_FreedomFighter').hide();
        //    $('#trCnf_bain_isFreedomFighter').hide();
        //}


        ////UP GOVERNMENT EMPLOYEE
        //$("#Cnf_bain_GovtEmp").html($("#bain_isGovtEmp option:selected").text());
        //if (($("#bain_isGovtEmp option:selected").text().toUpperCase()) == 'YES') {
        //    $('#trCnf_bain_GovtEmp').show();
        //    $('#trCnf_bain_isGovtEmp').show();
        //    $("#Cnf_bain_GovtEmpissueDate").html($("#bain_GovtEmpissueDate").val());
        //    $("#Cnf_bain_GovtEmpIssueAuth").html($("#bain_GovtEmpIssueAuth option:selected").text());
        //} else if (($("#bain_isGovtEmp option:selected").text().toUpperCase()) == 'NO') {
        //    $('#trCnf_bain_isGovtEmp').show();
        //    $('#trCnf_bain_GovtEmp').hide();
        //}
        //else {
        //    $('#trCnf_bain_GovtEmp').hide();
        //    $('#trCnf_bain_isGovtEmp').hide();
        //}

        //HOME GUARD

        if (($("#bain_isDomicileJha option:selected").text().toUpperCase()) == 'YES') {
            $("#Cnf_bain_homegaurd").html($("#bain_homegaurd option:selected").text());
            if (($("#bain_homegaurd option:selected").text().toUpperCase()) == 'YES') {
                $('#trCnf_bain_homegaurd').show();
                $('#trCnf_bain_ishomegaurd').show();
                $("#Cnf_bain_homegaurdissueDate").html($("#bain_homegaurdissueDate").val());
                $("#Cnf_bain_homegaurdSlno").html($("#bain_homegaurdSlno").val());
                //$("#Cnf_bain_homegaurdIssueAuth").html($("#bain_homegaurdIssueAuth").val());
                /*$("#Cnf_bain_homegaurdIssueAuth").html($("#bain_homegaurdIssueAuth option:selected").text());*/
            } else if (($("#bain_homegaurd option:selected").text().toUpperCase()) == 'NO') {
                $('#trCnf_bain_ishomegaurd').show();
                $('#trCnf_bain_homegaurd').hide();
            }
            else {
                $('#trCnf_bain_homegaurd').hide();
                $('#trCnf_bain_ishomegaurd').hide();
            }
        }
        else {
            $('#trCnf_bain_homegaurd').hide();
            $('#trCnf_bain_ishomegaurd').hide();
        }




        //EX-SERVICEMAN

        if (($("#bain_isDomicileJha option:selected").text().toUpperCase()) == 'YES') {
            $("#Cnf_bain_ExServiceman").html($("#bain_isExServiceman option:selected").text());
            if (($("#bain_isExServiceman option:selected").text().toUpperCase()) == 'YES') {
                $('#trCnf_bain_ExServiceman').show();
                $('#trCnf_bain_isExServiceman').show();
                $("#Cnf_bain_ExServicemanCertNo").html($("#bain_ExServicemanCertNo").val());
                $("#Cnf_bain_ExServicemanIssueDate").html($("#bain_ExServicemanIssueDate").val());
                $("#Cnf_bain_ExServicemanStartDate").html($("#bain_ExServicemanStartDate").val());
                $("#Cnf_bain_ExServicemanEndDate").html($("#bain_ExServicemanEndDate").val());

            } else if (($("#bain_isExServiceman option:selected").text().toUpperCase()) == 'NO') {
                $('#trCnf_bain_isExServiceman').show();
                $('#trCnf_bain_ExServiceman').hide();
            }
            else {
                $('#trCnf_bain_ExServiceman').hide();
                $('#trCnf_bain_isExServiceman').hide();
            }
        }
        else {
            $('#trCnf_bain_ExServiceman').hide();
            $('#trCnf_bain_isExServiceman').hide();
        }

        //Sports

        if (($("#bain_isDomicileJha option:selected").text().toUpperCase()) == 'YES') {
            $("#Cnf_bain_Issportquota").html($("#bain_Issportquota option:selected").text());
            if (($("#bain_Issportquota option:selected").text().toUpperCase()) == 'YES') {
                $('#trCnf_bain_IssportquotaYES').show();
                $("#Cnf_bain_sportquotatype").html($("#bain_sportquotatype option:selected").text());
                $("#Cnf_bain_sportquotacertno").html($("#bain_sportquotacertno").val());
                $("#Cnf_bain_sportquotaissuedate").html($("#bain_sportquotaissuedate").val());
            }
            else if (($("#bain_Issportquota option:selected").text().toUpperCase()) == 'NO') {
                $('#trCnf_bain_Issportquota').show();
                $('#trCnf_bain_IssportquotaYES').hide();
            }
            else {
                $('#trCnf_bain_Issportquota').hide();
                $('#trCnf_bain_IssportquotaYES').hide();
            }
        }
        else {
            $('#trCnf_bain_Issportquota').hide();
            $('#trCnf_bain_IssportquotaYES').hide();
        }



        //if (($("#bain_isDomicileUP option:selected").text().toUpperCase()) != 'YES') {
        //    $('#trCnf_bain_Categoryid').hide();
        //    $('#trCnf_bain_isFreedomFighter').hide();
        //    $('#trCnf_bain_isGovtEmp').hide();
        //    $('#trCnf_bain_isExServiceman').hide();
        //    $('#trCnf_bain_ishomegaurd').hide();
        //}
        //else if (($("#bain_Categoryid option:selected").text().toUpperCase()) == 'GENERAL' && ($("#bain_isDomicileUP option:selected").text().toUpperCase()) == 'YES') {
        //    $('#trCnf_bain_Categoryid').hide();
        //    $('#trCnf_bain_isFreedomFighter').show();
        //    $('#trCnf_bain_isGovtEmp').show();
        //    $('#trCnf_bain_isExServiceman').show();
        //    $('#trCnf_bain_ishomegaurd').show();
        //}
        //else {
        //    $('#trCnf_bain_Categoryid').show();
        //    $('#trCnf_bain_isFreedomFighter').show();
        //    $('#trCnf_bain_isGovtEmp').show();
        //    $('#trCnf_bain_isExServiceman').show();
        //    $('#trCnf_bain_ishomegaurd').show();
        //}



        /*$("#Cnf_bain_SSLCDegreeName").html($("#bain_SSLCDegreeName").val());*/
        $("#Cnf_bain_SSLCBoardNameorUniv").html($("#bain_SSLCBoardNameorUniv").val());
        $("#Cnf_bain_SSLCMonthandYop").html($("#bain_SSLCMonthandYop").val());
        $("#Cnf_bain_SSLCResult").html($("#bain_SSLCResult option:selected").text());
        $("#Cnf_bain_SSLCRollNumber").html($("#bain_SSLCRollNumber").val());
        $("#Cnf_bain_SSLCpercentage").html($("#bain_SSLCpercentage").val());

        /*$("#Cnf_bain_HSCDegreeName").html($("#bain_HSCDegreeName").val());*/
        //$("#Cnf_bain_HSCBoardNameorUniv").html($("#bain_HSCBoardNameorUniv").val());
        //$("#Cnf_bain_HSCMonthandYop").html($("#bain_HSCMonthandYop").val());
        //$("#Cnf_bain_HSCResult").html($("#bain_HSCResult option:selected").text());
        //$("#Cnf_bain_HSCRollNumber").html($("#bain_HSCRollNumber").val());
        //$("#Cnf_bain_HSCCertMarkshtSNo").html($("#bain_HSCCertMarkshtSNo").val());

        ////
        //$("#Cnf_bain_isTerrArmy").html($("#bain_isTerrArmy option:selected").text());
        //if (($("#bain_isTerrArmy option:selected").text().toUpperCase()) == 'YES') {
        //    $('#trCnf_bain_isTerrArmy').show();
        //    $("#Cnf_bain_TerrArmyDate").html($("#bain_TerrArmyDate").val());
        //    $("#Cnf_bain_TerrArmySlno").html($("#bain_TerrArmySlno").val());
        //    $("#Cnf_bain_TerrArmyIssueAuth").html($("#bain_TerrArmyIssueAuth").val());
        //} else {
        //    $('#trCnf_bain_isTerrArmy').hide();
        //}


        //$("#Cnf_bain_isNCCorps").html($("#bain_isNCCorps option:selected").text());
        //if (($("#bain_isNCCorps option:selected").text().toUpperCase()) == 'YES') {
        //    $('#trCnf_bain_isNCCorps').show();
        //    $("#Cnf_bain_NCCorpsDate").html($("#bain_NCCorpsDate").val());
        //    $("#Cnf_bain_NCCorpsSlno").html($("#bain_NCCorpsSlno").val());
        //    $("#Cnf_bain_NCCorpsIssueAuth").html($("#bain_NCCorpsIssueAuth").val());
        //} else {
        //    $('#trCnf_bain_isNCCorps').hide();
        //}


        //$("#Cnf_bain_isOLevel").html($("#bain_isOLevel option:selected").text());
        //if (($("#bain_isOLevel option:selected").text().toUpperCase()) == 'YES') {
        //    $('#trCnf_bain_isOLevel').show();
        //    $("#Cnf_bain_OLevelDate").html($("#bain_OLevelDate").val());
        //    $("#Cnf_bain_OLevelSlno").html($("#bain_OLevelSlno").val());
        //    $("#Cnf_bain_OLevelIssueAuth").html($("#bain_OLevelIssueAuth").val());
        //} else {
        //    $('#trCnf_bain_isOLevel').hide();
        //}


        //
        $('#Cnf1_bain_SameAddr').prop("checked", $('#bain_SameAddr').prop("checked"));
        $("#Cnf_bain_CAddress1").html($("#bain_CAddress1").val());
        $("#Cnf_bain_CAddress2").html($("#bain_CAddress2").val());
        $("#Cnf_bain_CCity").html($("#bain_CCity").val());
        $("#Cnf_bain_Cstateid").html($("#bain_Cstateid option:selected").text());
        if (($("#bain_COtherStateDistrict").val()) != '') {
            $('#trCOtherStateDistrict').show();
            $('#trCDistrictid').hide();
            $("#Cnf_bain_COtherStateDistrict").html($("#bain_COtherStateDistrict").val());
        }
        else {
            $('#trCOtherStateDistrict').hide();
            $('#trCDistrictid').show();
            $("#Cnf_bain_CDistrictid").html($("#bain_CDistrictid option:selected").text());
        }
        /* $("#Cnf_bain_CDistrictid").html($("#bain_CDistrictid").val());*/
        $("#Cnf_bain_CPincode").html($("#bain_CPincode").val());

        $("#Cnf_bain_PAddress1").html($("#bain_PAddress1").val());
        $("#Cnf_bain_PAddress2").html($("#bain_PAddress2").val());
        $("#Cnf_bain_PCity").html($("#bain_PCity").val());
        $("#Cnf_bain_Pstateid").html($("#bain_Pstateid option:selected").text());
        if (($("#bain_POtherStateDistrict").val()) != '') {
            $('#trPOtherStateDistrict').show();
            $('#trPDistrictid').hide();
            $("#Cnf_bain_POtherStateDistrict").html($("#bain_POtherStateDistrict").val());
        }
        else {
            $('#trPOtherStateDistrict').hide();
            $('#trPDistrictid').show();
            $("#Cnf_bain_PDistrictid").html($("#bain_PDistrictid option:selected").text());
        }
        //$("#Cnf_bain_PDistrictid").html($("#bain_PDistrictid").val());
        $("#Cnf_bain_PPincode").html($("#bain_PPincode").val());

    });


    //SAME AS PERMANENT ADDRESS
    $("#bain_SameAddr").change(function () {
        $("#bain_PAddress1").val("");
        $("#bain_PAddress2").val("");
        $("#bain_PCity").val("");
        $("#bain_Pstateid").val("");
        $("#bain_PDistrictid").val("");
        $("#bain_POtherStateDistrict").val("");
        $("#bain_PPincode").val("");
        $('#DivPOtherStateDistrict').hide();
        $('#DivPDistrict').show();
        //edit enble field
        $("#bain_PAddress1").prop('readonly', false)
        $("#bain_PAddress2").prop('readonly', false)
        $("#bain_PCity").prop('readonly', false)
        $("#bain_Pstateid").prop('disabled', false)
        $("#bain_PDistrictid").prop('disabled', false)
        $("#bain_POtherStateDistrict").prop('readonly', false)
        $("#bain_PPincode").prop('readonly', false)
        if (this.checked) {
            //CAddress1 to PAddress auto fill
            $('#bain_CAddress1').on('input', function () {
                $('#bain_PAddress1').val($('#bain_CAddress1').val())
            });
            $('#bain_CAddress2').on('input', function () {
                $('#bain_PAddress2').val($(this).val())
            });

            $('#bain_CCity').on('input', function () {
                $('#bain_PCity').val($(this).val())
            });

            $('#bain_Cstateid').on('input', function () {
                $('#bain_Pstateid').val($('#bain_Cstateid').val())
            });

            $('#bain_CDistrictid').on('input', function () {
                $('#bain_PDistrictid').val($(this).val())
            });
            $('#bain_COtherStateDistrict').on('input', function () {
                $('#bain_POtherStateDistrict').val($(this).val())
            });
            $('#bain_CPincode').on('input', function () {
                $('#bain_PPincode').val($(this).val())
            });

            //click check box fill PAddress to CAddress
            $("#bain_PAddress1").val($("#bain_CAddress1").val())
            $("#bain_PAddress2").val($("#bain_CAddress2").val())
            $("#bain_PCity").val($("#bain_CCity").val())
            $("#bain_Pstateid").val($("#bain_Cstateid").val())
            $("#bain_HidPstateid").val($("#bain_Cstateid").val())
            $('#DivPOtherStateDistrict').hide();
            $('#DivPDistrict').hide();
            var value = $("#bain_Pstateid option:selected").val();
            if (value.toUpperCase() == 15 || value.toUpperCase() == "") {
                $('#bain_POtherStateDistrict').val("");
                $('#DivPOtherStateDistrict').hide();
                $('#DivPDistrict').show();

                $('#bain_COtherStateDistrict').val("");
                $('#DivCOtherStateDistrict').hide();
                $('#DivCDistrict').show();
            } else {
                $('#DivPOtherStateDistrict').show();
                $('#DivPDistrict').hide();
                $('#bain_PDistrictid').val("");

                $('#DivCOtherStateDistrict').show();
                $('#DivCDistrict').hide();
                $('#bain_CDistrictid').val("");
            }
            $("#bain_PDistrictid").val($("#bain_CDistrictid").val())
            $("#bain_HidPDistrictid").val($("#bain_CDistrictid").val())
            $("#bain_POtherStateDistrict").val($("#bain_COtherStateDistrict").val())
            $("#bain_PPincode").val($("#bain_CPincode").val())

            //Edit option Disabled
            $("#bain_PAddress1").prop('readonly', true)
            $("#bain_PAddress2").prop('readonly', true)
            $("#bain_PCity").prop('readonly', true)
            $("#bain_Pstateid").prop('disabled', true)
            $("#bain_PDistrictid").prop('disabled', true)
            $("#bain_POtherStateDistrict").prop('readonly', true)
            $("#bain_PPincode").prop('readonly', true)

        }
        else {
            $('#bain_CAddress1').on('input', function () {
                $("#bain_PAddress1").val("");
            });
            $('#bain_CAddress2').on('input', function () {
                $('#bain_PAddress2').val("")
            });

            $('#bain_CCity').on('input', function () {
                $('#bain_PCity').val("")
            });

            $('#bain_Cstateid').on('input', function () {
                $('#bain_Pstateid').val("")
            });
            $('#bain_CDistrictid').on('input', function () {
                $('#bain_PDistrictid').val("")
            });
            $('#bain_COtherStateDistrict').on('input', function () {
                $('#bain_POtherStateDistrict').val("")
            });
            $('#bain_CPincode').on('input', function () {
                $('#bain_PPincode').val("")
            });
        }
    });

    //P Other State Distict

    $('#bain_Pstateid').change(function () {
        $('#DivPOtherStateDistrict').hide();
        $('#DivPDistrict').hide();
        var value = $("#bain_Pstateid option:selected").val();
        if (value.toUpperCase() == 15 || value.toUpperCase() == "") {
            $('#bain_POtherStateDistrict').val("");
            $('#DivPOtherStateDistrict').hide();
            $('#DivPDistrict').show();
        } else {
            $('#DivPOtherStateDistrict').show();
            $('#DivPDistrict').hide();
            $('#bain_PDistrictid').val("");
            $('#bain_HidPDistrictid').val("");//PK
        }
    });


    //C Distict

    $('#bain_CDistrictid').change(function () {
        if ($("#bain_SameAddr").is(':checked')) {
            $('#bain_CDistrictid').on('input', function () {
                $('#bain_PDistrictid').val($(this).val())
            });
            $("#bain_PDistrictid").val($("#bain_CDistrictid").val())
            $("#bain_HidPDistrictid").val($("#bain_CDistrictid").val())
        }
    });

    $('#bain_Cstateid').change(function () {
        //$("#bain_Pstateid").val("");
        if ($("#bain_SameAddr").is(':checked')) {
            $('#bain_Cstateid').on('input', function () {
                $('#bain_Pstateid').val($(this).val())
            });
            $('#bain_CDistrictid').on('input', function () {
                $('#bain_PDistrictid').val($(this).val())
            });
            $('#bain_COtherStateDistrict').on('input', function () {
                $('#bain_POtherStateDistrict').val($(this).val())
            });
            $("#bain_Pstateid").val($("#bain_Cstateid").val())
            $("#bain_HidPstateid").val($("#bain_Cstateid").val())
            $("#bain_PDistrictid").val($("#bain_CDistrictid").val())
            $("#bain_POtherStateDistrict").val($("#bain_COtherStateDistrict").val())

            $('#DivCDistrict').hide();
            $('#DivCOtherStateDistrict').hide();
            $('#DivPDistrict').hide();
            $('#DivPOtherStateDistrict').hide();
            var value = $("#bain_Cstateid option:selected").val();
            if (value.toUpperCase() == 15 || value.toUpperCase() == "") {
                $('#DivCDistrict').show();
                $('#bain_COtherStateDistrict').val("");
                $('#DivCOtherStateDistrict').hide();

                $('#DivPDistrict').show();
                $('#bain_POtherStateDistrict').val("");
                $('#DivPOtherStateDistrict').hide();
            }
            else {
                $('#DivCDistrict').hide();
                $('#bain_CDistrictid').val("");
                $('#DivCOtherStateDistrict').show();

                $('#DivPDistrict').hide();
                $('#bain_PDistrictid').val("");
                $('#bain_HidPDistrictid').val("");//PK
                $('#DivPOtherStateDistrict').show();
            }

        }
        else {
            $('#DivCDistrict').hide();
            $('#DivCOtherStateDistrict').hide();
            var value = $("#bain_Cstateid option:selected").val();
            if (value.toUpperCase() == 15 || value.toUpperCase() == "") {
                $('#DivCDistrict').show();
                $('#bain_COtherStateDistrict').val("");
                $('#DivCOtherStateDistrict').hide();
            }
            else {
                $('#DivCDistrict').hide();
                $('#bain_CDistrictid').val("");
                $('#DivCOtherStateDistrict').show();
            }
            //$('#bain_Pstateid').val("");
            //$('#bain_PDistrictid').val("");
            //$('#bain_POtherStateDistrict').val("");
        }

    });


});
