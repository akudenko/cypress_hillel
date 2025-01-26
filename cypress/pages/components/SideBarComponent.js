class SideBarComponent {

    openMenuSection(name){
        cy.get('a').contains(`${name.trim()}`).click()
    }
}

export default new SideBarComponent();