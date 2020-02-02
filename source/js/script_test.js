var ashishTestRegion = (function () {
    "use strict";
    var scriptVersion = "1.0.0";
    var util = {
        version: "1.0.0",
        isAPEX: function () {
            if (typeof(apex) !== 'undefined') {
                return true;
            } else {
                return false;
            }
        },
        debug: {
            info: function (str) {
                if (util.isAPEX()) {
                    apex.debug.info(str);
                }
            },
            error: function (str) {
                if (util.isAPEX()) {
                    apex.debug.error(str);
                } else {
                    console.error(str);
                }
            }
        },
        loader: {
            start: function (id) {
                if (util.isAPEX()) {
                    apex.util.showSpinner($(id));
                } else {
                    /* define loader */
                    var faLoader = $("<span></span>");
                    faLoader.attr("id", "loader" + id);
                    faLoader.addClass("ct-loader");

                    /* define refresh icon with animation */
                    var faRefresh = $("<i></i>");
                    faRefresh.addClass("fa fa-refresh fa-2x fa-anim-spin");
                    faRefresh.css("background", "rgba(121,121,121,0.6)");
                    faRefresh.css("border-radius", "100%");
                    faRefresh.css("padding", "15px");
                    faRefresh.css("color", "white");

                    /* append loader */
                    faLoader.append(faRefresh);
                    $(id).append(faLoader);
                }
            },
            stop: function (id) {
                $(id + " > .u-Processing").remove();
                $(id + " > .ct-loader").remove();
            }
        },
        jsonSaveExtend: function (srcConfig, targetConfig) {
            var finalConfig = {};
            /* try to parse config json when string or just set */
            if (typeof targetConfig === 'string') {
                try {
                    targetConfig = JSON.parse(targetConfig);
                } catch (e) {
                    console.error("Error while try to parse targetConfig. Please check your Config JSON. Standard Config will be used.");
                    console.error(e);
                    console.error(targetConfig);
                }
            } else {
                finalConfig = targetConfig;
            }
            /* try to merge with standard if any attribute is missing */
            try {
                finalConfig = $.extend(true, srcConfig, targetConfig);
            } catch (e) {
                console.error('Error while try to merge 2 JSONs into standard JSON if any attribute is missing. Please check your Config JSON. Standard Config will be used.');
                console.error(e);
                finalConfig = srcConfig;
                console.error(finalConfig);
            }
            return finalConfig;
        },
        noDataMessage: {
            show: function (id, text) {
                var div = $("<div></div>")
                    .css("margin", "12px")
                    .css("text-align", "center")
                    .css("padding", "64px 0")
                    .addClass("nodatafoundmessage");

                var subDiv = $("<div></div>");

                var subDivSpan = $("<span></span>")
                    .addClass("fa")
                    .addClass("fa-search")
                    .addClass("fa-2x")
                    .css("height", "32px")
                    .css("width", "32px")
                    .css("color", "#D0D0D0")
                    .css("margin-bottom", "16px");

                subDiv.append(subDivSpan);

                var span = $("<span></span>")
                    .text(text)
                    .css("display", "block")
                    .css("color", "#707070")
                    .css("font-size", "12px");

                div
                .append(subDiv)
                .append(span);

                $(id).append(div);
            },
            hide: function (id) {
                $(id).children('.nodatafoundmessage').remove();
            }
        }
    };

    /***********************************************************************
     **
     ** Used to draw a container
     **
     ***********************************************************************/
    function drawContainer(parent) {
        var div = $("<div></div>");
        div.addClass("apex-container");
        parent.append(div);
        return (div);
    }

    /***********************************************************************
     **
     ** Used to draw a row
     **
     ***********************************************************************/
    function drawRow(parent) {
        var div = $("<div></div>");
        div.addClass("apex-row");
        parent.append(div);
        return (div);
    }

    /************************************************************************
     **
     ** Used to rippleEffect on card click
     **
     ***********************************************************************/

    function rippleEffect(pRippleClass) {
        $("." + pRippleClass).click(function (e) {
            // Remove any old one
            $(".ripple").remove();

            // Setup
            var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight = $(this).height();

            // Add the element
            $(this).append("<div class='ripple'></div>");

            // Make it round!
            if (buttonWidth >= buttonHeight) {
                buttonHeight = buttonWidth;
            } else {
                buttonWidth = buttonHeight;
            }

            // Get the center of the element
            var x = e.pageX - posX - buttonWidth / 2;
            var y = e.pageY - posY - buttonHeight / 2;

            // Add the ripples CSS and start the animation
            $(".ripple").css({
                width: buttonWidth,
                height: buttonHeight,
                top: y + 'px',
                left: x + 'px'
            }).addClass("rippleEffect");
        });

    }
    /************************************************************************
     **
     ** Used to render the html into region
     **
     ***********************************************************************/
    function renderHTML(pParentID, pData, pEscapeHTML, pConfigJSON) {

        var parent = $(pParentID);
        parent.parent().css("overflow", "inherit");

        var container = drawContainer(parent); // wrapper
        var row = drawRow(container);
        // var row = container;
        var cardNum = 0;
        var zindex = 10;
        var releaveHideIcon = pConfigJSON.releaveHideIcon;

        // cardNum = 12 / pConfigJSON.cardWidth;

        $.each(pData, function (idx, data) {
            cardNum = cardNum + pConfigJSON.cardWidth;

            // var matFlipCardCol = $("<div></div>");
            // matFlipCardCol.addClass("flip-c-col-" + pConfigJSON.cardWidth);

            var cols = $("<div></div>");
            // cols.addClass('columns col col-'+cardNum+' apex-col-auto');
            cols.addClass('apex-c-col-' + pConfigJSON.cardWidth);

            var l_Cards = $("<div></div>");
            l_Cards.addClass("card");

            var l_Card_img = $("<div></div>");
            l_Card_img.addClass("card-image");
            rippleEffect('card');

            var l_CardImg = $("<img>");
            l_CardImg.addClass("img-responsive");

            l_CardImg.attr("src", data.IMG_SRC);

            l_Card_img.append(l_CardImg);
            l_Cards.append(l_Card_img);

            // matFlipCard.append(matFlipCardImg);

            var card_content = $("<div></div>");
            card_content.addClass("card-content");

            var title_span = $("<span></span>");
            title_span.addClass("card-title");
            title_span.text(data.CARD_TITLE);
            card_content.append(title_span);

            var show_button_div = $("<span></span>");
            show_button_div.addClass("btn btn-custom pull-right");

            var show_button_div_icon = $("<i></i>");
            show_button_div_icon.addClass("fa fa-ellipsis-v");

            show_button_div.append(show_button_div_icon);
            card_content.append(show_button_div);

            var card_action = $("<div></div>");
            card_action.addClass("card-action");

            var card_action_link_left = $("<a></a>");
            card_action_link_left.addClass("card-action-link-left pull-left t-Button");

            var card_action_link_right = $('<a type="button"></a>');
            card_action_link_right.addClass("card-action-link-right pull-right t-Button t-Button--icon t-Button");

            var card_action_link_icon_right_label = $('<span class="t-Button-label">' + data.CARD_LINK_TEXT_RIGHT + '</span>');
            var card_action_link_icon_left_label = $('<span class="t-Button-label">' + data.CARD_LINK_TEXT_LEFT + '</span>');

            // card_action.append(test);

            /*Adding icons to card buttons*/
            var left_link_pos = data.CARD_LINK_ICON_POSITION_LEFT;
            var right_link_pos = data.CARD_LINK_ICON_POSITION_RIGHT;

            right_link_pos = $.trim(right_link_pos);
            left_link_pos = $.trim(left_link_pos);
            /*Left Button setup*/
            /* If icon pos is left */
            if (left_link_pos != '') {
                var card_action_link_icon_left = $('<span  aria-hidden="true"></span>');
                card_action_link_icon_left.addClass('t-Icon t-Icon--' + left_link_pos + ' fa ' + data.CARD_LINK_ICON_LEFT);
                if (left_link_pos == 'left') {
                    card_action_link_left.append(card_action_link_icon_left);
                }
            }
            /* adding label*/
            card_action_link_left.append(card_action_link_icon_left_label);

            if (left_link_pos != '') {
                var card_action_link_icon_left = $('<span  aria-hidden="true"></span>');
                card_action_link_icon_left.addClass('t-Icon t-Icon--' + left_link_pos + ' fa ' + data.CARD_LINK_ICON_LEFT);
                if (left_link_pos == 'right') {
                    card_action_link_left.append(card_action_link_icon_left);
                }
            }

            /*Right Button setup*/
            /* If icon pos is left */
            if (right_link_pos != '') {
                var card_action_link_icon_right = $('<span  aria-hidden="true"></span>');
                card_action_link_icon_right.addClass('t-Icon t-Icon--' + right_link_pos + ' fa ' + data.CARD_LINK_ICON_RIGHT);
                if (right_link_pos == 'left') {
                    card_action_link_right.append(card_action_link_icon_right);
                }
            }
            /* adding label*/
            card_action_link_right.append(card_action_link_icon_right_label);

            if (right_link_pos != '') {
                var card_action_link_icon_right = $('<span  aria-hidden="true"></span>');
                card_action_link_icon_right.addClass('t-Icon t-Icon--' + right_link_pos + ' fa ' + data.CARD_LINK_ICON_RIGHT);
                if (right_link_pos == 'right') {
                    card_action_link_right.append(card_action_link_icon_right);
                }
            }

            card_action_link_left.css("color", '#' + data.CARD_LINK_TEXT_LEFT);
            card_action_link_left.css("background", data.CARD_LINK_BACKGROUND_COLOR_LEFT);
            card_action_link_right.css("color", '#' + data.CARD_LINK_TEXT_RIGHT);
            card_action_link_right.css("background", data.CARD_LINK_BACKGROUND_COLOR_RIGHT);
            card_action_link_left.attr("href", data.CARD_LINK_LEFT);
            card_action_link_right.attr("href", data.CARD_LINK_RIGHT);
            // card_action_link_left.text(data.CARD_LINK_TEXT_LEFT);
            // card_action_link_right.text(data.CARD_LINK_TEXT_RIGHT);

            card_action.append(card_action_link_left);
            card_action.append(card_action_link_right);

            var card_reveal = $("<div></div>");
            card_reveal.addClass("card-reveal");

            var card_reveal_title_wrap = $("<div></div>");
            card_reveal_title_wrap.addClass("card-title-wrap");

            var card_reveal_title = $("<span></span>");
            card_reveal_title.addClass("card-title");
            card_reveal_title.text(data.CARD_TITLE);

            var card_close_btn = $('<span ></span>');
            card_close_btn.addClass("close pull-right");

            var card_close_x = $('<i class="fa ' + releaveHideIcon + '"></i>');
            // card_close_x.addClass("card-title")

            card_close_btn.append(card_close_x);
            card_reveal_title.append(card_close_btn);
            card_reveal_title_wrap.append(card_reveal_title);
            // card_reveal_title.append(card_close_btn);

            card_reveal.append(card_reveal_title_wrap);
            // card_reveal.append(card_close_btn);

            var card_reveal_content = $("<div></div>");
            card_reveal_content.addClass("ashish_show_more_content");

            var card_reveal_content_para = $("<p></p>");
            card_reveal_content_para.html(data.CARD_REVEAL_CONTENT);
            // card_reveal_content_para.addClass("ashish_show_more_content")

            card_reveal_content.append(card_reveal_content_para);
            card_reveal.append(card_reveal_content);
            l_Cards.append(card_content);
            l_Cards.append(card_action);
            l_Cards.append(card_reveal);

            cols.append(l_Cards);
            row.append(cols);

            if (cardNum >= 12) {
                row = drawRow(container);
                cardNum = 0;
            }
            /* add card reveal */
            $(card_content).on('click', function () {
                var hasclass = $(this).next('div').next('div');
                if ($(hasclass).hasClass('card-reveal')) {
                    $(hasclass).slideToggle(200);
                }
            });

            $(card_reveal_title_wrap).on('click', function () {
                var hasclass = $(this).parent('div');
                // var hasclass = $(this).find('span');

                if ($(hasclass).hasClass('card-reveal')) {
                    $(hasclass).slideToggle(200);
                }

            });

        });
    }
    /************************************************************************
     **
     ** Used to check data and to call rendering
     **
     ***********************************************************************/
    function prepareData(pParentID, pData, pNoDataFound, pEscapeHTML, pConfigJSON) {
        /* empty container for new stuff */
        $(pParentID).empty();

        if (pData.row && pData.row.length > 0) {

            renderHTML(pParentID, pData.row, pEscapeHTML, pConfigJSON);
        } else {

            $(pParentID).css("min-height", "");
            util.noDataMessage.show(pParentID, pNoDataFound);
        }
        util.loader.stop(pParentID);
    }

    return {
        render: function (regionID, ajaxID, noDataFoundMessage, items2Submit, escapeRequired, udConfigJSON) {
            var parentID = "#" + regionID + "-p";
            var stdConfigJSON = {
                "cardWidth": 4,
                "refresh": 0
            };

            var configJSON = {};
            configJSON = util.jsonSaveExtend(stdConfigJSON, udConfigJSON);
            /************************************************************************
             **
             ** Used to get data from APEX
             **
             ***********************************************************************/
            function getData() {

                $(parentID).css("min-height", "120px");
                util.loader.start(parentID);

                var submitItems = items2Submit;
                try {
                    apex.server.plugin(
                        ajaxID, {
                        pageItems: submitItems
                    }, {
                        success: function (pData) {
                            prepareData(parentID, pData, noDataFoundMessage, escapeRequired, configJSON)
                        },
                        error: function (d) {
                            console.error(d.responseText);
                        },
                        dataType: "json"
                    });
                } catch (e) {
                    console.error("Error while try to get Data from APEX");
                    console.error(e);
                }

            }

            // load data
            getData();

            /************************************************************************
             **
             ** Used to bind APEx Refresh event (DA's)
             **
             ***********************************************************************/
            try {
                apex.jQuery("#" + regionID).bind("apexrefresh", function () {
                    getData();
                });
            } catch (e) {
                console.error("Error while try to bind APEX refresh event");
                console.error(e);
            }

            /************************************************************************
             **
             ** Used to refresh by a timer
             **
             ***********************************************************************/
            if (configJSON.refresh && configJSON.refresh > 0) {
                setInterval(function () {
                    getData();
                }, configJSON.refresh * 1000);
            }
        }
    }

})();
