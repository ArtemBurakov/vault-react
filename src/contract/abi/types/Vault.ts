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

export interface VaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'balances'
      | 'deposit'
      | 'locked'
      | 'owner'
      | 'ownerIncome'
      | 'ownerIncomePercentage'
      | 'withdraw'
      | 'withdrawOwnerIncome'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'balances',
    values: [AddressLike]
  ): string
  encodeFunctionData(functionFragment: 'deposit', values?: undefined): string
  encodeFunctionData(functionFragment: 'locked', values: [AddressLike]): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'ownerIncome',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'ownerIncomePercentage',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'withdrawOwnerIncome',
    values?: undefined
  ): string

  decodeFunctionResult(functionFragment: 'balances', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'locked', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'ownerIncome', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'ownerIncomePercentage',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'withdrawOwnerIncome',
    data: BytesLike
  ): Result
}

export interface Vault extends BaseContract {
  connect(runner?: ContractRunner | null): Vault
  waitForDeployment(): Promise<this>

  interface: VaultInterface

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

  balances: TypedContractMethod<[arg0: AddressLike], [bigint], 'view'>

  deposit: TypedContractMethod<[], [void], 'payable'>

  locked: TypedContractMethod<[arg0: AddressLike], [boolean], 'view'>

  owner: TypedContractMethod<[], [string], 'view'>

  ownerIncome: TypedContractMethod<[], [bigint], 'view'>

  ownerIncomePercentage: TypedContractMethod<[], [bigint], 'view'>

  withdraw: TypedContractMethod<[], [void], 'nonpayable'>

  withdrawOwnerIncome: TypedContractMethod<[], [void], 'nonpayable'>

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T

  getFunction(
    nameOrSignature: 'balances'
  ): TypedContractMethod<[arg0: AddressLike], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'deposit'
  ): TypedContractMethod<[], [void], 'payable'>
  getFunction(
    nameOrSignature: 'locked'
  ): TypedContractMethod<[arg0: AddressLike], [boolean], 'view'>
  getFunction(
    nameOrSignature: 'owner'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'ownerIncome'
  ): TypedContractMethod<[], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'ownerIncomePercentage'
  ): TypedContractMethod<[], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'withdraw'
  ): TypedContractMethod<[], [void], 'nonpayable'>
  getFunction(
    nameOrSignature: 'withdrawOwnerIncome'
  ): TypedContractMethod<[], [void], 'nonpayable'>

  filters: {}
}
