class SideBarComponent {

    openMenuSection(name){
        cy.get(`a[routerlink='${name}']`).click()
    }
}

export default new SideBarComponent();