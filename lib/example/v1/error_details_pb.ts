// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file example/v1/error_details.proto (package example.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message example.v1.RetryInfo
 */
export class RetryInfo extends Message<RetryInfo> {
  /**
   * @generated from field: int32 count = 1;
   */
  count = 0;

  constructor(data?: PartialMessage<RetryInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "example.v1.RetryInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RetryInfo {
    return new RetryInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RetryInfo {
    return new RetryInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RetryInfo {
    return new RetryInfo().fromJsonString(jsonString, options);
  }

  static equals(a: RetryInfo | PlainMessage<RetryInfo> | undefined, b: RetryInfo | PlainMessage<RetryInfo> | undefined): boolean {
    return proto3.util.equals(RetryInfo, a, b);
  }
}

