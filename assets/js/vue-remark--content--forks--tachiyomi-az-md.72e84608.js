(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2IDF":function(t,e,s){"use strict";s("mRH6"),s("ls82");var n=s("HaE+"),a=s("wd/R"),i=s.n(a),o={components:{DownloadButton:s("W3K2").a},props:{fork:{type:String},isPreview:{type:Boolean,default:!1},isGithub:{type:Boolean,default:!1}},data:function(){return{data:{body:"",date:i()(0).fromNow(),downloadUrl:"",version:"v0.00.0"},link:""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.fork,e.next="az"===e.t0?3:"j2k"===e.t0?5:"sy"===e.t0?7:"neko"===e.t0?9:11;break;case 3:return s=t.$fetchers.tachiyomiaz(),e.abrupt("break",13);case 5:return s=t.$fetchers.tachiyomij2k(),e.abrupt("break",13);case 7:return s=t.$fetchers.tachiyomisy(),e.abrupt("break",13);case 9:return s=t.$fetchers.neko(),e.abrupt("break",13);case 11:throw new Error("Unknown fork");case 13:return t.link=s.githubUrl,n=t.isPreview?s.preview(t.$store):s.stable(t.$store),e.next=17,n;case 17:t.data=e.sent.data;case 18:case"end":return e.stop()}}),e)})))()}},r=s("KHd+"),b=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.isGithub?e("button",{staticClass:"rounded-md my-2 md:mx-2 px-20 py-2 bg-indigo-800"},[e("a",{attrs:{href:this.link}},[e("p",{staticClass:"font-bold text-white mb-0"},[this._v("GitHub")])])]):e("download-button",{class:"fork-"+this.fork,attrs:{title:this.isPreview?"Preview":"Stable",data:this.data}})}),[],!1,null,null,null);e.a=b.exports},"9q21":function(t,e,s){"use strict";s.r(e);var n=s("KHd+"),a=(s("U3Hi"),s("oHnZ")),i=s("2IDF"),o=s("UQSp"),r=s("Kw5r");function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var c={DownloadButtons:a.a,ForkButton:i.a,VueRemarkRoot:o.a},l=function(t){var e=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===b(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:s[t]=function(){return c[t]}}))},f=r.a.config.optionMergeStrategies,g="__vueRemarkFrontMatter",d={excerpt:null,title:"TachiyomiAZ",description:"This hentai focused fork is based off of TachiyomiEH, it has most features and fixes from Tachiyomi, as well as features from TachiyomiJ2K.",metaImage:"/ogimage-az.png",metaColor:"#FFCC4D",onThisPage:!1,path:"/forks/TachiyomiAZ/"};var u=function(t){t.options[g]&&(t.options[g]=d),r.a.util.defineReactive(t.options,g,d),t.options.computed=f.computed({$frontmatter:function(){return t.options[g]}},t.options.computed)},m=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h1",{attrs:{id:"g-image-classheaderlogo-srcimagesforks_logo-azpng-width64-height64-fitcontain-tachiyomiaz"}},[n("a",{attrs:{href:"#g-image-classheaderlogo-srcimagesforks_logo-azpng-width64-height64-fitcontain-tachiyomiaz","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),n("g-image",{staticClass:"headerLogo",attrs:{src:s("HJFX"),width:"64",height:"64",fit:"contain"}}),t._v(" TachiyomiAZ")],1),n("DownloadButtons",[n("ForkButton",{attrs:{fork:"az"}}),n("ForkButton",{attrs:{fork:"az",isPreview:""}}),n("ForkButton",{attrs:{fork:"az",isGithub:""}})],1),n("div",{staticClass:"azContainer"},[n("div",{staticClass:"azMarquee"},[n("div",{staticClass:"azWiggleText"},[n("span",{staticClass:"azText"},[n("i",[t._v("The BEST fork")]),t._v(" --az4521")])])])]),n("h2",{attrs:{id:"introduction"}},[n("a",{attrs:{href:"#introduction","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Introduction")]),n("p",[n("strong",[t._v("TachiyomiAZ")]),t._v(" is maintained by "),n("strong",[n("a",{attrs:{href:"https://github.com/az4521",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("az4521")])]),t._v(" and "),n("a",{attrs:{href:"https://github.com/jobobby04",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Syer10")]),t._v(".")]),n("p",[t._v("This hentai focused fork is based off of "),n("strong",[n("a",{attrs:{href:"/forks/TachiyomiEH/"}},[t._v("TachiyomiEH")])]),t._v(", it has most features and fixes from "),n("strong",[t._v("Tachiyomi")]),t._v(", as well as features from "),n("strong",[n("a",{attrs:{href:"/forks/TachiyomiJ2K/"}},[t._v("TachiyomiJ2K")])]),t._v(". It has decided to keep the hamburger menu style of navigation, compared to the other forks that are moving to the new bottom navigation style.")]),n("h2",{attrs:{id:"features"}},[n("a",{attrs:{href:"#features","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Features")]),n("p",[n("strong",[t._v("Special Sources")]),t._v(" (integrated plus added features)")]),n("ul",[n("li",[t._v("E-Hentai/ExHentai")]),n("li",[t._v("nHentai")]),n("li",[t._v("Hitomi.la")]),n("li",[t._v("8Muses")]),n("li",[t._v("HBrowse")]),n("li",[t._v("Perv Eden")])]),n("p",[n("strong",[t._v("Delegated Sources")]),t._v(" (Sources with added features if installed)")]),n("ul",[n("li",[t._v("Puruin")]),n("li",[t._v("Tsumino")]),n("li",[t._v("HentaiCafe (Foolside)")])]),n("p",[n("strong",[t._v("From EH:")])]),n("ul",[n("li",[t._v("Save Searches for use later")]),n("li",[t._v("AutoScroll")]),n("li",[t._v("Boost Page (force redownload page)")]),n("li",[t._v("Page download thread customization")]),n("li",[t._v("Predownload the whole chapter while reading (Optional)")]),n("li",[t._v("Retry immidently instead of wating for the rest of the preloaded pages to finish downloading")]),n("li",[t._v("Customize image cache size (how much space Tachiyomi has available to store future pages)")]),n("li",[t._v("Sync your favorites with your EHentai/ExHentai account")]),n("li",[t._v("Batch import E-Hentai/ExHentai URLs (import single URLs by pasting them into the source search box)")]),n("li",[t._v("Automatic CAPTCHA solving")])]),n("p",[n("strong",[t._v("From EH and fixed/changed:")])]),n("ul",[n("li",[t._v("Auto Migration (Originally from EH, it was then improved in J2k, and we have reintegrated the J2k version)")]),n("li",[t._v("Merged Sources (Merge 2 or more versions of a manga to get chapters from all of them)")]),n("li",[t._v("App and notification lock with fingerprint and PIN unlock")]),n("li",[t._v("Restoring backups in the background")]),n("li",[t._v("Fixed Tsumino and Hitomi")]),n("li",[t._v("Language filtering search options for nHentai")]),n("li",[t._v("Tri-state filter when filtering in library")]),n("li",[t._v("Random bugfixes")])]),n("p",[n("strong",[t._v("Original AZ Features:")])]),n("ul",[n("li",[t._v("Maintained hamburger navigation")]),n("li",[t._v("Grid view corner rounding configuration")]),n("li",[t._v("Manga recommendations")])]),n("g-image",{staticClass:"headerLogo",attrs:{src:s("qqmW"),width:"128",height:"128",fit:"contain"}})],1)}),[],!1,null,null,null);"function"==typeof l&&l(m),"function"==typeof u&&u(m);e.default=m.exports},HJFX:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/website/assets/static/forks_logo-az.6e7923b.9f4d9baac244896ee1adaf890d6dcc28.png",size:{width:64,height:64},sizes:"(max-width: 64px) 100vw, 64px",srcset:["/website/assets/static/forks_logo-az.6e7923b.9f4d9baac244896ee1adaf890d6dcc28.png 64w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-c51d8e11588300333bc246d552c183de'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-c51d8e11588300333bc246d552c183de)' width='64' height='64' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAaiklEQVR42r1bB3wVVdafl0aS90JCICEkIf21BBJ6EQi9pxD28xMVFQVZCyhYWMWyFlZRBKQLIruiq4JrYUGqCEpLr5DQVEDKgvR0kjfnO%2bfeO/NmXl4gsLtffr/zm8mbmXvv%2bZ9%2b5o4k3eFfvsUiFSAd7tpVuhf/L7RaDUgeX3Trprsvz2LpUGC1jsm3WqfhcTHSNqRi/P/IXovl9F6z%2bcw%2bi%2bUoUmmu1boTry3flZAwc31sbMbXsbHRrvNeTk72eDciwmDx9ZWOWK3Sp7Gx0oiAAOn/9a/QZpPy7XZ2XmCzGfB/T5frnfD355GZHUgn8X84nJgI5XY7HEIqE3RIEP1eoTk/gvfSdXz2zE9m8%2b49Fsuf18bE9MOhvZQ5oEcPj7kdOhjo/EBUlDQ9JERKQlD%2bq3%2b/BwVJu3v2ZOfl8fFSgd3uoVzDxZpQAx5E2ornl8sFM6XIPAIgIyCNeK0Rrznw6CjgJAtS/ncU0n38XpmeJTCIimy2%2bmyrde/W%2bPjpU9q1C1fmvdq5s8eU4GB2/gVqwwO4xv%2ba1L/v0YOd5yYlGTb06cPQRxBMuPCpSEVlguliYhqZJUZcGGVEgBQKYLTn6nVxj3iWxmgsIi3CsUmT0FR%2b2RQf/%2bqDQUFhyvo2x8erwnhAAPKfYRztPK9zZ854aioxr6p7od2ejostIqYPksrabA7GOFu4TWGWM2rHI1GiIDv7HcnKj02v8Wf1gDAwaK6jCESO1XocfcVUXIo3M4vu3T3ifXzY2pZGRkrw8MP/HvNF6GRwQu7MkpKkkthYhnJJQkKHIovlU5I02a2QNEpckaCQrGC6wGKF/HgL5EVbIDfCzIjO6bf8BCvkxeK1KP57bke8FmOBArMAJlGjKS6aofgMdJrfvxwWlsJAeOst6c2wMIMwS2nwnTpIlC45OO7x7XbDEeFw8hMTh%2bDAx8guaUHMtm20MI1646JRAyCfGEOG8Hco69sJjk/oBr893RvOz%2bkPFxekwuVlg%2bDKisFwadFA%2bP3dVDg7%2by44MaUnHB6TAsUpdsiPszBAChAkASbNp9cInP8oN4tLa6KiHlXWv99iYevdEBd3ByEuMVFlnry8xg/MJDUnFcRFNBQINVUZt7NzJl1adPmwZMZU5d%2bHQcOeMQCF6QAHMwAOZwJUIJUjHRJH5beSDHDkpUHd5lEMmF8RkJLuiVxjEFAVCI154XlDmTBDDJ1LcKlGWu8p9FV0fDc8/DYkj2pT6IZ5nGQOqRw5Iy51Zr98IcKeGeN4/PmBHnB97VBozE7jzJUh00XpIOcj5aaBnHMTQuahAIEqzlCfrds%2bGs6/2R/KhyQL07GqpqEAISKITNqADvIfuORQZsaCh3vatGkZAAUofeHdnczbbEsquJOTmaPTSh0XQgvKR7s9PqE7VK0fzqQIhzKYxBlTuZwxlfLT3VNeuvOeXA0gBAZqR%2bOBNDj/9gAo7Z3EfIZwnloQmFkcRxAwKmxDBiJp/bvMZsbL0Fv5A8rsFBAKo6MNgvm/VHCVV%2bK0TuVpIbSgS4sH4UK5ijMGchSG9UwCETGlnKu/0dENOBowmAkhEPU7RzPTYM4ygWlDExB%2bRhD%2bGRe3GVkIi/L0NKyIimL89Pb3d8/8FZNJ2oxh7hdMcIrMZg9hDjOEl28qeRtn/mhWV6jbNorZsI7xfBepN6cBGjDcXdMRAUFmRRqGQP8%2bPxWKOtm5b3ADwjEE4ZOYmE%2bQlcAdcXEeL4SFSa0MhqbMH%2bzUSfqhd28l3HkKyQ8nlRc275b5k0/2BpmkggtySjwNHLlEY7nEC8gUMvgR/1eviXtBw6j2nO6hexk4hc4xaMzGbLyWM5b5iMovhnGTiGYggBaEQuGw3%2bzQ4WVkqRVGLsZbB29vPQB5Iq/P7tSJwVMaH98Bmf5ZJDeNTZhH1Tsz6y6A0gzmsJh6CubYQg9moQ8Yz87rDoyBmv1joDZ7DDiIGXYNqShTx7gOiKJM/jze60BNqqExkOqQcTZ%2bOV4ry%2bJmg06ydtNIOJjama3LBQQHpdNYaFWODwoaT7XEcREZ2nqKfO4IZkyNXl5SCXr/71NS2EVMcj4Tcb6hic1jXP5tRh9cXKbTqyt2XToOqveNhsKPe8D6N%2bJg2dPtYe7kIJjzUGt4%2b5EgWDwtFP7%2bSgzs/7ALXP6BnOU4DmCexvvjb5d2DoM9H6TApy9Hw6InQ%2bAvkwIZvTOlDSx/Ogz%2bMScBSj7thcCO5mChOVDYLOuT1MQcsOpkeQL6gyJkLTHYy8srx2yWvNEUiKR9XbowIEoVu7fbM0UuL4s4zwdDZCkp%2bXVyT26DGuYVqWWv7gaz7/GHKUMluPcuCf63d1Oa0Bcz1MESPJPpA/94Mx5ukCoLDWhAtd/wtgVmZvjAw4Pw3j7ux7gPx350mAQv4Vz7V3XhmoAgUAQqSrbzLFJEhwKRMFUgCGgKC5DFNiujolhV6UsA/I6h4Yjw%2bBcDAwPwgcJDrqqfyNW%2bfHgyNO4fy2N6rtNm2RGl99KEAMjsKsEjQyR4LssHFjzWDj6aFQFrX4qCNX%2bKRA0IgRfv9mMAEXPEyKlNAzF6ZDL6bcsgeChVgnv6OBlcglrz1xc6wsezo2D18xEw/49tETxveARBzOomwQs4Xh2aFwMBI8TFhQNZBqkptpgpkDn/aDZf6u7nl068Q//%2bEjOCA5TjC%2bmj6k8vF8wXaJMMzOWLkmxQ9eVwHuZy9A6Lx%2bpMOIAasHh6e9i7sgtc3DUcGoRZMHtGmyVtufLjSKa%2bq56LgK9QlfUakAbfogasfDYcSj/rDdf2jOTmRfZ%2bcDwbi%2b65gCby04pkdS4oylCjBJnmiam9eJ7g9AdyvogKWCStR1Y7TgsJ8dYlPJj%2bkvRLRJqrlz6q/plZfRnCzNu78dyMCWKWFktEUiWPjQyS16YjY4ZsljEk7nP1AWWaMfBeSovZGIJ4lpjpfJ7mZGFTAIDmWb9zDIsMLGO021hxptGCy8m%2bvv%2bDLJvqyefhBQ%2bR5z9Qxm3foUofnR6p08GBnTGXH8szO1fV14avXCUEpjlDmJZZNQw6yTUK6K%2bPFU5OjIEO0nUO2XUM0k4U1IW5A3hodJbWDARyiFgbUG4Q9RRpwSpRKOANW8pFaauWn3ae31P66Sp9ytrUzC3PjUlgzCb13jLfDkvRc29/PwkahZR19zWbB5A0M%2bH05kHM/lc%2bFw4V6/oy6bsmSLokKo9njI0HxmLt0FkpoFgFiWbgoKYKpskn0QuOQLYDlNI3GaV%2btVgkPTrpY3xt%2bIlXcs5MTZvKpunSW3VRKK11r8UyR/fQQAnu7yeh10/gUtTGf21arNUqtOsr6EdeusfIxnhggARPjvaEY1/3YyA4lPCrPqfJMnN4EXbhLb0WEF9F3B/I97Vp82dKk5ViZ1Y5b0Lqpd%2bM7TsZT9OBICvJEC7wLHr0J8d4wpRhtHAD8/xPjfWCs1sHqww0qQc0ZkAqv/k9G0zsL8ET%2bDyNQecfPBPONMMJoptUmq0hHW78MBpKe%2bl9geoMO3bciqynKKXu9nLh/LSenxxg9VcjWLali/m3AgDtPXdNN5iM4fCPI5w0Bf8v%2b6IPu87suxkAZJH%2bLsdE6kEMi4%2bN5DQJc4M/398aGoQzdLcWtQZh68iAE3/sBbmRPCIoZkDF3Xfx8b8h6xnUtw%2bn1nWpiJfU0GDSx7h/JL0Lq%2bZUu3VVe5dzLQD5f%2b3OpK4DYOjtAbBiRpgOAEqOXpsYyAFoRhiuZnBlxSBdXlAgus37LZa6/kbjM1QCj2nSlaWsL8IMp5/pwwbRVnh6qTfVAFmYwPntQ%2bCpNC%2bYPJSbAGnDDMzwLuwYysObWxPg5TMDB%2buFHeg470e1f3wUNwHyI6sxsVKiAQMgr6kw1HVgwlaPlSp1lBQzUNrwlOzNDA1dTW94plGrWTQ2ZVH6smbl5eWDnQCoNfvNSesEN8w1w0R0XpTdPYCMbHzXql%2b8256A4skzoBIToTcfCoT7kHGy/xkZ3nBi48CmTtBFGIoZ8EoyHY5kdOWFEjlD4QeoXzAvPHwr2f/iJvaPuTTV2bUbRvBSVzfZzZnXHqmSo6Lmo1mRmLGlYOmcoVddNyDoxkBGqTD6EmuGT16KRuZTnVGkpYLAivXUtN6sjuF%2bgAHgoGLvk%2bjoQgJg2yEeAZzhD9WFMinWyCxKdy%2btFoLAMjWF3F13fd71HgyHPOPLUnMA17maBUD4AeonkkkrjpD4LOf5wCnq%2bpSU8QRIBYD69IdHJ4MjJ82NA7wFAC4MKNmaNuu71XiuCY5ujPy0WzKvmpIAgNrvrDYQzVvik3jehcWRlG2xHD0oNKBQiQCYPFCrS867NdItAcFdxtZSTdKNkd/y9aiR4FAmXF09hDtBl0iw12K5Lu01m0%2bTCeQrb3QEANThZdlfczZ7i0W4SvB2NMDt%2bHciBJZQZbAWPQmXhXgBAGW9OVZrHQFwRvgA/sZFBaAbV/9mpOlaEbpbrHpNVHfN5f83A6%2blz9wMgGvNA1Av7TObj5W7mkCMxgQKXJxSQYZGis3bo3odn8//Ww/I/ag7L2PxeWpo6lRa0zJvYnYFGXcEgtYErnw4hL2HFC9itSZQKdHOjAoVAJvqBCtGpuidoBLa9o9EZKk0Hue%2bJyCIV3Pj4Jdv%2brEWGBUzX/8lARzURS7N0nV%2b3bXOVfPZP4KDXpDZchBcnOClpe6d4G6z%2bbJ0wGLZ6QoAOYySnkm8ClTaX4WYfOwZBtUr2kH1h2HQ8H1/vNY8CEoycxnj%2bMv3mlgiQ0BQm%2bzoV/2cTQ1qjBZmqCal%2bgocu2FLL6haEgi1n8SAY99wFfSWOEK1HkAN%2bNfrTcPgIR4GT1MesKLc%2bYrbmQgl2aHmmxEskZAp98YFNe5Mhcr5flD5ni9UvR%2bAIPRzguDGWSo1/TmsAN94MJBlhURPjPKAJdPbs%2b7wmW1DoGrfaLUjzNvdlARlQf3XnaHyXR%2bcrxVUrwxl2qeYxM1B0GgSJnInH%2b/FKlttQSQSoVJpd0LCzCMiFRbv9ZmakBZcWjJIpMJjmQo69o2AquXByLyRAVG9vK2qoq7My1oQUNo1yOS61%2bNgGpbEpA1U408aKMH0sZ4wB9PdJdPaM1B%2bWNqZp7WkAdv6QOVCI1QtCoDKea2gdm2Mzge1KAwjsIfHprimwg5Khd8JD98trYuNzSwVr790LXBUGXqXr60FyKnVfBSOzPvyRaFk6r60NzEFVztVX5igdE9/NwjWvRbHGh1Th0us2KFWN3WCx3XFwmekJ1zdhepejBq3ZygzgcqF/gi6CSoX%2bDFQnPPdIgIUZ0DdlpFQ3DWR1TaaYohlgtNDQr6UvoiJiS6y2c4o5bASCfJZNqhxhKy6yoLav8dzEyAASAtWhoCcPVqvBTfJ6MgkyAlW7R0FBz/vzVpmH7/YEZY91R7mPRoMm7BgUp9BJ1n9QTs2jwo4zk/%2bqDlH6FoOkxaztpjN6QBL8JiNOUAff/95rCGyx2LZTWag6QjxmIlU%2bfkw3hBhfkABoBVfEKnn4kBw7B2uLsq9OjZterI3vUrLvIS/ZWI9w5JMjRRdAEDNq/kogptBswCk6%2bz/10k9nPZvR%2bnbrQ5RB5zzlKSZDABMhl51AUBth/82sw9viTHvPBZqVnfgCyKVZAC0Fh46U/d2F5p7w6tJpBz56FcKMp1Zoa5Fjtd%2bHMzGZ/O8rwAQzuwaXNNjpRuktMeL06F%2bB%2b8F0Cv0Agv5NbucG2d3UEtsUWTkfmR9EgNgbXR0bzSDmiJNrqyEw7K7OsGNXaPZi4nGXYOckmc26Y8S0ptAczGdACLbVYieadw9CBp29gf5wChkSvM85Rkl4%2bHGP7tyf4NzsfnQ9Go/jdOZgHvC%2bQ5nwZkXB0B2GDFvh5JuZvlQaqxcMTAOilALsloHfYSsj1NeEHtiPvDjYVctYGmxGc69NgDNIB3Rj1SlzxaEnrnuCzNfUK4mu2OvxAXDxVlMc8hMKGxSaKv9NJYBx6RLTKF319o9PUfSr14WzEDWAtCwuZduPlDnE%2bCyXGEM3NgxBH6dGA8n7m8P559tJ1%2bZEyhfX2CSHctNkDch5HwryetFyUMaIlWnpLAXI1vj46cd1nSGaZ9fYaIVwwdtdkqCmjWRUIVeuHKhySn9pUGYHA1lTDKG6UipLkq08cdBcGNjVwTIysymCu%2blZ4gJRgucnp2bkcj4KN9AzajGcKsDG89r1kSIfqGiSVlqtti4cwDUf5uCPioBala1x3W2xuf8oWY5rdNfrlpkhGsLjA740ATFs/1PIsuPe3pIydLb4eHs1di9wcGhuVbrMaU5wjZAmW1ycbIFzj9HsZ8zr6o/MlG33sYzxL3DMGvrDfVfdYLaj6OY41KiBGOWjuI5BTz223xfBkDd52Y1%2b2vcPRCqlrXRMc8B8IeGrX2Y/Teidtz4rgfUYwgmUKpQU6oWGvl4DGAce4FRCMsoVy9GWubPqH5hALwzrtVG2lAa0EqKkzr7%2bUnQqxfTgu/i41%2bhV0cFNmqPcV9w7ql2ULPCXzDPBhQO0J%2blxUy6FKsZU07pqgzTwjSSp9/YcwhU/TfJ6AMGqLUFOVO6xpkP0IBmZOc1q8KgGqWrB1eZT4C1GMdfalQkD9fnm%2bRLrwbB6WkhjvN/iIbV3UOzkdWnMQKkexmkdhKkpkpviU2QE4OCwnKsluOHEu2QF2dvPDkxHAfykysXOJnXaYEiyYX%2bOmmpUhNRgpiqXRuNTq0L%2boEB3GnmZzidoogWtX/r6MwxlDnoqJwzrdFrk24%2bpGvvtAZi%2bOzjoXAss6N8qF8cYOiTS9ER/hhtuxYn%2bc0lhffzMFjZFlsMB8wLXurcmWnBuviYyQctiVDWK8FxfV4A2Y6MTMsK8zrm3C5Cq%2bpot8iUnDOaZ4JFWdx%2b8zM0O8C49G%2bgc1M0hI/vBsxmQFa0kyR/alIHrGWonrHJeTF2mUJfvsXqIAc/q0Moqf5Ufw8P2nrPt4uNaN1agu3bpYnKDusoyWtHhHXbhQlRpPqNQvqyVv2rNOqtI0XltfaOEqvfkMJDn2ZzlC5Moh8hDVEA0JpPS%2bZThYOOrvI9E1QMjMXU1y4XoRPPt/HC59u4uBPeBsMLyGGWj8FAb4QN6vbyWe3bs%2bP3PWPYb7P9IrudmdH26o0VZL8mB5vADfo3I62zJKco54zhks9L0xcsLGqMRDNpyyOCi9rfkjS%2biYRVu9IPzj4RipKnF7087aXWV6rJtJQSH5Q%2bvQ/0GR8Y6NwlFunjI53t1lV62bm73Pfie/77YTlbTCNOJFe9b2w5AC4awLw8S3Tc9Aww42v8aYjqSG%2bm7s2TxjzRZI9nRmISRy94rDKp/szQ0G%2bQp8f8DIZheAzycbdXMN1okr5%2b1I%2bdB3t6%2b2LM3CPrADDB7RIxT0lPk26utmSmMPpvAqBGKAx3v94dQQ5cJtU/npQIyzt2zEOWnkGvn4UUgecezW6VLZmNIfFUO3aOAHwJKxQAjPKdgECMVGNMb9w9WFcr6DWAJ07UW9DVGLcBAt7PHDWFvQvPt5ULOlkcxxOT4PPYmAqU9WwKcCh1m/JhRbN/U/pLEnzemm2e%2buVN/%2bfgAycANMntSISbTABcf8cH6tYlIgBZTTdN65xgjM4JttjnLGSRR%2ba%2bANe51N9xdmQ8rA%2bPOxbkbXgNWXnI12Doike/%2b279KY1BujbfnxnI/md9k3HQ6zWL2MAOHgpboAULtTZpRKdkAnnvXWKPkMtOcKJs2jyVCfUbu8P1eb4uTvTWWsDDLnOAcs0yf4B32sBXXSIrTJIXMf8w2j195WX0c2f37v5mjfCUACLZ3Wfn%2bq8BZOD6QmODomq3BsEZkq7NNcHpJ%2bPh0vuDoW4LVXxp6o5y9qFEhULUC0yDurVhPNF5Xw9iCzROJvu/%2bnqQ/HHfkFyD5PESSR6Z7kX7gMjJe7aE%2bahgjlLuLD928sG9PuZL7xnPOZY5QVD8gVoU0QLVhRp1C78%2bPwAODYiB3Agr1uV2qBiZDL9M6gFn/tQX/vVGf/aZzMUFA%2bHCW/3h3CupcGaGneX8VYu0ZiTMQZeGO9fB12KU65aY4MzrAZWdQj3fxqXf19rb0J0kH%2bXdQuaVvwtv8Y1T8M8g5i3XT/b9w7UFphsMhAXGBu5waHI9iWSJEyVPqJK1q/zg5IMdsKLE%2bsJsYY1J9nFUpPhAKiIBcpDYOf0WaYMT90YAqbIS14WHF/NoBcDXgYJxUJWHpiqTz5rc32sxLruPJczQOtLXSzLc7vdCjw82SLBUgFDLVWL1RN%2bHLswzXoVVmGgsZgty0MRaYn5ikdFRhU6oerk/2aN88aU2clmveDnfrPlsTvt5nCuxbrQdfr0ngiQtCyAIUEYoAAcjnIt%2bp7VQrkKM30AN2Dbdr7id0fA8LrlnRKCh1R1/Lrd1uvMTVNjUmjTBMPkun1HZz/v9cHGesU4Wk2pJRg2RsQavnxMM/5oeAkczOjYWJlkc%2bQk29kUZa7kr7x9Zv1H3P/UfgN9nlfMxjlcMiZHPPx9MEparlvs5alf4y9r5biw1weX5xrryV/1Pb3zcL3dKP%2b81uM5nkSZ4e0pW7We2d/QHq5yp4qV5Jg8xYNw9PbymvpHus/yzR3y3bnjMd%2b/XU333rp7YavvMId6fzO0VuHFLYuypnDibfMTcCSpsiVDKviSzOagXn%2b/mK1It0RtqSmCI8nAMSmN/GRQPv2MZexqLnOLJwec3TzEWLbzbZ9MTqd5/y0j2WujvzZimHPYP9FkQMk/f/fi38f83vxilqAHwmdQrirsQ%2bDbQkJnsSYkEIROP1BdpJNtqhomkOB%2bMT6b/b5ugV5ZGRW79LiH%2bN9qNRU2Wn8U3wOXiw2lqwxcLonPlY2q6h%2b4tx5I822Kt2xSVcG5%2b26j94/2C/%2bpLbSys5pDuFvOl0mdAplZSIqp%2bhJ832/npKf2n/0JMzvPGZSbDn0Z4%2b3SL8jB2CDQEh5gMoeGBhvYJ7Qwhie09yPKCxA7MZAJmgNH4DO3Gog1JtCeHtqXQS0nanJCD4CDV01ta%2bo3e1dHrqnfDw3fRS4u%2bRuM8lOhM0b3NwiR2qK%2b3lIJzRse1M7SzhBpM7QMMrYL8JE9re8Md8fZ/Uf2fcvhS84gAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}},Q8ce:function(t,e,s){},RnhZ:function(t,e,s){var n={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="RnhZ"},T0XE:function(t,e,s){"use strict";s("Q8ce")},U3Hi:function(t,e,s){},UQSp:function(t,e,s){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},W3K2:function(t,e,s){"use strict";var n={props:{title:String,color:{type:String,default:"blue"},variant:{type:String,default:"800"},data:Object}},a=s("KHd+"),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"rounded-md my-2 md:mx-2 px-20 py-2",class:"bg-"+t.color+"-"+t.variant},[s("p",{staticClass:"font-bold text-white mb-0"},[t._v(t._s(t.title))]),t.data?s("p",{staticClass:"text-sm font-light text-white m-0"},[t._v(t._s(t.data.version))]):t._e()])}),[],!1,null,null,null);e.a=i.exports},oHnZ:function(t,e,s){"use strict";var n={},a=(s("T0XE"),s("KHd+")),i=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:" content-center text-center my-8"},[e("div",{staticClass:"buttons-container flex justify-center flex-col flex-wrap xxl:flex-row"},[this._t("default")],2),this._t("footer")],2)}),[],!1,null,null,null);e.a=i.exports},qqmW:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/website/assets/static/forks_gunz-az.f102970.7ba4f33a10b643f437c3fd8dadda110a.png",size:{width:128,height:128},sizes:"(max-width: 128px) 100vw, 128px",srcset:["/website/assets/static/forks_gunz-az.f102970.7ba4f33a10b643f437c3fd8dadda110a.png 128w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-809bda08513a0ca63ddfed88b833cc69'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-809bda08513a0ca63ddfed88b833cc69)' width='128' height='128' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAZxUlEQVR42sVbB3gUVdeeTQIkO7MJJSCg9CpFiiAlkBAgjVQSELAA0lUQFBX4BASRUAIJhF5VmpRPforUIL0lIfTQpAgiCgIG0rO7c/5z7p2Znd0NSYDv%2b/99nvvMZHfm3Hve095zZyIIL/EJ61hFO9%2bzxMcgX412cbzmxx87e93fHzwcLkdN/Cc5dNGjQ90uWU9FFsCpcDOcirAUpETmPDgYkvL0VNhsuBA56fae4N71YbzBUc6T1HDX1bGt2PcAIJQ1lRH%2b3z6fvFsPF7GCnY/5oL4BYLBecZdbB0I65F7q/nH%2b6YiL1guRd%2bFyd4BbMQC/4vFCJMCpMBzh/JiG42IU/haN1/QA69kIkNOjfstKDU/JOBc56Mhafz%2bUqWl7/3Coa9/IWgIHYrDQqI7X/53ig6NrC0N71tb%2bTtvc2VU9H9W3QY3kjf6TMlLC0iznI5gycB6VPYPnqWEWHAVyapgZh1U%2bFS6DMuRUGvgd/60Ar5MBQYCLkUxGHt5/71DI%2bb0rOo5t1bCCtzrf/h/8XDgIC4Sdizv895UvK5UWFk5syc5julbDiccrVjd4Hv%2bx0%2bSHR7s9gGtoxUvdSWFZTiGFw62opKowyPR9ahj/PTWcjvw79AQcMvcKdq2VgYIy2N/kQSj7jwPBvyet6DiCJmXK3%2bmpGaBtkwpCdOeq/x3lG9f2QoWHsfPFX7fU3H3VrDZB9w4EX4aruEC0Oi7YYmUjVLYmhwIOfkwJk61cWeb6MgeDn6fqzwkIG1hWGijLcjLUgnLMNAekR8GvewKPTRrZtAX3gNWGEb3qMED%2bPafNf175pnXL4iSz2PmxtZ005U9s9I/NPR3OFkSLM58MtZJF4Qy67vkoGS4iKOnoEXQ8jzF%2bmgEEFgSEjgSC4gF2AFjVa5isCFUWl3ehuxX/NsONGPjnZGjuxrlthqnrmTK8MQPh5yX/wXCoVLYMKj%2bKnd/eF6wq73lld9BWuBnDkhhZHM7j4i7FyOazkfLjw0Fwa7sfnN/QHk6vawsXNvnAnR2dIONYMAfiEt53NpIpKmvJULE%2bfgfn%2bDUyXvsP3vM73puOMi5sbC/jUb6z0x8eHQk2s1C70wtObw1YpK43fmwLtsbxQ15/eeUldzcqbez87OYuTHDHZhUr/bYvKJksAKQ4xiopc22Lr7xxSj349oPyMCqiDAwNcIEB/gJ80EmAgXgcFugCo7t7QNywSrB9ViP4M6krB8PBA%2bBcJNxGBbfMaAgzB3vDZ1HuMBTvHdhZYPLwKKMsmb6fPsjbunVGQ0t2aghc3Ru8GZfH8kH8mOZsrc3qeQmVyr9EqRzVtx6v47PaMIHVKxjL3dkXlArXuoOanApSQmHJ6NdkUrSvrwD9/AR4v6MA73UQ4F0f%2b0Hf0W903ZCurpA07w1WJZgnEAjo7uu%2brgODuhjYNTSYLJ9CZPkIMpPVUZAHdhIKjq1sDlc4COwzok9dFg7fTXnzxZSf/CF3oU/eq6cSEtfrSUF74Xo0U97KY12%2bn9RFfk9RjgYB8UW0EWYOrQjLvqwOq8bXghVja0D8R5Vh7NsSWtCFKRbTSoBPI9zBkqYkwLQIeHKiGwwJdIXebZli0B/B/Lw7yhrCZa2ZUBu%2bG1cT5o6oAuP7eMLgrq4MhJ5vCfKATi4F8GsUnNsasIwnxo0akXoDc9hzfbykUoxpcUFLmKC0LV0Wwm89yO3NMqvdSjlDq22LawRje0iobG249JMPZKIi8gV078uYAC9jqFziiTAbveXaVl9YM7EOgmGCAwubM5dnHsBiPxIOLGoO/%2brlCSvH1oTzG9vD0%2bMhYD2vylJGenfIw3C5tbMTbJraAL7q7QU7ZjeW8X4LXOkOe1d2GMnWnvWewhMGPh8A04Y3Zse/j4W68qzq8y5japysaLVai1tcoDktXMn40Vq2NyMQNLCEaVbGLM7AsJxWzrXSx7gBk8V%2bYxWkOwNYL8t8shsHi%2ba7wKuM9UyEDAQ4cY4z4ZBxItQ8bVTTdrT2Iz/4MhDKIYcp0WfGCK78/DHNmOXfC6n52sMjIX9SrBIxsSMz%2bsyN52RJrNmshBEILNuT9VnG5yAonEC7XgNRVwKdZBFw6Yr1sUKo96nXKNfLVJFwLWYiTFd3B6Tg8kuRDp%2b/Xxe9YFDJAOgV%2bJoQ/OYreMNkBsClbV1XkkAmWFFev2ANhFTbwsmKj48Ew565TWHnbCXjX6DEGWp3fWH36wkSk4XgZaMHUWj8jNXjzu7OTJYKlGwnD72ScwszXI/BUOj4OemQezbKtUTKN6xh4hz7uw7MbRZOaO6TmYzk5rRmdU15/bBbMMbxnV3%2bWAqN8HYbgSW0oQGlWDyTW5MHqATISZbuOyYL3f/RoUAY/44X9EI5vdsJLIme/L6VAkKoHQBgY5BWarjuHw39079F5VdIl9mj3jD0CapWMi8AuM2sf2Fb103UoanWt4t7BwC0gWDFIhfog4v9KMTABlWH0VFGyML4ZfmhMOUdZREACNj8UVWhVxtFVrCBldmPgkvB3wgMeYcaftwb1L4inK8ZK9axdZ2%2bZjrde5t5QfUq0rMVf9XbXdia2I5Zf8qIxi0ykkNzWBJSkl9RC7cqDO7Glo6MtAwNFLBM8TEsyMBqdzJZjpJWcmjhcngfoLn%2bg/1dUVk3JmNIAJf1IYLwbnsBkuY3ZRXGonlUuA7YMMULIuDBwZA75USR1cHSLm5adXP6VPAqLayPewsvGM4AOL7BfzpRXcX6RSrPFk1KYdY%2bvrIV9OvoCIDAPIJimJLiswDQQol%2bR%2btf/qkD4xWkvAoAyXoHAfhxUh2WFFUAHPKJrDRUFgqFpCU%2bA0inc%2bv9n50LhvWsKwzrUUv90/jX4W7p1OQgANZnKW7nAcqi09a0gX6%2bzh5AAOyZ24RVhmIBoGSJZe3mNl/mTYMLAeCnqfXtPMDRQFoYYAhjIt%2bhEbzBDZ8dAvO%2b4hw6blyzDtlpSkLRk54iPEAlRY8PBsLwbm4wSFnsMARiCI7%2bCMp1VIiaJmtK8TmA6nwOAjGmh5F5wYcIIoFKYFJOObO%2b7TPDSWmweNLGpHz/UMjjT99vwDLg7sU%2bhjpVC8kDFanre/gOc5GrW7pOYP19qsb6irS%2brMUu94Kt0xtCz9acFg/ozGnvcqSy9Jus1v4ikimdWxSPOri4GfTBCtC/E2uEmNwEpNWkmBr3Th6QykBQw8BKHGbZ5Ja9SLctiW1dCrX%2bx73raAni6q6ALVRHZd7tQYmGPglhAtsy83Xs5Dzg00h3WI0cPl9hgto1qeElqwTIKfYtaIaeIMKocHdYPqY6ZCI91leTZ1YmAoC24pAeH13rN41trCaHuXp5FMIKDyzlbW%2bn2uWMv/8SdBnSWYlRtrJK4AGOi8Fkl4VWJC7PKG1aeJELtsmy8QFNLsrKweOTY4qsYpTXA6CWw0s7Avaqu8n%2bLb2dATi/3p/V/vVTW9fIOR6apyM/fFHFeIBjJraqdBjzgjW5EIBSn1NWmiJLodT60CvcA7TyzDzgt6Sg86ieyDpcZfvM7pO0zIfFxrzxzdtRiwrKBmVx8a8PATt6rHflU2FO1Pm5ANX1HI4ynilL8QArVTGsZncOBP/u26RSZcZw/9XCGYCdSzgACya1DLHwbWwZSpAAn5UHVMVtQKhMLfw55OmUTHUGpVgQU8M0WnzvSMiDUX0bVCcdN81p6wzAnmXtGQArYt/sIbMMq3V%2b9gsqriKcct7gtLeWrvUtQmmn35/1fTEAWPkzBuvf2FDNHteMbRnvXu7jXAn2KiHwXWyrt%2b0AKKRbK3IRqQ7eoOwGa91bavEhUFgYPVc4OgNgeYzn8chvmLFXdHB5ZggsnNwy1DEEbCO0BKVHV%2bdRzsVNHeDh/kDG7LSt7iIUc/rdcdM0NaxkQKTqQgB5wL2jIY/GDn6dUd3N89o5A7BbASBxfHNflgQJAHUX5wyWnrN8FGUROy6PLO3w0haMxFAneONnP4CrPfgmhgKErM/kjnIYgDjfafSgs7TLFGkPQkmSKDeglXazfj8Y8kdUxyrsSe6KyS2dc0DaWj/25eopb9bLOxFqZltOpyJk6/EgyF1bG3J/qA7m3Ug/z0TZWUF2TFYqAFdiYPvsxrRhyRjcsMBScGxlK2VLLIpda1F2h9Tsbmd1VLhga3PIWVYF8n6sB9ZjAWzuEoeDkjR1ZfASPc9gD3P71nMGIGU1B%2bDz6LqmPw8E32CPoM50t%2batqys/neYKmbPc4enMUpC36XVtIXIh7ivrsrYZucTCT19l7eugLnynN27YK3Dh3z7A8gxtl1GOoCdJ5GmnIxTlMVwOdYLMuNI4ykDmTDzONYHlYCc7EIpKikq1kRmbxYbo6s6AQ6quIe1fcSZC44fanqRc2RW4m3oB%2bXR3Sx5an5TPSvSErDkSW0zBztbcPVPDnJOi3kKnOS3eMKUe2%2bKmQZ0i9Qexg7zZA5KLG33gr6QAyDoaAtm0A8w2O2PAvL8jZMYbIQsVp7lpDdmLKoCcHGofJkX3J5wKX42G5E3%2bcxkTfNDHtUZlYyHbYbU86eEna4au7wiYQQ8/UElzwY7WMgMAlWcAzPaA7MUVtXquMUXF6k5bZLQgpK/p2NtPeKcse8ihPhyh48DOBtY9fhHtwUbsAG8EpCsDL2tBeTYfmxuBeIoeQWHBc1FocRXJ1gxhyK2d3ortCWyf1/bZewLrlSdAq%2bLeCs47E84Sj%2bWwv5yZIMqZpHyCqIDgDuZfOmgLKbKUpYZpXWI%2bKnV4WUuYNtAbhnR1Y6FBvb36tIe8I7SJgN0k9vq/9oKsldVQ6TI68N0hZ0VVh6bq2Y2QrLxn8PhoaPZXwxo1YNVukY%2bhfnWTUEgV8BUGxdRk55UrGis8Ot7tFlnOeizQii6IIBhtC8FF5W9uii1pNNvpdbSEE11VE6PSJFFZ%2bm2nPyQlNoUVX9aAqWj1ie94wdieRpjctzzc3eWPXtMTcjH5UR5gYaAaYJ4XyMcD7UF4VhVI4e5/ZXvXo%2br7BAvGvCE0edVN8GtQSmhRo5QNgPKeZYSNM2lLbAK78NTmLkvgVk%2bwHAkwsxhUrJ81x8Sskru6li0PFBaP%2bjLn0NiwkKEnwOlKRUC%2bUIC/5WAOsJxSHomj7DwGQBkOgOp9aAjLfl/0zigocoOWd7HsCfKx1X5fkE53dge4juvmYUidYHJ5PMfkcmy8yaVmZdEGQt1qJuHytgAWBksnNu%2bacxYXedAPXc8oZ%2blCgAHwfXVbNVABUEuYfS12IFLKAxIEwZqGtT0tysYe05QqQCGDCuasfBWTXxnIcgy/pPaFV4NUhx6AdqiOdHsyJLomI0CQUdXFeQe8rK0kgqWt0Lqutl3kevNQxB7Y1RTLX2kLWYEvQvWAmnYeoCc0dgqTMnpChWHDFo%2beYDngh9ne1/4%2buh5/tx7pwqxt8zwl/LAymH/xtS/FTvOGkXwz3IiG9J8D59ir7F52aX%2bp7fqhxn5Te0mtbDtCAbY3rWBbZRYcm/9VcySsLEeTWjQrEBAYl/n/8wYqE8NzQCFUmRKoyh4BLW09EYSW88Hc0YSRqmzK8KgMycpdVQMViLB5ESqX8301bn0NeH0OCNJygONg3xN7TI8pyEiJgK/61/5oXoyhzb7PTRMufSPtuBUrXXswW5JhqQkeJphg00emEUJMazUrmgQ44sXKxMJ%2b5fwfxol38%2beKgBXAqsUg1WY8tx7pyidLUTYrGGXtrnhFOOaOLlCw6y3I29iQZW5aOJU0RmpQscx4D5ti6FEEDlFeAiJ3rRL7itIq8ETEctfU5rRYecxmAzqamCtYMUGa97YH85am8GBRVbjxjShnzzMBLJYAluJYJEHuXJEqW4Flvgh3p5tkRXmDAMleLEbWDfGK%2bCfelA0LaQGo/BxR54IeULC9JZKVnrwMksLJ3dCdO0E%2bfp%2b7tg5kL6nEryVFaZDiWhUx8aSmG5kzSuGi22F16IHeUYNn/jk88Wkg4bxEhKw4F12nhh%2bFinknAr2hAeQsr8JJE%2bYJCtPseA85fx7dL2IOEy2oS8HTeNH8hI%2bCvEQRMnAe7vbfl2WWXzO4bOjTBJPZjDc%2bTZBU15c1EoTKWU8Eg3lfB8jDUpjj4M6Mus72cIhdncKKFxG5YteTVVEGuW3ODzXh6Qw3Letn6gGgsNvSjPUERIaoP8le7M2voTlJ1ix3Kte0VjlrrkTcRX4aL1mfJojmTAQgBw1pnq94wkoMgblS/tZPpE%2bFPaO55SfGeDV/FG/KsM5nyps15VUAVKXIarN07swUluyUdExcXGF%2bLYUDZfj8fzcC8552zH3Jgk%2bnu9nXfPV%2bOlfzjxpGNNDSango9ynrtHmudQEqu0wCGV0/Y45kfjhbun9usrQxeZw0cX4/qbUuO3q735zmeZLQQdQU5ZlAexZIiMcbNSD0CvOJdVajxZLXLCiHSa06I0%2bWfT7Mg1jsUmeJoVSwq61CeKRClc/Un%2buMoIGsfs%2bOkpyNLi9j%2bP4TL8m3Y6X0y5Ol9ecmmEZM7Sm2qV%2b1tN37MpBSgZfG7Z9IH8ASlnEtTGlmdZFbVp%2bF9ZbVTVyY1fM2NMSurjPIJ4O5spSsKFmqLE4pe1mLKrIYt5/DXq7d3I7hYTOAjAkOE5sEqweJn81/T2zWun5Zo3PtryTAgXKuu0ebbLzg8hRxL7kKJgmLXujzjkxdtVDzBd/MCAXH3SUChTI2uTLlCU3JQgAtfl4tXK0F6PZpk6RvbQq/YshK9HIdHWx0qVnBVXirBn33uVDWqOgf1LhU5Yx46Un%2bPJvbv8giVOC0soUJjaoCz9hKz6DuFFMZo9jf1EgpeUrie1HgFa9RvEDOxxBY%2bYGxE%2bl36EvJVXmFUGhRs5CnQh939mj8ZI6URWUhk7v/iy1EHyqMMCFjXGcDwOn1GAwJqut2dPcFgdclPzkHAchKlGBJX6Mve%2bgzyeRS9Lv/AR5NMUNm6wHIetkQUGKUNy6R9nuAaggwAOqAtt/wEgCwXDWHERwLkZ7LU6Wf6f8WSL%2bRAcaiX4np0bJMdRSQmZ8oauWDC3wxD1CaFjl/R2siLRZICS2gvTn1xQVbr87Kn6yGwMsAr4BgtWD834o13ahUxcSeAiW8I7mU5LUgjz9miBepdCBpsPIcIL3MYlgOyV7kbYVU5O03kTVejlL3/OiNcgvmADOySEve1uZWZG2ywvnll3J/pXo9Rep%2bZqJpJk%2bA9YWYN0vwvnDaBPE7WGGiKmB%2b8SSkskbOIiGxDJyLe3V/2raQaTf3BJzMOhGaxf5dhsCg9w%2buxQAc74yeY2SsjXkeU%2bKFYp%2b36koI3I2T/njN2509Bk7obTQUC8Cekcb%2bdGOWjgc8/0JErR4TGYHvPeHoqDIxyhSlE8Y1qbMmrtW7lzb7T7%2bxOyDpdlLg5fsHgu8jD5CzqDmyVR/5%2bUNQY6tmWIFhME1MU//P6Itgd0MJosDF8%2b4M6Vfqlp5yEGwLSSihBzA3pFqMHBzj8eI34neCUNED4EihC/AQhPJtI3zLJ48vN4nmzeS9h0LCSg6CzgOsOcgm/4oT/1o3yBhAczxKMBWfA7BHZkVyx3BxoHURq8dm1RUVXlDCLMxzCHWR16dIvyKo5UhubIzosiG%2bnXD0hw6GPUvbu2QcCXF1eF2t9O8zpfPkgWoIag1YQsnLH3pdAeD6Nw0xsk0QOFSuZG%2bIjgn0wGTB3xFO/1paR4yQ%2buVMrbngu8JOC7JRUVlLfqwDQzdcIkHSaOMY3mmaXHaO8hSqV/bQ5gx4y1uY/Vljw66vq7HNlwXvuvtloAeY5zEQC3Skys4b9EdSWv1d8RwrdXt/zpCujvT3YDs8J78UDe3rluBF6flKopBKu0vXvxUPwXKeD5RwUJsi1hkqhEXJE5x%2bZvKBPbeYz2rxDybYOdL4CcnMX%2bzshibR3cbN1/FudMdwjz6Z2KIqYYggKBVJV1nUHKED3Erlj2Ifgc%2blNhfDbxevAP2EtHFi8crHxXCisHOEqC5UTJ%2bMnrCEt5GKogVcQUldFB3JUgW5iSYwL6BdFxPrsy14z/VYaW1Ft1Jsq2lVv8KzsLdXGUHP19lDmVixcWYihsMyExQwas5ALci0gcyUVYCW85HxFeh6/Jz5UvqdWRLb37/2bck4APvkz/fkzwdGaiAI/zNc/ODeTOlidiL11HxbichS7lwjFCRiblsisl47a7bHk4wZpe4%2bnOWxBlZ59sB7/LR/bhxZ%2bLu5qgd0b6EDYYVJiVkX14xE05fZ86U75A00NxEcpiyCwra3sGTTuvIXSbez50p/PZojxZqXm6K2jTCxCe/FceVTxoglA6BOJTcB1vO9wYS33Q0A9dTqIO4ZJQZZFprGPpgpbn44y/N%2b1rwKj7IWVE7HFnZmVmKFCTmr2jYqpOU0jOzCLf94tmeRc8%2bKtoFwM1bUElf/aLHU37OkgRgWc/6cLl74O058cH%2bGePdBnLQeG7dJVyaL4d9PNLrB/Mp2HvYogSuPwD3//wp9GcwTVftaZQTLcufYPTy%2bWrn8DX7l808vMNorDAL8UxMnldz%2bmiW5uJZ2EcqKXsLi991LPHfKV9xaJ8aJBqzldnMP8XU37htZptzaAcZC/1EYfvF0yV4ouV2azJW%2bEfsCyus/77flVvH2dBW2fGh0QXdzc3zT%2bslowTVrQRW37B/5K3Y561jzJZTztG8%2bHP8u7rN7lOq2bsLtqaIrbPd0tQe7ioBx73Z%2bgtHFk29lCqsGePx3/mX2p2GScOYrHsc/f2wUbk2rYMhZWsuQvaq1kHfgM/Z97uZwnbKidlTHi35W9efAxffwEFLGisL1b4yG9ImiYeuHXCYc8RQSextfWsf/BTxju0SJIHN1AAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}}}]);