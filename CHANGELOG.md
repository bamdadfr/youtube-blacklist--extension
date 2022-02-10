## [1.2.5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.2.4...v1.2.5) (2022-02-10)


### Bug Fixes

* **Video:** Retry if `#thumbnail` can't be fetched + Retry if ChannelByVideo `find` returns undefined ([538f812](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/538f8127811914febb64b81183258cbd3756ce1f))

## [1.2.4](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.2.3...v1.2.4) (2022-02-10)


### Bug Fixes

* **Video:** Assign button to object ([9eafc66](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/9eafc6613ceebd537901086367228c68c9379a81))

## [1.2.3](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.2.2...v1.2.3) (2022-02-09)


### Bug Fixes

* **Blacklist:** Improve loop readability ([52851d6](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/52851d6e822ee32592f5f3a31abb73a39615cfc0))
* **ChannelByVideoMap:** Remove redundant `await` ([e6fd9d6](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/e6fd9d6be2a8562fb043c16f5f497c13916dabb6))
* **Inject:** Avoid overriding variable names in lower scope ([aa279b9](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/aa279b91e8b424a1723c9b8d6796158b7fdd6858))
* **PageHandler:** Improve for loop readability by using for...of ([bb305a8](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/bb305a854919e2f1110f408c77ae1d0d44f5e65f))
* **Parser:** Improve readability and reduce complexity by splitting methods ([abd70af](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/abd70af5742b2f197acfd17ba046a038f10414dc))
* **Reducer:** Improve for loop readability by using for...of ([98326e1](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/98326e1103490c9fbda3f53b4002fecdafb04937))

## [1.2.2](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.2.1...v1.2.2) (2022-02-08)


### Performance Improvements

* **Inject:** Relocate file in `app/` ([835762e](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/835762efc5b8f193019e5ed68adefe95163c334c))
* **Reducer:** Loop through the data objects given by YouTube and iterate through, parsing the `videoRenderer` and `compactVideoRenderer` components + Create a global reducer for those components + Delete **absolute** reducers ([abfd1a5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/abfd1a5b34e61b5a1e7838d80876291602ccad37))

## [1.2.1](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.2.0...v1.2.1) (2022-02-08)


### Bug Fixes

* **Reducers:** Add safety data check before operations ([03f6412](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/03f641220e4b27e197b5895bcab6ba4297f2fc2f))

# [1.2.0](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.1.1...v1.2.0) (2022-02-08)


### Features

* Add `/explore` page handling ([19386a1](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/19386a14760a94998aa561b6ad7e7e250c2b04df)), closes [#44](https://github.com/bamdadsabbagh/youtube-blacklist--extension/issues/44)

## [1.1.1](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.1.0...v1.1.1) (2022-02-08)


### Performance Improvements

* **Blacklist:** Use same code style for imperative operations ([8a70a20](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/8a70a20242d7ae5ebac751f3e6b7ac5c8eedfcb1))
* **PageHandler:** Improve performance (imperative loops, spread operations) ([dcac8a2](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/dcac8a2e35aff64050da412b782f095027a6d668))
* **Reducers:** Improve performance of iterations  with imperative loops ([bb184bf](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/bb184bfb6c8db27fc7e90793202203e682fe106b))

# [1.1.0](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.33...v1.1.0) (2022-02-08)


### Bug Fixes

* **DynamicInterceptor:** Return the `DynamicReducer` object ([ef46a34](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/ef46a34c5fd0d1a60cc5b3a4789a08f9347b79ef))
* **PageHandler:** Create video objects after checks ([16ea3b5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/16ea3b574d3bb0ba8502d47d1eaa7e5c64e82338))
* **PageHandler:** Traverse all containers when new containers are added (can be improved) + Rename and extract `.traverse()` method to `Blacklist` class + Fix typings (elements vs nodes) ([8471bfe](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/8471bfe0957876a79c16e79022c6160c6fd137cc))
* **Utils:** Clone only responses with status code === 200 ([6df0f2c](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/6df0f2c1bfc4bb22cf113f64fba446ef35c04e1e))


### Features

* Rewrite in TypeScript + Adopt OOP style + Use strategy design pattern for parsers and renderers (a lot of duplicated code ATM) ([3d48d91](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/3d48d9180a47c065dfbda1c0e83e270222c8c302)), closes [#30](https://github.com/bamdadsabbagh/youtube-blacklist--extension/issues/30)
* **VideoCountSubject:** Add observable video count to notify for new video objects arrival in the DOM ([0851062](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/085106208d90006fc2349b3b71d072c7d1545671))


### Performance Improvements

* **Blacklist:** Improve traversal by taking long queries out of iteration loop + Move conditionals ([b3875aa](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/b3875aad55d2dbacd36616c7f46c23479f23bbbc))
* **ChannelByVideo:** Move proxy code into map object + Remove unused files and misc ([d8f188c](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/d8f188c458c1ddcf855164180e7f4705bea36036))
* **Dependencies:** Update to latest ([4eae509](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/4eae5099a867cc8cbc034f11a7f9439f7a2fe52a))
* **Dependencies:** Upgrade to latest ([74984db](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/74984db5ebaaf1b66a86ddda0ffd2994fc0c870b))
* **Location:** Instead of passing lambda functions as callbacks, pass the whole object for reference and notification from observer pattern ([5c2f44c](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/5c2f44c8895f39ff893830545d9a33285e92c7b3))
* **Observers:** Make a parent abstract `AbstractSubject` to extend concrete subjects from ([53a9e8f](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/53a9e8fe1f594a36af0e87e981eb55d7395f7879))
* **PageHandler:** Remove page specific query as it is not needed anymore ([265a8e5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/265a8e563b9c72c4c8e6e3dff62d294f70e9b742))
* **PageHandler:** Remove the `VideoContainer` abstraction + Rewrite `Video` and `Channel` objects + Move files around and rename ([9398bff](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/9398bff4b25be95ce544284be39676eecfec9c2c))
* **Reducers:** Extract all reducer code to their own file ([7c013de](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/7c013dee13d067ed827cf27f0133dc8f3735dc71))
* **Reducers:** Reflect factory method pattern in filenames and interfaces ([51a9e99](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/51a9e996071679146f71f20974a93f37fd7cf191))

## [1.0.33](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.32...v1.0.33) (2022-02-07)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([6bf4aec](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/6bf4aecba600d0d3ffd55e4888368392ae2103d9))

## [1.0.32](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.31...v1.0.32) (2022-01-31)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([83ce9d4](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/83ce9d45e463f16292d789986ef1053eec50b566))

## [1.0.31](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.30...v1.0.31) (2022-01-24)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([2b7ca0e](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/2b7ca0e1eadbb045789bab7546920b5f6b7a4cb8))

## [1.0.30](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.29...v1.0.30) (2022-01-20)


### Performance Improvements

* update dependencies ([2cd29ea](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/2cd29ea55e920fd34790acc959403460adc0adb7))

## [1.0.29](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.28...v1.0.29) (2022-01-17)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([1398283](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/13982834e7d513acd294c830f52d2f007c575cf7))

## [1.0.28](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.27...v1.0.28) (2022-01-10)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([d7bd386](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/d7bd38681984bfd6ebcbf31398196a77fc2de56b))

## [1.0.27](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.26...v1.0.27) (2022-01-03)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([af4c0cd](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/af4c0cd75d6669d5acad071cfd54e514ea1ba292))

## [1.0.26](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.25...v1.0.26) (2021-12-27)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([8a3c6a5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/8a3c6a564a963e521de56b2e4fc6bb8eaf5ab944))

## [1.0.25](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.24...v1.0.25) (2021-12-20)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([5d67434](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/5d67434d715ecfc73b3864528b689fe9c3893b4a))

## [1.0.24](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.23...v1.0.24) (2021-12-13)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([170c72a](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/170c72ab3f2fcd6e1db6b86a94119cb16969a8a9))

## [1.0.23](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.22...v1.0.23) (2021-12-06)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([87c7e04](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/87c7e0478579512f5ea5e42af58c6f5d0c719429))

## [1.0.22](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.21...v1.0.22) (2021-11-29)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([6d65d3f](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/6d65d3f6912ccf7b8d0c96a7b6a4c9f5fecd8381))

## [1.0.21](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.20...v1.0.21) (2021-11-22)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([1f35bdc](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/1f35bdc95ad6e524ec526e847c6c9c76113f4590))

## [1.0.20](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.19...v1.0.20) (2021-11-15)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([340ea37](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/340ea3741222a9b9d84b85bdee7cb310c5e52258))

## [1.0.19](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.18...v1.0.19) (2021-11-08)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([b6f6b0e](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/b6f6b0e760266893642e22d03c4a31ba9502ba79))

## [1.0.18](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.17...v1.0.18) (2021-11-06)


### Performance Improvements

* apply new code style to configuration and set up code editor settings ([7ff3214](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/7ff321431fb21085560e58945aaded95cba16f1a))
* update dependencies ([37aceec](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/37aceec28e0adea3cae7933c44d51638b686632b))

## [1.0.17](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.16...v1.0.17) (2021-11-01)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([dc88d79](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/dc88d791d8f09dfa3a01fc88b497837b899d6a73))

## [1.0.16](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.15...v1.0.16) (2021-10-31)


### Performance Improvements

* **release:** adding automatic chrome release ([42747d1](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/42747d1d92a44d9f1ade495986edbf25e3d77619))

## [1.0.15](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.14...v1.0.15) (2021-10-25)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([e07f2e5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/e07f2e5bdb7b0d53f68069145014c5fe1da0f002))

## [1.0.14](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.13...v1.0.14) (2021-10-18)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([b0169fd](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/b0169fd41fa44f2f4abdfa0db82c07b370fab85b))

## [1.0.13](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.12...v1.0.13) (2021-10-11)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([a3507d3](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/a3507d3ef22358821eb9877f70c98e94e5fd0c7a))

## [1.0.12](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.11...v1.0.12) (2021-10-04)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([5668f98](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/5668f98c400eb2254e275071f03f6983fc86ef81))

## [1.0.11](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.10...v1.0.11) (2021-09-27)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([3e7b56a](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/3e7b56a73ec855c06df9f0cc8d56700718f1f9ad))

## [1.0.10](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.9...v1.0.10) (2021-09-20)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([222383c](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/222383c426c699f2f824ade24269ddd98308fa64))

## [1.0.9](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.8...v1.0.9) (2021-09-13)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([c5758ae](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/c5758aef5dd39f87e35befdc49422425d24aa325))

## [1.0.8](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.7...v1.0.8) (2021-09-06)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([f19b2df](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/f19b2df0d2f5dcea624c94058ae03baa7e321fb4))

## [1.0.7](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.6...v1.0.7) (2021-08-30)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([2d5fdff](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/2d5fdff795d943c5c9d61222d3c7248aa6c286b4))

## [1.0.6](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.5...v1.0.6) (2021-08-23)


### Performance Improvements

* **getVideo:** ensure variables are defined ([6135753](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/61357537c5cc7002af2bae01a002f266038c244f))
* **purgePage:** ensure `id` is defined ([3681045](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/3681045873d434fbcc23354514b3c162d09d1e84))

## [1.0.5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.4...v1.0.5) (2021-08-23)


### Bug Fixes

* **#8:** check element before prepending ([466d72c](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/466d72c3176e2a8473cbb6685c589f544498098e)), closes [#8](https://github.com/bamdadsabbagh/youtube-blacklist--extension/issues/8)
* **#9:** sanitize argument ([c695637](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/c69563704cf879cdcceb3e687c3dd26c20773f4b)), closes [#9](https://github.com/bamdadsabbagh/youtube-blacklist--extension/issues/9)
* add lighter static data parser logic ([2344234](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/23442347defdeb31a1a9586aa451f1861384775c))


### Performance Improvements

* add `promisify` utility wrapper ([808ae42](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/808ae421454d4cb05b5ccfd7cab0dd653118ef57))
* move debug output closer to source ([aeda54e](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/aeda54e1ef2f657f268b05816ce0af6535ba1229))

## [1.0.4](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.3...v1.0.4) (2021-08-23)


### Performance Improvements

* **asfalte:** ⚙ yarn-upgrade--onMondays-1000 ([5614855](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/56148556da7fceac9252eb45a0da81a60e61ea7b))

## [1.0.3](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.2...v1.0.3) (2021-08-22)


### Performance Improvements

* **bundling:** keep javascript minified too ([ebf4ec8](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/ebf4ec86edd7d4d210ec51d7ab4270f65e7c7253))

## [1.0.2](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.1...v1.0.2) (2021-08-22)


### Performance Improvements

* **bundling:** add HTML and CSS minification ([d0fe7ec](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/d0fe7ece6e66a6d7f368f0dcb730560dc783bc9f))

## [1.0.1](https://github.com/bamdadsabbagh/youtube-blacklist--extension/compare/v1.0.0...v1.0.1) (2021-08-22)


### Bug Fixes

* **parsers:** add safety checks ([8cec6ab](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/8cec6ab96d5cbca3e46694767415f4a24c69fe75))

# 1.0.0 (2021-08-21)


### Bug Fixes

* **assets:** icons with right YouTube color ([6d48520](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/6d48520e7516022b60ff04e06b082248d04d60fa))
* **parseAjaxDataNext:** add short-circuit eval ([dddc948](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/dddc94871b895965a64bcf0ea441162a77466927))
* **parsers:** add optional chaining for arrays ([116b806](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/116b806b5b45d6ca5052602c5b3336869c76836c))
* **parsers:** add optional chaining for arrays ([2f7156f](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/2f7156f0a81579a0483af96c939dcb5264d96fb0))
* **webpack:** add assets copy to config ([be1b613](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/be1b613cf4c36ce0372e98a9f663b30755e5034e))
* add short circuit eval for parsers ([ca9965b](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/ca9965b061b0ad6a305c94d55835fef99cd9a03c))
* **purgePage:** add `currentPage` argument ([c626209](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/c6262097ce6c5b99d53c75f42c9e8e346bb12c7e))
* **state:** ensure `channelsByVideo` has been initialized before comparison ([90f02a9](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/90f02a9f6caf0fa6f96543987a1044d4e7269c25))


### Features

* add icons ([23a3deb](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/23a3debb07ee3f4fb97502be332796bcbc6d2062))
* **parseAjaxDataBrowse:** add `continuationItems` case ([f95c0b8](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/f95c0b89754f7a686543ad03ee68d9718287c6a7))
* **parseAjaxDataNext:** add new parsing case ([028df35](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/028df355677b10458596b8477a374a7bc9de5aba))
* **parseAjaxDataSearch:** add secondary contents from continuationItems + optional chaining for arrays ([015ae00](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/015ae00e7dfd1c01c4da9e08e0b19ca084e16ae3))
* **popup:** add relative sizes to styles + disable `textarea` resize ([82d9717](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/82d9717b99f721496da630389e4d263bc0743851))
* add `channelByVideo` to state + various improvements ([2c04869](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/2c048695dc9829f8c93c053665fa041a07064296))
* add `popup` + add dynamic blacklist in browser storage + add close button to thumbnails + ([1f00624](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/1f00624c2954e4eff1d74003a4c7557014426e9c))
* add ajax parsers + clean various dead code + homogenize selectors in parsers preparing for code re-use ([64451df](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/64451df40b8c085d545404eb0c2090ce0397dbd1))
* add parser for `endScreenVideoRenderer` ([cdc772a](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/cdc772adc0647c6bcf31c07340fbea7bf8d06817))
* **parseAjaxDataNext:** add `continuationItems` case ([7e30a33](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/7e30a33aaab57ad6285a25f20defaefcb47e9ec3))
* add close button to thumbnails ([7c8a4b5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/7c8a4b516df4dea2ad519069b76da873c19d7015))
* add reload page logic to refresh static props (for lack of a better solution) ([29330e7](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/29330e7bc3b09a1c74b2c6e9a2e43f7bcf721321))
* add static data parser /results page + extract close button code ([b7b742d](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/b7b742dea5b668126ac715b804bcc436ba7eb49f))
* add static parser for YouTube home page + better code re-use + various ([f7c96ca](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/f7c96ca7392a1956b2b84a7787625e20ff522b61))
* implement fetch interceptor with rewrite-fetch.js ([48e9513](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/48e9513cba1017cc0ec7a36f1a93ffc0b583008a))
* static parsing, close buttons, static blacklisting is now covered ([c85d665](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/c85d665eddede172a9b413a24558a864ab5a9ebf))
* **defineData:** add case when user is logged in (data structure is different) ([19134f9](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/19134f9e01764db3ea420d14bda8e12612a31156))
* init ([4b2697e](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/4b2697e0376504da58dc98fcd77945db2be51d7b))
* wip ([598f32d](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/598f32de6d2478ff8c2f603435ddbca63feff7f2))
* work in progress ([779093a](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/779093a66cfb5b2e763c777eb22bacfbd40c5451))


### Performance Improvements

* **parseAjaxData:** add more debugging console output ([fe174f5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/fe174f5a21c7a918d653ec68a14f0ea4f1708810))
* add existing data check before appending + add debugging console outputs ([475ffef](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/475ffef55a6696d4686b6643770bdce3a0a3cb1b))
* better debugging console output ([03a2d2d](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/03a2d2d2ddef6d6f1cc8385ea9770ef4bb1d34ac))
* rename `parseAjaxDataHome` to `parseAjaxDataBrowse` ([3acf72b](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/3acf72b76112c6fa0ba9b946c371b4c7f61e693f))
* **appendCloseButtons:** get elements depending on `currentPage` ([9b6fa14](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/9b6fa14b28fe36fe2cce2f27e361b95994295ff8))
* **appendCloseButtons:** improve wording ([30ae45e](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/30ae45ec7ea9fd4b3d38a5c136aeaa62580abc72))
* **deps:** update to latest ([731a905](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/731a9053807abe1d65de2cd7d92980a9c0438ae9))
* **deps:** upgrade webpack to latest ([d48fbab](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/d48fbab97a48a6cdab65c8ca638ba066261fb175))
* **detects:** extract page detects to their own files ([bfb686f](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/bfb686f12cd9f2a81d7a30a25df9ccf7cf9a7389))
* **executeOnHrefChange:** replace `interval` options with `INTERVAL` constant ([ca51128](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/ca51128f792f617964a7ea10961aac60b1dadbae))
* **getVideoElements:** fetch elements conditionally based on `currentPage` ([56c370b](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/56c370b02a316624c26c00ede14ceb3a11297aef))
* **injectContentPages:** simplify injection for specific pages ([0daf1b8](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/0daf1b8242e50d9bfa27a8d2fea60ad7ab4e2771))
* **interceptFetch:** remove todo (which was caused by an uncaught error within `parseAjaxDataSearch`) ([6c2c559](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/6c2c55914c7111e7477e319fe2767a86777a4284))
* **Pages:** rename setters for actions and injects ([0f49d1c](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/0f49d1ca6145da77306caa0af525b65a27422668))
* **parseAjaxData:** remove repetitions ([3802cf0](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/3802cf03619866c951c87000c92819a5f7ecd29f))
* **state:** remove state `channelByVideo` ([4713e11](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/4713e1139c2bfded244a2ed6cd2b83549f197381))
* add `RETRY` global delay ([36f5dde](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/36f5ddea034b31f2250204e410c09908ff5c0df3))
* add comments for ajax parser (match endpoints and client routes) ([e0d1943](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/e0d19435ae9deb94389c15c5fa38be6a94681202))
* debugging log ([24dd4e4](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/24dd4e4bdfa67f0b6ed83fff7df8816f733c1f90))
* extract shelfRenderer parser to its own file ([895ce45](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/895ce45b7d55ce326f7b567c35d796729a1dd0e4))
* remove unused files ([aea07b4](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/aea07b487d80e3f6592b736aaa63c7814bcc65ef))
* rename `execute-on-*` to `on-new-*` ([ad37e66](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/ad37e66b32199df4d23d3177217281fe87a9928f))
* small QoL ([8a8b15c](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/8a8b15c47f994673db108ede62b020452ef1c141))
* **state:** add `currentPage` to state ([6ba96ba](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/6ba96bafd52dd64951f33eb0f3e1800e6d20f261))
* rename `parse-data` to `define-data` ([a48b462](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/a48b4624f52ab521cede882ffea5ae55ed2ee2d2))
* rename `rewriteFetch` to `interceptFetch` ([f085d04](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/f085d04fbef460521c11a43b49b09a9fe8b498ec))
* rename parsers and setters ([08f3556](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/08f35565fe876f787807d8d4555356392c5cdf6d))
* **parseYoutubeDataAjax:** add dummy console.log while work in progress ([4b633a4](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/4b633a452b45ca104f9ab71b2a743a89c4650cf0))
