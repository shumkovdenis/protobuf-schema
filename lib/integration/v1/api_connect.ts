// @generated by protoc-gen-connect-es v0.8.6 with parameter "target=ts,import_extension=none"
// @generated from file integration/v1/api.proto (package integration.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetBalanceRequest, GetBalanceResponse } from "./api_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service integration.v1.IntegrationService
 */
export const IntegrationService = {
  typeName: "integration.v1.IntegrationService",
  methods: {
    /**
     * @generated from rpc integration.v1.IntegrationService.GetBalance
     */
    getBalance: {
      name: "GetBalance",
      I: GetBalanceRequest,
      O: GetBalanceResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
