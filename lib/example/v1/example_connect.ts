// @generated by protoc-gen-connect-es v0.8.6 with parameter "target=ts,import_extension=none"
// @generated from file example/v1/example.proto (package example.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CallRequest, CallResponse } from "./example_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service example.v1.IntegrationService
 */
export const IntegrationService = {
  typeName: "example.v1.IntegrationService",
  methods: {
    /**
     * @generated from rpc example.v1.IntegrationService.Call
     */
    call: {
      name: "Call",
      I: CallRequest,
      O: CallResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
