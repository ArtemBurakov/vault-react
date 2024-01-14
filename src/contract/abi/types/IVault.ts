/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers'
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from './common'

export interface IVaultInterface extends Interface {
  getFunction(
    nameOrSignature: 'balances' | 'deposit' | 'withdraw'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'balances',
    values: [AddressLike]
  ): string
  encodeFunctionData(functionFragment: 'deposit', values?: undefined): string
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string

  decodeFunctionResult(functionFragment: 'balances', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result
}

export interface IVault extends BaseContract {
  connect(runner?: ContractRunner | null): IVault
  waitForDeployment(): Promise<this>

  interface: IVaultInterface

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>
  listeners(eventName?: string): Promise<Array<Listener>>
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>

  balances: TypedContractMethod<[account: AddressLike], [bigint], 'view'>

  deposit: TypedContractMethod<[], [void], 'payable'>

  withdraw: TypedContractMethod<[], [void], 'nonpayable'>

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T

  getFunction(
    nameOrSignature: 'balances'
  ): TypedContractMethod<[account: AddressLike], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'deposit'
  ): TypedContractMethod<[], [void], 'payable'>
  getFunction(
    nameOrSignature: 'withdraw'
  ): TypedContractMethod<[], [void], 'nonpayable'>

  filters: {}
}
