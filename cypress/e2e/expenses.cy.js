import AlertComponent from "../pages/components/AlertComponent";
import SideBarComponent from "../pages/components/SideBarComponent";
import ExpensesPage from "../pages/ExpensesPage";
import ExpensesForm from "../pages/forms/ExpensesForm";
import SignInForm from "../pages/forms/SignInForm";
import GaragePage from "../pages/GaragePage";
import HomePage from "../pages/HomePage";

describe("Expenses - positive flows", () => {
  beforeEach(() => {
    HomePage.openPage();
    SignInForm.loginWithAdminUser();
    GaragePage.removeAllCars();
    GaragePage.openAddNewPopup();
    GaragePage.addNewCar("BMW", "5", 300);
  });

  it("User can add the expenses to a car from the Garage page", () => {
    const formattedDate = new Intl.DateTimeFormat("uk-UA").format(new Date());

    const expectedData = [
      { column: "Date", value: formattedDate },
      { column: "Mileage", value: "400" },
      { column: "Liters used", value: "600L" },
      { column: "Total cost", value: "1800" },
    ];

    GaragePage.openAddExpensivePopupForToFirstCar();
    ExpensesForm.addExpensiveToFirstCar(400, 600, 1800);

    AlertComponent.alertMessage.should("have.text", "Fuel expense added");
    expectedData.forEach(({ column, value }) => {
      ExpensesPage.verifyTableValue(column, value);
    });
  });

  it("User can add the expenses to a car from the Expenses page", () => {
    const formattedDate = new Intl.DateTimeFormat("uk-UA").format(new Date());

    const expectedData = [
      { column: "Date", value: formattedDate },
      { column: "Mileage", value: "400" },
      { column: "Liters used", value: "600L" },
      { column: "Total cost", value: "1800" },
    ];

    SideBarComponent.openMenuSection("Fuel expenses");
    ExpensesPage.openAddAnExpensesToCar();
    ExpensesForm.addExpensiveToFirstCar(400, 600, 1800);

    AlertComponent.alertMessage.should("have.text", "Fuel expense added");
    expectedData.forEach(({ column, value }) => {
      ExpensesPage.verifyTableValue(column, value);
    });
  });
});
