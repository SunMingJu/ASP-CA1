import Spinner from "../component/Spinner"

describe('spinner.cy.js', () => {
  it('added correctly', () => {
    cy.mount(<Spinner />)
  });
})