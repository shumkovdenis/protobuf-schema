# Changelog

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
