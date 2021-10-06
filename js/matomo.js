// Matomo
var userIds = ["abcd-1234", "efgh-5678", "ijkl-9012", "mnop-3456", "qrst-7890"];
function trackMotomo() {
    var _paq = window._paq = window._paq || [];
    var u = "https://matomo.payoda.net/";
    var currentUserId = userIds[Math.floor((new Date()).getSeconds() / 5)];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['enableLinkTracking']);
    _paq.push(['setUserId', currentUserId]);
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    // Set page title and track it
    _paq.push(['setDocumentTitle', document.domain + "/" + document.title]);
    _paq.push(['trackAllContentImpressions']);
    _paq.push(['enableHeartBeatTimer']);
    _paq.push(['setCustomDimension', 1, "Admin"]);
    _paq.push(['setCustomVariable', 1, 'Category', 'Tables', 'page']);

    _paq.push(['setEcommerceView',
        '1', // (Required) productSKU
        'Prod 1', // (Optional) productName
        'Cat 1', // (Optional) categoryName
        9.99 // (Optional) price
    ]);
    _paq.push(['trackPageView']);

    _paq.push(['addEcommerceItem',
        '1', // (Required) productSKU
        'Prod 1', // (Optional) productName
        'Cat 1', // (Optional) productCategory
        9.98, // (Recommended) price
        5 // (Optional, defaults to 1) quantity
    ]);
    _paq.push(['trackEcommerceCartUpdate', 25.5]);

    _paq.push(['trackEcommerceOrder',
        '21', // (Required) orderId
        28.99, // (Required) grandTotal (revenue)
        19.99, // (Optional) subTotal
        1.8, // (optional) tax
        1, // (optional) shipping
        false // (optional) discount
    ]);

    // _paq.push(['setEcommerceView',
    //     '345', // (Required) productSKU
    //     'Prod 4', // (Optional) productName
    //     'Cat 4', // (Optional) categoryName
    //     19.99 // (Optional) price
    // ]);
    // _paq.push(['trackPageView']);

    // _paq.push(['addEcommerceItem',
    //     '345', // (Required) productSKU
    //     'Prod 4', // (Optional) productName
    //     'Cat 4', // (Optional) productCategory
    //     19.99, // (Recommended) price
    //     2 // (Optional, defaults to 1) quantity
    // ]);
    // _paq.push(['trackEcommerceCartUpdate', 25.5]);

    // _paq.push(['removeEcommerceItem',
    //     '345'
    // ]);
    // _paq.push(['trackEcommerceCartUpdate', 15.5]);

    _paq.push(['trackPageView']);
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = u+'matomo.js';
    s.parentNode.insertBefore(g,s);
}

trackMotomo();
