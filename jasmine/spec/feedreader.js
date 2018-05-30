/* feedreader.js
 * This is the spec file Jasmine will read. and contains
 * It contains all tests to run against your application.
 */

/* Some tests may require DOM elements.
 * All test are placed within the $() function.
 * To ensure test don't run until the DOM is ready.
 */
$(function() {
    /* Test suite 1: Tests suite for RSS Feeds definition
    *  the allFeeds variable in the application.
    */
    describe('RSS Feeds', function() {
        /* Test 1: Test if RSS sources are defined properly into allFeeds array.
         * and not empty.        
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test 2: Test to loop through allFeed array's object "feed"  
         * to check if it has a URL defined and URL is not empty.
         */
        it('has an URL defined and not empty', function() {
           for(feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feeds.url).not.toBe('');
        };

        /* Test 3: Test to loop through allFeed array's object "feed" 
         * to check if it has a name defined and name is not empty.
         */
        it('has an name defined and not empty', function() {
           for(feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
        };    
    });

        /* Test 4: Test to loop through allFeed array's object "feed" 
         * to check if the name property is defined and not empty.
         */
        it('as name defined and not empty', function() {
            for(feed of allFeeds) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name).not.toBe('');
            };
        });
    });

    /* Test suite 2: Tests suite for "The menu" */
    describe('The menu', function() {
        let body = document.getElementsByTagName('body')[0];
    
    /* Test 5: Test to check if menu element is hidden by default.
         * The menu visibility is determined by <body> 'menu-hidden' class. 
         * This test checks if menu is present in <body> by default to hide menu.
         */
        it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        }); 

    /* Test 6: Test to check if menu changes visibility, when menu icon is clicked. 
         * Includes two expectations: menu displays when menu icon is clicked
         * and menu hide when menu icon is clicked again.
         */
        it('change visibility when the icon is clicked', function() {
            let menuIcon = document.getElementsByClassName('menu-icon-link')[0];

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });    
    });

    /* Test suite 3: Test suite for "Initial Entries" 
     * To check if single entries are loaded properly into HTML
     */
    describe('Initial Entries', function() {

    /* Test 7: Write a test to ensure after loadFeed function is called
     * and completed, at least one .entry element within .feed container displays.
     * IMPORTANT: loadFeed() is asynchronous. So, this test requires
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */ 
        beforeEach(function(done) {
            loadFeed(0, done);
        });
       
        it('are loaded within the .feed container', function() {

            let feedEntries = document.querySelector('.feed').querySelectorAll('.entry');
            expect(feedEntries.length).toBeGreaterThan(0);
        });
    });

    /* Test suite 4: Test suite for "New Feed Selection" 
     * to check if page refreshes when new feed set is selected
     * Store HTML content in "oldFeeds" variable
     * Store HTML content of new feed in "newFeeds" variable
     */
    describe('New Feed Selection', function() {      
        let oldFeeds;
        let newFeeds;

        beforeEach(function(done) {
            loadFeed(0, function() { // Load first new feeds set

                oldFeeds = document.getElementsByClassName('feed')[0].innerHTML;
            loadFeed(1, function() { // Load second new feeds set

                newFeeds = document.getElementsByClassName('feed')[0].innerHTML;
                    done();
                });
            });
        });     
 
        /* Test 8: Test to compare content of oldFeeds and newFeeds variables.
         * When a new feed is loaded by the loadFeed function, the content should change.
         * Also HTML content must change, so variables should differ.
         * IMPORTANT: loadFeed() is asynchronous.
         */         
        it('is correctly loaded within .feed container', function() {
            expect(newFeeds).not.toEqual(oldFeeds);
        });
    });
}());
