sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("MyTutionFee.controller.MyTution", {


    	onInit:function(){
    		
    		// var oModel = this.getOwnerComponent().getModel("tutionModel");
    		// this.getView().setModel(oModel);
    
    		
    		// var oBox = this.getView().byId("mini");
    		// oBox.bindElement("tutionModel>/StudentHeader");
		
		    // this.onReadTutionData();
			}
			// onReadTutionData:function(){
			// 	var oModel = this.getOwnerComponent().getModel();
			// 	var oJSONModel = new sap.ui.model.json.JSONModel();
			// 	oModel.read("/StudentHeader",{
			// 		success: function(response){
					
			// 			oJSONModel.setData(response.results);
			// 			this.getView().setModel(oJSONModel, "TutionModel");
						
			// 		}.bind(this),
			// 		error:function(error){
				  
			// 		}
			// 	});
			// }
			
	});
});