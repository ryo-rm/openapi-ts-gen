// THIS FILE IS GENERATED BY CODE GENERATOR. DO NOT CHANGE MANUALLY.
/* tslint:disable */
/* eslint-disable */
import Pet from './models/Pet'
import Pets from './models/Pets'
import Error from './models/Error'

export namespace PetStore {
  export namespace pets {
    export interface listPetsRequest {
      limit?: number;
    }

    export type listPetsResponse = Pets

    export interface createPetsRequest {
    }

    export interface createPetsResponse {
      pet: Pet;
    }

    export interface showPetByIdRequest {
    }

    export type showPetByIdResponse = Pets

  }
}
