import AlertComponent from "../pages/components/AlertComponent";
import SignInForm from "../pages/forms/SignInForm";
import GaragePage from "../pages/GaragePage";
import HomePage from "../pages/HomePage";

describe("Garage - positive flows", () => {
  beforeEach(() => {
    HomePage.openPage();
    SignInForm.loginWithAdminUser();
    GaragePage.removeAllCars();
  });

  it("User can add the new car", async () => {
    GaragePage.openAddNewPopup();
    GaragePage.addNewCar("BMW", "5", 200);

    GaragePage.addedCars.should("have.length", 1);
    GaragePage.addedCars.first().should("contains.text", "BMW 5");
    AlertComponent.alertMessage.should("have.text", "Car added");
  });
});
