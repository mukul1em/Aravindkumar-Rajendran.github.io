module.exports = {
  "title": "The Realm of AI",
  "description": "Adaptive and Interactive website for learning Applied Artificial Intelligence",
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
        },
        {
          title: 'CS Fundamentals',
          collapsable: false,
          children: [
            'cs_fundamentals/',
            'cs_fundamentals/unix_cmds',
            'cs_fundamentals/chip_arch',
            'cs_fundamentals/networking',
            'cs_fundamentals/database',
            'cs_fundamentals/machine_learning',
            'cs_fundamentals/neural_networks'
          ]
        },
        {
          title: 'Programming',
          collapsable: false,
          children: [
            'programming/',
            'programming/python',
            'programming/javascript'
          ]
        },
        {
          title: 'Libraries',
          collapsable: false,
          children: [
            'libraries/',
            'libraries/opencv',
            'libraries/pillow',
            'libraries/numpy',
            'libraries/pandas',
            'libraries/tensorflow',
            'libraries/pytorch'
          ]
        },
        {
          title: 'Computer Vision using Deep learning',
          collapsable: false,
          children: [
            'deep_learning/cv_basics'
          ]
        },
        {
          title: 'Image AI',
          collapsable: false,
          children: [
            'deep_learning/image_ai/',
            'deep_learning/image_ai/convolutions',
            'deep_learning/image_ai/image_classifcation',
            'deep_learning/image_ai/object_detection',
            'deep_learning/image_ai/object_tracking',
            'deep_learning/image_ai/image_captioning',
            'deep_learning/image_ai/image_qa',
          ]
        },
        {
          title: 'Video AI',
          collapsable: false,
          children: [
            'deep_learning/video_ai/',
            'deep_learning/video_ai/action_recognition',
            'deep_learning/video_ai/video_captioning'
          ]
        },
        {
          title: 'Backend',
          collapsable: false,
          children: [
            'backend/',
            'backend/restful',
            'backend/fast_api',
            'backend/flask',
            'backend/django'
          ]
        },
        {
          title: 'Deployment',
          collapsable: false,
          children: [
            'deployment/',
            'deployment/cpu/intel_vino',
            'deployment/gpu/tf_extended',
            'deployment/gpu/nvidia_docker',
            'deployment/mobile/tf_lite',
            'deployment/dsp/mediapipe'
          ]
        },
        {
          title: 'Experiment Tracking',
          collapsable: false,
          children: [
            'experiments/',
            'experiments/ml_flow',
            'experiments/dvc'
          ]
        },
        {
          title: 'Keep learning',
          collapsable: false,
          children: [
            'keep_learning/'
          ]
        },
      ]
    },
    "type": "blog",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
    }
}
