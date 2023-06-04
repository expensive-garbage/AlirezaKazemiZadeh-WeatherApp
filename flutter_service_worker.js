'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "70e96061cf4bffe50cbfa633852c5be2",
"/": "70e96061cf4bffe50cbfa633852c5be2",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"version.json": "e12d16673f638ed170a5f83edf27c036",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "181521964e8b82f5d43fb61a6c6d4ec5",
"assets/assets/fonts/Vazir.ttf": "4a3887b6bfe4ed0fc41834d6e56b71ae",
"assets/assets/fonts/Sahel.ttf": "af9c9e017b90773e83fae9c67cc46605",
"assets/assets/fonts/Faraz.ttf": "60639270dde9eab59091b8c9d9eeb827",
"assets/assets/images/shiraz.png": "cf752434c1c870accc0a6131d1bd39bd",
"assets/assets/images/lorestan3.png": "1a358214e159fac35ed4f0667ee95ad1",
"assets/assets/images/alborz.png": "d30d4ee45b9d18dc3418c1087974d292",
"assets/assets/images/Isfahan2.png": "392dd828507615e069047b9258da32c0",
"assets/assets/images/tehran3.png": "fb6c6ef6e26743335ea3ff674ac8497c",
"assets/assets/images/tehran2.png": "f0b428fbb1126164672dfb2669da6991",
"assets/assets/images/kohkiloie2.png": "10388579556147b4f2326e6502751938",
"assets/assets/images/qazvin.png": "417b233fdd33b714dd5959fc6ff69bfa",
"assets/assets/images/tehran.png": "52deb9ad46b9e079fd9739780f43eace",
"assets/assets/images/qazvin2.png": "1a687540612c1e41a05b5f7e74c44dff",
"assets/assets/images/khorasanjonobi2.png": "588ea73f1ee3e3102c60239986f57595",
"assets/assets/images/ardabil.png": "a00a15de86e4ae544b3cda3072fe41e6",
"assets/assets/images/ilam3.png": "29f1e4ba43856cd74bca297750ff20a1",
"assets/assets/images/gilan3.png": "954adc0f5f4138ae7a640cb9f07ffd02",
"assets/assets/images/Isfahan.png": "b681dbb724fb2a82aa3bf31346abd354",
"assets/assets/images/hormozgan.png": "6ef0be636d42ef3d2e706491783b72a9",
"assets/assets/images/mashhad.png": "023bad162c49429187bc5e568d4c21e9",
"assets/assets/images/mazandaran.png": "a1844fd70eae5b6abe599fe2cffd23d6",
"assets/assets/images/hamedan2.png": "d3ad9f1cc622161d141a37e349db9c17",
"assets/assets/images/facebook.png": "494cb5a2f0c105a4fccf77c068578f52",
"assets/assets/images/gilan2.png": "204bb38e56237395c7814d434b7fa5a8",
"assets/assets/images/busherhr3.png": "6199a44334d629f755a602596070ff83",
"assets/assets/images/ilam.png": "affd4ce0b610238ec997ebfcc2f87d9e",
"assets/assets/images/zanjan3.png": "c091988a5c6ff41c9ca79c818ad307b4",
"assets/assets/images/ardabil2.png": "fff94cde0823f19376fe4376668c1511",
"assets/assets/images/qazvin3.png": "8d34a5386e031b81af5b37e547976483",
"assets/assets/images/lorestan2.png": "89041044263647f2acfe2757c25fe00f",
"assets/assets/images/semnan2.png": "04dfa18ef5b7a77fdb1856eb8ec7a165",
"assets/assets/images/markazi3.png": "3ac5c6869e586f622b4d69d180b57564",
"assets/assets/images/hormozgan3.png": "ede9a5054665c38be20381ef60026728",
"assets/assets/images/kohkiloie3.png": "c59b70f221be31b8c4777fd4fa70f9e2",
"assets/assets/images/yazd.png": "39ba29c3b47d40cdab402028c2b4f537",
"assets/assets/images/yazd3.png": "fe135e2765bfd5370a8041b2db0ba800",
"assets/assets/images/qom2.png": "caab12f22a9f5cfac82d55bce6e3a7bc",
"assets/assets/images/mashhad3.png": "57505d241322f894d17af2108fe28c37",
"assets/assets/images/mashhad2.png": "803b8be4e95b75c6231f289f23ef44ba",
"assets/assets/images/gilan.png": "45100a7d9615c62b0c1d0a21a34bc664",
"assets/assets/images/khorasanjonobi.png": "de4b0a8e8eb651cbc7fb32b57a9b0d48",
"assets/assets/images/khozestan2.png": "c91dabea97c3b9e0fa97f443ff681b13",
"assets/assets/images/semnan3.png": "6825d3aad454a9d2f343181e66a5da58",
"assets/assets/images/kordestan.png": "2821d343c13b6c1b5b2731eaf218a492",
"assets/assets/images/markazi.png": "2442631ea6953d00c83085d285333cc5",
"assets/assets/images/lorestan.png": "b8af3545abad388ab9fe390f1311569c",
"assets/assets/images/tabriz2.png": "8ad8eb1d430063cbd6dc78a7f5e39f5c",
"assets/assets/images/ardabil3.png": "75caffc1f5c3002c021e53ce3dde02b1",
"assets/assets/images/alborz3.png": "b3af6d613c8a81723e580bc2a48d048d",
"assets/assets/images/charmahal2.png": "4a4bb486cc4203e23ff16edb886b80ef",
"assets/assets/images/zanjan2.png": "3be789bef7e3d5d53926e3b078d75b1c",
"assets/assets/images/charmahal3.png": "29a2620dfed904c148015f1258157cbd",
"assets/assets/images/sistan.png": "727b7b7cffbfb51c197559a5bb5a5a5d",
"assets/assets/images/kordestan2.png": "89386698e2a1a81733f1b5952a8f7a67",
"assets/assets/images/qom.png": "e094b880aa208d39b0e9b8c4b4f7a491",
"assets/assets/images/golestan.png": "86e6db2f55a23ea079854cef13a6db5b",
"assets/assets/images/golestan3.png": "ecbe17afb02f42fdeb36e3d1c17ffa6e",
"assets/assets/images/qom3.png": "b230bfcd1a9cd2c8d5537ae9d90d1801",
"assets/assets/images/busherhr2.png": "515d27064a793a0cf079de0c41d5e2da",
"assets/assets/images/khorasanshomali3.png": "7a19e976eecb0f2a57112088430bee3a",
"assets/assets/images/alborz2.png": "0b2640bdce1fb081871eae5782ee5ef1",
"assets/assets/images/charmahal.png": "a4b86ab14c107dcf96710ab1200b12d1",
"assets/assets/images/khozestan.png": "32aae862838e8625902b107d8d3da443",
"assets/assets/images/hamedan.png": "69f51030387cf19ed090cc8c16d6f101",
"assets/assets/images/zanjan.png": "ae433303013cfa509e40245b58ab27e3",
"assets/assets/images/tabriz.png": "753809f89713ec37767c5ca6da8e2e42",
"assets/assets/images/shiraz2.png": "26c618c1a03f75dac8cc719f26076994",
"assets/assets/images/app_icon.png": "3846ba65aa5ac1c3134d62227795e0b1",
"assets/assets/images/khozestan3.png": "c2e8eb18124cb800d6c4414d82fd734c",
"assets/assets/images/khorasanshomali.png": "083e2b72f3d8e182127cf3fd9f573d34",
"assets/assets/images/tabriz3.png": "0d14541bbaa40afbd4f5000191cd0e4c",
"assets/assets/images/hormozgan2.png": "60bcec1ef883e0c7d0228c604fa1071a",
"assets/assets/images/khorasanjonobi3.png": "e5cffe6701d1d10cede05676e6ef3366",
"assets/assets/images/khorasanshomali2.png": "a9b81602984231f0ad3c34df24265951",
"assets/assets/images/busherhr.png": "25ea5d950091c04305389f9ff266e071",
"assets/assets/images/google.png": "77987f121f14f363a076e833768b4d03",
"assets/assets/images/sistan3.png": "d68057058845cfa9a9b32a65dd7385bb",
"assets/assets/images/mazandaran3.png": "d5dabc64e2617baf7a90fbe0377d0cb3",
"assets/assets/images/yazd2.png": "56e8bbdcf7667b8ef63eb735d74ba586",
"assets/assets/images/Uromia.png": "e0a753cdfc24fdcef22a16a27f3d56af",
"assets/assets/images/kordestan3.png": "512b05b1aa8b8db27ec1bd0851c6b424",
"assets/assets/images/sistan2.png": "bf100f8305f86b6320534bc6146b8c6f",
"assets/assets/images/hamedan3.png": "fa79b61cbda09228341f4a9c8eeaeaee",
"assets/assets/images/markazi2.png": "efc148b3ef7cb1501c756bf019a2e06a",
"assets/assets/images/kohkiloie.png": "39d8e3438fa16147362bc124491d15ad",
"assets/assets/images/ilam2.png": "93ae460d3d26abe560284811b910c640",
"assets/assets/images/shiraz3.png": "5aa1c6a977692cfd4875ac5b3375dfac",
"assets/assets/images/Uromia2.png": "f2898a7a3b61e5943bd207f7ba714d0c",
"assets/assets/images/semnan.png": "57fb6a8dd53b653b80b846c1c53d6f8b",
"assets/assets/images/Isfahan3.png": "65c5fb70eaaa233239931a2e018af5b0",
"assets/assets/images/Uromia3.png": "6784b16430a5ff2424ca1fe7356471d7",
"assets/assets/images/mazandaran2.png": "313120a41faebf8a905c0c6a03670383",
"assets/assets/images/golestan2.png": "fd31dce1f5854bfa7bbe2664d779cac8",
"assets/assets/animation/defualt.json": "edcbcfc02d626a3ae8f2425dab383007",
"assets/assets/animation/drizzle.json": "5860f4eb322bdaf97555e48237152107",
"assets/assets/animation/dust.json": "3c140c2213f46a14bea99c09e59838a7",
"assets/assets/animation/squall.json": "e4f8bcf75c11ed6c2ca15b27f4607e6c",
"assets/assets/animation/clear.json": "aa9dfa7abf78a80ddfae21299cf1d3d5",
"assets/assets/animation/tornado.json": "8991b0a1f0fdae1a9bd134873d121895",
"assets/assets/animation/snowscreen.json": "2eec8864f097f4b4416af7d47ae74d9e",
"assets/assets/animation/splash_screen.json": "93cc8a057a539413f28b64337958aff1",
"assets/assets/animation/thunderstorm.json": "dab3503157e89302a911a36da405e144",
"assets/assets/animation/cloud.json": "4248c1f15b7f255e8ab60a0bf5a57f36",
"assets/assets/animation/splash_screen2.json": "ec9b43a6f22cfd2bca14733316a5acd8",
"assets/assets/animation/splash_screen1.json": "09d3e8ef9e76c74b01f1f53b22177db6",
"assets/assets/animation/splash_screen0.json": "e471ec8f1e0c34eb4c62cf275f83d7d0",
"assets/assets/animation/snow.json": "7f24b997f38e2cc977fb6a8f1eb516c9",
"assets/assets/animation/rain.json": "eb5fb3e260416f49d49cd84a7d243c8a",
"assets/assets/animation/mist.json": "25d5b2d5537ad15b8870ae8ed58b2106",
"assets/assets/animation/fog.json": "f73f1462d693e55555afb92f2cb48db4",
"assets/assets/animation/splash_screen3.json": "6719f99bbbc0284545bd660ee48acb76",
"assets/FontManifest.json": "72c0b3577812489f904b9f430de07c8c",
"assets/AssetManifest.json": "569e741e443850c195a3d58058b2d549",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"main.dart.js": "8a3d1f274ce274ff5e99be16252aded5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "c088225726a893ae3be696bca8c6092e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
