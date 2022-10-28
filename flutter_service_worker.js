'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ae6881a7ce77dfc8aecd2cf74eb7d89e",
"assets/assets/images/atmcard.png": "4c1719012c0fce981e5c5220a7f47406",
"assets/assets/images/banner.png": "97cf0d2799883f6a8ef5c6ba7ee44980",
"assets/assets/images/cat1.png": "be2ade9e108693d5d8f00713e4744b6f",
"assets/assets/images/cat2.png": "3ba80be1290b4c5fce7c0b06d20d7950",
"assets/assets/images/cat3.png": "7c57aa5bcefe0b9bbcaa70d31401a790",
"assets/assets/images/cat4.png": "9fa86cf593e41407f2ae2b79afd4ec28",
"assets/assets/images/cat5.png": "22603ac28ac8ee2996b09fb52434bb0e",
"assets/assets/images/cat6.png": "7c9d401767dc9334198312241b334f6e",
"assets/assets/images/Chat.png": "056d143248b00478830951d50a8617f7",
"assets/assets/images/chicken1.png": "4c18a9b833c7c13fd13b7a5ce6eef104",
"assets/assets/images/chicken2.png": "e8a3a3549880e4b9c76095e87a9d4494",
"assets/assets/images/chicken3.png": "24ddc0b95bc35379c2aad87a46b185f5",
"assets/assets/images/chicken4.png": "f34272ad578982836da0cbb692417d37",
"assets/assets/images/chicken5.png": "e442f62978a78fb628fa2b17528524fa",
"assets/assets/images/chicken6.png": "5ff55573f3d2442afa360aa4c418850f",
"assets/assets/images/clock.jpg": "7d95b544beac15cbccfdbb21dafe7828",
"assets/assets/images/contactus.png": "b8f41e773441a084a3fbbc3aa36e3437",
"assets/assets/images/deal1.png": "bebc1a0b1ec08c4052d44a15c1da0218",
"assets/assets/images/deal2.png": "b5091d90ac3191615cecadee9d59054e",
"assets/assets/images/deal3.png": "af695645df2a86ae23549a051ba84747",
"assets/assets/images/deal4.png": "af4b66045c032c56221bdf565cf2f76a",
"assets/assets/images/door.png": "77d4cb002771c35be7a96dd0322aaccb",
"assets/assets/images/fb.png": "fcc79ac98c6bc3160d5977586e8db242",
"assets/assets/images/filter.png": "0a7b5298c475a80747484732423def7f",
"assets/assets/images/google.png": "5521df1544cb4520bcfb160db8818df5",
"assets/assets/images/Gpay.png": "13c5048d1a518f1216357d99286e4e13",
"assets/assets/images/homebottomimg.png": "4cf9ca34959ec6bc43ec3d213ebf4cf4",
"assets/assets/images/locationicon.png": "ce7e9541f94b21c77f66211d56f25ee4",
"assets/assets/images/login1.png": "605272b0574df4f02e7f917d6d9296ae",
"assets/assets/images/login2.png": "025fcbffbe68a3dc496305ec77674c43",
"assets/assets/images/login3.png": "2347091103325c72d32dbb22062c4956",
"assets/assets/images/mainlogo.png": "717b81dca211c574f93406a9b8ce04d7",
"assets/assets/images/map.png": "4db4b5f8866339ff7f74fbb543b1d59e",
"assets/assets/images/Maps.png": "064ba2b774f1dd28c2455b167894c0cc",
"assets/assets/images/myprofile.png": "ee02fbfb078c6b5c8f9fecab36388899",
"assets/assets/images/new_slider.png": "97cf0d2799883f6a8ef5c6ba7ee44980",
"assets/assets/images/notifications.png": "d40782faf25bd9b2304a4600e5c82d8a",
"assets/assets/images/offers.png": "1190b046694227bd56cf4a18d3a068a4",
"assets/assets/images/original%25201.png": "1fb89f5409bc8481ca3fa40ce0e8e87f",
"assets/assets/images/original%25202.png": "f2cbc1169042964f904673f76baa1f72",
"assets/assets/images/original%25203.png": "6ca279fc974dfee2b3bd2f31853b6eff",
"assets/assets/images/productmain.png": "8fde3d14dd52b13e7d71a2c321938b86",
"assets/assets/images/promocode.png": "dfa19c6242a9dff6bf4e210a11cc988b",
"assets/assets/images/rajesh.png": "3cf2a37397c11229cce0ac9eeb21be26",
"assets/assets/images/refer1.png": "0cf60e40881f2db4b13ef6e27011edf6",
"assets/assets/images/review1.png": "be7d68d28881ee10a870c6a690ddce9d",
"assets/assets/images/scroll1.png": "04940be043b46661fa5dda803dbc154f",
"assets/assets/images/scroll2.png": "593f9afeaa50aa6aa2cc03f70955504a",
"assets/assets/images/scroll3.png": "1cec0875ab882253bb38d3efb4eea1e0",
"assets/assets/images/slideimg.png": "43efbdeef7e43f1d4af3f26abe07e983",
"assets/assets/images/splash1.png": "7b6ccf28a6ad4f59515b4fc816285a6b",
"assets/assets/images/splash2.png": "193dfa993987ee3956a67d2694fe9371",
"assets/assets/images/succesicon.png": "7679fca243a48bbf123069e1a762a305",
"assets/assets/images/tab1.png": "432508b76664da4e7288589d44474f2d",
"assets/assets/images/tab2.png": "b89f55237208ca030295e62720347c56",
"assets/assets/images/tabb3.png": "3e311c9dadaa658078ff20969aed2839",
"assets/assets/images/vendor.png": "825190c3da5b098dfd890325a8e63819",
"assets/assets/images/wp.png": "423a5adb583b23bf361043320d34bd1a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d9f0332fd56d6a668df28f017d855d96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "70127e65cc10e1712c75e4f6be57b09c",
"/": "70127e65cc10e1712c75e4f6be57b09c",
"main.dart.js": "c04b2fff8c2b450e6f6b3a311849ea83",
"manifest.json": "a9ee595b71c6086bdd268e02cbb5796a",
"version.json": "9a62c6ed0e6538d8a8b67d72e918f437"
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
