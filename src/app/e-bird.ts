export class EBird {
  cname: string;
  speciesCode: string;
  category: string;
  report: string;
}

export class OBSBIRD {
  speciesCode: string;
  cname: string;
  qty: number;
  constructor(speciesCode, cname, qty) {
    this.speciesCode = speciesCode;
    this.cname = cname;
    this.qty = qty;
  }
}

export class QUERYDATA {
  subId: string;
  locId: string;
  locName: string;
  userDisplayName: string;
  obsDt: string;
  birds: OBSBIRD[];
}

export class OBSITEM {
  hideFlags: any[];
  howManyAtleast: number;
  howManyAtmost: number;
  howManyStr: string;
  obsDt: string;
  obsId: string;
  present: boolean;
  projId: string;
  speciesCode: string;
  subId: string;
  subnational1Code: string;
}

export class CHECKLIST {
  allObsReported: boolean;
  checklistId: string;
  creationDt: string;
  durationHrs: number;
  lastEditedDt: string;
  locId: string;
  numObservers: number;
  obs: OBSITEM[];
  obsDt: string;
  obsTimeValid: boolean;
  projId: string;
  protocolId: string;
  subId: string;
  submissionMethodCode: string;
  submissionMethodVersion: string;
  submissionMethodVersionDisp: string;
  subnational1Code: string;
  userDisplayName: string;
}

export class HOTSPOT {
  countryCode: string;
  countryName: string;
  hierarchicalName: string;
  isHotspot: boolean;
  lat: number;
  latitude: number;
  lng: number;
  locID: string;
  locId: string;
  locName: string;
  longitude: number;
  name: string;
  subnational1Code: string;
  subnational1Name: string;
}
