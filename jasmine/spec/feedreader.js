
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it ('ensures it has a URL defined and is not empty', function(){
         		allFeeds.forEach(function(feedUrl){
         			//check to see if the url value is not null AND
         				//also is not set to an empty string. 
         				//toBeTruthy() handles both.
         			expect(feedUrl.url).toBeTruthy();
         		});
         });

         it ('has a name defined and the name is not empty', function(){
         		allFeeds.forEach(function(feedUrl){
         			//same process as for the url
         			expect(feedUrl.name).toBeTruthy();
         		});
         });
    });


 
    describe('The menu', function(){
         var btn;
         beforeEach (function(){
         	btn = $("a.menu-icon-link").eq(0);
         });

         it ('should hide the menu on default', function(){
            const checkClass = $('body').hasClass("menu-hidden");
         	//grab the bodyClass and check if the className is set to menu-hidden
         	expect(checkClass).toBe(true);
         });


          it ('should display menu when clicked',
          	function(){
          		btn.click();
                const checkMenuOpen = $('body').hasClass("");
          		expect(checkMenuOpen).toBe(true);

          		btn.click();
                const checkMenuClose = $('body').hasClass("menu-hidden");
          		expect(checkMenuClose).toBe(true);
          	});	


    });
       

    describe("Initial Entries", function(){

         beforeEach(function(done){
         	//put in the loadFeed funciton and pass in an allFeeds id and
         		//the done cb
         	loadFeed(0, done);
         });

         it('will have at least one single .entry element within the .feed container',
         	function(done){
         		//grab the first child of the feed container class
         		const containerChild = $('.feed').children()[0].className;
         		//check to see if the first child of that object has an 
         			//entry-link class which will count as being at least
         			//one single .entry element in the feed container
                expect(containerChild.length).toBeGreaterThan(0);
         		done();
         	});

    describe("New Feed Selection", function(){
         let feedOne;
         let feedTwo;

         //set each variable to the innerhtml of the first and second feeds
          //in allFeeds. Call the function twice to get and set the values
          //for the two variables 
         beforeEach(function(done){
         	loadFeed(0, function(){
         	  feedOne = $('.feed').html();
              loadFeed(1, function(){
                    feedTwo = $('.feed').html();
                    done();
              });
         	});
         });

         //compare the html of feedOne to make sure it is not the same as
          //feedTwo 
         it("changes the feed content each time its loaded", function(done){
         	expect(feedOne).not.toBe(feedTwo);
         	done();
         });
    });
        
  });
        
}());
