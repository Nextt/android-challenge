## Expectations ##

- Great attention to detail on UI/UX (All the visual resources can be obtained in the Figma Designs)
- Clean and re-usable code
- Componentization when possible
- All code and communications will be in english

## Objectives ##

Build an Android App with Kotlin tha integrates with a Rest Api, you can choose the architecture you want to assemble, keeping in mind a clean code and attention to detail.

Adding unit tests whenever possible (you can decide what should be unit tested or not)

### Authentication ###

The app will use a JWT AuthToken for access to all routes, except for the `/login`

Use the jwt to gain access to the other endpoints

### Login ###

Create the login screen following the Figma design.

Use the `/login` endpoint to obtain the jwt

### Dashboard ###

Create the dashboard following the Figma design

Use the `/account` endpoint to retrieve the account data
Use the `/transactions` endpoint to retrieve the last 10 transactions to show

### Profile ###

Create the profile page following the Figma design

User the `/profile` endpoint to retrieve the profile data

### All Transactions ###

This is a task without a design in Figma to base off.

Build an all transactions page, based off the transactions component on the dashboard.

Should be accessible from the "See All Transactions" button in the dashboard page.

The page needs to have the same general layout as the profile page, and show at least 50 transactions per page, and you can add some sort of paging mechanism, up to you on the approach you think works best for android mobile.

Consider having at least 3 pages of transaction data.

