var APP_DATA = {
  "scenes": [
    {
      "id": "0-main",
      "name": "main",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -2.7363631202890666,
        "pitch": 0.31378860823854815,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.967868206769044,
          "pitch": 0.30689825813110616,
          "rotation": 0,
          "target": "1-beach"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8480427625669122,
          "pitch": -0.02019677720537949,
          "title": "Hill",
          "text": "Comfortable to be used as a photo area"
        }
      ]
    },
    {
      "id": "1-beach",
      "name": "beach",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9024947609859737,
          "pitch": 0.08680857513259888,
          "rotation": 0,
          "target": "0-main"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Marzipano",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
