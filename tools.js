    function addSlidersBox(propName, obj) {
        var toolBoxObjects = {
            title: function (objectId) {
                var div = document.createElement('div');
                return div;
            },
            comboBox: function (objectId) {
                var select = document.createElement('select');
                var pxOption = document.createElement('option');
                var PercentOption = document.createElement('option');
                pxOption.text = 'px';
                PercentOption.text = '%';
                select.appendChild(pxOption)
                select.appendChild(PercentOption)
                select.id = objectId;
                return select;
            },
            textBoxResult: function (objectId) {
                textBoxRes = document.createElement('input');
                textBoxRes.id = objectId;
                textBoxRes.type = 'text';
                textBoxRes.style.marginLeft = '33px';
                textBoxRes.onchage = function () {
                    inspectedObj.updateObject(this.id.replace('res', ''), this.value, obj);
                }
                textBoxRes.onkeyup = function () {
                    inspectedObj.updateObject(this.id.replace('res', ''), this.value, obj);
                }
                return textBoxRes;
            },
            checkBox: function (objectId) {
                checkbox = document.createElement('input');
                checkbox.id = objectId;
                checkbox.type = 'checkbox';
                return checkbox;
            },
            div: function (objectId) {
                div = document.createElement('div');
                div.id = objectId;
                return div;
            },
            slider: function (objectId) {
                slider1 = document.createElement('input');
                slider1.type = 'range';
                slider1.id = objectId;
                slider1.onchange = function () {
                    updatePropTextValue()
                };
                return slider1;
            },
            minMaxTextBox: function (objectId) {
                textBox = document.createElement('input');
                textBox.style.width = '30px';
                textBox.type = 'text';
                textBox.id = objectId;
                var ScrolNum = objectId.replace('min', '');
                ScrolNum = ScrolNum.replace('max', '');
                textBox.onchange = function () {
                    if (objectId.indexOf('max') != -1) {
                        if (ScrolNum.indexOf('1') != -1) {
                            slider11.max = this.value
                        }
                        if (ScrolNum.indexOf('2') != -1) {
                            slider2.max = this.value
                        }
                        if (ScrolNum.indexOf('3') != -1) {
                            slider3.max = this.value
                        }
                        if (ScrolNum.indexOf('4') != -1) {
                            slider4.max = this.value
                        }
                    }
                    if (objectId.indexOf('min') != -1) {
                        if (ScrolNum.indexOf('1') != -1) {
                            slider11.min = this.value
                        }
                        if (ScrolNum.indexOf('2') != -1) {
                            slider2.min = this.value
                        }
                        if (ScrolNum.indexOf('3') != -1) {
                            slider3.min = this.value
                        }
                        if (ScrolNum.indexOf('4') != -1) {
                            slider4.min = this.value
                        }
                    }
                }
                return textBox;
            }
        }
        var SlidersPane = new toolBoxObjects.div('SlidersPane' + propName);
        var container1 = toolBoxObjects.div('slidePanel1' + propName);
        var container2 = toolBoxObjects.div('slidePanel2' + propName);
        var container3 = toolBoxObjects.div('slidePanel3' + propName);
        var container4 = toolBoxObjects.div('slidePanel4' + propName);
        var sizeType = toolBoxObjects.comboBox('comboBox' + propName);
        var slider11 = toolBoxObjects.slider('slider1' + propName);
        var slider2 = toolBoxObjects.slider('slider2' + propName);
        var slider3 = toolBoxObjects.slider('slider3' + propName);
        var slider4 = toolBoxObjects.slider('slider4' + propName);
        var checkbox1 = toolBoxObjects.checkBox('checkbox1' + propName);
        var checkbox2 = toolBoxObjects.checkBox('checkbox2' + propName);
        var min1 = toolBoxObjects.minMaxTextBox('min1' + propName);
        var min2 = toolBoxObjects.minMaxTextBox('min2' + propName);
        var min3 = toolBoxObjects.minMaxTextBox('min3' + propName);
        var min4 = toolBoxObjects.minMaxTextBox('min4' + propName);
        var max1 = toolBoxObjects.minMaxTextBox('max1' + propName);
        var max2 = toolBoxObjects.minMaxTextBox('max2' + propName);
        var max3 = toolBoxObjects.minMaxTextBox('max3' + propName);
        var max4 = toolBoxObjects.minMaxTextBox('max4' + propName);
        var textRes = toolBoxObjects.textBoxResult('res' + propName);
        var title1 = toolBoxObjects.title(propName)





        //SlidersPane.style.width = '220px'
        // SlidersPane.style.float = 'left'

        container1.appendChild(checkbox1);
        container1.appendChild(checkbox1);
        container1.appendChild(min1);
        container1.appendChild(slider11);
        container1.appendChild(max1);

        //container2.style.width = '220px'
        container2.appendChild(checkbox2);
        container2.appendChild(checkbox2);
        container2.appendChild(min2);
        container2.appendChild(slider2);
        container2.appendChild(max2);

        //container3.style.width = '220px'
        container3.appendChild(min3);
        container3.appendChild(slider3);
        container3.appendChild(max3);

        //container4.style.width = '220px'
        container4.appendChild(min4);
        container4.appendChild(slider4);
        container4.appendChild(max4);


        SlidersPane.appendChild(title1)
        SlidersPane.appendChild(container1);
        SlidersPane.appendChild(container2);
        SlidersPane.appendChild(container3);
        SlidersPane.appendChild(container4);
        SlidersPane.appendChild(textRes);


        //checkboxes funtionalety
        container2.style.visibility = "hidden";
        container3.style.visibility = "hidden";
        container4.style.visibility = "hidden";

        checkbox2.onchange = function () {
            if (this.checked) {
                container3.style.visibility = "visible";
                container4.style.visibility = "visible";
            } else {
                container3.style.visibility = "hidden";
                container4.style.visibility = "hidden";
            }
        }

        checkbox1.onchange = function () {
            if (this.checked) {
                container2.style.visibility = "visible";

            } else {
                container2.style.visibility = "hidden";
                container3.style.visibility = "hidden";
                container4.style.visibility = "hidden";
            }

        }
        //update textbox result
        function updatePropTextValue() {
            if (checkbox1.checked) {

                textRes.value = slider11.value + sizeType.value + " " + slider2.value + sizeType.value + " ";
            }

            if (checkbox2.checked && checkbox1.checked) {
                textRes.value = slider11.value + sizeType.value + " " + slider2.value + sizeType.value + " " + slider3.value + sizeType.value + " " + slider4.value + sizeType.value + " ";
            }

            if (checkbox1.checked == false) {
                textRes.value = slider11.value + sizeType.value;
            }
            inspectedObj.updateObject(propName, textRes.value, obj);
        }

        return windowBox(SlidersPane, propName);
    }









    function addFontBox(propName, obj) {
        var fontSelector = {
            div: function (objectId) {
                div = document.createElement('div');
                div.id = objectId;
                return div;
            },
            comboBox: function (objectId) {
                var select = document.createElement('select');
                var PercentOption = document.createElement('option');
                var fonts = fontsArray;
                for (font in fonts) {
                    var fontOption = document.createElement('option');
                    fontOption.text = fonts[font];
                    select.appendChild(fontOption)
                }
                select.id = objectId;
                select.onchange = function () {
                    textBoxResults.value = fontComboBox.value;
                    textBoxResults.onchage();
                }
                return select;
            },
            textBoxResult: function (objectId) {
                textBoxRes = document.createElement('input');
                textBoxRes.id = objectId;
                textBoxRes.type = 'text';
                textBoxRes.style.marginLeft = '33px';
                textBoxRes.onchage = function () {
                    console.log(this.id)
                    inspectedObj.updateObject(this.id.replace('textBoxResult', ''), this.value, obj);
                }
                textBoxRes.onkeyup = function () {
                    inspectedObj.updateObject(this.id.replace('textBoxResult', ''), this.value, obj);
                }
                return textBoxRes;
            },
        }
        var textBoxResults = fontSelector.textBoxResult('textBoxResult' + propName);
        var fontComboBox = fontSelector.comboBox('fontSelector' + propName);
        var fontPanel = new fontSelector.div('fontPanel' + propName);
        fontPanel.style.width = '220px';
        fontPanel.style.float = 'left';
        fontPanel.appendChild(fontComboBox)
        fontPanel.appendChild(textBoxResults)
        return windowBox(fontPanel, propName);
    }






    function addColorBox(propName, obj) {
        var colorSelector = {
            div: function (objectId) {
                div = document.createElement('div');
                div.id = objectId;
                return div;
            },
            colorInput: function (objectId) {
                var colorSelect = document.createElement('input');
                colorSelect.type = 'color'
                colorSelect.id = objectId;
                colorSelect.onchange = function () {
                    updateValues();
                }
                return colorSelect;
            },
            textBoxResult: function (objectId) {
                textBoxRes = document.createElement('input');
                textBoxRes.id = objectId;
                textBoxRes.type = 'text';
                textBoxRes.style.marginLeft = '33px';
                textBoxRes.change = function () {
                    inspectedObj.updateObject(this.id.replace('textBoxResult', ''), this.value, obj);
                }
                textBoxRes.onkeyup = function () {
                    inspectedObj.updateObject(this.id.replace('textBoxResult', ''), this.value, obj);
                }
                return textBoxRes;
            },
        }

            function updateValues() {
                resultBox.value = colorSelectTool.value;
                resultBox.change();
            }
        var colorPanel = new colorSelector.div('colorPanel' + propName);
        colorPanel.style.width = '220px';
        colorPanel.style.float = 'left';
        var colorSelectTool = colorSelector.colorInput('colorSelector' + propName);
        var resultBox = colorSelector.textBoxResult('textBoxResult' + propName)
        colorPanel.appendChild(colorSelectTool)
        colorPanel.appendChild(resultBox)
        return windowBox(colorPanel, propName);
    }


    function windowBox(content, titleName) {
        var panelContainerDiv = document.createElement('div');
        var panelTopDiv = document.createElement('div');
        var panelBodyDiv = document.createElement('div');
        panelContainerDiv.appendChild(panelTopDiv);
        panelContainerDiv.appendChild(panelBodyDiv);
        //panelContainerDiv.style.float = 'left';
        panelContainerDiv.id = 'toolWindow' + titleName
        panelTopDiv.style.width = '216px';
        panelTopDiv.style.height = '25px';

        panelTopDiv.innerHTML = (titleName);
        panelTopDiv.onclick = function () {
            $(panelBodyDiv).toggle("blind", 0, 500);
        }

        panelTopDiv.style.backgroundColor = '#a2fbff';
        panelBodyDiv.style.width = '216px';

        panelBodyDiv.style.backgroundColor = '#d5fffd';
        panelBodyDiv.style.transition = '0.5s';
        panelBodyDiv.appendChild(content)
        panelContainerDiv.id = 'containerWindow' + titleName;
        panelTopDiv.id = 'windowTitle' + titleName;
        panelBodyDiv.id = 'windowBody' + titleName;

        return panelContainerDiv;
    }






    var fontsArray = [
        'academy engraved let',
'algerian',
'amaze',
'arial',
'arial black',
'balthazar',
'bankgothic lt bt',
'bart',
'bimini',
'comic sans ms',
'book antiqua',
'bookman old style',
'braggadocio',
'britannic bold',
'brush script mt',
'century gothic',
'century schoolbook',
'chasm',
'chicago',
'colonna mt',
'comic sans ms',
'commercialscript bt',
'coolsville',
'courier',
'courier new',
'cursive',
'dayton',
'desdemona',
'fantasy',
'flat brush',
'footlight mt light',
'futurablack bt',
'futuralight bt',
'garamond',
'gaze',
'geneva',
'georgia',
'geotype tt',
'(*above: Geotype TT)',
'helterskelter',
'helvetica',
'herman',
'highlight let',
'impact',
'jester',
'joan',
'john handy let',
'jokerman let',
'kelt',
'kids',
'kino mt',
'la bamba let',
'lithograph',
'lucida console',
'map symbols',
'marlett',
'(*above: Marlett)',
'matteroffact',
'matisse itc',
'matura mt script capitals',
'mekanik let',
'(*above: mekanik let)',
'monaco',
'monospace',
'monotype sorts',
'ms linedraw',
'new york',
'olddreadfulno7 bt',
'(*above: OldDreadfulNo7 BT)',
'orange let',
'palatino',
'playbill',
'pump demi bold let',
'puppylike',
'roland',
'sans-serif',
'scripts',
'scruff let',
'serif',
'short hand',
'signs normal',
'(*above: Signs Normal)',
'simplex',
'simpson',
'stylus bt',
'superfrench',
'surfer',
'swis721 bt',
'swis721 blkoul bt',
'symap',
'(*above: Symap)',
'symbol',
'(*above: symbol)',
'tahoma',
'technic',
'tempus sans itc',
'terk',
'times',
'times new roman',
'trebuchet ms',
'trendy',
'txt',
'verdana',
'victorian let',
'vineta bt',
'vivian',
'webdings',
'(*above: Webdings)',
'wingdings',
'(*above: Wingdings)',
'western',
'westminster',
'westwood let',
'(*above: Westwood LET)',
'wide latin',
'zapfellipt bt'
    ]