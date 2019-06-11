//sites and their specific settings

const nineDigital = {
    siteBackgroundColor : "#ffffff",
    fireplaceLeftMargin : 0,
    adNodeMarginTop : -32,
    adNodeMarginBottom : 0,
    responsiveScroll : -148,
    zIndex : function() {
        
        const article = window.parent.document.querySelector('article');
        if (article) {
            article.style.position = "relative";
            article.style.zIndex = "1";
        }

        const bread = window.parent.document.querySelector('ol[typeof="BreadcrumbList"]');
        if (bread) {
            if (bread.parentElement) {
                bread.parentElement.style.position="relative";
                bread.parentElement.nextElementSibling.style.position="relative";
            }
        }

        const kitchenIndex = window.parent.document.querySelector('#Index');
        if (kitchenIndex) {
            kitchenIndex.style.position = "relative";
        }

        const mastheadAnchor = window.parent.document.getElementById('mastheadAnchorToggle');
        if (mastheadAnchor) {
            mastheadAnchor.style.zIndex = "6";
        }
        
    }
}


export default [
    {
        site : "https://www.nine",
        config : {
            siteBackgroundColor : "#ffffff",
            fireplaceLeftMargin : 0,
            adNodeMarginTop : 0,
            adNodeMarginBottom : 0,
            responsiveScroll : -162
        }
    },
    {
        site : "https://entertainment" ,
        config : nineDigital
    },
    {
        site : "https://celebrity",
        config : nineDigital
    }, 
    {
        site : "https://homes",
        config: nineDigital
    },
    {
        site : "https://travel" ,
        config : nineDigital
    },
    {
        site : "https://honey" ,
        config : nineDigital
    },
    {
        site : "https://style" ,
        config : nineDigital
    },
    {
        site : "https://coach" ,
        config : nineDigital
    },
    {
        site : "https://kitchen" ,
        config : nineDigital
    },
    {
        site : "https://entertainment.preview" ,
        config : nineDigital
    },

    {
        site : "https://finance" ,
        config : {
            siteBackgroundColor : "#ffffff",
            fireplaceLeftMargin : 0,
            adNodeMarginTop : -32,
            adNodeMarginBottom : 0,
            responsiveScroll : -148
        }
    },

    {
        site : "https://wwos" ,
        config :  {
            siteBackgroundColor : "#f7f7f7",
            fireplaceLeftMargin : 0,
            adNodeMarginTop : -32,
            adNodeMarginBottom : 0,
            responsiveScroll : -148
        }
    }, 

    {
        site : "https://www.9news" ,
        config : {
            siteBackgroundColor : "#ffffff",
            fireplaceLeftMargin : 0,
            adNodeMarginTop : -36,
            adNodeMarginBottom : 16,
            responsiveScroll : -148
        }
    }, 

    {
        site : "https://www.yourtv" ,
        config : {
            siteBackgroundColor : "#ffffff",
            fireplaceLeftMargin : 0,
            adNodeMarginTop : -32,
            adNodeMarginBottom : 0,
            responsiveScroll : -148
        }
    }, 

    {
        site : "https://9now" ,
        config : {
            siteBackgroundColor : "#ffffff",
            fireplaceLeftMargin : 0,
            adNodeMarginTop : -32,
            adNodeMarginBottom : 0,
            responsiveScroll : -148
        }
    }
]
