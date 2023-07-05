import GoogleHomePage from "../pages/googleHomePage"
import SearchResultsPage from "../pages/searchResultsPage";

const googleHomePage = new GoogleHomePage();
const searchResultsPage = new SearchResultsPage();

describe('Test the home page and google searches', () => {

  beforeEach(() => {
    cy.visit('https://google.com');
  });

  it('Verify that the home google page has been displayed correctly', () => {
    googleHomePage.verifyTitle();
    googleHomePage.verifyTopMenu();
    googleHomePage.verifySearchInput();
  });

  it('Type the word teting, type enter and verify the redirection', () => {
    googleHomePage.setKeyOnMainSearchAndEnter('teting');
  });

  it('Search the word testing, verify the redirection and result', () => {
    googleHomePage.setKeyOnMainSearchAndEnter('testing');
    searchResultsPage.verifyTheFirstResult('Testing', 'testing');
    searchResultsPage.verifyResultByURL('testing');
    searchResultsPage.verifySearchInputText('testing')
  });

  it('Search the word testing and click on Image button', () => {
    googleHomePage.setKeyOnMainSearchAndEnter('testing');
    searchResultsPage.clickOnImageButton();
    searchResultsPage.verifyImageButtonActive()
  });

});
