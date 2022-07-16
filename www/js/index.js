/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var isCordovaAndroid = true;

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener("backbutton", onBackKeyDown, false);  

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    NavigationBar.backgroundColorByHexString("#5426de",true);
    // document.getElementById('deviceready').classList.add('ready');
    
}

function onBackKeyDown(e) { 
    e.preventDefault(); 

    if (typeof breadCrumbs == "undefined") {
       navigator.app.exitApp();
    }else{
        if (breadCrumbs.length>=2) {
            if ((breadCrumbs[breadCrumbs.length-1].includes("risefall") || breadCrumbs[breadCrumbs.length-1].includes("future"))&& $(".bootbox").length >= 1) {
                console.log(2,$(".jconfirm-box").length);

                if ($("#sec_modal_container").css("display")=="none") {
                    bootbox.hideAll();
                    jconfirm.instances[0].close();
                }else{
                    if ($(".jconfirm-box").length==0) {
                        console.log(3);

                        $("#forfeit_btn").click();
                    }else{
                        jconfirm.instances[0].close();
                    }
                }
            }else{
                if ($(".jconfirm-box").length==0||$(".bootbox").length==0) {
                    $("#top_back_btn").click();
                }else{
                    jconfirm.instances[0].close();
                    bootbox.hideAll();
                }
            }
        }else{
            if ($(".jconfirm-box").length==0||$(".bootbox").length==0) {
                $.confirm({
                    theme: "dark",
                    title: 'Leaving already?',
                    columnClass: 'col-md-6 col-md-offset-6',
                    content: 'Are you sure you want leave the app?',
                    buttons: {
                        confirm: function () {
                            navigator.app.exitApp();
                        },
                        cancel: function () {
                            
                        },
                    }
                });
            }else{
                jconfirm.instances[0].close();
                bootbox.hideAll();
            }
            
        }
    }
    // alert('Back Button is Pressed!'); 
}
