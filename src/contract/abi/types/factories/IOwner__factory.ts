/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Contract, Interface, type ContractRunner } from 'ethers'
import type { IOwner, IOwnerInterface } from '../IOwner'

const _abi = [
  {
    inputs: [],
    name: 'withdrawOwnerIncome',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

export class IOwner__factory {
  static readonly abi = _abi
  static createInterface(): IOwnerInterface {
    return new Interface(_abi) as IOwnerInterface
  }
  static connect(address: string, runner?: ContractRunner | null): IOwner {
    return new Contract(address, _abi, runner) as unknown as IOwner
  }
}
