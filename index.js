if (chrome.devtools) {

    chrome.devtools.panels.elements.onSelectionChanged.addListener(function () {
        var obj = {};
        getDitails('$0.name')
            .then(function (result) {
                obj.name = result;
            })

        .then(function () {
            return getDitails('$0.id')
        })
            .then(function (result) {
                obj.id = result;
            })

        .then(function () {
            return getDitails('$0.tagName')
        })
            .then(function (result) {
                obj.tagName = result;
            })

        .then(function () {
            return getDitails('$0.style')
        })
            .then(function (result) {
                obj.style = result;
                initTools(obj);
            })
    })

}



props = document.createElement('myObject');
initTools(props);
var filtered = []

    function getDitails(evalToGet) {
        var promise = new Promise(function (resolve, reject) {
            chrome.devtools.inspectedWindow.eval(evalToGet, function (result, isException) {
                resolve(result)
            });
        });
        return promise;
    }

    function buildAcordion(props) {
        return $('<div>', {
            id: 'accordionFilter'
        }).append(
            $('<select>', {
                id: 'accordionSelectorId',
                change: function () {
                    // initTools(props, filterValue);

                    var acor = this.value
                    $('#accodionId').remove()
                    var accordionDiv = document.createElement('div');
                    accordionDiv.id = 'accodionId';
                    accordionDiv.style.float = 'left';
                    accordionDiv.style.fontSize = '12px';
                    var filterValue = $('#accordionSelectorId').val().toString();
                    // console.log(filterValue)


                    var thisChosenVal = $('#chosenProps').val();

                    for (var addCustom in thisChosenVal) {
                        addAccordionValue(thisChosenVal[addCustom])
                    }

                    for (var acor in props.style) {
                        // $('#chosenProps').val(acor);
                        if (acor.toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                            filtered.push(acor);
                            addAccordionValue(acor)
                            // accordionDiv.style.fontSize = '14px'
                        }
                    }
                    //  $('#chosenProps').val(filtered);
                    //$('#chosenProps').trigger("chosen:updated");
                    //$('#chosenProps').change()
                    console.log(filtered)

                    function addAccordionValue(acor) {
                        var h3 = document.createElement('h3');
                        h3.innerHTML = (acor);
                        var div = document.createElement('div');
                        if (acor == 'fontFamily') {
                            div.appendChild(addFontBox(acor, props))
                        } else if (acor.indexOf('Color') != -1) {
                            div.appendChild(addColorBox(acor, props))
                        } else {
                            div.appendChild(addSlidersBox(acor, props))
                        }
                        accordionDiv.appendChild(h3);
                        accordionDiv.appendChild(div);
                    }
                    $('#workDiv').append(accordionDiv).ready(function () {

                        $('#accodionId').accordion();

                    });
                }
            }).append(
                $('<option>', {
                    id: "border",
                    text: 'border'
                }),
                $('<option>', {
                    id: "font",
                    text: 'font'
                }),
                $('<option>', {
                    id: "color",
                    text: 'color'
                }),
                $('<option>', {
                    id: "custom",
                    text: 'custom'
                })

            )
        )

    }

    function initTools(props) {

        var objForAllStyles = document.createElement((props.tagName).toLowerCase());
        var filtered = []
        // props.style

        $('#choosen').empty()
            .ready(function () {
                $('#choosen')
                    .append($('<h3>', {
                        text: 'Type:' + props.tagName + '     ID:' + props.id + '      css:' + JSON.stringify(props.style)

                    }))

                .append(inspectedObj.createPropertySelector(objForAllStyles))
                    .append(
                        buildAcordion(props)
                )
                    .ready(
                        function () {
                            $('#chosenProps').val([
                            'fontFamily',
                            'backgroundColor',
                        'borderRadius',
                        'fontSize',
                        'height',
                        'width',
                        'font',
                        'font-color',
                        'float',
                        'border'
                    ]);
                            $('#chosenProps').trigger("chosen:updated");
                            $('#chosenProps').change()
                        })
            })
    }

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
            //selectbox on select update toolboxes
            text: 'select style',
            change: function () {


                /* accodrion */
                $('#workDiv').html('');
                $('#accordionSelectorId').change()
                var thisChosenVal = $('#chosenProps').val();

                var toolBoxesDiv = document.createElement('div');
                toolBoxesDiv.id = 'toolBoxDivId';
                toolBoxesDiv.style.float = 'left';
                /* ADD BOXES TO WORKING DIV*/
                for (var atr in thisChosenVal) {
                    //$('#workDiv').append(inspectedObj.criateToolbox(thisChosenVal[atr], props));
                    if (thisChosenVal[atr] == 'fontFamily') {
                        $(toolBoxesDiv).append(addFontBox(thisChosenVal[atr], props));
                    } else if (thisChosenVal[atr].indexOf('Color') != -1) {
                        $(toolBoxesDiv).append(addColorBox(thisChosenVal[atr], props));
                    } else {
                        $(toolBoxesDiv).append(addSlidersBox(thisChosenVal[atr], props));
                    }
                }

                //  $('#workDiv').append(toolBoxesDiv)
                $('#workDiv').append(document.createElement('br'))
                /*Add accoedion to next to chosen*/



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
                        //console.log(this.value)
                    }
                }))).tabs(),

            $('<input>', {
                text: divid + "_input",
                id: divid + "_slidersValue",
                keypress: function () {
                    var propName = this.id.replace('_slidersValue', '');
                    obj.style[propName] = document.getElementById(this.id).value;
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
                        value: 0
                    }).change(function () {
                        // console.log( $("#"+divid + "_size").val());
                        inspectedObj.updateObject(this.id.replace('_slid', ''), this.value + $("#" + divid + "_size").val(), obj);

                    })

                )


        )
    },

    createToolBoxContainer: function () {
        $('<div>', {
            id: 'toolBoxContainer'
        });
    },

    updateObject: function (styleString, value, obj) {
        $("#" + styleString + "_slidersValue").val(value);
        obj.style[styleString] = value;
        inspectedObj.updataObjectFromPage(styleString, value)
    },
    updataObjectFromPage: function (styleString, value) {
        chrome.devtools.inspectedWindow.eval("$0.style." + styleString + "='" + value + "'");
    }



};