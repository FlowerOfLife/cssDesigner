var inspectedObj = {

    createMockSubject: function () {
        return $('<div>', {
            id: 'btnContainer'
        }).append($('<button>', {
            id: 'inspectedSubject'
        }));
    },

    createPropertySelector: function (props) {

        return $("<select>", {
            text: 'select style',
            change: function () {
                var thisChosenVal = $('#chosenProps').val();
                $('#workDiv').html('');
                for (var atr in thisChosenVal) {
                    $('#workDiv').append(inspectedObj.criateToolbox(thisChosenVal[atr], props));
                    console.log(thisChosenVal[atr]);
                }
            },
            multiple: true,
            id: 'chosenProps',

        })
            .ready(function () {
                for (var atr in props.style) {
                    $("#chosenProps").append(
                        $("<option>", {
                            text: atr
                        })
                    )
                }
            }).ready(function () {
                $("#chosenProps").chosen({

                })
            }).append(
                $("<div>", {
                    id: 'workingTools'
                }))
    },
    criateToolbox: function (divid, obj) {
        return $('<div>', {
            innerWidth: '200px',
            parseFloat: 'left',
            text: divid,
            id: 'toolbox'
        }).append(
            $("<div>", {
                text: divid,
                id: 'rabs'
            }).append(
                $('<ul>', {
                    id: 'tabs-ul'
                })
                .append(
                    $('<li>', {}).append($("<a>", {
                        href: '#tab1',
                        text: 'Size'
                    })),
                    $('<li>', {}).append($("<a>", {
                        href: '#tab2',
                        text: 'tab2'
                    }))),

                $('<div>', {
                    id: 'tab1',

                }).append($('<div>', {
                    height: '50px',
                    id: 'tab_1_content'
                }).append(inspectedObj.tab_1(divid, obj))),
                $('<div>', {
                    id: 'tab2'
                }).append($('<input>', {
                    type: '0',
                    change: function () {
                        $('#' + divid + "_slidersValue").text = this.value;
                        console.log(this.value)
                    }
                }))).tabs(),

            $('<input>', {
                text: divid + "_input",
                id: divid + "_slidersValue",
                keypress: function () {
                    var propName = this.id.replace('_slidersValue', '');
                    console.log(document.getElementById(this.id).value);
                    obj.style[propName] = document.getElementById(this.id).value;
                    console.log("Handler for .keypress() called.");
                }
            })




        )
    },
    tab_1: function (divid, obj) {

        return $('<div>', {})
            .append(
                $('<select>', {
                    id: divid + "_size"
                }).append(
                    $('<option>', {
                        id: divid + "_size_option1",
                        text: 'px'
                    }),
                    $('<option>', {
                        id: divid + "_size_option2",
                        text: '%'
                    })
                ),
                $('<div>', {
                    text: 'SlideMe',
                    id: 'slideDiv'
                }).append($('<input>', {
                        id: divid + "_slid",
                        type: 'range',
                        min: 0,
                        max: 300,
                        value:0
                    }).change(function () {
                    console.log( $("#"+divid + "_size").val());
                      inspectedObj.updateObject(this.id.replace('_slid', ''),this.value+$("#"+divid + "_size").val(),obj);
                    
                    })

                )


        )
    },

    createToolBoxContainer: function () {
        $('<div>', {
            id: 'toolBoxContainer'
        });
    },
    
    updateObject: function(styleString,value,obj){
       $("#" + styleString+ "_slidersValue").val(value);
       obj.style[styleString] =value;
    }


};