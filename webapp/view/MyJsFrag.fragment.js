sap.ui.jsfragment("sap.training.view.MyJsFrag", {

	createContent: function(oController) {
		var oInput = new sap.m.Input(this.createId("idInput"));

		var oButton = new sap.m.Button({
			text: "Sag Hallo (JavaScript Fragment)",
			press: [oController.onJsButtonPress, oController]
		});

		var oText = new sap.m.Text(this.createId("idText"));

		return new sap.ui.layout.HorizontalLayout({
			content: [oInput, oButton, oText]
		});
	}
});