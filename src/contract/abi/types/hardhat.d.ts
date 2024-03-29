/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwner__factory>;
    getContractFactory(
      name: "IVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVault__factory>;
    getContractFactory(
      name: "Vault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vault__factory>;

    getContractAt(
      name: "IOwner",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwner>;
    getContractAt(
      name: "IVault",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IVault>;
    getContractAt(
      name: "Vault",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Vault>;

    deployContract(
      name: "IOwner",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwner>;
    deployContract(
      name: "IVault",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVault>;
    deployContract(
      name: "Vault",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Vault>;

    deployContract(
      name: "IOwner",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwner>;
    deployContract(
      name: "IVault",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVault>;
    deployContract(
      name: "Vault",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Vault>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
