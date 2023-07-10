// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { pingRequest as _randomPackage_pingRequest, pingRequest__Output as _randomPackage_pingRequest__Output } from '../randomPackage/pingRequest';
import type { pongResponse as _randomPackage_pongResponse, pongResponse__Output as _randomPackage_pongResponse__Output } from '../randomPackage/pongResponse';

export interface RandomClient extends grpc.Client {
  pingPong(argument: _randomPackage_pingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  pingPong: grpc.handleUnaryCall<_randomPackage_pingRequest__Output, _randomPackage_pongResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  pingPong: MethodDefinition<_randomPackage_pingRequest, _randomPackage_pongResponse, _randomPackage_pingRequest__Output, _randomPackage_pongResponse__Output>
}
