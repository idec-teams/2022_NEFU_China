function MoveContentOutside() {
    // Script written by Chiel van Amstel to move the inserted content, thereby relieving it from the reign of the iGEM stylesheet. This script is free to be used by others, as long as full credit is given (in the form of this comment).

    inserted_content = document.querySelector('div#mw-content-text').children
    head = inserted_content[0].children //<head> items from inserted html
    oldHead = document.querySelector('head').children;

    // move all <head> items to the iGEM <head> section
    for (var i = head.length; i > 0; i--) {
        el = head[0];
        document.querySelector('head').appendChild(el);
    }

    // move all content outside of the iGEM scope (all but 1, because p before inserted content = inserted head)
    for (var j = inserted_content.length - 2; j > 0; j--) {
        el = inserted_content[1];
        document.querySelector('body').appendChild(el);
    }

    // remove the inserted iGEM sections (empty, because content is moved outside now
    var leftover = document.querySelector('#globalWrapper>div#content');
    leftover.parentNode.removeChild(leftover);

    // remove padding from top iGEM bar
    document.querySelector('div#globalWrapper').style.paddingBottom = "0px";
}