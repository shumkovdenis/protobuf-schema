# Changelog

## [1.7.0](https://github.com/shumkovdenis/protobuf-schema/compare/v1.6.0...v1.7.0) (2023-05-17)


### Features

* **proto:** add timeout to RetryInfo in error_details.proto ([3f39508](https://github.com/shumkovdenis/protobuf-schema/commit/3f39508e60e092c7caefdaaac7c50895bb6d6130))

## [1.6.0](https://github.com/shumkovdenis/protobuf-schema/compare/v1.5.0...v1.6.0) (2023-05-17)


### Features

* Add RetryInfo message to error_details.proto ([ed6065d](https://github.com/shumkovdenis/protobuf-schema/commit/ed6065d35b761d088c1eca10a6f1f7236bce22f5))
* **proto:** update RetryInfo count field to use int32 ([f57f4f2](https://github.com/shumkovdenis/protobuf-schema/commit/f57f4f21fea3f81276d468336301d05b0ca78e85))

## [1.5.0](https://github.com/shumkovdenis/protobuf-schema/compare/v1.4.0...v1.5.0) (2023-05-16)


### Features

* **example.proto:** add example.proto file with CallRequest, CallResponse and IntegrationService definitions to support integration with external services ([d56dd14](https://github.com/shumkovdenis/protobuf-schema/commit/d56dd14abaf475675074b1004bf536dd801f3af4))

## [1.4.0](https://github.com/shumkovdenis/protobuf-schema/compare/v1.3.0...v1.4.0) (2023-05-07)


### Features

* add CreateSessionRequest and CreateSessionResponse messages and SessionService with CreateSession method to handle session creation ([f1ebe05](https://github.com/shumkovdenis/protobuf-schema/commit/f1ebe05141006dab00738ff5833a7d5c1df5e8d3))

## [1.3.0](https://github.com/shumkovdenis/protobuf-schema/compare/v1.2.1...v1.3.0) (2023-05-07)


### Features

* **error_details.proto:** add RollbackInfo message to integration.v1 package to provide transaction_id for rollback functionality ([774385a](https://github.com/shumkovdenis/protobuf-schema/commit/774385ac09403d8ed71751217b81c39c8a16ed14))

## [1.2.1](https://github.com/shumkovdenis/protobuf-schema/compare/v1.2.0...v1.2.1) (2023-05-07)


### Bug Fixes

* add write permission to packages to enable publishing of packages to GitHub Packages registry ([92aa0c4](https://github.com/shumkovdenis/protobuf-schema/commit/92aa0c40e28d80c7883967576cab74526aedb8f2))

## [1.2.0](https://github.com/shumkovdenis/protobuf-schema/compare/v1.1.0...v1.2.0) (2023-05-07)


### Features

* add conditional checkout action to release.yml workflow to only run when a release is created ([006905f](https://github.com/shumkovdenis/protobuf-schema/commit/006905ff31bb77a3a3cf96fb5a9a3aed2bf039d2))

## [1.1.0](https://github.com/shumkovdenis/protobuf-schema/compare/v1.0.0...v1.1.0) (2023-05-07)


### Features

* add game_id field to GetBalanceRequest message to support game-specific balance requests ([b44bec3](https://github.com/shumkovdenis/protobuf-schema/commit/b44bec369b52bb2ea8a1d36990193435d2f9e3b5))
* remove unused fields from GetBalanceRequest message to simplify the message definition ([a936123](https://github.com/shumkovdenis/protobuf-schema/commit/a936123572e9322c500c93ddd4e5cec3a0212235))


### Bug Fixes

* add platform_id and operator_id fields to GetBalanceRequest message to support multi-tenant architecture ([b75afe2](https://github.com/shumkovdenis/protobuf-schema/commit/b75afe26f724d027c497e308400dde58c8d777c4))

## 1.0.0 (2023-05-07)


### Features

* add operator_id field to GetBalanceRequest message to support operator balance retrieval ([5e6a5f9](https://github.com/shumkovdenis/protobuf-schema/commit/5e6a5f9753e066c6f103c8d88b5874cc7b59d630))
