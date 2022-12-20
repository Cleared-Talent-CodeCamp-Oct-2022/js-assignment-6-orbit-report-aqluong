export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		if (this.type === "Space Debris"){
			return true;
		}
		else{
			return false;
		}
		// this method should return true IF you call it on a Satellite Object
		// that has a type of 'Space Debris'
		// Example: someSatelliteObj.isSpaceDebris()
		// would return true if someSatellite.type === 'Sapce Debris'
		
   }

}

// TODO 3a: fix isSpaceDebris check
