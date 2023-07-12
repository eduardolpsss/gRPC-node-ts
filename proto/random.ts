import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RandomClient as _randomPackage_RandomClient, RandomDefinition as _randomPackage_RandomDefinition } from './randomPackage/Random';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  randomPackage: {
    Random: SubtypeConstructor<typeof grpc.Client, _randomPackage_RandomClient> & { service: _randomPackage_RandomDefinition }
    numberRequest: MessageTypeDefinition
    numberResponse: MessageTypeDefinition
    pingRequest: MessageTypeDefinition
    pongResponse: MessageTypeDefinition
    todoRequest: MessageTypeDefinition
    todoResponse: MessageTypeDefinition
  }
}

