module.exports = {
  "title": "The Realm of AI",
  "description": "Adaptive and Interactive learning management system for Applied Artificial Intelligence",
  // "dest": "public",
  "base": "/",
  "subSidebar": 'auto',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "noFoundPageByTencent": false,
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Resources",
        "icon": "reco-message",
        "items": [
          {
            "text": "Computer Vision",
            "link": "/resources/computer_vision/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Aravindkumar-Rajendran/TheRealmofAI",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      '/resources/computer_vision/': [
        {
          title: 'Maths',
          collapsable: false,
          children: [
            'maths/',
            'maths/probability_n_statistics',
            'maths/linear_algebra',
            'maths/calculus'
          ]
        }
      ]
    },
    "type": "blog",
    // "blogConfig": {
    //   "category": {
    //     "location": 2,
    //     "text": "Category"
    //   },
    //   "tag": {
    //     "location": 3,
    //     "text": "Tag"
    //   }
    // },
    // "friendLink": [
    //     {
    //       "title": "Timeline",
    //       "link": "/timeline/"
    //     }
    //   ],
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    // "logo": "/logo.png",
    // "author": "Content",
    // "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
    }
}
