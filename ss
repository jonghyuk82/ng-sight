warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex acea41d..0385a6c 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -2565,6 +2565,11 @@[m
       "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24=",[m
       "dev": true[m
     },[m
[32m+[m[32m    "bootstrap": {[m
[32m+[m[32m      "version": "4.0.0-beta",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-4.0.0-beta.tgz",[m
[32m+[m[32m      "integrity": "sha512-I/r3fYtUZr+rUNkh8HI+twxZ56p6ehNn27eA1XSebLVQKAJ2xZHnEvZrSR+UR2A/bONcd9gHC3xatVhQlH6R6w=="[m
[32m+[m[32m    },[m
     "brace-expansion": {[m
       "version": "1.1.11",[m
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
[36m@@ -2742,6 +2747,11 @@[m
       "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "chart.js": {[m
[32m+[m[32m      "version": "3.5.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chart.js/-/chart.js-3.5.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-m5kzt72I1WQ9LILwQC4syla/LD/N413RYv2Dx2nnTkRS9iv/ey1xLTt0DnPc/eWV4zI+BgEgDYBIzbQhZHc/PQ=="[m
[32m+[m[32m    },[m
     "chokidar": {[m
       "version": "3.5.2",[m
       "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.2.tgz",[m
[36m@@ -5995,6 +6005,11 @@[m
         }[m
       }[m
     },[m
[32m+[m[32m    "jquery": {[m
[32m+[m[32m      "version": "3.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/jquery/-/jquery-3.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-JVzAR/AjBvVt2BmYhxRCSYysDsPcssdmTFnzyLEts9qNwmjmu4JTAMYubEfwVOSwpQ1I1sKKFcxhZCI2buerfw=="[m
[32m+[m[32m    },[m
     "js-tokens": {[m
       "version": "4.0.0",[m
       "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",[m
[36m@@ -7700,6 +7715,11 @@[m
         "find-up": "^4.0.0"[m
       }[m
     },[m
[32m+[m[32m    "popper.js": {[m
[32m+[m[32m      "version": "1.11.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/popper.js/-/popper.js-1.11.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-mPwHWRijjT5hcI5pJCM8W4dv6y48v94ANpP5mVX9ZRZPuxWveGmm/VpE/1t5NB7wBA7CtSVsWHlbW1VucbILyQ=="[m
[32m+[m[32m    },[m
     "portfinder": {[m
       "version": "1.0.28",[m
       "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.28.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 3eb83e8..3b99533 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -18,6 +18,10 @@[m
     "@angular/platform-browser": "~12.2.0",[m
     "@angular/platform-browser-dynamic": "~12.2.0",[m
     "@angular/router": "~12.2.0",[m
[32m+[m[32m    "bootstrap": "^4.0.0-beta",[m
[32m+[m[32m    "chart.js": "^3.5.1",[m
[32m+[m[32m    "jquery": "^3.6.0",[m
[32m+[m[32m    "popper.js": "^1.11.0",[m
     "rxjs": "~6.6.0",[m
     "tslib": "^2.3.0",[m
     "zone.js": "~0.11.4"[m
