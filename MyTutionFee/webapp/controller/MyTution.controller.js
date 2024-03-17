sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("MyTutionFee.controller.MyTution", {


    	onInit:function(){
    		
    		// var oModel = this.getOwnerComponent().getModel("tutionModel");
    		// this.getView().getModel("tutionModel");
    
    		
    		// var oBox = this.getView().byId("mini");
    		// oBox.bindElement("tutionModel>/StudentHeader");
		
		    this.onReadTutionData();
		    this.onReadYearData();
		    this.onReadPaymentData();
		     this.onReadBalanceData();
			},
			onReadTutionData:function(){
				// var oModel = this.getOwnerComponent().getModel();
				
				var sServiceUrl = "/sap/opu/odata/sap/ZSL_MYTUTION_FEE_SRV/";
				var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
				this.getView().setModel(oModel);
				var oJSONModel = new sap.ui.model.json.JSONModel();
				
				oModel.read("/StudentHeaderSet",{
					success: function(response){
					
						oJSONModel.setData(response.results);
						this.getView().setModel(oJSONModel, "tutionModel");
						var acedemic= this.getView().getModel("tutionModel").getData()[0].AcademicYear;
						var additional= this.getView().getModel("tutionModel").getData()[0].AdditionalId;                      
						var acedemicsession= this.getView().getModel("tutionModel").getData()[0].AcademicSession;                      
						var stage= this.getView().getModel("tutionModel").getData()[0].Stage;  
						var studentname= this.getView().getModel("tutionModel").getData()[0].StudentName;
							var studentcat= this.getView().getModel("tutionModel").getData()[0].StudentCat;
							var progname= this.getView().getModel("tutionModel").getData()[0].ProgramName;
						
						this.getView().byId("ac").setText(acedemic);
						this.getView().byId("additional").setText(additional);
						this.getView().byId("session").setText(acedemicsession);
						this.getView().byId("stage").setText(stage);
						this.getView().byId("studentname").setText(studentname);
						this.getView().byId("studentcat").setText(studentcat);
							this.getView().byId("progname").setText( progname);
						
					}.bind(this),
					error:function(error){
				  
					}
				});
			},
			
			
				onReadYearData:function(){
				// var oModel = this.getOwnerComponent().getModel();
				
				var ssServiceUrl = "/sap/opu/odata/sap/ZSL_MYTUTION_FEE_SRV/";
				var oModel1 = new sap.ui.model.odata.ODataModel(ssServiceUrl, true);
				this.getView().setModel(oModel1);
				var oJSONModel1 = new sap.ui.model.json.JSONModel();
				
				oModel1.read("/YearDataSet",{
					success: function(response){
					
						oJSONModel1.setData(response.results);
						this.getView().setModel(oJSONModel1, "yearModel");
						var year= this.getView().getModel("yearModel").getData()[0].Year;
					
						
						this.getView().byId("year").setText(year);
					
						
					}.bind(this),
					error:function(error){
				  
					}
				});
			},
			
			
				onReadPaymentData:function(){
				// var oModel = this.getOwnerComponent().getModel();
				
				var ssServiceUrl2 = "/sap/opu/odata/sap/ZSL_MYTUTION_FEE_SRV/";
				var oModel2 = new sap.ui.model.odata.ODataModel(ssServiceUrl2, true);
				this.getView().setModel(oModel2);
				var oJSONModel2 = new sap.ui.model.json.JSONModel();
				
				oModel2.read("/PaymentHistorySet",{
					success: function(response){
					
						oJSONModel2.setData(response.results);
						this.getView().setModel(oJSONModel2, "paymentdateModel");
						var paymentdate= this.getView().getModel("paymentdateModel").getData()[0].paymentDate;
					
						
						this.getView().byId("paymentdate").setText(paymentdate);
					
						
					}.bind(this),
					error:function(error){
				  
					}
				});
			},
			
			onReadBalanceData:function(){
				// var oModel = this.getOwnerComponent().getModel();
				
				var ssServiceUrl3 = "/sap/opu/odata/sap/ZSL_MYTUTION_FEE_SRV/";
				var oModel3 = new sap.ui.model.odata.ODataModel(ssServiceUrl3, true);
				this.getView().setModel(oModel3);
				var oJSONModel3 = new sap.ui.model.json.JSONModel();
				
				oModel3.read("/BalanceDueSet",{
					success: function(response){
					
						oJSONModel3.setData(response.results);
						this.getView().setModel(oJSONModel3, "BalanceModel");
						var Duedate= this.getView().getModel("BalanceModel").getData()[0].paymentDate;
						var type= this.getView().getModel("BalanceModel").getData()[0].paymentDate;
						var feespaid= this.getView().getModel("BalanceModel").getData()[0].paymentDate;
						var discount= this.getView().getModel("BalanceModel").getData()[0].paymentDate;
						var feesdue= this.getView().getModel("BalanceModel").getData()[0].paymentDate;
					
						
						this.getView().byId("Duedate").setText(Duedate);
						this.getView().byId("Duedate").setText(type);
						this.getView().byId("Duedate").setText(feespaid);
						this.getView().byId("Duedate").setText(discount);
						this.getView().byId("Duedate").setText(feesdue);
					
						
					}.bind(this),
					error:function(error){
				  
					}
				});
			}
			
	});
});