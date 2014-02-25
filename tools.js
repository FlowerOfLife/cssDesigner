    function addSlidersBox(propName, obj) {
        var toolBoxObjects = {
            title: function (objectId) {
                var div = document.createElement('div');
                var h1 = document.createElement('h3');
                h1.innerHTML = propName;
                div.appendChild(h1);
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
                textBoxRes.onchange = function () {
                    inspectedObj.updateObject(this.id.replace('textRes', ''), this.value, obj);
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
                div.style.border = 'solid #e2dfdf 2px';
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
                var ScrolNum = objectId.replace('min  ', '');
                ScrolNum = ScrolNum.replace('max', '');
                textBox.onchange = function () {
                    console.log(ScrolNum)
                    if (objectId.indexOf('max') != -1) {
                        eval('slider' + ScrolNum).max = this.value;
                    }
                    if (objectId.indexOf('min') != -1) {
                        eval('slider' + ScrolNum).min = this.value;
                    }
                }
                return textBox;
            }
        }
        var SlidersPane = new toolBoxObjects.div('SlidersPane' + propName);
        var br = document.createElement('br');
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





        SlidersPane.style.width = '220px'
        SlidersPane.style.float = 'left'

        container1.appendChild(checkbox1);
        container1.appendChild(checkbox1);
        container1.appendChild(min1);
        container1.appendChild(slider11);
        container1.appendChild(max1);

        container2.style.width = '220px'
        container2.appendChild(checkbox2);
        container2.appendChild(checkbox2);
        container2.appendChild(min2);
        container2.appendChild(slider2);
        container2.appendChild(max2);

        container3.style.width = '220px'
        container3.appendChild(min3);
        container3.appendChild(slider3);
        container3.appendChild(max3);

        container4.style.width = '220px'
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
            console.log(checkbox1.checked);
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

        return SlidersPane;
    }