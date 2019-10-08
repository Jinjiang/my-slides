var root = $('#main');

var sectionList;
var pageNum;
var pageLength;
var currentSection;
var nextSection;
var prevSection;

var actionList;
var actionNum;
var actionLength;
var currentAction;
var nextAction;
var prevAction;

var helperVisibility = false;
var touchMode = "createTouch" in document;
var compatibleMode = !window.HTMLVideoElement || window.innerWidth < 350;


function parse(presentation) {
    var slides = presentation.slides;
    var defaultLayout = presentation.defaults.layout || 'layout_default';
    var defaultTransition = presentation.defaults.transition || 'layout_transition';

    root.empty();

    $.each(slides, function (i, slide) {
        var section = $('<section></section>').appendTo(root);

        var layout = slide.layout || defaultLayout;
        section.attr('data-layout', layout);

        var transition = slide.transition || defaultTransition;
        section.attr('data-transition', transition);

        var layoutHtml =
                '<div class="header"></div>' +
                '<div class="content"></div>';
        section.html(layoutHtml);

        var header = section.find('.header');
        var content = section.find('.content');

        var titleHtml = '';
        var contentHtml = '';

        titleHtml = markdown.toHTML(slide.values.title || '');
        contentHtml = markdown.toHTML(slide.values.content || '');

        if (layout == 'layout_picture') {
            if (slide.values.picture) {
                contentHtml = markdown.toHTML('![](' +
                    slide.values.picture + ')').replace(/<.{0,1}p>/ig, '') +
                    (contentHtml ? contentHtml : '');
            }
        }

        titleHtml = parseExt(titleHtml);
        contentHtml = parseExt(contentHtml);

        header.html(titleHtml);
        content.html(contentHtml);

        if (!slide.extra) {
            return;
        }
        $.each(slide.extra, function (i, extraItem) {
            var extraDiv = $('<div class="extra"></div>');
            extraDiv.html(markdown.toHTML(extraItem.value || ''));
            $.each(extraItem.position, function (key, value) {
                extraDiv.css(key, value);
            });
            $.each(extraItem.style, function (key, value) {
                extraDiv.css(key, value);
            });
            $.each(extraItem.inner_style, function (selector, style) {
                var inner = extraDiv.find(selector);
                $.each(style, function (key, value) {
                    inner.css(key, value);
                });
            });
            section.append(extraDiv);
        });
    });

    sectionList = root.find('section');
    pageLength = sectionList.length;
}


function parseExt(str) {
    var hasAction;
    str = str.replace(/<br><\/br>/ig, '<br>');
    str = str.replace(/<hr><\/hr>/ig, function (sub, index) {
        var output = hasAction ? '</div>' : '';
        hasAction = true;
        output += '<div data-action="action_default">';
        return output;
    });
    str = str.replace(/<a/ig, '<a target="_blank"');
    if (hasAction) {
        str += '</div>';
    }
    return str;
}


function parseCompatible(presentation) {
    var slides = presentation.slides;
    var defaultLayout = presentation.defaults.layout || 'layout_default';
    var defaultTransition = presentation.defaults.transition || 'layout_transition';

    root = $('body').empty();

    $.each(slides, function (i, slide) {
        var section = $('<div class="section"></div>').appendTo(root);

        var layout = slide.layout || defaultLayout;
        var transition = slide.transition || defaultTransition;

        var layoutHtml =
                '<div class="header"></div>' +
                '<div class="content"></div>';
        section.html(layoutHtml);

        var header = section.find('.header');
        var content = section.find('.content');

        var titleHtml = '';
        var contentHtml = '';

        titleHtml = markdown.toHTML(slide.values.title || '');
        contentHtml = markdown.toHTML(slide.values.content || '');

        if (layout == 'layout_picture') {
            if (slide.values.picture) {
                contentHtml = markdown.toHTML('![](' + slide.values.picture + ')').replace(/<.{0,1}p>/ig, '');
            }
        }

        titleHtml = parseExtCompatible(titleHtml);
        contentHtml = parseExtCompatible(contentHtml);

        header.html(titleHtml);
        content.html(contentHtml);
    });

    sectionList = root.find('.section');
    pageLength = sectionList.length;
}


function parseExtCompatible(str) {
    str = str.replace(/<br><\/br>/ig, '<br>');
    str = str.replace(/\s*<hr><\/hr>\s*/ig, '');
    str = str.replace(/\n\n/ig, '');
    str = str.replace(/<\/ul><ul([^>]*)>/ig, '');
    str = str.replace(/<\/ol><ol([^>]*)>/ig, '');
    return str;
}


function play(initPageNum) {
    $('body').addClass('play');
    if (arguments.length > 0) {
        initPage = parseInt(initPageNum);
    }
    pageNum = initPageNum || 1;
    if (pageNum < 1) {
        pageNum = 1;
    }
    if (pageNum > pageLength) {
        pageNum = 1;
    }
    currentSection = $(sectionList[pageNum - 1]).addClass('current');
    prevSection = currentSection.prev().addClass('prev');
    nextSection = currentSection.next().addClass('next');

    actionList = currentSection.find('[data-action]');
    actionLength = actionList.length;
    currentAction = nextAction = prevAction = $('<div></div>');

    if (actionLength > 0) {
        actionNum = 0;
        nextAction = $(actionList[0]);
    }
    else {
        actionNum = -1;
    }

    if (location.hash.length > 1) {
        nav(parseInt(location.hash.substr(1)) || 0);
    }

    bind();
}


function playCompatible() {
    $('body').addClass('play-compatible');
}


function nav(newPageNum, hasLastAction) {
    newPageNum = parseInt(newPageNum) || 0;

    if (newPageNum < 1) {
        return;
    }
    if (newPageNum > pageLength) {
        return;
    }

    if (newPageNum == pageNum) {
        return;
    }

    pageNum = newPageNum || 0;

    actionList.removeClass('shown current next prev');

    currentSection.removeClass('current');
    prevSection.removeClass('prev');
    nextSection.removeClass('next');

    currentSection = $(sectionList[pageNum - 1]).addClass('current');
    prevSection = currentSection.prev().addClass('prev');
    nextSection = currentSection.next().addClass('next');

    location = '#' + pageNum;

    actionList = currentSection.find('[data-action]');
    actionLength = actionList.length;
    currentAction = nextAction = prevAction = $('<div></div>');


    if (actionLength > 0) {
        if (hasLastAction) {
            actionNum = actionLength;
            actionList.each(function (i, action) {
                action = $(action);
                if (i == actionLength - 1) {
                    currentAction = action.addClass('current');
                }
                else if (i == actionLength - 2) {
                    prevAction = action.addClass('prev');
                }
                else {
                    action.addClass('shown');
                }
            })
        }
        else {
            actionNum = 0;
            nextAction = $(actionList[0]).addClass('next');
        }
    }
    else {
        actionNum = -1;
    }
}


function action(isBackward) {

    if (actionNum == -1) {
        if (isBackward) {
            nav(pageNum - 1, true);
            return;
        }
        else {
            nav(pageNum + 1);
            return;
        }
    }
    else if (actionNum == 0 && isBackward) {
        nav(pageNum - 1, true);
        return;
    }
    else if (actionNum == actionLength && !isBackward) {
        nav(pageNum + 1);
        return;
    }

    currentAction.removeClass('current');
    nextAction.removeClass('next');
    prevAction.removeClass('prev');

    if (isBackward) {
        actionNum--;
    }
    else {
        actionNum++;
        prevAction.addClass('shown');
    }

    currentAction = $(actionList[actionNum - 1]).addClass('current');
    nextAction = $(actionList[actionNum]).addClass('next');
    prevAction = $(actionList[actionNum - 2]).addClass('prev').removeClass('shown');

    if (currentAction[0].scrollIntoView) {
        currentAction[0].scrollIntoView();
        document.body.scrollLeft =
        document.body.scrollTop = 0;
    }
}


function bind() {
    function bindKB() {
        $('html').bind('keydown', function (event) {
            var keyCode = event.keyCode;
            switch (keyCode) {
            case 33:
                event.preventDefault();
                nav(pageNum - 1, true);
                break;
            case 34:
                event.preventDefault();
                nav(pageNum + 1);
                break;
            case 35:
                event.preventDefault();
                nav(pageLength);
                break;
            case 36:
                event.preventDefault();
                nav(1);
                break;
            case 37:
                event.preventDefault();
                action(true);
                break;
            case 38:
                event.preventDefault();
                action(true);
                break;
            case 39:
                event.preventDefault();
                action();
                break;
            case 40:
                event.preventDefault();
                action();
                break;
            case 13:
                event.preventDefault();
                nav(pageNum + 1);
                break;
            case 71:
                event.preventDefault();
                nav(prompt('请输入您想要到达的页码：', pageNum));
                break;
            case 72:
                event.preventDefault();
                help();
                break;
            case 229:
                event.preventDefault();
                alert('请切换输入法到英文输入状态，以保证\n快捷键可以生效。谢谢。');
                break;
            default:
                ;
            }
        })
    }
    function bindMouse() {

    }
    function bindTouch() {
        var startId;
        var startX;
        var startY;
        var moveX;
        var moveY;

        $('body').bind('touchstart', function (event) {
            var evt = event.originalEvent;
            if (evt.targetTouches.length == 1) {
                var target = evt.targetTouches[0];
                startId = target.identifier;
                startX = target.screenX;
                startY = target.screenY;
            }
            return false;
        });
        $('body').bind('touchmove', function (event) {
            if (!startId) {
                return false;
            }
            var evt = event.originalEvent;
            for (var i = 0; i < evt.targetTouches.length; i++) {
                var touch = evt.targetTouches[i];
                if (touch.identifier == startId) {
                    moveX = touch.screenX;
                    moveY = touch.screenY;
                    // $('#slide').css('webkitTransform', 'translateX(' + (moveX - startX) + 'px)');
                    if (Math.abs(moveY - startY) > 100) {
                        startId = startX = startY = moveX = moveY = null;
                        // $('#slide').css('webkitTransform', 'none');
                    }
                }
            }
            return false;
        });
        $('body').bind('touchend', function (event) {
            if (!startId) {
                return false;
            }
            var endX = moveX;
            var endY = moveY;

            if (endX - startX > 50) {
                action(true);
            }
            if (endX - startX < -50) {
                action();
            }

            startId = startX = startY = moveX = moveY = null;
            // $('#slide').css('webkitTransform', 'none');
            return false;
        });
    }
    bindKB();
    bindTouch();
    bindMouse();
}


function help() {
    var helper;
    var ul;
    var helperData;

    if (helperVisibility) {
        helper = $('#helper');
        helper.remove();
        helperVisibility = false;
    }
    else {
        helperData = {
            '回车': '后一个动画',
            '上': '前一个动画',
            '下': '后一个动画',
            '左': '前一个动画',
            '右': '后一个动画',
            'PageUp': '前往前一页',
            'PageDown': '前往后一页',
            'Home': '前往第一页',
            'End': '前往最后一页',
            'G': '快速翻到任意页',
            'H': '显示/隐藏帮助信息'
        };
        helper = $('<span id="helper"></span>').appendTo($('body'));
        ul = $('<ul></ul>').appendTo(helper);
        $.each(helperData, function (key, value) {
            $('<li></li>').text(key + ' → ' + value).appendTo(ul);
        });
        helperVisibility = true;
    }
}


function init() {
    if (compatibleMode) {
        parseCompatible(presentation);
        playCompatible();
    }
    else {
        parse(presentation);
        play();
        if (touchMode) {
            $('body').addClass('touch');
            alert('请用 ← 或 → 滑动播放');
        }
    }
}


setTimeout(init, 500);



