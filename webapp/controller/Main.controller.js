sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.Main", {

		onXmlButtonPress: function(oEvent) {
			var oInput = this.getView().byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInput"));
			var oText = this.getView().byId(sap.ui.core.Fragment.createId("idXmlFrag", "idText"));

			oText.setText("Hallo " + oInput.getValue());
		},

		onJsButtonPress: function(oEvent) {
			var oInput = this.getView().byId(sap.ui.core.Fragment.createId("idJsFrag", "idInput"));
			var oText = this.getView().byId(sap.ui.core.Fragment.createId("idJsFrag", "idText"));

			oText.setText("Hallo " + oInput.getValue());
		}

	});
});