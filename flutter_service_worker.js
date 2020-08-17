'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assests/fonts/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assests/icons/fb.png": "288bdf5ceb18a262ac25e342044382b4",
"assets/assests/icons/github.png": "0e4a882c6e48dc9f9725ec45eb355a38",
"assets/assests/icons/github_a.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assests/icons/gmail.png": "0555ec3ecdf656bd639aac050fc00bd9",
"assets/assests/icons/instagram.png": "2e9d982113e8a8033c6c284eecd77eff",
"assets/assests/icons/linkedin.png": "0f5d6ae131e9a081ee419c6866e783dc",
"assets/assests/icons/reddit.png": "5c894fccd60585e3f32076d254ac0a0c",
"assets/assests/icons/twitter.png": "757318353436942155bad06f9c3b75d5",
"assets/assests/images/awards/gtcmun.png": "f4157535e78480f4da0987eeb86915fc",
"assets/assests/images/awards/iitj.png": "98e46b3bdef63acc9dd197f3c2c365a8",
"assets/assests/images/awards/iitj_light.png": "1ffc9a3412c4f22cdbbe64dd639c5268",
"assets/assests/images/awards/jecrcmun.png": "fe658d4ccd4786b298adf63bdd6e2e84",
"assets/assests/images/awards/jecrcmun_light.png": "ae4dc485d5162791c3e58fceb19b78bf",
"assets/assests/images/awards/jmag.png": "288aa5687ddf172116d511660442a082",
"assets/assests/images/awards/mbillion.png": "f94c4fd335e5e601d8108900dcdb4430",
"assets/assests/images/awards/rtu.png": "5350f4ee7bb1806f0553eb704713a8ce",
"assets/assests/images/awards/rtu_light.png": "d540ee2ac16a1a847012e944ec41509b",
"assets/assests/images/projects/alok.png": "f66123ee3aafcc9946602ba6df2b1e26",
"assets/assests/images/projects/binge.png": "41b9ce160808e1a287eae2508291cb63",
"assets/assests/images/projects/field_work.png": "a80f0060f0e3303dbc1f685f8acf759e",
"assets/assests/images/projects/jrf_icon_hcl_blue.png": "ed24e1b04743f12acc0c769919db449a",
"assets/assests/images/projects/jrf__main.png": "93f151751956dccab3409a6d95f0f77a",
"assets/assests/images/projects/jrlive.png": "381455f078ec9ea445e69e0315281ebb",
"assets/assests/images/projects/mirzapur.png": "03290178452f572d3ce34c2530c0b0fd",
"assets/assests/images/projects/portfolio.png": "c9c7d351771e2c7561dec2bc6cd2b6bc",
"assets/assests/images/projects/purchase_dark_icon_2.png": "2280220fa84972f5a05264d32f9730da",
"assets/assests/images/projects/soochna.png": "cbc95025b8d0c73a9dbcb60b35a52258",
"assets/assests/images/projects/store.png": "e852446019d052dbce525574f8a4eb95",
"assets/assests/images/projects/survey.png": "14e7378b759318a8702d47824f3b82ec",
"assets/assests/images/projects/taanabaana.png": "3737ea1baa0d928ab6860e4c8d30c14a",
"assets/assests/images/sarabjot.JPG": "6bdb34d9b987b1e6bb841dda848050aa",
"assets/AssetManifest.json": "49b3189894f949f0d53a56ea66a1ed5b",
"assets/FontManifest.json": "7e5650735ade994d3682d550bd1c5711",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "6e9cd37f473a3ddff4736c03f1b3df23",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "7c9aab307fc644e61dcdce90feba9a49",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "450d8562c25db506d85fa6ed244f8d79",
"/": "450d8562c25db506d85fa6ed244f8d79",
"main.dart.js": "d8caaf42830c3858a251e7bd5b732a42",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
