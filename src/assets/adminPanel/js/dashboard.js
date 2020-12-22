jQuery(document).ready(function() {

    "use strict";

    function showTooltip(x, y, contents) {
        jQuery('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5
        }).appendTo("body").fadeIn(200);
    }


    // This will empty first option in select to enable placeholder
    jQuery('select option:first-child').text('');

    // Select2
    jQuery("select").select2({
        minimumResultsForSearch: -1
    });

    // Basic Wizard
    jQuery('#basicWizard').bootstrapWizard({
        onTabShow: function(tab, navigation, index) {
            tab.prevAll().addClass('done');
            tab.nextAll().removeClass('done');
            tab.removeClass('done');

            var $total = navigation.find('li').length;
            var $current = index + 1;

            if ($current >= $total) {
                $('#basicWizard').find('.wizard .next').addClass('hide');
                $('#basicWizard').find('.wizard .finish').removeClass('hide');
            } else {
                $('#basicWizard').find('.wizard .next').removeClass('hide');
                $('#basicWizard').find('.wizard .finish').addClass('hide');
            }
        }
    });

    // This will submit the basicWizard form
    jQuery('.panel-wizard').submit(function() {
        alert('This will submit the form wizard');
        return false // remove this to submit to specified action url
    });

});