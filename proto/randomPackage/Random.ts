// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { numberRequest as _randomPackage_numberRequest, numberRequest__Output as _randomPackage_numberRequest__Output } from '../randomPackage/numberRequest';
import type { numberResponse as _randomPackage_numberResponse, numberResponse__Output as _randomPackage_numberResponse__Output } from '../randomPackage/numberResponse';
import type { pingRequest as _randomPackage_pingRequest, pingRequest__Output as _randomPackage_pingRequest__Output } from '../randomPackage/pingRequest';
import type { pongResponse as _randomPackage_pongResponse, pongResponse__Output as _randomPackage_pongResponse__Output } from '../randomPackage/pongResponse';
import type { todoRequest as _randomPackage_todoRequest, todoRequest__Output as _randomPackage_todoRequest__Output } from '../randomPackage/todoRequest';
import type { todoResponse as _randomPackage_todoResponse, todoResponse__Output as _randomPackage_todoResponse__Output } from '../randomPackage/todoResponse';

export interface RandomClient extends grpc.Client {
  PingPong(argument: _randomPackage_pingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_pingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_pingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_pingRequest, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_pingRequest, callback: grpc.requestCallback<_randomPackage_pongResponse__Output>): grpc.ClientUnaryCall;
  
  RandomNumbers(argument: _randomPackage_numberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_numberResponse__Output>;
  RandomNumbers(argument: _randomPackage_numberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_numberResponse__Output>;
  randomNumbers(argument: _randomPackage_numberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_numberResponse__Output>;
  randomNumbers(argument: _randomPackage_numberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_numberResponse__Output>;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_todoResponse__Output>): grpc.ClientWritableStream<_randomPackage_todoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_todoResponse__Output>): grpc.ClientWritableStream<_randomPackage_todoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_todoResponse__Output>): grpc.ClientWritableStream<_randomPackage_todoRequest>;
  TodoList(callback: grpc.requestCallback<_randomPackage_todoResponse__Output>): grpc.ClientWritableStream<_randomPackage_todoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_todoResponse__Output>): grpc.ClientWritableStream<_randomPackage_todoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_todoResponse__Output>): grpc.ClientWritableStream<_randomPackage_todoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_todoResponse__Output>): grpc.ClientWritableStream<_randomPackage_todoRequest>;
  todoList(callback: grpc.requestCallback<_randomPackage_todoResponse__Output>): grpc.ClientWritableStream<_randomPackage_todoRequest>;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_randomPackage_pingRequest__Output, _randomPackage_pongResponse>;
  
  RandomNumbers: grpc.handleServerStreamingCall<_randomPackage_numberRequest__Output, _randomPackage_numberResponse>;
  
  TodoList: grpc.handleClientStreamingCall<_randomPackage_todoRequest__Output, _randomPackage_todoResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_randomPackage_pingRequest, _randomPackage_pongResponse, _randomPackage_pingRequest__Output, _randomPackage_pongResponse__Output>
  RandomNumbers: MethodDefinition<_randomPackage_numberRequest, _randomPackage_numberResponse, _randomPackage_numberRequest__Output, _randomPackage_numberResponse__Output>
  TodoList: MethodDefinition<_randomPackage_todoRequest, _randomPackage_todoResponse, _randomPackage_todoRequest__Output, _randomPackage_todoResponse__Output>
}
