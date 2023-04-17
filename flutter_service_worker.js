'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d4a3f07a9b850e661611bbb49918fa0f",
".git/config": "3af5fe3e5c193275c7c82b0985059c21",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7b9b92084e4cf69f7377df56a787a5f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a09f3937bf1cecdc5e11ae081be162e1",
".git/logs/refs/heads/master": "a09f3937bf1cecdc5e11ae081be162e1",
".git/logs/refs/remotes/origin/master": "7d141cee6355b8e4d7587f9e9e24f87c",
".git/objects/01/07fb670c4d1316a6d52a134638fcc868455867": "8889b15f998abbf0db9b72beccd6a88a",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/c4a4616cd37fd31ec1d1529dd7744e97c280f3": "44cd303bbf22462e5cfb89f0c322ccbf",
".git/objects/04/a141c7502826619a5ce00710327790d093e78e": "5132f32a322d568630c5488784124b63",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/14/0ec02ca325656e806486789ebbf2eb12cbae4a": "e4e727d865011a62f1df333b4e22f22d",
".git/objects/18/99b1eb1e48f4a4b90c2b640a687bde6cf5f405": "5918562b6480f148fb7a209980acf466",
".git/objects/19/e51e0b2a616e312c35594b1a62d4a40035ee00": "cf19a14b584e02771579df6d41a9e317",
".git/objects/1c/e3dee6772754eb9db5253a024e3f62beb8a6c1": "f26f6e6a241681f58ce5e9b8deb6b6f4",
".git/objects/1f/c010a0ffdbfb3591cbb6c05992030d1b2b44ce": "96401b64f5bf1be31c56a6a0137602a4",
".git/objects/21/2d0ad933c96ada41013096af4db49931ef6f02": "27e54044668afdf6195cf52531a8a195",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/60e040b36934e785b571b81dfb547d573ba6c9": "a5b5fd2a9fa1d909e189748dce075639",
".git/objects/2b/b32940209e2f70a9ee67e64656ecc1ae2909f9": "5ffc91dc62da7de65e8cd80e08f9bbe7",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/de00db2db8c8e2e511b107725e79bbd5f8cf48": "49e1b7858cc34e6468c1a80dcb86dc08",
".git/objects/34/98e4f970d4a590fe91f847b5cb88994df5da8f": "62c35b66b284ddd5f1fbbba1b22f8044",
".git/objects/36/2da60a92c235f1b0dba27fcc541c32c3049339": "4fdc7288aad8c2c6a5ca218e1b29a81d",
".git/objects/36/8cb00feac02498a910a37be24d5fa1b7213009": "78819c5c6032dc97c6c521f6d97b847b",
".git/objects/40/2be079bc5f01068773037891d284a1e97260ea": "1c66bcd1fe12cc0fb28daaf7bdd30502",
".git/objects/41/4775968c833f8b4cbf826f4a2f30bdc7312a28": "fb66aadc1e29ab05d1f01eb9c2102079",
".git/objects/42/cea455108256b1ede8b289ceb42a7c1e284cf8": "bd9c9cc0420692ccb9dde2b0227db7be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/007c54b361171bdfae9bbc1d0791604bbb04fa": "70957205f35c0ab764a4f588913bd053",
".git/objects/48/c16ce5a3a81a6ce50e5a1df0b3ec767ebc7724": "b0e3305b79fe4a199d3f6c8b025b15e8",
".git/objects/49/aa9cd69187cca56a5f911895978e3c90b956fc": "7917503cd9b72f0da249a638a467c8e5",
".git/objects/4d/3b3122197b34e0b3205be6922cb9b26215f5f1": "aeb29359f3faead59ebbb9d59377a74d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/60b7c6bf3ebe2c37cb917214eb7094d206ab9c": "9d94f488e5fc5bc103b4fbd3bdb21256",
".git/objects/52/6bd5d3e3d05a7654baa069ea52b1b5ff69f817": "727998df55d735ec4e2c352f1b3399c5",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/54/4fc15d9d97d85d3b6eacdc7445d6a7444b9416": "768a3e888e09da7b6b13c11a14b19571",
".git/objects/54/ac43b02d1f2517ce37b6efa3f0d1bad50fea38": "a4733357402a93eb6b159341e89b0131",
".git/objects/62/7dacc747a7f77568a52977dec988e97f6ce380": "5c097d865c73bd904c4e4f4215ee9466",
".git/objects/62/fe0a9beeefc66c246e7880ec821c28b23b4970": "d4e027aeb7622083865cf6162dcf3557",
".git/objects/6b/ef322c8acfe36d22b5e30c9d9b933e1512495a": "0bd1e67bbf3eebf9f336b6df25f5f765",
".git/objects/6e/d73dfad0b55efdcc6b57901e2b99cb4844b005": "fa4f97e11ddd864280963a48c5548fbd",
".git/objects/70/1475a9eb039cfd126cbbd5105e9afb0e1e1cde": "92956eb9c2bdf96dac6742dea9a8a041",
".git/objects/70/f565f3e134316142fc936b5ef65b52b3c8e15e": "6754fa18817dd7b1fc264c659bada990",
".git/objects/71/4b12e3ecf15a5739d7c0075633ade42b32aab5": "b756eb46d3ab2a12ab92ff68949835c5",
".git/objects/72/b0337e1180aad54d8ce84877b4bca41b3fa2d7": "377cb914950debb379a6ecc82ef83d9b",
".git/objects/74/02a62c8337db54c874a6c23d3fb5abe73fd584": "7edc2c5ef43d87fd95cedee8e31a14f5",
".git/objects/75/7ea5315cb60e6f9a36c1cee67d11fd481734f9": "949843072138cb9d1e8e9893eeda09a0",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/d8e6e9d1908077057036340a46428425e2fe47": "aca04c187d8d288c091d37d780f60f26",
".git/objects/81/dfd2d1894f1cbaad23a3d7b6eefd5f863164fc": "d57a849635c50c93cd2d382eeb1eba83",
".git/objects/83/1757f06f29f265c23272da23468cb21e85a4e9": "74309b2299f79600243bfc690b401743",
".git/objects/84/7fa1e08b5ef6f81348a6fe5946e35609ad081a": "b08680f29de36bcbdd9520cb434f3153",
".git/objects/85/69437184dcef68c5c18527b4d664cc2716fc3e": "70671cb92c214d2443b2ae36c30e50dd",
".git/objects/87/a0a697c8c9ce0ab137ddf03d8129be09bd54d2": "f7b52e812cd8efa733447882cb5be847",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3f246c5f854a2bc0d9ac3066626cd31f79e017": "88a27852dc2800fc5caf14aeb6b315d0",
".git/objects/8b/80c332f781f7b09abc5c7a57a8257a21f8795b": "bdb805691f945fed606b896acf5f78e4",
".git/objects/91/a8b7b4822899b265ee6bdedb33a47b0c11c9e6": "0b454c011e7fd473d91e8967e03b8e56",
".git/objects/93/d14e5f4de442be9d17ec7d4cfdde9448c1c32e": "b8d4342972dec71bafe03b8cd3f4864c",
".git/objects/94/630c7614b6c84995b1995328c5b71f11fcb478": "e6cfa2917f98ddb58e7cd9889108ff68",
".git/objects/9b/f68788ffaade487da70e0cf55a20b1675bbb19": "fdd33fc1b3af19c6962d91bd44e33b0c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/36a69abd44d34b5076365c53e003618e77c667": "02142904c506d4d4834cd709bf77a14a",
".git/objects/aa/2682a227a2d1d68af2545a5f3b6a1cc13120fb": "a800a29b90c9ce895a6ce1bef74da79b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/cf7a0c834ea2372fae39360f7870745b89e9d2": "8d0eb37909fc8631d595104d16284a62",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/6f508927dd67ab76ebf8ea16e74f63fa050c00": "5f494d8c8444d3bb1d73a65811685588",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c139479eaa56baf476045925c7b133ac447ec9": "c61992a47ce88efa740b741dd694baa9",
".git/objects/c6/d3c5377afb6b7ef4987a14d87a638a4f1db1d4": "ca3821b8a46674c49b6c48f64ab96a24",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d5/26d45970a1eba93b49ff1624b4fc39527eb66c": "696398083339fb176ddbd98aa2dab66f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/fff591e8b9360a6f312e8afcf6f8d399978d2d": "67203c416e50af55e01f38e92a5cdb49",
".git/objects/d8/2427883590fc60690d7d79cc0c0d71264dfa03": "db7f9cfc8e9dad959e7ecc0540053d94",
".git/objects/dc/b874c139341f1543903a26358e6a66092bfcad": "3df83c56695a4961e4fe1b74bd56e2ec",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/c1cb270b8630e8ed084ee60a540a89bce95685": "056bc90dc2e8bb4d9ad7937d1d97993f",
".git/objects/e3/50d104c6c3315d86efa253b2bcddfc0e105c7d": "919675e5a0741670f7cdd50330d15863",
".git/objects/e5/235597cf8b7c1a39efce004da702de4883a584": "2ec1bc50d1f9b315af6f3ec81dd6a4a5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/adca2c505ebf9b8a32476d0df35e74a8e62e99": "b6fdece666d661ffedc4915c16e2b15d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/639f3361ce18298940735f64c57e71c6eb0562": "3d2f7fafdf9b2a018e85ce689a1660a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/06a40a79602fa319b4b455af96a78c5113199b": "c4c835bd7f37f9b601268ef4378b9b15",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/fa/d450f424bd43a4ea0c26471357363432663715": "57ef0f1c0560a499826d19a9c74edf9a",
".git/objects/fe/e5cd112838a1a6891c1bfc162a44692119126a": "24d9f7b22da7f840396c2b7ae1179a47",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "9bee41be6934d4182e210b11e7f11505",
".git/refs/remotes/origin/master": "9bee41be6934d4182e210b11e7f11505",
"assets/AssetManifest.json": "3cb4aeb2ca88cb72bb3573da6f6805c5",
"assets/assets/images/code.png": "0db3a5c49b5f8848f83eb209d678d65b",
"assets/assets/images/design.png": "4c4a6e9e42f57f1cdbb810a3b566acc6",
"assets/assets/images/learn.png": "7827c9e2366da4aaeec20a4342b76953",
"assets/assets/images/projects/aftermarket_audit.jpg": "8d2a5fc84e6bb5d77033f912b889c7c7",
"assets/assets/images/projects/digiparts.jpg": "8833b61722452257d6dfc9ee93767ef1",
"assets/assets/images/projects/parts365.jpg": "0cbb61f7725a0cbe9dbf99a592b8d0d6",
"assets/assets/images/projects/prism1.jpg": "4953c396e70a43c7fafdd203e44d1902",
"assets/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/assets/images/social/facebook.png": "18f06c792a1c4a5f08e74e71223e14d0",
"assets/assets/images/social/github.png": "565551354058c61880693807cab23374",
"assets/assets/images/social/insta.png": "0b6b3c8d2c74fc2e0be8f5d940ec1e14",
"assets/assets/images/social/linkedin.png": "076910dd2fa0207d9bf3ab10f3d4467e",
"assets/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/assets/images/social/whatsapp.png": "1aa80beced508dbc8357acd5c5a85b08",
"assets/assets/images/technology/android.png": "f3f62505de0766a4e362c7cb5df84bfb",
"assets/assets/images/technology/dart.png": "506130cf866fb85773c6849f36114e94",
"assets/assets/images/technology/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/images/technology/java.png": "547e32ee1a6d5ce1cf1fb8fd434b9f22",
"assets/assets/images/technology/kotlin.png": "816fd8697b199ae4a7b5dfeccb9ce423",
"assets/assets/svg/guy.svg": "c9ff225020780993a3a6943583011f3a",
"assets/assets/svg/person.svg": "b3f3b4b8c2c9d15dd60d73426b0d58be",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a2a89aee05338919b1f7b462beed6d8d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "22f89010599e88f26d016eac13c97dc6",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "45f0ac5c229e754cf566474b61970828",
"/": "45f0ac5c229e754cf566474b61970828",
"main.dart.js": "f9e980384a860a0b335e331439040f33",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"version.json": "9b818ca9511483c901bed1545384376c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
