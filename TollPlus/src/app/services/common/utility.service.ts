import { Injectable } from '@angular/core';
import {TollPlusHttpService} from "./tollplus.http.service";

@Injectable()
export class UtilityService {

  constructor(public httpService:TollPlusHttpService) { }


  getCountries=function (getCountryRelativePath) {
    console.log("country service ")
    return this.httpService.getHttpMethodWithoutParams(getCountryRelativePath);
  }

  getStates=function (getStateRelativePath,countryObject) {
    return this.httpService.postMethodWithParams(getStateRelativePath,countryObject);
  }

  getDropDownValues(realtivePathWithQueryParam){
    return this.httpService.getHttpMethodWithoutParams(realtivePathWithQueryParam);

  }

  saveCustomer(saveCustomerRelativePath,customer){
    return this.httpService.postMethodWithParams(saveCustomerRelativePath,customer);
  }
  valiateUserName(relativePath,inputObject){
    return this.httpService.postMethodWithParams(relativePath,inputObject);
  }


  getHearAboutUs=function (hearAboutUs) {
    return this.httpService.getHttpMethodWithoutParams(hearAboutUs);
  }
  getStatementDelivOption=function (statementDelivOption) {
    return this.httpService.getHttpMethodWithoutParams(statementDelivOption);
  }
  getRevenueCategory=function (revenueCategory) {
    return this.httpService.getHttpMethodWithoutParams(revenueCategory);
  }

  vehicleClassDropdown= function (vehicleClassRelativePath) {
    console.log(vehicleClassRelativePath);
    return this.httpService.postMethodWithoutParams(vehicleClassRelativePath);
  }

  vehicleYearDropdown= function (vehicleYear) {

  }

  vehicleColorDropdown= function (vehicleColorRelativePath, inputObject) {
    debugger;
    return this.httpService.postMethodWithParams(vehicleColorRelativePath, inputObject);
  }

  vehicleMakeDropdown= function (vehicleMake) {

  }

  vehicleModelsDropdown= function (vehicleModel) {

  }
}
